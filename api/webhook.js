// Exemplo de Webhook Serverless Function para Vercel
// Recebe a aprovação de compra da Cakto e cria a usuária no seu banco de dados

// Cache simples em memória para simular idempotência no backend (dura até a reciclagem da função lambda)
const processedTransactions = new Set();

export default async function handler(req, res) {
    // Permite apenas requisições POST vindas da Cakto
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido. Utilize POST.' });
    }

    try {
        const payload = req.body;
        
        // 1. Verifica se o evento recebido é de compra aprovada
        if (payload.event === 'purchase_approved' && payload.data) {
            const customer = payload.data.customer;
            const name = customer.name;
            const email = customer.email.toLowerCase().trim();
            const transactionId = payload.data.refId || payload.data.id || 'trans_' + Date.now();
            const productName = payload.data.product ? payload.data.product.name : 'FUSE';
            const productId = payload.data.product ? payload.data.product.id : '';

            console.log(`🎉 Nova compra aprovada via Cakto!`);
            console.log(`ID Transação: ${transactionId}`);
            console.log(`Cliente: ${name}`);
            console.log(`E-mail: ${email}`);
            console.log(`Produto: ${productName} (ID: ${productId})`);

            // Verificação de Idempotência
            if (processedTransactions.has(transactionId)) {
                console.log(`⚠️ Transação duplicada detectada e ignorada: ${transactionId}`);
                return res.status(200).json({ 
                    success: true, 
                    message: `Transação ${transactionId} já processada anteriormente (idempotência).` 
                });
            }

            // Registra a transação no cache
            processedTransactions.add(transactionId);

            // Identificação de qual produto foi comprado
            const isChallenge = productName.toLowerCase().includes('desafio');
            const targetAccess = isChallenge ? 'Desafio Core' : 'FUSE Premium';

            console.log(`🔓 Acesso a ser liberado: ${targetAccess}`);

            // 2. INTEGRAÇÃO COM BANCO DE DADOS (Conceitual para produção):
            // const { data, error } = await supabase.from('users').upsert({ email, name });

            return res.status(200).json({ 
                success: true, 
                message: `Transação ${transactionId} processada. Acesso ao ${targetAccess} liberado para ${name} (${email}).`,
                data: {
                    transactionId,
                    email,
                    product: productName,
                    unlocked: targetAccess
                }
            });
        }

        return res.status(400).json({ error: 'Evento ignorado ou sem dados válidos.' });
    } catch (error) {
        console.error('Erro ao processar Webhook:', error);
        return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
}

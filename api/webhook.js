// Exemplo de Webhook Serverless Function para Vercel
// Recebe a aprovação de compra da Cakto e cria a usuária no seu banco de dados

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

            console.log(`🎉 Nova compra aprovada via Cakto!`);
            console.log(`Cliente: ${name}`);
            console.log(`E-mail: ${email}`);

            // 2. INTEGRAÇÃO COM BANCO DE DADOS:
            // Para produção com logins persistidos (acesso multi-dispositivo),
            // você deve gravar estes dados em um banco (ex: Supabase, Firebase, PostgreSQL).
            //
            // Exemplo conceitual (Supabase):
            // const { data, error } = await supabase
            //     .from('users')
            //     .insert([{ name: name, email: email, password: 'senha123' }]);

            return res.status(200).json({ 
                success: true, 
                message: `Usuária ${name} (${email}) criada/ativada no sistema.` 
            });
        }

        return res.status(400).json({ error: 'Evento ignorado ou sem dados válidos.' });
    } catch (error) {
        console.error('Erro ao processar Webhook:', error);
        return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
}

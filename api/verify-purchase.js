// API Endpoint para verificar compras da Cakto por E-mail
// Caminho do arquivo: /api/verify-purchase.js

export default async function handler(req, res) {
    // Adiciona headers de CORS para permitir chamadas do frontend
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Por favor, insira um e-mail válido.' });
    }

    const emailClean = email.toLowerCase().trim();

    // LISTA DE EMAILS AUTOMATICAMENTE APROVADOS (Confiança / Liberação Rápida)
    const trustedEmails = [
        'as9233809@gmail.com',
        'duda@fuse.com',
        'fernanda@fuse.com',
        'fernanda@fuse.com.br',
        'amanda@fuse.com.br'
    ];

    if (trustedEmails.includes(emailClean) || emailClean.endsWith('@fuse.com') || emailClean.endsWith('@fuse.com.br')) {
        return res.status(200).json({
            success: true,
            message: 'Compra premium aprovada encontrada (Lista de Confiança)!',
            customerName: emailClean.split('@')[0].toUpperCase(),
            email: emailClean,
            status: 'paid',
            orderId: 'trusted_' + Date.now(),
            paidAt: new Date().toISOString()
        });
    }

    // Chaves de API do Cakto: lê das variáveis de ambiente primeiro, depois usa fallback hardcoded
    const clientId = process.env.CAKTO_CLIENT_ID || '7JcKQV6uMuLEBKLxYL2jD2CyqFuuvsGCJEE8j6bx';
    const clientSecret = process.env.CAKTO_CLIENT_SECRET || 'TSlkII0HF6B6YyEodcOnl19vITpGzHD0Zn4U6AhA3D394Q0sbJ0uJHZhbyB4GU94ZEiGRV5HuyIEpZHCrmIj1OZ6vwPNO4f0cMWEY6DNGPKq61Wb9XuiZv9XYx2Ew4Nz';

    try {
        // 1. Solicita Token OAuth2 à API do Cakto
        const tokenResponse = await fetch('https://api.cakto.com.br/public_api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret
            })
        });

        if (!tokenResponse.ok) {
            const tokenErr = await tokenResponse.json().catch(() => ({}));
            return res.status(401).json({ 
                success: false, 
                message: 'Falha na autenticação com a API do Cakto.', 
                error: tokenErr 
            });
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // 2. Consulta a lista de pedidos filtrando pelo e-mail do cliente
        const ordersUrl = `https://api.cakto.com.br/public_api/orders/?customer=${encodeURIComponent(emailClean)}`;
        const ordersResponse = await fetch(ordersUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!ordersResponse.ok) {
            const ordersErr = await ordersResponse.json().catch(() => ({}));
            return res.status(ordersResponse.status).json({ 
                success: false, 
                message: 'Falha ao consultar pedidos na API do Cakto.', 
                error: ordersErr 
            });
        }

        const ordersData = await ordersResponse.json();
        
        // Resultados retornados pela API na listagem paginada (array results)
        const orders = ordersData.results || [];

        // Filtra por compras pagas ou ativas do produto da FUSE
        const activeOrder = orders.find(order => {
            const status = order.status;
            return status === 'paid' || status === 'authorized' || status === 'processing';
        });

        if (activeOrder) {
            return res.status(200).json({
                success: true,
                message: 'Compra premium aprovada encontrada!',
                customerName: activeOrder.customer ? activeOrder.customer.name : 'Cliente FUSE',
                email: emailClean,
                status: activeOrder.status,
                orderId: activeOrder.id,
                paidAt: activeOrder.paidAt
            });
        }

        return res.status(200).json({
            success: false,
            message: 'Nenhum pagamento aprovado ou ativo foi encontrado para este e-mail no Cakto.'
        });

    } catch (error) {
        console.error('Erro na verificação de compra:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Erro interno ao processar a verificação da compra.',
            error: error.message 
        });
    }
}

// API Endpoint para verificar compras da Cakto por E-mail
// Caminho do arquivo: /api/verify-purchase.js

export default async function handler(req, res) {
    // Adiciona headers de CORS para permitir chamadas do frontend
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    // Previne cache intermediário para garantir validação em tempo real de novas compras
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

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
        'amanda@fuse.com.br',
        'fer@gmail.com',
        'pratsroberta@gmail.com'
    ];

    if (trustedEmails.includes(emailClean) || emailClean.endsWith('@fuse.com') || emailClean.endsWith('@fuse.com.br')) {
        return res.status(200).json({
            success: true,
            message: 'Compra premium aprovada encontrada (Lista de Confiança)!',
            customerName: emailClean.split('@')[0].toUpperCase(),
            email: emailClean,
            status: 'paid',
            orderId: 'trusted_' + Date.now(),
            paidAt: new Date().toISOString(),
            purchasedProducts: ['FUSE', 'Desafio Core']
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

        let orders = [];

        // 2. Consulta pedidos pagos com limite expandido (evita que tentativas pendentes/abandonadas mascarem o pagamento)
        // Tentativa 1: Busca direta por status=paid com limit=100
        const paidOrdersUrl = `https://api.cakto.com.br/public_api/orders/?customer=${encodeURIComponent(emailClean)}&status=paid&limit=100`;
        const paidOrdersResp = await fetch(paidOrdersUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (paidOrdersResp.ok) {
            const paidData = await paidOrdersResp.json();
            if (paidData && Array.isArray(paidData.results)) {
                orders = orders.concat(paidData.results);
            }
        }

        // Tentativa 2: Se não encontrou pedidos com status=paid, busca geral com limit=100
        // (cobre status autorizados ou em processamento)
        if (orders.length === 0) {
            const allOrdersUrl = `https://api.cakto.com.br/public_api/orders/?customer=${encodeURIComponent(emailClean)}&limit=100`;
            const allOrdersResp = await fetch(allOrdersUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (allOrdersResp.ok) {
                const allData = await allOrdersResp.json();
                if (allData && Array.isArray(allData.results)) {
                    orders = allData.results;
                }
            }
        }

        const purchasedProducts = [];
        let customerName = 'Cliente FUSE';
        let latestOrder = null;

        orders.forEach(order => {
            const status = (order.status || '').toLowerCase();
            const isApproved = status === 'paid' || status === 'authorized' || status === 'processing';
            
            if (isApproved) {
                if (!latestOrder || new Date(order.createdAt || 0) > new Date(latestOrder.createdAt || 0)) {
                    latestOrder = order;
                }
                if (order.customer && order.customer.name) {
                    customerName = order.customer.name;
                }
                if (order.product) {
                    const prodName = (order.product.name || '').toLowerCase();
                    if (prodName.includes('desafio')) {
                        if (!purchasedProducts.includes('Desafio Core')) {
                            purchasedProducts.push('Desafio Core');
                        }
                    } else {
                        if (!purchasedProducts.includes('FUSE')) {
                            purchasedProducts.push('FUSE');
                        }
                    }
                } else {
                    if (!purchasedProducts.includes('FUSE')) {
                        purchasedProducts.push('FUSE');
                    }
                }
            }
        });

        // Libera SEMPRE ambos os produtos para qualquer cliente com compra aprovada
        if (purchasedProducts.length > 0 || latestOrder) {
            if (!purchasedProducts.includes('FUSE')) {
                purchasedProducts.push('FUSE');
            }
            if (!purchasedProducts.includes('Desafio Core')) {
                purchasedProducts.push('Desafio Core');
            }

            return res.status(200).json({
                success: true,
                message: 'Compras ativas encontradas!',
                customerName: customerName,
                email: emailClean,
                status: 'paid',
                orderId: latestOrder ? (latestOrder.refId || latestOrder.id) : 'order_' + Date.now(),
                paidAt: latestOrder ? (latestOrder.paidAt || latestOrder.createdAt) : new Date().toISOString(),
                purchasedProducts: purchasedProducts
            });
        }

        return res.status(200).json({
            success: false,
            message: 'Nenhum pagamento aprovado ou ativo foi encontrado para este e-mail no Cakto.',
            purchasedProducts: []
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

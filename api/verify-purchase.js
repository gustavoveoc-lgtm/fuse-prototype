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

        // 2. Consulta pedidos da cliente com limite expandido
        let orders = [];
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

        // Busca geral para verificar pedidos de outros status, cancelamentos ou estornos
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
                const existingIds = new Set(orders.map(o => o.id));
                allData.results.forEach(o => {
                    if (!existingIds.has(o.id)) orders.push(o);
                });
            }
        }

        // 3. Consulta o status das assinaturas da usuária na Cakto
        let userSubs = [];
        try {
            const subsUrl = `https://api.cakto.com.br/public_api/subscriptions/?search=${encodeURIComponent(emailClean)}`;
            const subsResp = await fetch(subsUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (subsResp.ok) {
                const subsData = await subsResp.json();
                if (subsData && Array.isArray(subsData.results)) {
                    userSubs = subsData.results.filter(s => 
                        s.customer && s.customer.email && s.customer.email.toLowerCase().trim() === emailClean
                    );
                }
            }
        } catch (subErr) {
            console.warn('Erro ao consultar assinaturas:', subErr);
        }

        // Fallback: se a busca de assinaturas por e-mail não retornou nada, consulta direto pelo subscriptionId do pedido
        if (userSubs.length === 0) {
            const subId = orders.map(o => o.subscription).find(s => !!s);
            if (subId) {
                try {
                    const singleSubResp = await fetch(`https://api.cakto.com.br/public_api/subscriptions/${subId}/`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    if (singleSubResp.ok) {
                        const singleSubData = await singleSubResp.json();
                        if (singleSubData && singleSubData.id) {
                            userSubs.push(singleSubData);
                        }
                    }
                } catch (e) {
                    console.warn('Erro ao consultar assinatura individual:', e);
                }
            }
        }

        const hasActiveSubscription = userSubs.some(s => (s.status || '').toLowerCase() === 'active');
        const hasSubscriptions = userSubs.length > 0;

        // 4. Analisa cancelamentos, estornos e validade do período mensal
        let customerName = 'Cliente FUSE';
        let latestPaidOrder = null;
        let hasRefundOrChargeback = false;

        orders.forEach(order => {
            const status = (order.status || '').toLowerCase();
            if (status === 'refunded' || status === 'chargedback') {
                hasRefundOrChargeback = true;
            }
            if (status === 'paid' || status === 'authorized' || status === 'processing') {
                const orderDate = new Date(order.paidAt || order.createdAt || 0);
                if (!latestPaidOrder || orderDate > new Date(latestPaidOrder.paidAt || latestPaidOrder.createdAt || 0)) {
                    latestPaidOrder = order;
                }
                if (order.customer && order.customer.name) {
                    customerName = order.customer.name;
                }
            }
        });

        // REGRAS DE REVOGAÇÃO DE ACESSO:
        // Quem cancelou o mês, estornou ou não renovou perde o acesso imediatamente
        let isCanceled = false;
        let cancelReason = '';

        if (hasSubscriptions && !hasActiveSubscription) {
            isCanceled = true;
            cancelReason = 'Sua assinatura mensal foi cancelada na Cakto.';
        } else if (hasRefundOrChargeback && !hasActiveSubscription) {
            isCanceled = true;
            cancelReason = 'O pagamento da sua assinatura foi estornado ou cancelado.';
        } else if (latestPaidOrder && latestPaidOrder.type === 'subscription' && !hasActiveSubscription) {
            const lastPaidDate = new Date(latestPaidOrder.paidAt || latestPaidOrder.createdAt);
            const daysSince = (Date.now() - lastPaidDate.getTime()) / (1000 * 60 * 60 * 24);
            if (daysSince > 32) {
                isCanceled = true;
                cancelReason = 'O período da sua assinatura mensal expirou e não foi renovado.';
            }
        }

        // Se a assinatura foi cancelada, bloqueia o acesso
        if (isCanceled) {
            return res.status(200).json({
                success: false,
                isCanceled: true,
                message: cancelReason || 'Sua assinatura foi cancelada. Renove seu plano para continuar com acesso.',
                customerName: customerName,
                email: emailClean,
                purchasedProducts: []
            });
        }

        // Se possui assinatura ativa ou pagamento vigente aprovado, libera os acessos
        if (hasActiveSubscription || latestPaidOrder) {
            return res.status(200).json({
                success: true,
                isCanceled: false,
                message: 'Assinatura ativa encontrada!',
                customerName: customerName,
                email: emailClean,
                status: 'paid',
                orderId: latestPaidOrder ? (latestPaidOrder.refId || latestPaidOrder.id) : 'sub_' + Date.now(),
                paidAt: latestPaidOrder ? (latestPaidOrder.paidAt || latestPaidOrder.createdAt) : new Date().toISOString(),
                purchasedProducts: ['FUSE', 'Desafio Core']
            });
        }

        return res.status(200).json({
            success: false,
            isCanceled: false,
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

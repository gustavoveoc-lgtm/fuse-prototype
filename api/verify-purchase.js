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

    // CATÁLOGO OFICIAL DE CLIENTES DA CAKTO (Fallback / Alta Disponibilidade)
    const VERIFIED_CUSTOMERS = {
        // Clientes com assinatura ativa confirmada
        "pricilaoliveiras21@gmail.com": { name: "Pricila Oliveira Rocha", status: "active" },
        "camillyleticiaramos@gmail.com": { name: "Camilly Gerhardt Gerhardt", status: "active" },
        "bebelsantos534@gmail.com": { name: "Isabelys dos Santos da Silva", status: "active" },
        "jacquelinemesqui@gmail.com": { name: "Jacqueline Mesquita", status: "active" },
        "juliaschaefer10@gmail.com": { name: "Julia schaefer", status: "active" },
        "marinavilacac@gmail.com": { name: "Marina Vilaça", status: "active" },
        "thaismoreirasap@gmail.com": { name: "Thais Moreira", status: "active" },
        "ehriikaa17@hotmail.com": { name: "Érika Nascimento Santos", status: "active" },
        "anneorzechowsky695@gmail.com": { name: "Anne Orzechowsky", status: "active" },
        "mariaanaviann7@gmail.com": { name: "Mariaana Klein Viana", status: "active" },
        "gabioff1234@gmail.com": { name: "Gabriela  Nascimento de Carvalho", status: "active", validUntil: "2026-10-22T23:59:59-03:00" },
        "bruninhavidal25@hotmail.com": { name: "Bruna A Vidal", status: "active" },
        "luanacosta.2619@gmail.com": { name: "Raiza Luana de Miranda Costa da Silva", status: "active" },
        "amariles_rodrigues@outlook.com": { name: "Amariles Paloma Rodrigues", status: "active" },
        "monteiro20al@gmail.com": { name: "Aline Monteiro", status: "active" },
        "nluana683@gmail.com": { name: "Luana Nunes da Cunha", status: "active" },
        "jujugabriele.r@gmail.com": { name: "Julia Gabriele Paulino", status: "active" },
        "demouramarcele@gmail.com": { name: "Marcele Dias de Moura", status: "active" },
        "larissa_silvestre01@hotmail.com": { name: "Larissa Silvestre", status: "active" },
        "l.almeida1391@gmail.com": { name: "Lais Borges de Almeida", status: "active" },
        "carolyne.xavier@hotmail.com": { name: "Ana Carolyne Xavier dos Santos", status: "active" },
        "enfabeatriz@outlook.com": { name: "Beatriz Oliveira", status: "active" },
        "itsbrubarbosa@gmail.com": { name: "Bruna Barbosa", status: "active" },
        "tininha.benitz@gmail.com": { name: "Albertina Benitz dos Santos", status: "active" },
        "janiellyssantos26@gmail.com": { name: "Janielly da Silva Santos", status: "active" },
        "jennyffer2301@gmail.com": { name: "Jennyffer Ribeiro da Silva", status: "active" },
        "souzalidiane03@gmail.com": { name: "Lidiane de Souza Santana dos Santos", status: "active" },
        "solanginhasol@hotmail.com": { name: "Solange Santos", status: "active" },
        "nutri.stephanieduarte@gmail.com": { name: "Stephanie Duarte", status: "active" },
        "as9233809@gmail.com": { name: "Amanda Caroline dos Santos Ferreira", status: "active" },
        "mirellihi@hotmail.com": { name: "Mirelli Lopes Vasconcelos", status: "active" },
        "gi_blho@hotmail.com": { name: "Gisele Evelyn Dantas Santos", status: "active" },
        "gabriela.fernanda@redesupermercado.com.br": { name: "Gabriela Fernanda", status: "active" },
        "mscontabil_@outlook.com": { name: "Milena Souza Souza", status: "active" },
        "scryslayne9@gmail.com": { name: "Cryslayne Santos", status: "active" },
        "sarah.heggler@gmail.com": { name: "Sarah Hegler", status: "active" },
        "leticiahegler@gmail.com": { name: "Letícia Hegler", status: "active" },
        "cribeiral@gmail.com": { name: "Clara Gomes Ribeiral", status: "active" },
        "larahmagela@gmail.com": { name: "LARAH CAMACHO MAGELA", status: "active" },
        "malurodriguesdelima@gmail.com": { name: "Maria Luiza Rodrigues de lima", status: "active" },
        "cailaner38@gmail.com": { name: "Cailane Ribeiro", status: "active" },

        // Clientes canceladas / inativas (acesso expressamente revogado)
        "andressadasilvadasilva32491@gmail.com": { name: "Andressa Bezerra da Silva", status: "canceled" },
        "amaintegrare@gmail.com": { name: "Amanda Rodrigues", status: "canceled" },
        "marquesray86@gmail.com": { name: "Rayssa Millena Marques", status: "canceled" },
        "souz2kelly@gmail.com": { name: "Kelly Souza Silva", status: "canceled" },
        "lolysilvaalves3@gmail.com": { name: "Lorena Alves", status: "canceled" },
        "fabi.casturina123@gmail.com": { name: "Fabiana Casturina Ferreira", status: "canceled" },
        "eduardaaleixosm@gmail.com": { name: "Eduarda do Carmo Aleixo", status: "canceled" },
        "tomanari.gabrielle@gmail.com": { name: "Gabrielle Tomanari", status: "canceled" },
        "franciara_fran@hotmail.com": { name: "Franciara Lima", status: "canceled" },
        "rayanemeneses70@gmail.com": { name: "RAIANE ALINE SILVA DE MENESES", status: "canceled" }
    };

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

        // REGRAS DE REVOGAÇÃO E VALIDADE DO ACESSO:
        let isCanceled = false;
        let cancelReason = '';
        let periodEndDate = null;

        if (latestPaidOrder) {
            const lastPaidDate = new Date(latestPaidOrder.paidAt || latestPaidOrder.createdAt);
            // Prazo padrão do ciclo mensal: 31 dias a partir do pagamento aprovado
            periodEndDate = new Date(lastPaidDate.getTime() + (31 * 24 * 60 * 60 * 1000));
        }

        // Validação de validade expressa configurada para clientes específicos (ex: gabioff1234@gmail.com até 22 de outubro)
        if (VERIFIED_CUSTOMERS[emailClean] && VERIFIED_CUSTOMERS[emailClean].validUntil) {
            periodEndDate = new Date(VERIFIED_CUSTOMERS[emailClean].validUntil);
        }

        const now = new Date();

        if (hasRefundOrChargeback && !hasActiveSubscription) {
            // Estorno ou contestação bancária: revoga imediatamente
            isCanceled = true;
            cancelReason = 'O pagamento da sua assinatura foi estornado ou cancelado.';
        } else if (hasSubscriptions && !hasActiveSubscription) {
            // Assinatura foi cancelada/não renovará automaticamente na Cakto:
            // Se o período já pago ainda está vigente (dentro dos 31 dias ou data de vencimento), mantém o acesso liberado!
            if (latestPaidOrder && periodEndDate && now <= periodEndDate) {
                isCanceled = false;
            } else {
                isCanceled = true;
                cancelReason = 'O período da sua assinatura mensal expirou e não foi renovado na Cakto.';
            }
        } else if (latestPaidOrder && latestPaidOrder.type === 'subscription' && !hasActiveSubscription) {
            if (periodEndDate && now > periodEndDate) {
                isCanceled = true;
                cancelReason = 'O período da sua assinatura mensal expirou e não foi renovado.';
            }
        }

        // Se a assinatura foi cancelada e o período pago já encerrou, bloqueia o acesso
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

        // Se possui assinatura ativa OU pagamento vigente dentro do período pago, libera os acessos
        if (hasActiveSubscription || (latestPaidOrder && !isCanceled)) {
            return res.status(200).json({
                success: true,
                isCanceled: false,
                message: 'Assinatura ativa encontrada!',
                customerName: customerName,
                email: emailClean,
                status: 'paid',
                orderId: latestPaidOrder ? (latestPaidOrder.refId || latestPaidOrder.id) : 'sub_' + Date.now(),
                paidAt: latestPaidOrder ? (latestPaidOrder.paidAt || latestPaidOrder.createdAt) : new Date().toISOString(),
                validUntil: periodEndDate ? periodEndDate.toISOString() : undefined,
                purchasedProducts: ['FUSE', 'Desafio Core']
            });
        }

        // Fallback usando o catálogo de clientes confirmados do mês
        const verified = VERIFIED_CUSTOMERS[emailClean];
        if (verified) {
            let customerActive = verified.status === 'active';
            if (verified.validUntil) {
                const expiry = new Date(verified.validUntil);
                if (new Date() > expiry) {
                    customerActive = false;
                }
            }

            if (!customerActive || verified.status === 'canceled' || verified.status === 'inactive') {
                return res.status(200).json({
                    success: false,
                    isCanceled: true,
                    message: 'Sua assinatura mensal foi cancelada ou expirou na Cakto.',
                    customerName: verified.name,
                    email: emailClean,
                    purchasedProducts: []
                });
            } else {
                return res.status(200).json({
                    success: true,
                    isCanceled: false,
                    message: 'Assinatura ativa encontrada!',
                    customerName: verified.name,
                    email: emailClean,
                    status: 'paid',
                    orderId: 'catalog_' + Date.now(),
                    paidAt: new Date().toISOString(),
                    validUntil: verified.validUntil,
                    purchasedProducts: ['FUSE', 'Desafio Core']
                });
            }
        }

        return res.status(200).json({
            success: false,
            isCanceled: false,
            message: 'Nenhum pagamento aprovado ou ativo foi encontrado para este e-mail no Cakto.',
            purchasedProducts: []
        });

    } catch (error) {
        console.error('Erro na verificação de compra:', error);

        // Fallback de contingência se a API externa da Cakto estiver indisponível
        const verified = VERIFIED_CUSTOMERS[emailClean];
        if (verified) {
            let customerActive = verified.status === 'active';
            if (verified.validUntil) {
                const expiry = new Date(verified.validUntil);
                if (new Date() > expiry) {
                    customerActive = false;
                }
            }

            if (!customerActive || verified.status === 'canceled' || verified.status === 'inactive') {
                return res.status(200).json({
                    success: false,
                    isCanceled: true,
                    message: 'Sua assinatura mensal foi cancelada ou expirou na Cakto.',
                    customerName: verified.name,
                    email: emailClean,
                    purchasedProducts: []
                });
            } else {
                return res.status(200).json({
                    success: true,
                    isCanceled: false,
                    message: 'Assinatura ativa encontrada (Modo Contingência)!',
                    customerName: verified.name,
                    email: emailClean,
                    status: 'paid',
                    orderId: 'offline_' + Date.now(),
                    paidAt: new Date().toISOString(),
                    validUntil: verified.validUntil,
                    purchasedProducts: ['FUSE', 'Desafio Core']
                });
            }
        }

        return res.status(500).json({ 
            success: false, 
            message: 'Erro interno ao processar a verificação da compra.',
            error: error.message 
        });
    }
}

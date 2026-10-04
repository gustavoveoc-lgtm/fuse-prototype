// FUSE - Protótipo de Alta Fidelidade (Lógica Expandida)

// Banco de Dados de Conteúdo do FUSE (Simulado)
const workoutsDB = [
    {
        id: "w1",
        title: "Glúteos Express & Tonificação",
        category: "gluteos rapidos",
        place: "casa",
        duration: 15,
        difficulty: "Iniciante",
        kcal: 110,
        desc: "Foco em ativação de glúteos e core com exercícios de peso corporal. Ideal para fazer em pequenos espaços.",
        exercises: [
            { name: "Agachamento Livre", sets: 3, reps: "15 repetições" },
            { name: "Elevação Pélvica", sets: 4, reps: "15 repetições" },
            { name: "Quatro Apoios Unilateral", sets: 3, reps: "12 repetições" },
            { name: "Ponte Glúteos Isometrica", sets: 3, reps: "30 segundos" }
        ]
    },
    {
        id: "w2",
        title: "Definição Pernas & Coxas",
        category: "pernas",
        place: "academia",
        duration: 30,
        difficulty: "Intermediário",
        kcal: 240,
        desc: "Treino de força na musculação focando nos quadríceps e posterior de coxa. Exige halteres e aparelhos básicos.",
        exercises: [
            { name: "Agachamento com Halteres", sets: 4, reps: "10 repetições" },
            { name: "Cadeira Extensora", sets: 4, reps: "12 repetições" },
            { name: "Mesa Flexora", sets: 3, reps: "12 repetições" },
            { name: "Passada com Carga", sets: 3, reps: "20 passos total" }
        ]
    },
    {
        id: "w3",
        title: "Cardio Queima Rápida",
        category: "rapidos cardio",
        place: "casa",
        duration: 15,
        difficulty: "Intermediário",
        kcal: 180,
        desc: "Protocolo HIIT focado em elevação cardíaca e queima calórica sem equipamentos.",
        exercises: [
            { name: "Polichinelos", sets: 3, reps: "45 segundos" },
            { name: "Corrida Estacionária", sets: 3, reps: "45 segundos" },
            { name: "Burpees Adaptados", sets: 3, reps: "30 segundos" },
            { name: "Agachamento com Salto", sets: 3, reps: "30 segundos" }
        ]
    },
    {
        id: "w4",
        title: "Alongamento Relaxante Feminino",
        category: "alongamento rapidos",
        place: "casa",
        duration: 15,
        difficulty: "Todos os Níveis",
        kcal: 60,
        desc: "Posturas suaves de yoga e alongamento para liberação de tensões acumuladas.",
        exercises: [
            { name: "Postura da Criança (Child Pose)", sets: 1, reps: "1 minuto" },
            { name: "Alongamento Gato-Vaca", sets: 1, reps: "1 minuto" },
            { name: "Torção de Coluna Deitada", sets: 2, reps: "30 seg cada lado" },
            { name: "Alongamento Isquiotibiais", sets: 2, reps: "45 seg cada perna" }
        ]
    },
    {
        id: "w5",
        title: "Super Membros Superiores (SMS)",
        category: "braços costas",
        place: "academia",
        duration: 45,
        difficulty: "Avançado",
        kcal: 310,
        desc: "Tonificação completa de braços, ombros e costas com uso de polias e halteres médios.",
        exercises: [
            { name: "Puxada Aberta no Pulley", sets: 4, reps: "10 repetições" },
            { name: "Remada Baixa com Triângulo", sets: 4, reps: "12 repetições" },
            { name: "Desenvolvimento de Ombros", sets: 3, reps: "10 repetições" },
            { name: "Rosca Martelo Unilateral", sets: 3, reps: "12 repetições" }
        ]
    }
];

const recipesDB = {
    emagrecer: [
        { id: "r1", type: "Café da Manhã", title: "Panqueca Fit de Banana", kcal: 290, prot: 16, carb: 32, fat: 8, ingredients: ["1 banana prata madura", "1 ovo inteiro", "2 colheres de sopa de farelo de aveia", "Canela em pó a gosto"], vegan: false, lactoseFree: true, glutenFree: false },
        { id: "r2", type: "Almoço", title: "Bowl de Frango Grelhado e Quinoa", kcal: 410, prot: 32, carb: 40, fat: 11, ingredients: ["120g de peito de frango grelhado em cubos", "100g de quinoa cozida", "Mix de folhas verdes à vontade", "Tomate cereja e pepino fatiado"], vegan: false, lactoseFree: true, glutenFree: true },
        { id: "r3", type: "Lanche", title: "Iogurte Natural com Chia e Morango", kcal: 180, prot: 12, carb: 18, fat: 5, ingredients: ["150g de iogurte grego natural desnatado", "1 colher de sopa de sementes de chia", "5 morangos frescos picados"], vegan: false, lactoseFree: false, glutenFree: true },
        { id: "r4", type: "Jantar", title: "Filé de Peixe com Legumes Assados", kcal: 340, prot: 28, carb: 22, fat: 9, ingredients: ["150g de filé de tilápia grelhado", "100g de brócolis cozido no vapor", "100g de abóbora cabotiá assada"], vegan: false, lactoseFree: true, glutenFree: true }
    ],
    massa: [
        { id: "r11", type: "Café da Manhã", title: "Super Omelete Protéico com Queijo", kcal: 450, prot: 28, carb: 10, fat: 22, ingredients: ["3 ovos inteiros", "30g de queijo minas frescal", "1 fatia de pão integral tostado"], vegan: false, lactoseFree: false, glutenFree: false },
        { id: "r12", type: "Almoço", title: "Arroz Integral com Carne Moída e Brócolis", kcal: 580, prot: 38, carb: 65, fat: 15, ingredients: ["150g de patinho moído grelhado", "150g de arroz integral cozido", "120g de brócolis cozido"], vegan: false, lactoseFree: true, glutenFree: true },
        { id: "r13", type: "Lanche", title: "Shake Anabólico de Banana e Whey", kcal: 360, prot: 30, carb: 45, fat: 6, ingredients: ["30g de whey protein sabor baunilha", "1 banana inteira", "200ml de leite desnatado", "1 colher de sopa de aveia"], vegan: false, lactoseFree: false, glutenFree: false },
        { id: "r14", type: "Jantar", title: "Macarrão Integral com Molho de Atum", kcal: 510, prot: 32, carb: 70, fat: 10, ingredients: ["80g de macarrão integral cru", "1 lata de atum ralado em água", "Molho de tomate caseiro natural"], vegan: false, lactoseFree: true, glutenFree: false }
    ],
    manter: [
        { id: "r21", type: "Café da Manhã", title: "Tapioca com Frango Desfiado", kcal: 350, prot: 20, carb: 45, fat: 7, ingredients: ["3 colheres de sopa de goma de tapioca", "80g de peito de frango cozido e desfiado", "1 colher de sopa de requijão light"], vegan: false, lactoseFree: false, glutenFree: true },
        { id: "r22", type: "Almoço", title: "Prato Colorido: Feijão, Arroz e Frango", kcal: 490, prot: 30, carb: 55, fat: 12, ingredients: ["100g de arroz branco cozido", "80g de feijão carioca", "120g de sobrecoxa assada sem pele"], vegan: false, lactoseFree: true, glutenFree: true },
        { id: "r23", type: "Lanche", title: "Mix de Oleaginosas com Maçã", kcal: 220, prot: 6, carb: 25, fat: 12, ingredients: ["1 maçã fuji inteira", "15g de castanha-do-pará", "15g de amêndoas torradas"], vegan: true, lactoseFree: true, glutenFree: true },
        { id: "r24", type: "Jantar", title: "Wrap Saudável de Frango", kcal: 380, prot: 25, carb: 35, fat: 10, ingredients: ["1 folha de Rap10 integral", "100g de peito de frango em tiras", "Alface picada e tomate picado"], vegan: false, lactoseFree: true, glutenFree: false }
    ]
};

// Receitas extras de substituição (Swap)
const swapRecipesDB = [
    { id: "s1", type: "Café da Manhã", title: "Waffle Fit de Whey", kcal: 310, prot: 22, carb: 28, fat: 9, ingredients: ["1 ovo", "20g de aveia", "15g de whey protein", "Água até dar ponto"], vegan: false, lactoseFree: true },
    { id: "s2", type: "Almoço", title: "Nhoque de Batata Doce com Carne", kcal: 450, prot: 30, carb: 52, fat: 11, ingredients: ["150g de nhoque de batata doce", "120g de carne moída", "Molho de tomate"], vegan: false, lactoseFree: true },
    { id: "s3", type: "Lanche", title: "Muffin de Caneca Protéico", kcal: 210, prot: 14, carb: 22, fat: 6, ingredients: ["1 ovo", "1 banana", "1 colher de cacau em pó", "10g de colágeno"], vegan: false, lactoseFree: true },
    { id: "s4", type: "Jantar", title: "Salada de Grão de Bico com Atum", kcal: 390, prot: 26, carb: 38, fat: 12, ingredients: ["120g de grão de bico cozido", "1 lata de atum", "Cebola, azeite e vinagre"], vegan: false, lactoseFree: true }
];

// Estado Geral da Usuária com Persistência Local (localStorage)
const defaultState = {
    name: "Amanda Fernandes",
    age: 26,
    height: 168,
    weight: 62.5,
    initialWeight: 62.5,
    goal: "emagrecer", // emagrecer, massa, manter, ganhar-peso
    level: "iniciante", // iniciante, intermediario, avancado
    trainingFreq: 4,
    idealDuration: 15,
    place: "casa", // casa, academia
    
    // Status do Perfil
    xp: 0,
    levelNum: 0,
    levelTitle: "Nível 0: Constância",
    streak: 0,
    weeklyCheckins: [false, false, false, false, false, false, false],
    habitsCompleted: [false, false, false, false, false, false],
    habitsCount: 6,
    completedWorkoutsCount: 0,
    streakUpdated: false,
    lastCheckInDate: "",

    // Cálculos de Macros
    targetCalories: 1840,
    protGrams: 138,
    carbGrams: 184,
    fatGrams: 61,

    // Refeições Ativas do Plano
    currentMeals: [],
    hasLoggedIn: false,
    anamneseConcluida: false,
    // Identificação e Registro de Compras
    user_id: "",
    createdAt: "",
    communityJoinedAt: null,
    purchasedAt: null,
    purchasedProduct: null,
    purchaseStatus: null,
    processedTransactions: [],
    lastActiveAt: "",

    // Configurações do Desafio Core R$ 19,99
    challengeSubscribed: false, // true se comprou
    challengeAccess: false,     // permissão de acesso ao Desafio
    challengeStartedAt: null,   // data de início (YYYY-MM-DD)
    challengeTasksCompleted: [false, false, false, false, false, false],
    challengeProgress: {},      // histórico diário: { "1": { date, tasksCompleted, pointsEarned, completedAt } }
    challengePoints: 210,
    dailyHistory: [],

    // Propósito 7 Dias — Evangelho de João
    proposito: {
        activeDay: 1,
        completedDays: [],
        reflections: {}
    },

    // Treinos Redesenhados FUSE
    workoutSelectedDay: (new Date().getDay() + 6) % 7,
    exerciseStats: {},
    workoutSessionProgress: {},

    // Hidratação Consciente FUSE
    waterIntake: 0,
    waterTarget: 2200,
    waterDate: ""
};

// Banco de Dados de Usuárias Cadastradas (Simula banco de dados na nuvem)
let usersDB = JSON.parse(localStorage.getItem("fuse_users_db")) || {};
let currentUserEmail = localStorage.getItem("fuse_current_user_email") || "";

// Migração de Banco de Dados de Teste para resetar dados e aplicar novos padrões 0 dias
if (!localStorage.getItem("fuse_db_reset_v5")) {
    usersDB = {};
    currentUserEmail = "";
    localStorage.removeItem("fuse_current_user_email");
    localStorage.setItem("fuse_db_reset_v5", "true");
}

// Pré-popula usuários padrão de teste para login direto imediato
if (usersDB["amanda@fuse.com.br"]) {
    delete usersDB["amanda@fuse.com.br"];
}
// Pré-popula usuários padrão de teste para login direto imediato se não existirem
if (!usersDB["duda@fuse.com"]) {
    usersDB["duda@fuse.com"] = {
        password: "Duda123",
        userState: {
            ...defaultState,
            name: "Duda Meister",
            profilePhoto: "assets/img/duda-avatar.jpg",
            hasLoggedIn: false,
            anamneseConcluida: false
        }
    };
}

if (usersDB["fernanda@fuse.com.br"]) {
    delete usersDB["fernanda@fuse.com.br"];
}

if (!usersDB["fernanda@fuse.com"]) {
    usersDB["fernanda@fuse.com"] = {
        password: "Fer123",
        userState: {
            ...defaultState,
            name: "Fernanda",
            hasLoggedIn: false,
            anamneseConcluida: false
        }
    };
}
if (usersDB["duda@fuse.com"]) {
    usersDB["duda@fuse.com"].userState.profilePhoto = "assets/img/duda-avatar.jpg";
    usersDB["duda@fuse.com"].userState.name = "Duda Meister";
}

const TRUSTED_EMAILS = [
    'as9233809@gmail.com',
    'duda@fuse.com',
    'fernanda@fuse.com',
    'fernanda@fuse.com.br',
    'amanda@fuse.com.br',
    'fer@gmail.com',
    'pratsroberta@gmail.com'
];

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
    "gabioff1234@gmail.com": { name: "Gabriela  Nascimento de Carvalho", status: "active" },
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

function isTrustedEmail(email) {
    if (!email) return false;
    const clean = email.toLowerCase().trim();
    return TRUSTED_EMAILS.includes(clean) || clean.endsWith('@fuse.com') || clean.endsWith('@fuse.com.br');
}

// Funções auxiliares globais de identificação e datas
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getTodayStr() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getChallengeDay(startDateStr) {
    if (!startDateStr) return 1;
    // Força cálculo à meia-noite local para evitar variações do fuso horário
    const start = new Date(startDateStr + "T00:00:00");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
}

// Função de Migração de Esquema do Banco de Dados Local
function migrateDatabaseSchema() {
    let migrated = false;
    
    for (let email in usersDB) {
        const user = usersDB[email];
        if (!user.userState) continue;
        
        const state = user.userState;
        
        // 1. Gera UUID único se não existir
        if (!state.user_id) {
            state.user_id = generateUUID();
            migrated = true;
        }
        
        // 2. Data de criação
        if (!state.createdAt) {
            state.createdAt = new Date().toISOString();
            migrated = true;
        }
        
        // 3. processedTransactions
        if (!state.processedTransactions) {
            state.processedTransactions = [];
            migrated = true;
        }
        
        // 4. Parâmetros de liberação do Desafio (Liberado para todas por padrão)
        if (!state.challengeAccess || !state.challengeSubscribed) {
            state.challengeAccess = true;
            state.challengeSubscribed = true;
            migrated = true;
        }
        
        if (!state.challengeStartedAt) {
            state.challengeStartedAt = "2026-08-23"; // Data padrão do desafio
            migrated = true;
        }
        
        // 5. Histórico e progresso granular do Desafio
        if (!state.challengeProgress) {
            state.challengeProgress = {};
            migrated = true;
        }
        
        // Se já tinha progresso nas tarefas ativas mas não tinha no histórico, migra para o dia atual do desafio
        if (state.challengeSubscribed && Object.keys(state.challengeProgress).length === 0) {
            const currentDay = getChallengeDay(state.challengeStartedAt);
            if (currentDay >= 1 && currentDay <= 21) {
                state.challengeProgress[String(currentDay)] = {
                    date: getTodayStr(),
                    tasksCompleted: state.challengeTasksCompleted ? [...state.challengeTasksCompleted] : [false, false, false, false, false, false],
                    pointsEarned: state.challengeTasksCompleted ? state.challengeTasksCompleted.filter(Boolean).length * 20 : 0,
                    completedAt: new Date().toISOString()
                };
                migrated = true;
            }
        }
        // 6. Propósito 7 Dias — Evangelho de João
        if (!state.proposito) {
            state.proposito = {
                activeDay: 1,
                completedDays: [],
                reflections: {}
            };
            migrated = true;
        }

        // 7. Treinos Redesenhados FUSE
        if (state.workoutSelectedDay === undefined) {
            state.workoutSelectedDay = (new Date().getDay() + 6) % 7;
            migrated = true;
        }
        if (!state.exerciseStats) {
            state.exerciseStats = {};
            migrated = true;
        }
        if (!state.workoutSessionProgress) {
            state.workoutSessionProgress = {};
            migrated = true;
        }
    }
    
    if (migrated) {
        localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
        console.log("🛠️ Migração de esquema de banco de dados executada com sucesso!");
    }
}

// Executa a migração imediatamente
migrateDatabaseSchema();

let userState = defaultState;
let selectedChallengeViewDay = null;

if (currentUserEmail && usersDB[currentUserEmail]) {
    userState = usersDB[currentUserEmail].userState;
}

// Inicializa e valida estrutura do Propósito 7 Dias
if (!userState.proposito) {
    userState.proposito = {
        activeDay: 1,
        completedDays: [],
        reflections: {}
    };
}
if (!Array.isArray(userState.proposito.completedDays)) userState.proposito.completedDays = [];
if (!userState.proposito.reflections || typeof userState.proposito.reflections !== 'object') userState.proposito.reflections = {};
if (!userState.proposito.activeDay) userState.proposito.activeDay = 1;

// Inicializa e valida estrutura de Treinos Redesenhados
if (userState.workoutSelectedDay === undefined || userState.workoutSelectedDay === null) {
    userState.workoutSelectedDay = (new Date().getDay() + 6) % 7;
}
if (!userState.exerciseStats || typeof userState.exerciseStats !== 'object') {
    userState.exerciseStats = {};
}
if (!userState.workoutSessionProgress || typeof userState.workoutSessionProgress !== 'object') {
    userState.workoutSessionProgress = {};
}

// Sincroniza estado de hábitos antigo se houver incompatibilidade
if (!userState.habitsCompleted || userState.habitsCompleted.length !== 6) {
    userState.habitsCompleted = [false, false, false, false, false, false];
    userState.habitsCount = 6;
}

if (!userState.activeDietFilters) {
    userState.activeDietFilters = [];
}

const defaultPosts = [];

if (!userState.communityPosts) {
    userState.communityPosts = [];
} else {
    // Purga posts falsos (p1, p2) do localStorage do navegador
    userState.communityPosts = userState.communityPosts.filter(p => p.id !== "p1" && p.id !== "p2");
}
if (userState.lastPostPointsDate === undefined) {
    userState.lastPostPointsDate = "";
}

// Lógica de reinicialização diária automática e carregamento de registros
const todayStr = new Date().toISOString().slice(0, 10);
if (!userState.dailyHistory) {
    userState.dailyHistory = [];
}
const existingTodayRecord = userState.dailyHistory.find(r => r.date === todayStr);
if (existingTodayRecord) {
    // Restaura o registro do dia atual
    userState.habitsCompleted = [...existingTodayRecord.habitsCompleted];
    userState.lastCheckInDate = todayStr;
} else {
    if (!userState.lastCheckInDate) {
        userState.lastCheckInDate = todayStr;
    } else if (userState.lastCheckInDate !== todayStr) {
        userState.habitsCompleted = [false, false, false, false, false, false];
        userState.lastCheckInDate = todayStr;
        userState.streakUpdated = false;
    }
}


function saveStateToStorage() {
    try {
        if (currentUserEmail) {
            if (!usersDB[currentUserEmail]) {
                usersDB[currentUserEmail] = {};
            }
            usersDB[currentUserEmail].userState = userState;
            localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
            localStorage.setItem("fuse_current_user_email", currentUserEmail);
        }
        // Mantém backup do estado atual
        localStorage.setItem("fuse_user_state", JSON.stringify(userState));
    } catch (e) {
        console.warn("Storage quota exceeded or error occurred while saving state:", e);
        // Fallback: se excedeu cota, limpa a foto de perfil do estado para caber no storage
        if (e.name === "QuotaExceededError" || e.code === 22) {
            if (userState.profilePhoto && userState.profilePhoto.startsWith("data:")) {
                alert("Sua foto de perfil é muito grande e excedeu o limite do navegador. Para continuar, salvamos seus dados usando um avatar padrão mais leve!");
                userState.profilePhoto = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150";
                
                // Tenta salvar novamente após limpar a foto pesada
                try {
                    if (currentUserEmail) {
                        usersDB[currentUserEmail].userState = userState;
                        localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
                    }
                    localStorage.setItem("fuse_user_state", JSON.stringify(userState));
                } catch (retryErr) {
                    console.error("Failed to save even after clearing photo:", retryErr);
                }
            }
        }
    }
}

// ESTÁGIOS DA TELA
let currentOnboardingStep = 1;
const totalOnboardingSteps = 8;

// 1. SPLASH SCREEN
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa Lucide Icons
    lucide.createIcons();

    // Mostra painel de simulação se debug ou sim for true na URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("debug") === "true" || urlParams.get("sim") === "true") {
        const devBox = document.querySelector(".dev-tools-box");
        if (devBox) devBox.style.display = "block";
    }

    // Inicia cronômetro do Splash de 3 segundos
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        if (splash.classList.contains("active")) {
            skipSplash();
        }
    }, 3000);
});

function skipSplash() {
    document.getElementById("splash-screen").classList.remove("active");
    if (checkCaktoUrlParams()) {
        return;
    }
    if (userState.hasLoggedIn || userState.anamneseConcluida) {
        restoreSession();
    } else {
        document.getElementById("auth-screen").classList.add("active");
    }
}

function restoreSession() {
    // Atualiza Fotos de Perfil se houver imagem customizada
    if (userState.profilePhoto) {
        const headerAv = document.getElementById("header-avatar");
        const profileAv = document.getElementById("profile-big-avatar");
        const writeAv = document.getElementById("write-post-avatar");
        if (headerAv) headerAv.src = userState.profilePhoto;
        if (profileAv) profileAv.src = userState.profilePhoto;
        if (writeAv) writeAv.src = userState.profilePhoto;
    }

    // 1. ATUALIZA TEXTOS E HEADERS DA HOME E PERFIL
    document.getElementById("user-display-name").innerText = userState.name;
    document.getElementById("profile-display-name").innerText = userState.name;
    const workoutTabSubEl = document.getElementById("workout-tab-sub");
    if (workoutTabSubEl) {
        workoutTabSubEl.innerText = `Foco no seu objetivo: ${userState.goal.charAt(0).toUpperCase() + userState.goal.slice(1)}`;
    }
    document.getElementById("home-workout-chk-desc").innerText = `Treinar na ${userState.place} (${userState.idealDuration} min)`;
    
    // Atualiza Banners Rápidos
    const defaultWorkout = workoutsDB.find(w => w.place === userState.place) || workoutsDB[0];
    document.getElementById("home-workout-btn-sub").innerText = `${defaultWorkout.title} • ${defaultWorkout.duration} min`;
    document.getElementById("home-diet-btn-sub").innerText = `Meta de Kcal do dia: ${userState.targetCalories}`;

    // Atualiza Widgets da Aba Dieta
    document.getElementById("nut-target-kcal").innerText = userState.targetCalories;
    document.getElementById("macro-prot-txt").innerText = `${userState.protGrams}g`;
    document.getElementById("macro-carb-txt").innerText = `${userState.carbGrams}g`;
    document.getElementById("macro-fat-txt").innerText = `${userState.fatGrams}g`;

    // Atualiza Seletores da Aba Nutrir
    document.getElementById("nut-select-goal").value = userState.goal;
    
    // Restaura visualmente os filtros selecionados
    document.querySelectorAll(".filter-card-item").forEach(card => card.classList.remove("selected"));
    if (userState.activeDietFilters) {
        userState.activeDietFilters.forEach(f => {
            const el = document.getElementById(`filter-card-${f}`);
            if (el) el.classList.add("selected");
        });
    }
    
    // Atualiza Dados do Perfil
    document.getElementById("prof-initial-weight").innerText = `${userState.initialWeight} kg`;
    document.getElementById("prof-current-weight").innerText = `${userState.weight} kg`;
    document.getElementById("profile-level-title").innerText = userState.levelTitle;
    document.getElementById("display-streak-level").innerText = userState.levelTitle;
    document.getElementById("streak-counter").innerText = `${userState.streak} dias ativos`;
    document.getElementById("profile-streak-count").innerText = userState.streak;

    // Popula grids com base no estado salvo
    populateWorkoutsGrid();
    populateNutritionMealsUI();
    updateShoppingListLiveUI();
    renderPropositoUI();
    renderCommunityFeed();
    renderWeeklyTracker();

    // Mostra o container principal
    document.getElementById("app-screen").style.display = "flex";
    document.getElementById("onboarding-screen").classList.remove("active");
    document.getElementById("auth-screen").classList.remove("active");
    
    populateDudaWelcomeMessage();
    updateProgressUI();
    updateWaterUI();

    // Restaura observações do dia atual se existirem
    const obsTextarea = document.getElementById("daily-observations");
    if (obsTextarea) {
        const todayStr = new Date().toISOString().slice(0, 10);
        if (!userState.dailyHistory) userState.dailyHistory = [];
        const existingToday = userState.dailyHistory.find(r => r.date === todayStr);
        obsTextarea.value = existingToday ? (existingToday.observations || "") : "";
    }

    // Renderiza a lista de histórico de hábitos no perfil
    renderDailyHistoryList();

    // Valida em segundo plano se a assinatura mensal da usuária ainda está ativa na Cakto
    if (currentUserEmail && !isTrustedEmail(currentUserEmail)) {
        checkCaktoPurchaseAPI(currentUserEmail).then(res => {
            if (res && res.isCanceled) {
                userState.challengeAccess = false;
                userState.challengeSubscribed = false;
                userState.purchaseStatus = "canceled";
                if (usersDB[currentUserEmail]) {
                    usersDB[currentUserEmail].userState = userState;
                }
                saveStateToStorage();
                alert(`⚠️ Atenção: ${res.message || 'Sua assinatura mensal foi cancelada ou não foi renovada na Cakto.'}\n\nPara continuar acessando os treinos, comunidade e desafios, realize a renovação do seu plano.`);
                localStorage.removeItem("fuse_current_user_email");
                window.location.reload();
            }
        }).catch(err => console.warn("Verificação de assinatura em background:", err));
    }
}

function populateDudaWelcomeMessage() {
    const avatarEl = document.getElementById("duda-welcome-avatar");
    const nameEl = document.getElementById("duda-welcome-name");
    
    if (avatarEl && nameEl) {
        const dudaAccount = usersDB["duda@fuse.com"];
        if (dudaAccount && dudaAccount.userState) {
            // Se Duda Meister tiver uma foto de perfil cadastrada, usa ela. Caso contrário, usa a foto padrão dela do Unsplash.
            avatarEl.src = dudaAccount.userState.profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";
            nameEl.innerText = dudaAccount.userState.name || "Duda Meister";
        } else {
            // Fallback se não encontrar a conta no banco de dados local
            avatarEl.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";
            nameEl.innerText = "Duda Meister";
        }
    }
}

// 2. TELA DE AUTENTICAÇÃO (LOGIN & REGISTRO)
let authMode = "login"; // login, register

function toggleAuthMode() {
    const loginWrapper = document.getElementById("login-form-wrapper");
    const registerWrapper = document.getElementById("register-form-wrapper");
    const titleText = document.getElementById("auth-subtitle-text");
    const btnToggle = document.getElementById("auth-toggle-btn");
    const descToggle = document.getElementById("auth-toggle-desc");

    if (authMode === "login") {
        authMode = "register";
        loginWrapper.style.display = "none";
        registerWrapper.style.display = "block";
        
        // Reseta os passos do Primeiro Acesso
        document.getElementById("first-access-step-1").style.display = "block";
        document.getElementById("first-access-step-2").style.display = "none";
        document.getElementById("first-access-email").value = "";
        document.getElementById("first-access-name").value = "";
        document.getElementById("first-access-pass").value = "";
        
        titleText.innerText = "Ative sua conta premium do FUSE";
        btnToggle.innerText = "Fazer login";
        descToggle.innerText = "Já possui uma senha?";
    } else {
        authMode = "login";
        loginWrapper.style.display = "block";
        registerWrapper.style.display = "none";
        titleText.innerText = "Faça login para continuar sua jornada";
        btnToggle.innerText = "Ativar conta";
        descToggle.innerText = "Primeiro acesso?";
    }
}

async function checkCaktoPurchaseAPI(email) {
    const emailClean = email.toLowerCase().trim();
    
    // Lista de Confiança no Cliente (Garante funcionamento offline / local)
    if (isTrustedEmail(emailClean)) {
        return {
            success: true,
            isCanceled: false,
            customerName: emailClean.split('@')[0].toUpperCase(),
            email: emailClean,
            status: 'paid'
        };
    }

    try {
        const response = await fetch(`/api/verify-purchase?email=${encodeURIComponent(email)}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (e) {
        console.warn("API de verificação remota não respondeu, consultando catálogo de contingência:", e);
    }

    // Fallback de alta disponibilidade com catálogo verificado do mês
    if (typeof VERIFIED_CUSTOMERS !== 'undefined' && VERIFIED_CUSTOMERS[emailClean]) {
        const v = VERIFIED_CUSTOMERS[emailClean];
        if (v.status === 'canceled' || v.status === 'inactive') {
            return {
                success: false,
                isCanceled: true,
                message: 'Sua assinatura mensal foi cancelada na Cakto.',
                customerName: v.name,
                email: emailClean
            };
        } else if (v.status === 'active') {
            return {
                success: true,
                isCanceled: false,
                customerName: v.name,
                email: emailClean,
                status: 'paid'
            };
        }
    }

    return { success: false };
}

async function handleAuth(isLoginButton) {
    const emailVal = document.getElementById("login-email").value.trim().toLowerCase();
    const passVal = document.getElementById("login-pass").value.trim();
    
    if (emailVal === "" || passVal === "") {
        alert("Por favor, preencha e-mail e senha.");
        return;
    }
    
    let account = usersDB[emailVal];
    
    // Se a conta não existe localmente, verifica na API do Cakto se o cliente já pagou!
    if (!account) {
        const btnEl = document.querySelector("#login-form-wrapper .btn-auth-primary");
        const originalText = btnEl ? btnEl.innerText : "Entrar";
        if (btnEl) {
            btnEl.innerText = "Verificando assinatura...";
            btnEl.disabled = true;
        }
        
        const verify = await checkCaktoPurchaseAPI(emailVal);
        
        if (btnEl) {
            btnEl.innerText = originalText;
            btnEl.disabled = false;
        }
        
        if (verify.isCanceled) {
            alert(`⚠️ ${verify.message || 'Sua assinatura mensal foi cancelada na Cakto.'}\n\nPara voltar a acessar o FUSE, realize a renovação do seu plano.`);
            return;
        }
        
        if (verify.success) {
            // Cria a conta automaticamente usando a senha informada
            userState = JSON.parse(JSON.stringify(defaultState));
            userState.user_id = generateUUID();
            userState.createdAt = new Date().toISOString();
            userState.email = emailVal;
            userState.name = verify.customerName;
            userState.hasLoggedIn = false; // Inicia na Anamnese
            
            // Atribui os acessos (Sempre libera Comunidade e Desafio para quem loga com assinatura ativa)
            userState.communityJoinedAt = new Date().toISOString();
            userState.challengeSubscribed = true;
            userState.challengeAccess = true;
            userState.challengeStartedAt = "2026-08-23"; // Data de início do desafio
            userState.purchasedAt = new Date().toISOString();
            userState.purchasedProduct = "FUSE Premium + Desafio Core";
            userState.purchaseStatus = "paid";
            
            usersDB[emailVal] = {
                password: passVal,
                userState: userState
            };
            localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
            account = usersDB[emailVal];
            
            alert(`🎉 Compra ativa confirmada via API Cakto!\n\nBem-vinda ao FUSE, ${userState.name}!`);
        } else {
            alert("Nenhuma compra aprovada foi encontrada para este e-mail no Cakto. Se esta é a sua primeira vez no app, clique em 'Ativar conta' (Primeiro Acesso) abaixo para criar a sua senha.");
            return;
        }
    }
    
    if (account.password !== passVal) {
        alert("Senha incorreta. Tente novamente.");
        return;
    }
    
    // Para contas locais existentes, valida em tempo real se a assinatura não foi cancelada
    if (!isTrustedEmail(emailVal)) {
        const verifyExisting = await checkCaktoPurchaseAPI(emailVal);
        if (verifyExisting && verifyExisting.isCanceled) {
            account.userState.challengeAccess = false;
            account.userState.challengeSubscribed = false;
            account.userState.purchaseStatus = "canceled";
            localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
            alert(`⚠️ ${verifyExisting.message || 'Sua assinatura mensal foi cancelada ou não foi renovada na Cakto.'}\n\nPara continuar acessando a comunidade e os treinos, realize a renovação do seu plano.`);
            return;
        }
    }
    
    // Login com sucesso
    currentUserEmail = emailVal;
    userState = account.userState;
    saveStateToStorage();
    
    document.getElementById("auth-screen").classList.remove("active");
    
    if (userState.hasLoggedIn || userState.anamneseConcluida) {
        restoreSession();
    } else {
        document.getElementById("onboarding-screen").classList.add("active");
        currentOnboardingStep = 1;
        updateOnboardingStepUI();
    }
}

function handleSocialAuth(provider) {
    alert(`Autenticação via ${provider} realizada com sucesso.`);
    handleAuth(true);
}

// 3. FLUXO DE ONBOARDING PASSO A PASSO
function updateHeightSlider(val) {
    document.getElementById("height-val").innerText = val;
    userState.height = parseInt(val);
}

function selectGoal(goalName, el) {
    document.querySelectorAll(".goal-option-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    userState.goal = goalName;
}

function selectLevel(levelName, el) {
    document.querySelectorAll(".level-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    userState.level = levelName;
}

function selectTrainingDays(days) {
    document.querySelectorAll(".day-pill").forEach(p => p.classList.remove("active"));
    event.target.classList.add("active");
    document.getElementById("days-val").innerText = days;
    userState.trainingFreq = days;
}

function selectDuration(minutes, el) {
    document.querySelectorAll(".pill-duration").forEach(p => p.classList.remove("active"));
    el.classList.add("active");
    userState.idealDuration = minutes;
}

function selectPlace(placeName, el) {
    document.querySelectorAll(".place-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    userState.place = placeName;
}

function validateStep(stepNum) {
    // Validações básicas opcionais de inputs
    const btnNext = document.getElementById("btn-onb-next");
    if (stepNum === 1) {
        const val = parseInt(document.getElementById("onb-age").value);
        userState.age = val;
        btnNext.disabled = isNaN(val) || val <= 10;
    } else if (stepNum === 3) {
        const val = parseFloat(document.getElementById("onb-weight").value);
        userState.weight = val;
        userState.initialWeight = val;
        btnNext.disabled = isNaN(val) || val <= 20;
    }
}

function navigateOnboarding(direction) {
    if (direction === 1) {
        // Próximo passo
        if (currentOnboardingStep === totalOnboardingSteps) {
            finishOnboarding();
            return;
        }
        document.getElementById(`step-panel-${currentOnboardingStep}`).classList.remove("active");
        currentOnboardingStep++;
        document.getElementById(`step-panel-${currentOnboardingStep}`).classList.add("active");
    } else {
        // Passo anterior
        if (currentOnboardingStep === 1) return;
        document.getElementById(`step-panel-${currentOnboardingStep}`).classList.remove("active");
        currentOnboardingStep--;
        document.getElementById(`step-panel-${currentOnboardingStep}`).classList.add("active");
    }
    updateOnboardingStepUI();
}

function updateOnboardingStepUI() {
    const percentage = (currentOnboardingStep / totalOnboardingSteps) * 100;
    document.getElementById("onboarding-fill").style.width = `${percentage}%`;
    document.getElementById("step-number-text").innerText = `Passo ${currentOnboardingStep} de ${totalOnboardingSteps}`;
    
    const titles = {
        1: "Qual a sua idade?",
        2: "Qual sua altura?",
        3: "Qual seu peso atual?",
        4: "Qual seu objetivo principal?",
        5: "Qual seu nível de treino?",
        6: "Pretende treinar quantos dias?",
        7: "Duração e Local de Treino",
        8: "Sua Foto de Perfil"
    };
    document.getElementById("step-title-text").innerText = titles[currentOnboardingStep];

    // Visibilidade do botão voltar
    const btnBack = document.getElementById("btn-onb-back");
    btnBack.style.visibility = (currentOnboardingStep === 1) ? "hidden" : "visible";

    // Texto do botão continuar / finalizar
    const btnNext = document.getElementById("btn-onb-next");
    btnNext.innerText = (currentOnboardingStep === totalOnboardingSteps) ? "Finalizar" : "Continuar";
}

function recalculateUserNutritionAndMacros() {
    const weight = userState.weight;
    const height = userState.height;
    const age = userState.age;
    
    // TMB Base
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    
    // GETD multiplicando pelo fator de atividade
    let factor = 1.2;
    if (userState.trainingFreq >= 3 && userState.trainingFreq <= 4) factor = 1.375;
    else if (userState.trainingFreq >= 5) factor = 1.55;
    
    let getd = bmr * factor;
    
    // Ajuste de Caloria com base no Objetivo
    let targetKcal = getd;
    let ratios = { prot: 0.20, carb: 0.50, fat: 0.30 }; // default: manter

    if (userState.goal === "emagrecer") {
        targetKcal = getd * 0.8; // Déficit 20%
        ratios = { prot: 0.30, carb: 0.40, fat: 0.30 };
    } else if (userState.goal === "massa") {
        targetKcal = getd * 1.1; // Superávit 10%
        ratios = { prot: 0.25, carb: 0.50, fat: 0.25 };
    } else if (userState.goal === "ganhar-peso") {
        targetKcal = getd * 1.15; // Superávit 15%
        ratios = { prot: 0.20, carb: 0.55, fat: 0.25 };
    }

    userState.targetCalories = Math.round(targetKcal);
    userState.protGrams = Math.round((targetKcal * ratios.prot) / 4);
    userState.carbGrams = Math.round((targetKcal * ratios.carb) / 4);
    userState.fatGrams = Math.round((targetKcal * ratios.fat) / 9);
}

function finishOnboarding() {
    try {
        // Inicializa peso de referência
        userState.initialWeight = userState.weight;

        // 1. CÁLCULO METABÓLICO (Mifflin-St Jeor)
        recalculateUserNutritionAndMacros();

        // 2. CONFIGURA OS SELETORES DE PLANO ALIMENTAR CONFORME ONBOARDING
        const goalEl = document.getElementById("nut-select-goal");
        if (goalEl) {
            goalEl.value = (userState.goal === "ganhar-peso") ? "ganhar-peso" : userState.goal;
        }
        const styleEl = document.getElementById("nut-select-style");
        if (styleEl) {
            styleEl.value = "all";
        }
        changeNutritionConfig();

        // 3. POPULA PORTAL DE TREINOS COM FILTRO DE EQUIPAMENTO E TEMPO
        populateWorkoutsGrid();

        // 4. ATUALIZA TEXTOS E HEADERS DA HOME E PERFIL
        document.getElementById("user-display-name").innerText = userState.name;
        document.getElementById("profile-display-name").innerText = userState.name;
        document.getElementById("home-workout-chk-desc").innerText = `Treinar na ${userState.place} (${userState.idealDuration} min)`;
        
        // Atualiza Banners Rápidos
        const defaultWorkout = workoutsDB.find(w => w.place === userState.place) || workoutsDB[0];
        document.getElementById("home-workout-btn-sub").innerText = `${defaultWorkout.title} • ${defaultWorkout.duration} min`;
        document.getElementById("home-diet-btn-sub").innerText = `Meta de Kcal do dia: ${userState.targetCalories}`;

        // Atualiza Dados do Perfil
        document.getElementById("prof-initial-weight").innerText = `${userState.initialWeight} kg`;
        document.getElementById("prof-current-weight").innerText = `${userState.weight} kg`;

        // Transição da Tela e Salvamento de Sessão
        userState.hasLoggedIn = true;
        userState.anamneseConcluida = true;
        
        if (currentUserEmail && usersDB[currentUserEmail]) {
            usersDB[currentUserEmail].userState = userState;
        }
        
        saveStateToStorage();
        restoreSession(); // Atualiza avatares, textos, dieta, treinos e feeds dinamicamente

        document.getElementById("onboarding-screen").classList.remove("active");
        document.getElementById("app-screen").style.display = "flex";
        updateProgressUI();
    } catch (err) {
        console.error("Erro ao finalizar onboarding:", err);
        // Garante que o usuário consiga acessar o app mesmo se houver erro menor
        userState.hasLoggedIn = true;
        userState.anamneseConcluida = true;
        saveStateToStorage();
        document.getElementById("onboarding-screen").classList.remove("active");
        document.getElementById("app-screen").style.display = "flex";
    }
}

// 4. ABAS E COMPONENTES PRINCIPAIS
function switchTab(tabId) {
    const panels = document.querySelectorAll(".app-tab-panel");
    panels.forEach(p => p.classList.remove("active"));
    
    const navBtns = document.querySelectorAll(".nav-tab-btn");
    navBtns.forEach(btn => btn.classList.remove("active"));
    
    const targetPanel = document.getElementById(`tab-${tabId}`);
    if (targetPanel) targetPanel.classList.add("active");
    
    const targetBtn = document.getElementById(`btn-tab-${tabId}`);
    if (targetBtn) targetBtn.classList.add("active");
    
    document.querySelector(".app-main-content").scrollTop = 0;
    
    if (tabId === "community") {
        renderCommunityFeed();
    }
    if (tabId === "challenge") {
        renderPropositoUI();
    }
    if (tabId === "workouts") {
        renderWorkoutTab();
    }
}

// DIÁRIO CHECK-IN DE METAS
function toggleHabit(index) {
    const item = document.querySelectorAll(".ritual-item")[index];
    userState.habitsCompleted[index] = !userState.habitsCompleted[index];
    
    if (userState.habitsCompleted[index]) {
        item.classList.add("checked");
        addXP(10);
    } else {
        item.classList.remove("checked");
        addXP(-10);
    }
    
    updateProgressUI();
    
    // Auto-salvamento imediato ao alterar hábitos
    autoSaveDailyRecord();
    
    const completedCount = userState.habitsCompleted.filter(h => h).length;
    if (completedCount === userState.habitsCount) {
        triggerDailySuccess();
    }
}

function updateProgressUI() {
    const completedCount = userState.habitsCompleted.filter(h => h).length;
    const percentage = (completedCount / userState.habitsCount) * 100;
    
    document.getElementById("ritual-progress-bar").style.width = `${percentage}%`;
    document.getElementById("ritual-ratio").innerText = `${completedCount}/${userState.habitsCount} concluídos`;
    
    // Restaura visualmente os checkboxes marcados
    const items = document.querySelectorAll(".ritual-item");
    items.forEach((item, idx) => {
        if (item) {
            if (userState.habitsCompleted[idx]) {
                item.classList.add("checked");
            } else {
                item.classList.remove("checked");
            }
        }
    });
    
    // Atualizações no Perfil
    document.getElementById("profile-level-title").innerText = userState.levelTitle;
    document.getElementById("profile-xp-ratio").innerText = `${userState.xp} / 500 XP`;
    const xpPercentage = (userState.xp / 500) * 100;
    document.getElementById("profile-xp-bar").style.width = `${xpPercentage}%`;
    document.getElementById("profile-total-completed").innerText = userState.completedWorkoutsCount;
    document.getElementById("profile-total-xp").innerText = (userState.levelNum - 1) * 500 + userState.xp;
    
    // Salva o estado de forma persistente
    saveStateToStorage();
}

// ==========================================
// RASTREADOR DE HIDRATAÇÃO CONSCIENTE (FUSE WATER TRACKER)
// ==========================================
function getDailyWaterTarget() {
    const weight = parseFloat(userState.weight) || 62.5;
    return Math.round((weight * 35) / 50) * 50;
}

function checkWaterDailyReset() {
    const today = getTodayStr();
    if (!userState.waterDate || userState.waterDate !== today) {
        userState.waterDate = today;
        userState.waterIntake = 0;
        userState.waterTarget = getDailyWaterTarget();
        saveStateToStorage();
    }
}

function addWaterIntake(amount) {
    checkWaterDailyReset();
    const target = userState.waterTarget || getDailyWaterTarget();
    userState.waterTarget = target;
    
    const previousIntake = userState.waterIntake || 0;
    const newIntake = Math.max(0, previousIntake + amount);
    userState.waterIntake = newIntake;
    
    if (amount > 0) {
        playWaterSound();
        triggerHaptic([40]);
    } else {
        triggerHaptic([20]);
    }
    
    // Se atingiu ou ultrapassou a meta pela primeira vez no dia
    if (newIntake >= target && previousIntake < target) {
        // Marca o hábito "Bebi água" (índice 2) se ainda não estava marcado
        if (!userState.habitsCompleted[2]) {
            userState.habitsCompleted[2] = true;
            addXP(10);
            updateProgressUI();
        }
        playRestCompletedChime();
        triggerHaptic([120, 60, 200]);
    } else if (newIntake < target && previousIntake >= target) {
        // Se desfez para baixo da meta
        if (userState.habitsCompleted[2]) {
            userState.habitsCompleted[2] = false;
            addXP(-10);
            updateProgressUI();
        }
    }
    
    updateWaterUI();
    saveStateToStorage();
}

function updateWaterUI() {
    checkWaterDailyReset();
    const target = userState.waterTarget || getDailyWaterTarget();
    userState.waterTarget = target;
    const current = userState.waterIntake || 0;
    const pct = Math.min(100, Math.round((current / target) * 100));
    
    const currentEl = document.getElementById("water-current-amount");
    if (currentEl) currentEl.innerText = current.toLocaleString('pt-BR');
    
    const targetEl = document.getElementById("water-target-amount");
    if (targetEl) targetEl.innerText = target.toLocaleString('pt-BR');
    
    const targetDescEl = document.getElementById("water-target-desc");
    if (targetDescEl) targetDescEl.innerText = `Meta calculada: ${target.toLocaleString('pt-BR')} ml / dia (${Math.round(userState.weight || 62)} kg × 35ml)`;
    
    const badgeEl = document.getElementById("water-percent-badge");
    if (badgeEl) badgeEl.innerText = `${pct}%`;
    
    const fillEl = document.getElementById("water-bottle-fill");
    if (fillEl) fillEl.style.height = `${pct}%`;
    
    const bottleLabel = document.getElementById("water-bottle-label");
    if (bottleLabel) bottleLabel.innerText = `${pct}%`;
    
    const bottleVisual = document.querySelector(".water-bottle-visual");
    if (bottleVisual) {
        if (pct >= 100) {
            bottleVisual.classList.add("filled");
        } else {
            bottleVisual.classList.remove("filled");
        }
    }
    
    const msgEl = document.getElementById("water-status-message");
    if (msgEl) {
        if (pct === 0) {
            msgEl.innerText = "Comece com 1 copo d'água ao acordar para ativar o corpo e a mente.";
        } else if (pct < 35) {
            msgEl.innerText = "Bom começo! Mantenha uma garrafa por perto para manter o ritmo.";
        } else if (pct < 70) {
            msgEl.innerText = "Quase na metade! Sua pele, disposição e digestão agradecem.";
        } else if (pct < 100) {
            msgEl.innerText = `Faltam apenas ${target - current} ml para cumprir sua meta diária!`;
        } else {
            msgEl.innerText = "🎉 Meta batida com perfeição! Corpo nutrido e hidratado.";
        }
    }
}

function addXP(amount) {
    userState.xp += amount;
    if (userState.xp < 0) userState.xp = 0;
    
    if (userState.xp >= 500) {
        userState.xp -= 500;
        userState.levelNum += 1;
        userState.levelTitle = `Nível ${userState.levelNum}: Constância`;
        
        setTimeout(() => {
            alert(`✨ Maravilhoso! Você subiu de nível! Agora você está no: ${userState.levelTitle} ✨`);
            document.getElementById("profile-level-title").innerText = userState.levelTitle;
            document.getElementById("display-streak-level").innerText = userState.levelTitle;
        }, 500);
    }
}

function triggerDailySuccess() {
    if (!userState.streakUpdated) {
        userState.streak += 1;
        userState.streakUpdated = true;
        
        addXP(50);
        
        document.getElementById("streak-counter").innerText = `${userState.streak} dias ativos`;
        document.getElementById("profile-streak-count").innerText = userState.streak;
        
        if (!userState.weeklyCheckins) {
            userState.weeklyCheckins = [true, true, true, true, true, true, false];
        }
        userState.weeklyCheckins[6] = true;
        renderWeeklyTracker();
    }
    
    document.getElementById("modal-streak-val").innerText = `${userState.streak} Dias de Streak 🔥`;
    document.getElementById("modal-xp-ratio").innerText = `${userState.xp} / 500 XP`;
    const xpPercent = (userState.xp / 500) * 100;
    document.getElementById("modal-xp-bar").style.width = `${xpPercent}%`;
    
    if (userState.streak >= 8) {
        const disciplineBadge = document.getElementById("badge-discipline");
        if (disciplineBadge) {
            disciplineBadge.className = "badge-item-unlocked";
            disciplineBadge.querySelector(".badge-icon-circle").innerHTML = `<i data-lucide="sparkles"></i>`;
            disciplineBadge.querySelector(".badge-item-name").innerText = "Ritual Perfeito";
            disciplineBadge.querySelector(".badge-item-desc").innerText = "8 dias de constância";
            lucide.createIcons();
        }
    }
    
    openModal("modal-success");
}

function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    updateProgressUI();
}

// =========================================================================
// 5. REDESIGN COMPLETO DA ÁREA “TREINAR” (FUSE WORKOUTS)
// =========================================================================

const WEEKLY_WORKOUT_SCHEDULE = [
    {
        dayIndex: 0,
        dayName: "SEGUNDA-FEIRA",
        shortName: "SEG",
        title: "Glúteo day 🍑",
        subtitle: "Inferiores com foco prioritário em volume e contorno glúteo",
        category: "INFERIORES",
        duration: 50,
        kcal: 320,
        exercises: [
            {
                number: "01",
                name: "Abdutora",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 40,
                image: "assets/img/abdutora.jpg",
                muscles: "Glúteo Médio, Glúteo Mínimo",
                instructions: "Ajuste o encosto para manter a coluna lombar bem apoiada. Posicione as pernas firmes nas almofadas laterais. Realize a abertura afastando os joelhos contra a resistência até a máxima contração glútea, segure 1 segundo e retorne com velocidade controlada sem deixar os pesos colidirem.",
                errors: "Evite impulsos com o tronco para frente ou para trás, e não deixe as pernas fecharem rapidamente sem resistir ao peso."
            },
            {
                number: "02",
                name: "Glúteo na polia com perna esticada",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 15,
                image: "assets/img/gluteo-polia-esticada.jpg",
                muscles: "Glúteo Máximo",
                instructions: "Fixe a tornozeleira na polia baixa. Apoie as mãos firmes na estrutura do aparelho, incline suavemente o tronco e trave o abdômen. Eleve a perna para trás mantendo o joelho estendido até a altura do quadril, contraindo intensamente o glúteo no pico. Retorne de forma lenta.",
                errors: "Não arqueie nem faça hiperextensão da coluna lombar; o movimento deve acontecer estritamente pela articulação do quadril."
            },
            {
                number: "03",
                name: "Levantamento terra sumô",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 40,
                image: "assets/img/levantamento-terra-sumo.jpg",
                muscles: "Glúteos, Adutores, Posterior de Coxa",
                instructions: "Posicione os pés bem afastados (além da largura dos ombros) com as pontas viradas para fora a 45°. Mantendo o peito aberto, escápulas travadas e coluna neutra, projete o quadril para trás e flexione os joelhos para segurar o peso. Suba empurrando o chão pelos calcanhares e aperte os glúteos no topo.",
                errors: "Nunca arredonde a coluna lombar e jamais permita que os joelhos colapsem para dentro durante o levantamento."
            },
            {
                number: "04",
                name: "Búlgaro",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 12,
                image: "assets/img/bulgaro.svg",
                muscles: "Glúteo Máximo, Quadríceps",
                instructions: "Apoie o peito de um dos pés no banco ou suporte atrás de você. Dê um passo largo à frente com a outra perna. Mantenha o tronco com uma suave inclinação à frente e desça verticalmente flexionando o joelho dianteiro até 90°. Empurre o chão com toda a força do calcanhar da perna da frente para retornar.",
                errors: "Evite transferir o esforço para a perna de trás ou deixar o joelho dianteiro ultrapassar excessivamente a ponta do pé."
            },
            {
                number: "05",
                name: "RDL com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 20,
                image: "assets/img/rdl-halteres.svg",
                muscles: "Glúteos, Isquiotibiais (Posterior)",
                instructions: "Em pé com os pés na largura dos quadris, segure os halteres à frente das coxas. Mantenha os joelhos apenas semiflexionados (fixos nesse ângulo) e empurre o quadril o mais para trás possível, descendo os halteres colados às canelas até sentir os glúteos e posteriores alongarem ao máximo. Retorne puxando pelos glúteos.",
                errors: "Não transforme o exercício em agachamento flexionando os joelhos em demasia e mantenha o alinhamento da coluna cervical e lombar."
            }
        ]
    },
    {
        dayIndex: 1,
        dayName: "TERÇA-FEIRA",
        shortName: "TER",
        title: "Dia de ombro + costas 🧅",
        subtitle: "Deltoides esculpidos, costas desenhadas e postura impecável",
        category: "SUPERIORES",
        duration: 45,
        kcal: 280,
        exercises: [
            {
                number: "01",
                name: "Elevação frontal com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 6,
                image: "assets/img/elevacao-frontal.svg",
                muscles: "Deltoide Anterior (Frente do Ombro)",
                instructions: "Em pé com pés na largura do quadril, postura alinhada e abdômen firme. Segure os halteres à frente das coxas e eleve os braços à frente até a linha dos olhos, mantendo uma leve flexão nos cotovelos. Pause no pico por 1 segundo e desça com controle total.",
                errors: "Evite utilizar o balanço do tronco ou elevar a carga acima do nível dos ombros com excesso de velocidade."
            },
            {
                number: "02",
                name: "Elevação lateral com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 6,
                image: "assets/img/elevacao-lateral.svg",
                muscles: "Deltoide Lateral (Ombro Redondo)",
                instructions: "Com o tronco levemente inclinado para frente, eleve os halteres lateralmente com os cotovelos ligeiramente flexionados até atingir a altura dos ombros. Foque em conduzir o movimento pelos cotovelos, sem encolher o pescoço, e desça cadenciadamente.",
                errors: "Não dê impulsos com as pernas ou lombar e não levante os punhos mais alto do que os cotovelos."
            },
            {
                number: "03",
                name: "Pull down com corda",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 20,
                image: "assets/img/pull-down-corda.svg",
                muscles: "Latíssimo do Dorso (Dorsais)",
                instructions: "De frente para a polia alta segurando a ponta da corda, incline o tronco para frente em cerca de 30° com joelhos destravados. Mantendo os cotovelos quase retos, puxe a corda em arco até a lateral do quadril, expandindo o tórax e contraindo as dorsais ao máximo.",
                errors: "Evite dobrar os cotovelos convertendo a puxada em tríceps na corda e não movimente a coluna durante o arco."
            },
            {
                number: "04",
                name: "Remada baixa",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 25,
                image: "assets/img/remada-baixa.svg",
                muscles: "Romboides, Grande Dorsal, Miolo das Costas",
                instructions: "Sentada no aparelho de remada com os pés bem apoiados e joelhos ligeiramente destravados. Puxe o triângulo ou puxador em direção ao umbigo, abrindo o peito e aproximando vigorosamente as escápulas atrás. Alongue as costas controlando a volta.",
                errors: "Evite jogar as costas para trás no final da puxada ou deixar os ombros rodarem para frente na volta."
            },
            {
                number: "05",
                name: "Desenvolvimento com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 8,
                image: "assets/img/desenvolvimento-halteres.svg",
                muscles: "Deltoides Completo, Trapézio Superior",
                instructions: "Sentada em banco com encosto em cerca de 75-80°, inicie com os halteres na altura das orelhas e cotovelos posicionados no plano escapular (ligeiramente à frente). Empurre os pesos para cima até a extensão quase completa, sem colidir os halteres no topo. Desça com cadência.",
                errors: "Não desça a carga de forma desgovernada e evite projetar os cotovelos totalmente abertos para os lados."
            }
        ]
    },
    {
        dayIndex: 2,
        dayName: "QUARTA-FEIRA",
        shortName: "QUA",
        title: "O pior de todos 😭",
        subtitle: "Quadríceps intenso, força e queima calórica máxima",
        category: "QUADRÍCEPS",
        duration: 55,
        kcal: 360,
        exercises: [
            {
                number: "01",
                name: "Agachamento smith",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 30,
                image: "assets/img/agachamento-smith.svg",
                muscles: "Quadríceps, Glúteos",
                instructions: "Apoie a barra do Smith na musculatura dos trapézios e posicione os pés ligeiramente à frente da linha da barra na largura dos ombros. Destrave e desça flexionando quadris e joelhos até 90 graus mantendo a coluna ereta. Empurre o solo pelos calcanhares até estender.",
                errors: "Evite posicionar os pés diretamente embaixo do quadril e nunca deixe a coluna curvar na descida."
            },
            {
                number: "02",
                name: "Extensora",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 30,
                image: "assets/img/extensora.svg",
                muscles: "Quadríceps Isolado",
                instructions: "Regule o aparelho para que o eixo de rotação fique exatamente alinhado aos seus joelhos e o rolete fique posicionado no peito do pé. Estenda as pernas até a contração total dos quadríceps, segure 1 segundo no pico e desça lentamente resistindo à descida.",
                errors: "Não descole os glúteos do banco nem use impulsos bruscos com o tronco para iniciar o movimento."
            },
            {
                number: "03",
                name: "Leg press 45°",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 100,
                image: "assets/img/leg-press-45.svg",
                muscles: "Quadríceps, Glúteos",
                instructions: "Acomode-se com as costas e a lombar perfeitamente apoiadas no encosto. Pés na largura dos ombros no meio da plataforma. Destrave e flexione os joelhos trazendo a carga com segurança até formar 90 graus. Empurre a plataforma com a base dos pés sem travar os joelhos.",
                errors: "Nunca bloqueie/estale os joelhos em hiperextensão no topo e jamais permita que o quadril levante do banco."
            },
            {
                number: "04",
                name: "Adutora",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 35,
                image: "assets/img/adutora.svg",
                muscles: "Adutores da Coxa (Parte Interna)",
                instructions: "Sente-se com as costas apoiadas e as pernas abertas sobre as almofadas. Una as pernas aproximando as almofadas com força controlada focando nos adutores. Segure a contração por 1 segundo no centro e afaste suavemente com controle total da carga.",
                errors: "Não deixe as pernas abrirem de forma descontrolada ou além da flexibilidade confortável da virilha."
            },
            {
                number: "05",
                name: "Búlgaro",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 12,
                image: "assets/img/bulgaro.svg",
                muscles: "Quadríceps, Glúteo Máximo",
                instructions: "Pé de apoio firme à frente e o outro pé apoiado no banco atrás. Mantenha o tronco reto e desça na vertical até que a coxa dianteira fique paralela ao chão, ativando intensamente o quadríceps e estabilizando com o core. Suba com firmeza empurrando o chão.",
                errors: "Evite oscilar lateralmente o joelho da perna da frente; mantenha o joelho alinhado com a ponta do pé."
            }
        ]
    },
    {
        dayIndex: 3,
        dayName: "QUINTA-FEIRA",
        shortName: "QUI",
        title: "Superiores completo",
        subtitle: "Bíceps, tríceps, costas e ombros para simetria elegante",
        category: "SUPERIORES",
        duration: 45,
        kcal: 270,
        exercises: [
            {
                number: "01",
                name: "Rosca direta com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 7,
                image: "assets/img/rosca-direta.svg",
                muscles: "Bíceps Braquial",
                instructions: "Em pé com postura ereta e abdômen contraído, cotovelos colados às laterais do tronco. Flexione os antebraços trazendo os halteres para cima com as palmas voltadas para você. No topo, aperte os bíceps e desça de maneira lenta e contínua.",
                errors: "Não balance o corpo para impulsionar a carga e não movimente os cotovelos para frente durante a subida."
            },
            {
                number: "02",
                name: "Tríceps na polia com corda",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 15,
                image: "assets/img/triceps-polia-corda.svg",
                muscles: "Tríceps Braquial (Todas as Porções)",
                instructions: "De frente para a polia alta, segure a corda com as palmas voltadas uma para a outra. Mantenha os cotovelos estritamente fixos ao lado das costelas e empurre a corda para baixo até a extensão dos braços, afastando as extremidades da corda no final.",
                errors: "Evite movimentar os cotovelos ou encolher os ombros; o braço deve permanecer como uma alavanca fixa."
            },
            {
                number: "03",
                name: "Face pull com corda",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 15,
                image: "assets/img/face-pull-corda.svg",
                muscles: "Deltoide Posterior, Manguito Rotador, Trapézio",
                instructions: "Ajuste a polia na altura do rosto. Segure a corda com os polegares apontando para trás. Puxe a corda em direção ao nariz abrindo as mãos para as laterais, mantendo os cotovelos sempre elevados e rodando os ombros para trás com força.",
                errors: "Não deixe os cotovelos caírem abaixo da linha dos ombros nem projete a cabeça para frente na puxada."
            },
            {
                number: "04",
                name: "Puxada alta aberta",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 30,
                image: "assets/img/puxada-alta-aberta.svg",
                muscles: "Latíssimo do Dorso, Bíceps",
                instructions: "Sente-se no aparelho travando os joelhos sob as almofadas. Segure a barra aberta com pegada pronada. Incline sutilmente o tronco para trás, abra o peito e puxe a barra em direção à parte superior do tórax puxando com as costas. Retorne alongando.",
                errors: "Nunca puxe a barra por trás do pescoço e não dê solavancos inclinando as costas excessivamente."
            },
            {
                number: "05",
                name: "Rosca martelo com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 7,
                image: "assets/img/rosca-martelo.svg",
                muscles: "Braquial, Braquiorradial, Bíceps",
                instructions: "Em pé com os halteres alinhados às coxas e as palmas voltadas uma para a outra (pegada neutra). Flexione os antebraços mantendo os cotovelos fixos ao lado do corpo até a máxima contração dos braços e desça controladamente.",
                errors: "Evite movimentar o quadril ou jogar os ombros para trás para erguer a carga."
            }
        ]
    },
    {
        dayIndex: 4,
        dayName: "SEXTA-FEIRA",
        shortName: "SEX",
        title: "Posterior e glúteo 🍑",
        subtitle: "Cadeia posterior completa, definição de isquiotibiais e glúteos",
        category: "INFERIORES",
        duration: 50,
        kcal: 310,
        exercises: [
            {
                number: "01",
                name: "Flexora sentada",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 35,
                image: "assets/img/flexora-sentada.svg",
                muscles: "Isquiotibiais (Posterior de Coxa)",
                instructions: "Ajuste o encosto para que a articulação do joelho fique alinhada ao eixo da máquina e trave firmemente a almofada sobre as coxas. Flexione as pernas para baixo trazendo os calcanhares para trás com potência muscular, pause 1 segundo e retorne com cadência.",
                errors: "Evite descolar as costas ou o quadril do banco e não deixe a perna retornar batendo o peso."
            },
            {
                number: "02",
                name: "Stiff com halteres",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 20,
                image: "assets/img/stiff-halteres.svg",
                muscles: "Isquiotibiais, Glúteo Máximo",
                instructions: "Pés na largura dos quadris, joelhos levemente destravados. Com o peito aberto e a coluna em posição neutra, projete os quadris para trás descendo os halteres rente às pernas até sentir os posteriores de coxa alongarem intensamente. Suba empurrando o chão e contraia os glúteos.",
                errors: "Nunca curve as costas em cifose e não afaste os halteres da linha das pernas durante a descida."
            },
            {
                number: "03",
                name: "Abdutora",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 45,
                image: "assets/img/abdutora.jpg",
                muscles: "Glúteo Médio e Mínimo",
                instructions: "Sente-se com as costas apoiadas, pés firmes nas plataformas. Afaste as pernas contra a resistência até a abertura máxima, sustentando a contração por 1 segundo no pico para recrutar as fibras laterais dos glúteos. Retorne com amplitude cadenciada.",
                errors: "Evite fechar as pernas rápido demais sem controlar a fase excêntrica do movimento."
            },
            {
                number: "04",
                name: "Elevação pélvica",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 50,
                image: "assets/img/elevacao-pelvica.svg",
                muscles: "Glúteo Máximo Isolado",
                instructions: "Apoie a linha das escápulas na borda de um banco estável e posicione a barra/carga sobre a dobra do quadril com proteção. Pés firmes na largura dos ombros. Eleve os quadris até o tronco e as coxas formarem uma linha reta paralela ao chão, apertando os glúteos com intensidade máxima por 2 segundos.",
                errors: "Não arqueie a lombar em excesso no topo; mantenha o queixo apontado para o peito e faça a força exclusivamente com os glúteos."
            },
            {
                number: "05",
                name: "Flexora deitada",
                sets: 4,
                repsRange: "12 reps (progredindo carga)",
                targetReps: 12,
                rest: "90s (1m30s)",
                restSeconds: 90,
                defaultWeight: 30,
                image: "assets/img/flexora-deitada.svg",
                muscles: "Isquiotibiais (Posterior de Coxa)",
                instructions: "Deite de bruços no aparelho com o rolete acolchoado posicionado logo acima do tendão de Aquiles. Segure firme nos apoios de mão e flexione as pernas trazendo os calcanhares na direção dos glúteos. Segure a contração por 1 segundo e desça resistindo à descida.",
                errors: "Não empine o quadril descolando-o do estofado durante a puxada; mantenha a bacia colada ao banco."
            }
        ]
    },
    {
        dayIndex: 5,
        dayName: "SÁBADO",
        shortName: "SÁB",
        title: "ABS E CARDIO",
        subtitle: "1h do cardio da sua preferência",
        category: "ABS E CARDIO",
        duration: 60,
        kcal: 350,
        isCustomCardio: true,
        customDescription: "1h do cardio da sua preferência",
        exercises: []
    },
    {
        dayIndex: 6,
        dayName: "DOMINGO",
        shortName: "DOM",
        title: "DESCANSO",
        subtitle: "Descanso",
        category: "DESCANSO",
        duration: 0,
        kcal: 0,
        isRestDay: true,
        customDescription: "Descanso",
        exercises: []
    }
];

// Estado da Sessão Ativa de Treino
let currentWorkoutSession = {
    dayIndex: (new Date().getDay() + 6) % 7,
    exerciseIndex: 0,
    currentSet: 1,
    currentWeight: 50,
    currentReps: 10,
    setsCompleted: []
};

function ensureWorkoutState() {
    if (!userState) return;
    if (userState.workoutSelectedDay === undefined || userState.workoutSelectedDay === null) {
        userState.workoutSelectedDay = (new Date().getDay() + 6) % 7;
    }
    if (!userState.exerciseStats || typeof userState.exerciseStats !== 'object') {
        userState.exerciseStats = {};
    }
    if (!userState.workoutSessionProgress || typeof userState.workoutSessionProgress !== 'object') {
        userState.workoutSessionProgress = {};
    }
}

function getWorkoutGreeting() {
    const hr = new Date().getHours();
    let timeGreeting = "Olá";
    if (hr >= 5 && hr < 12) timeGreeting = "Bom dia";
    else if (hr >= 12 && hr < 18) timeGreeting = "Boa tarde";
    else timeGreeting = "Boa noite";
    const name = userState && userState.name ? userState.name : "Amanda";
    return `${timeGreeting}, ${name} ✨`;
}

function renderWorkoutTab() {
    ensureWorkoutState();
    
    // 1. Saudação e Badge de Objetivo
    const greetingEl = document.getElementById("workout-user-greeting");
    if (greetingEl) greetingEl.innerText = getWorkoutGreeting();
    
    const goalBadgeEl = document.getElementById("workout-goal-badge");
    if (goalBadgeEl && userState.goal) {
        const goalMap = {
            emagrecer: "Emagrecimento & Definição",
            massa: "Ganho de Massa",
            definicao: "Definição Muscular",
            manter: "Constância & Saúde",
            "hipertrofia-gluteos": "Glúteos & Definição"
        };
        goalBadgeEl.innerText = goalMap[userState.goal] || "Glúteos & Definição";
    }

    const realToday = (new Date().getDay() + 6) % 7; // 0=Seg ... 6=Dom
    const selectedDay = userState.workoutSelectedDay !== undefined ? userState.workoutSelectedDay : realToday;
    
    // 2. Renderiza Calendário Horizontal dos 7 Dias
    const calendarContainer = document.getElementById("workout-week-calendar");
    if (calendarContainer) {
        calendarContainer.innerHTML = "";
        
        // Calcula as datas da semana atual (Segunda a Domingo)
        const mondayDate = new Date();
        mondayDate.setDate(mondayDate.getDate() - realToday);
        
        WEEKLY_WORKOUT_SCHEDULE.forEach((daySchedule, d) => {
            const thisDayDate = new Date(mondayDate);
            thisDayDate.setDate(mondayDate.getDate() + d);
            const dayNum = thisDayDate.getDate();
            
            const isToday = d === realToday;
            const isSelected = d === selectedDay;
            const isCompleted = userState.workoutSessionProgress && userState.workoutSessionProgress[d] && userState.workoutSessionProgress[d].completed;
            
            const dayBtn = document.createElement("button");
            dayBtn.type = "button";
            dayBtn.onclick = () => selectWorkoutDay(d);
            
            let bg = "#F8FAFC";
            let border = "1px solid #E2E8F0";
            let textColor = "var(--text-secondary)";
            let shadow = "none";
            
            if (isSelected) {
                bg = "var(--accent-rose)";
                border = "1.5px solid var(--accent-rose)";
                textColor = "#ffffff";
                shadow = "0 4px 12px rgba(251, 113, 133, 0.35)";
            } else if (isCompleted) {
                bg = "#FFF1F2";
                border = "1px solid #FDA4AF";
                textColor = "var(--accent-rose)";
            }
            
            dayBtn.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px 4px 8px 4px;
                border-radius: 12px;
                background: ${bg};
                border: ${border};
                color: ${textColor};
                box-shadow: ${shadow};
                cursor: pointer;
                transition: all 0.2s ease;
                gap: 2px;
            `;
            
            let statusIndicator = `<span style="font-size: 8px; opacity: 0.3; margin-top: 2px;">•</span>`;
            if (isCompleted) {
                statusIndicator = `<span style="font-size: 10px; font-weight: 800; color: var(--accent-rose); line-height: 1;">✓</span>`;
            } else if (isToday) {
                statusIndicator = `<span style="font-size: 7.5px; font-weight: 800; color: var(--accent-rose); letter-spacing: 0.5px;">HOJE</span>`;
            }
            
            dayBtn.innerHTML = `
                <span style="font-size: 9.5px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">${daySchedule.shortName}</span>
                <span style="font-size: 14px; font-weight: 800; font-family: var(--font-header);">${dayNum}</span>
                ${statusIndicator}
            `;
            
            calendarContainer.appendChild(dayBtn);
        });
    }

    // 3. Renderiza o Card Principal do Treino do Dia
    const activeWorkout = WEEKLY_WORKOUT_SCHEDULE[selectedDay];
    if (activeWorkout) {
        const daynameEl = document.getElementById("hero-workout-dayname");
        if (daynameEl) daynameEl.innerText = activeWorkout.dayName;
        
        const titleEl = document.getElementById("hero-workout-title");
        if (titleEl) titleEl.innerText = activeWorkout.title;
        
        const countEl = document.getElementById("hero-workout-count");
        const durEl = document.getElementById("hero-workout-dur");
        const kcalEl = document.getElementById("hero-workout-kcal");
        const btnHeroStart = document.getElementById("btn-hero-start-workout");
        
        const isCompleted = userState.workoutSessionProgress && userState.workoutSessionProgress[selectedDay] && userState.workoutSessionProgress[selectedDay].completed;
        
        if (activeWorkout.isRestDay) {
            if (countEl) countEl.innerHTML = `<i data-lucide="heart" style="width: 14px; height: 14px; color: var(--accent-rose);"></i> Descanso`;
            if (durEl) durEl.innerHTML = `<i data-lucide="moon" style="width: 14px; height: 14px;"></i> Regeneração`;
            if (kcalEl) kcalEl.innerHTML = `<i data-lucide="sparkles" style="width: 14px; height: 14px; color: var(--accent-rose);"></i> Paz & Bem-estar`;
            
            if (btnHeroStart) {
                btnHeroStart.innerHTML = `<i data-lucide="heart" style="width: 16px; height: 16px; fill: currentColor;"></i> <span>${isCompleted ? '✓ DESCANSO REGISTRADO' : 'APROVEITAR O DESCANSO 🤍'}</span>`;
                btnHeroStart.style.background = isCompleted ? '#F1F5F9' : '#FFF1F2';
                btnHeroStart.style.border = isCompleted ? '1px solid #E2E8F0' : '1px solid #FDA4AF';
                btnHeroStart.style.color = isCompleted ? 'var(--text-secondary)' : 'var(--accent-rose)';
                btnHeroStart.style.boxShadow = 'none';
                btnHeroStart.onclick = () => completeRestDay(selectedDay);
            }
        } else if (activeWorkout.isCustomCardio) {
            if (countEl) countEl.innerHTML = `<i data-lucide="activity" style="width: 14px; height: 14px; color: var(--accent-rose);"></i> Cardio Livre`;
            if (durEl) durEl.innerHTML = `<i data-lucide="clock" style="width: 14px; height: 14px;"></i> 1 hora`;
            if (kcalEl) kcalEl.innerHTML = `<i data-lucide="flame" style="width: 14px; height: 14px; color: #f97316;"></i> ~350 kcal`;
            
            if (btnHeroStart) {
                btnHeroStart.innerHTML = `<i data-lucide="${isCompleted ? 'check-check' : 'check'}" style="width: 16px; height: 16px;"></i> <span>${isCompleted ? '✓ 1H DE CARDIO CONCLUÍDO' : 'CONCLUIR 1H DE CARDIO'}</span>`;
                btnHeroStart.style.background = isCompleted ? '#ECFDF5' : 'linear-gradient(135deg, var(--accent-rose), #F43F5E)';
                btnHeroStart.style.color = isCompleted ? '#10B981' : '#FFFFFF';
                btnHeroStart.style.border = isCompleted ? '1px solid #A7F3D0' : 'none';
                btnHeroStart.style.boxShadow = isCompleted ? 'none' : '0 6px 20px rgba(251, 113, 133, 0.35)';
                btnHeroStart.onclick = () => completeCardioSession(selectedDay);
            }
        } else {
            if (countEl) countEl.innerHTML = `<i data-lucide="dumbbell" style="width: 14px; height: 14px; color: var(--accent-rose);"></i> ${activeWorkout.exercises.length} exercícios`;
            if (durEl) durEl.innerHTML = `<i data-lucide="clock" style="width: 14px; height: 14px;"></i> ${activeWorkout.duration} min`;
            if (kcalEl) kcalEl.innerHTML = `<i data-lucide="flame" style="width: 14px; height: 14px; color: #f97316;"></i> ~${activeWorkout.kcal} kcal`;
            
            if (btnHeroStart) {
                btnHeroStart.innerHTML = `<i data-lucide="play" style="width: 16px; height: 16px; fill: currentColor;"></i> <span>${isCompleted ? 'REFAZER TREINO' : 'COMEÇAR TREINO'}</span>`;
                btnHeroStart.style.background = 'linear-gradient(135deg, var(--accent-rose), #F43F5E)';
                btnHeroStart.style.color = '#FFFFFF';
                btnHeroStart.style.border = 'none';
                btnHeroStart.style.boxShadow = '0 6px 20px rgba(251, 113, 133, 0.35)';
                btnHeroStart.onclick = () => startWorkoutSession(selectedDay);
            }
        }
        
        const statusTagEl = document.getElementById("hero-workout-status-tag");
        if (statusTagEl) {
            if (isCompleted) {
                statusTagEl.innerText = "✓ Concluído";
                statusTagEl.style.background = "#ECFDF5";
                statusTagEl.style.color = "#10B981";
                statusTagEl.style.border = "1px solid #A7F3D0";
            } else if (selectedDay === realToday) {
                statusTagEl.innerText = activeWorkout.isRestDay ? "Hoje é Descanso 🤍" : "Treino de Hoje 🔥";
                statusTagEl.style.background = "#FFF1F2";
                statusTagEl.style.color = "var(--accent-rose)";
                statusTagEl.style.border = "1px solid #FDA4AF";
            } else {
                statusTagEl.innerText = activeWorkout.isRestDay ? "Descanso" : "Treino Programado";
                statusTagEl.style.background = "#F8FAFC";
                statusTagEl.style.color = "var(--text-secondary)";
                statusTagEl.style.border = "1px solid #E2E8F0";
            }
        }
    }

    // 4. Renderiza Lista Compacta de Exercícios / Área do Dia
    const exercisesListContainer = document.getElementById("workout-exercises-list");
    const badgeCountEl = document.getElementById("exercises-badge-count");
    const sectionTitleEl = document.getElementById("workout-section-title");
    const sectionHintEl = document.getElementById("workout-section-hint");
    
    if (exercisesListContainer && activeWorkout) {
        exercisesListContainer.innerHTML = "";
        const isCompleted = userState.workoutSessionProgress && userState.workoutSessionProgress[selectedDay] && userState.workoutSessionProgress[selectedDay].completed;
        
        if (activeWorkout.isRestDay) {
            if (sectionTitleEl) sectionTitleEl.innerText = "DESCANSO";
            if (sectionHintEl) sectionHintEl.innerText = "Recuperação";
            if (badgeCountEl) badgeCountEl.innerText = "0";
            
            exercisesListContainer.innerHTML = `
                <div style="background: #FAFAFA; border: 1px dashed #CBD5E1; border-radius: 14px; padding: 28px 18px; text-align: center;">
                    <span style="font-size: 32px; display: block; margin-bottom: 8px;">🤍</span>
                    <h4 style="font-size: 16px; font-weight: 800; color: #0F172A; margin: 0 0 6px 0; font-family: var(--font-header); letter-spacing: 0.8px;">DESCANSO</h4>
                    <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin: 0;">Dia de descanso e recuperação dos músculos</p>
                </div>
            `;
        } else if (activeWorkout.isCustomCardio) {
            if (sectionTitleEl) sectionTitleEl.innerText = "ABS E CARDIO";
            if (sectionHintEl) sectionHintEl.innerText = "1 hora";
            if (badgeCountEl) badgeCountEl.innerText = "1h";
            
            exercisesListContainer.innerHTML = `
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 18px 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                        <div style="width: 44px; height: 44px; border-radius: 10px; background: #FFF1F2; border: 1px solid #FDA4AF; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                            🏃‍♀️
                        </div>
                        <div>
                            <span style="font-size: 10.5px; font-weight: 800; color: var(--accent-rose); text-transform: uppercase; letter-spacing: 0.8px; display: block;">SÁBADO — ABS E CARDIO</span>
                            <h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">1h do cardio da sua preferência</h4>
                        </div>
                    </div>
                    <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 0 0 14px 0;">
                        1h do cardio da sua preferência
                    </p>
                    <button type="button" onclick="completeCardioSession(${selectedDay})" style="width: 100%; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 800; border: none; background: ${isCompleted ? '#ECFDF5' : 'linear-gradient(135deg, var(--accent-rose), #F43F5E)'}; color: ${isCompleted ? '#10B981' : '#FFFFFF'}; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: ${isCompleted ? 'none' : '0 4px 15px rgba(251,113,133,0.3)'};">
                        <i data-lucide="${isCompleted ? 'check-check' : 'check'}" style="width: 15px; height: 15px;"></i>
                        <span>${isCompleted ? '✓ 1h de Cardio Concluído' : 'Marcar 1h de Cardio como Concluído'}</span>
                    </button>
                </div>
            `;
        } else {
            if (sectionTitleEl) sectionTitleEl.innerText = "EXERCÍCIOS DO DIA";
            if (sectionHintEl) sectionHintEl.innerText = "Toque para abrir";
            if (badgeCountEl) badgeCountEl.innerText = activeWorkout.exercises.length;
            
            activeWorkout.exercises.forEach((ex, idx) => {
                const stats = userState.exerciseStats && userState.exerciseStats[ex.name];
                let loadInfo = "";
                if (stats && stats.lastWeight !== undefined) {
                    loadInfo = `<span style="color: var(--accent-rose); font-weight: 600;">• Carga: ${stats.lastWeight} kg</span>`;
                } else if (ex.defaultWeight > 0) {
                    loadInfo = `<span style="color: var(--text-secondary);">• Carga sugerida: ${ex.defaultWeight} kg</span>`;
                }
                
                const cardDiv = document.createElement("div");
                cardDiv.className = "workout-compact-ex-card";
                cardDiv.onclick = () => openDedicatedExercise(idx);
                
                cardDiv.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    border-radius: 14px;
                    padding: 12px 14px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
                `;
                
                cardDiv.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                        <span style="font-size: 13px; font-weight: 800; color: var(--accent-rose); font-family: var(--font-header); min-width: 22px;">${ex.number}</span>
                        <div style="width: 48px; height: 48px; border-radius: 10px; overflow: hidden; background: #F8FAFC; border: 1px solid #E2E8F0; flex-shrink: 0;">
                            <img src="${ex.image}" alt="${ex.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="min-width: 0;">
                            <h4 style="font-size: 13.5px; font-weight: 700; color: #0F172A; margin: 0 0 3px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${ex.name}</h4>
                            <div style="font-size: 11px; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                                <span>${ex.sets} séries × ${ex.repsRange}</span>
                                ${ex.rest ? `<span style="color: var(--accent-rose); font-weight: 600;">• Descanso: ${ex.rest}</span>` : ''}
                                ${loadInfo}
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #F1F5F9; color: var(--text-secondary); flex-shrink: 0; margin-left: 8px;">
                        <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
                    </div>
                `;
                
                exercisesListContainer.appendChild(cardDiv);
            });
        }
    }

    if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
    }
}

function completeCardioSession(dayIndex = 5) {
    ensureWorkoutState();
    if (!userState.workoutSessionProgress) userState.workoutSessionProgress = {};
    userState.workoutSessionProgress[dayIndex] = {
        completed: true,
        date: new Date().toISOString().slice(0, 10)
    };
    if (!userState.habitsCompleted[0]) {
        toggleHabit(0);
    }
    addXP(50);
    userState.completedWorkoutsCount = (userState.completedWorkoutsCount || 0) + 1;
    saveStateToStorage();
    
    const modal = document.getElementById("modal-workout-completed");
    const msgEl = document.getElementById("workout-completed-msg");
    if (msgEl) msgEl.innerText = "Parabéns por cumprir 1 hora do seu cardio preferido hoje! ✨";
    if (modal) modal.style.display = "flex";
    
    renderWorkoutTab();
}

function completeRestDay(dayIndex = 6) {
    ensureWorkoutState();
    if (!userState.workoutSessionProgress) userState.workoutSessionProgress = {};
    userState.workoutSessionProgress[dayIndex] = {
        completed: true,
        date: new Date().toISOString().slice(0, 10)
    };
    saveStateToStorage();
    
    const modal = document.getElementById("modal-workout-completed");
    const msgEl = document.getElementById("workout-completed-msg");
    if (msgEl) msgEl.innerText = "Dia de descanso registrado! Desacelere, recarregue e cuide de você com carinho. 🤍";
    if (modal) modal.style.display = "flex";
    
    renderWorkoutTab();
}

function selectWorkoutDay(dayIndex) {
    ensureWorkoutState();
    userState.workoutSelectedDay = dayIndex;
    renderWorkoutTab();
}

function startWorkoutSession(dayIndex) {
    ensureWorkoutState();
    const d = dayIndex !== undefined ? dayIndex : (userState.workoutSelectedDay !== undefined ? userState.workoutSelectedDay : 0);
    userState.workoutSelectedDay = d;
    
    const workout = WEEKLY_WORKOUT_SCHEDULE[d];
    if (!workout) return;
    
    if (workout.isCustomCardio) {
        completeCardioSession(d);
        return;
    }
    if (workout.isRestDay) {
        completeRestDay(d);
        return;
    }
    
    openDedicatedExercise(0);
}

function openDedicatedExercise(exerciseIndex) {
    ensureWorkoutState();
    currentWorkoutSession.dayIndex = userState.workoutSelectedDay !== undefined ? userState.workoutSelectedDay : 0;
    currentWorkoutSession.exerciseIndex = exerciseIndex;
    currentWorkoutSession.currentSet = 1;
    
    const workout = WEEKLY_WORKOUT_SCHEDULE[currentWorkoutSession.dayIndex];
    if (!workout || !workout.exercises[exerciseIndex]) return;
    
    const ex = workout.exercises[exerciseIndex];
    const stats = userState.exerciseStats && userState.exerciseStats[ex.name];
    
    currentWorkoutSession.currentWeight = (stats && stats.lastWeight !== undefined) ? stats.lastWeight : ex.defaultWeight;
    currentWorkoutSession.currentReps = (stats && stats.lastReps !== undefined) ? stats.lastReps : ex.targetReps;
    currentWorkoutSession.setsCompleted = new Array(ex.sets).fill(false);
    
    updateDedicatedExerciseUI();
    
    const modal = document.getElementById("modal-workout-dedicated");
    if (modal) modal.style.display = "flex";
}

function closeDedicatedExercise() {
    stopRestTimer();
    const modal = document.getElementById("modal-workout-dedicated");
    if (modal) modal.style.display = "none";
    renderWorkoutTab();
}

function updateDedicatedExerciseUI() {
    const workout = WEEKLY_WORKOUT_SCHEDULE[currentWorkoutSession.dayIndex];
    if (!workout) return;
    const ex = workout.exercises[currentWorkoutSession.exerciseIndex];
    if (!ex) return;
    
    // 1. Cabeçalho do Exercício e Barra de Progresso
    const progressTxtEl = document.getElementById("ded-exercise-progress-txt");
    if (progressTxtEl) progressTxtEl.innerText = `EXERCÍCIO ${currentWorkoutSession.exerciseIndex + 1} DE ${workout.exercises.length}`;
    
    const nameEl = document.getElementById("ded-exercise-name");
    if (nameEl) nameEl.innerText = ex.name;
    
    const progressBar = document.getElementById("ded-workout-progress-bar");
    if (progressBar) {
        const totalSteps = workout.exercises.length;
        const currentProgress = ((currentWorkoutSession.exerciseIndex + (currentWorkoutSession.currentSet - 1) / ex.sets) / totalSteps) * 100;
        progressBar.style.width = `${Math.min(100, Math.round(currentProgress))}%`;
    }
    
    // 2. Demonstração Visual e Guia de Execução
    const imgEl = document.getElementById("ded-exercise-img");
    if (imgEl) imgEl.src = ex.image;
    
    const instEl = document.getElementById("ded-exercise-instructions");
    if (instEl) instEl.innerText = ex.instructions;
    
    const errorsEl = document.getElementById("ded-exercise-errors");
    if (errorsEl) errorsEl.innerText = ex.errors;
    
    // 3. Série Atual e Indicadores de Série
    const setLabelEl = document.getElementById("ded-current-set-label");
    if (setLabelEl) setLabelEl.innerText = `SÉRIE ${currentWorkoutSession.currentSet} DE ${ex.sets}`;
    
    const setIndicatorsContainer = document.getElementById("ded-set-indicators");
    if (setIndicatorsContainer) {
        setIndicatorsContainer.innerHTML = "";
        for (let s = 1; s <= ex.sets; s++) {
            const isCompleted = currentWorkoutSession.setsCompleted[s - 1];
            const isCurrent = s === currentWorkoutSession.currentSet;
            
            const dot = document.createElement("div");
            dot.style.cssText = `
                width: 22px;
                height: 22px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: 700;
                transition: all 0.2s ease;
                background: ${isCompleted ? 'var(--accent-rose)' : (isCurrent ? '#FFF1F2' : '#F1F5F9')};
                color: ${isCompleted ? '#FFFFFF' : (isCurrent ? 'var(--accent-rose)' : 'var(--text-secondary)')};
                border: ${isCurrent ? '1.5px solid var(--accent-rose)' : '1px solid transparent'};
            `;
            dot.innerText = isCompleted ? '✓' : s;
            setIndicatorsContainer.appendChild(dot);
        }
    }
    
    // 4. Histórico Anterior (Semana passada / Último treino)
    const prevTextEl = document.getElementById("ded-previous-session-txt");
    const stats = userState.exerciseStats && userState.exerciseStats[ex.name];
    if (prevTextEl) {
        if (stats && stats.lastWeight !== undefined) {
            prevTextEl.innerText = `Semana passada: ${stats.lastWeight} kg × ${stats.lastReps} reps`;
        } else {
            prevTextEl.innerText = `Referência sugerida: ${ex.defaultWeight > 0 ? ex.defaultWeight + ' kg' : 'Peso corporal'} × ${ex.targetReps}`;
        }
    }
    
    // 5. Displays de Carga e Repetições
    const weightDisplay = document.getElementById("ded-weight-display");
    if (weightDisplay) {
        weightDisplay.innerText = currentWorkoutSession.currentWeight === 0 ? "LIVRE" : `${currentWorkoutSession.currentWeight} KG`;
    }
    
    const repsDisplay = document.getElementById("ded-reps-display");
    if (repsDisplay) {
        repsDisplay.innerText = currentWorkoutSession.currentReps;
    }
    
    // 6. Botão Concluir Série Text
    const btnConcludeTxt = document.getElementById("btn-conclude-set-txt");
    if (btnConcludeTxt) {
        if (currentWorkoutSession.currentSet === ex.sets && currentWorkoutSession.exerciseIndex === workout.exercises.length - 1) {
            btnConcludeTxt.innerText = "CONCLUIR SÉRIE & FINALIZAR TREINO";
        } else if (currentWorkoutSession.currentSet === ex.sets) {
            btnConcludeTxt.innerText = "CONCLUIR SÉRIE & PRÓXIMO EXERCÍCIO";
        } else {
            btnConcludeTxt.innerText = "CONCLUIR SÉRIE";
        }
    }
    
    // 7. Navegação Anterior / Próximo
    const btnPrev = document.getElementById("btn-prev-ex");
    if (btnPrev) {
        btnPrev.disabled = currentWorkoutSession.exerciseIndex === 0;
        btnPrev.style.opacity = currentWorkoutSession.exerciseIndex === 0 ? "0.4" : "1";
    }
    
    const btnNext = document.getElementById("btn-next-ex");
    if (btnNext) {
        btnNext.disabled = currentWorkoutSession.exerciseIndex === workout.exercises.length - 1;
        btnNext.style.opacity = currentWorkoutSession.exerciseIndex === workout.exercises.length - 1 ? "0.4" : "1";
    }
    
    if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
    }
}

function adjustWorkoutWeight(delta) {
    currentWorkoutSession.currentWeight = Math.max(0, currentWorkoutSession.currentWeight + delta);
    const weightDisplay = document.getElementById("ded-weight-display");
    if (weightDisplay) {
        weightDisplay.innerText = currentWorkoutSession.currentWeight === 0 ? "LIVRE" : `${currentWorkoutSession.currentWeight} KG`;
    }
}

function adjustWorkoutReps(delta) {
    currentWorkoutSession.currentReps = Math.max(1, currentWorkoutSession.currentReps + delta);
    const repsDisplay = document.getElementById("ded-reps-display");
    if (repsDisplay) {
        repsDisplay.innerText = currentWorkoutSession.currentReps;
    }
}

function toggleExecutionGuide() {
    const guideBox = document.getElementById("ded-execution-guide-box");
    const btnTxt = document.getElementById("btn-toggle-guide-txt");
    if (guideBox) {
        if (guideBox.style.display === "none" || guideBox.style.display === "") {
            guideBox.style.display = "block";
            if (btnTxt) btnTxt.innerText = "OCULTAR EXECUÇÃO";
        } else {
            guideBox.style.display = "none";
            if (btnTxt) btnTxt.innerText = "VER EXECUÇÃO";
        }
    }
}

// ==========================================
// FUSE AUDIO & HAPTIC SYNTHESIZER (WEB AUDIO API)
// ==========================================
let fuseAudioCtx = null;
let timerSoundEnabled = true;

function getAudioContext() {
    if (!fuseAudioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) fuseAudioCtx = new AudioCtx();
    }
    if (fuseAudioCtx && fuseAudioCtx.state === 'suspended') {
        fuseAudioCtx.resume();
    }
    return fuseAudioCtx;
}

function triggerHaptic(pattern = [50]) {
    if (window.navigator && window.navigator.vibrate) {
        try {
            window.navigator.vibrate(pattern);
        } catch (e) {}
    }
}

// Som suave de gota d'água para o Water Tracker
function playWaterSound() {
    if (!timerSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(1150, now + 0.08);
        
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
    } catch (e) {
        console.warn("Audio fx error:", e);
    }
}

// Beep suave de contagem regressiva para 3s, 2s, 1s
function playRestBeep(frequency = 600) {
    if (!timerSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(frequency, now);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
    } catch (e) {
        console.warn("Audio fx error:", e);
    }
}

// Chime harmônico de conclusão (acorde D maior)
function playRestCompletedChime() {
    if (!timerSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const notes = [587.33, 739.99, 880.00]; // D5, F#5, A5
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.2, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.45);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.5);
        });
    } catch (e) {
        console.warn("Audio fx error:", e);
    }
}

function toggleTimerSound() {
    timerSoundEnabled = !timerSoundEnabled;
    const txt = document.getElementById("txt-timer-sound");
    const icon = document.getElementById("icon-timer-sound");
    if (txt) {
        txt.innerText = timerSoundEnabled ? "Sons & Vibração ativos" : "Silenciado";
    }
    if (icon) {
        icon.setAttribute("data-lucide", timerSoundEnabled ? "volume-2" : "volume-x");
        if (window.lucide && lucide.createIcons) lucide.createIcons();
    }
    if (timerSoundEnabled) {
        playRestBeep(650);
        triggerHaptic([40]);
    }
}

let workoutRestInterval = null;
let workoutRestSecondsRemaining = 90;
let workoutRestTotalSeconds = 90;

function startRestTimer(seconds = 90) {
    if (workoutRestInterval) clearInterval(workoutRestInterval);
    workoutRestSecondsRemaining = seconds;
    workoutRestTotalSeconds = Math.max(1, seconds);
    
    const overlay = document.getElementById("ded-rest-overlay");
    if (!overlay) return;
    
    const timerDisplay = document.getElementById("ded-rest-timer-display");
    if (timerDisplay) {
        timerDisplay.classList.remove("timer-finished-fx");
    }
    const statusTxt = document.getElementById("ded-rest-timer-status");
    if (statusTxt) {
        statusTxt.innerText = "Regra FUSE: 1m30s de descanso para máxima resposta muscular";
    }

    updateRestTimerDisplay();
    overlay.style.display = "flex";
    if (window.lucide && lucide.createIcons) lucide.createIcons();
    
    workoutRestInterval = setInterval(() => {
        workoutRestSecondsRemaining--;
        if (workoutRestSecondsRemaining <= 0) {
            handleRestTimerFinished();
        } else {
            if (workoutRestSecondsRemaining <= 3) {
                playRestBeep(workoutRestSecondsRemaining === 1 ? 750 : 600);
                triggerHaptic([35]);
            }
            updateRestTimerDisplay();
        }
    }, 1000);
}

function handleRestTimerFinished() {
    if (workoutRestInterval) {
        clearInterval(workoutRestInterval);
        workoutRestInterval = null;
    }
    workoutRestSecondsRemaining = 0;
    updateRestTimerDisplay();
    
    const timerDisplay = document.getElementById("ded-rest-timer-display");
    if (timerDisplay) {
        timerDisplay.classList.add("timer-finished-fx");
    }
    const statusTxt = document.getElementById("ded-rest-timer-status");
    if (statusTxt) {
        statusTxt.innerText = "✨ Descanso concluído! Pronta para a próxima série!";
    }
    
    playRestCompletedChime();
    triggerHaptic([150, 80, 250]);
    
    setTimeout(() => {
        const overlay = document.getElementById("ded-rest-overlay");
        if (overlay && overlay.style.display === "flex" && workoutRestSecondsRemaining === 0) {
            stopRestTimer();
        }
    }, 2800);
}

function updateRestTimerDisplay() {
    const timerDisplay = document.getElementById("ded-rest-timer-display");
    if (timerDisplay) {
        const mins = Math.floor(workoutRestSecondsRemaining / 60);
        const secs = workoutRestSecondsRemaining % 60;
        timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    const progressBar = document.getElementById("ded-rest-progress-bar");
    if (progressBar) {
        const pct = Math.max(0, Math.min(100, (workoutRestSecondsRemaining / workoutRestTotalSeconds) * 100));
        progressBar.style.width = `${pct}%`;
    }
}

function adjustRestTimer(delta) {
    workoutRestSecondsRemaining = Math.max(0, workoutRestSecondsRemaining + delta);
    workoutRestTotalSeconds = Math.max(workoutRestTotalSeconds, workoutRestSecondsRemaining);
    updateRestTimerDisplay();
    triggerHaptic([25]);
}

function stopRestTimer() {
    if (workoutRestInterval) {
        clearInterval(workoutRestInterval);
        workoutRestInterval = null;
    }
    const overlay = document.getElementById("ded-rest-overlay");
    if (overlay) overlay.style.display = "none";
    const timerDisplay = document.getElementById("ded-rest-timer-display");
    if (timerDisplay) {
        timerDisplay.classList.remove("timer-finished-fx");
    }
}

function completeCurrentSet() {
    const workout = WEEKLY_WORKOUT_SCHEDULE[currentWorkoutSession.dayIndex];
    if (!workout) return;
    const ex = workout.exercises[currentWorkoutSession.exerciseIndex];
    if (!ex) return;
    
    // Marca série atual como concluída
    currentWorkoutSession.setsCompleted[currentWorkoutSession.currentSet - 1] = true;
    
    // Salva carga e repetições no histórico persistente do exercício
    if (!userState.exerciseStats) userState.exerciseStats = {};
    userState.exerciseStats[ex.name] = {
        lastWeight: currentWorkoutSession.currentWeight,
        lastReps: currentWorkoutSession.currentReps,
        updatedAt: new Date().toISOString()
    };
    saveStateToStorage();
    
    // Avança para a próxima série ou próximo exercício com descanso
    if (currentWorkoutSession.currentSet < ex.sets) {
        currentWorkoutSession.currentSet++;
        updateDedicatedExerciseUI();
        startRestTimer(ex.restSeconds || 90);
    } else {
        // Concluiu todas as séries deste exercício
        if (currentWorkoutSession.exerciseIndex < workout.exercises.length - 1) {
            currentWorkoutSession.exerciseIndex++;
            currentWorkoutSession.currentSet = 1;
            
            const nextEx = workout.exercises[currentWorkoutSession.exerciseIndex];
            const nextStats = userState.exerciseStats[nextEx.name];
            currentWorkoutSession.currentWeight = (nextStats && nextStats.lastWeight !== undefined) ? nextStats.lastWeight : nextEx.defaultWeight;
            currentWorkoutSession.currentReps = (nextStats && nextStats.lastReps !== undefined) ? nextStats.lastReps : nextEx.targetReps;
            currentWorkoutSession.setsCompleted = new Array(nextEx.sets).fill(false);
            
            updateDedicatedExerciseUI();
            startRestTimer(ex.restSeconds || 90);
        } else {
            // Concluiu todos os exercícios do treino!
            stopRestTimer();
            finishWorkoutSession();
        }
    }
}

function navigateExercise(delta) {
    const workout = WEEKLY_WORKOUT_SCHEDULE[currentWorkoutSession.dayIndex];
    if (!workout) return;
    const newIdx = currentWorkoutSession.exerciseIndex + delta;
    if (newIdx < 0 || newIdx >= workout.exercises.length) return;
    
    currentWorkoutSession.exerciseIndex = newIdx;
    currentWorkoutSession.currentSet = 1;
    
    const ex = workout.exercises[newIdx];
    const stats = userState.exerciseStats && userState.exerciseStats[ex.name];
    currentWorkoutSession.currentWeight = (stats && stats.lastWeight !== undefined) ? stats.lastWeight : ex.defaultWeight;
    currentWorkoutSession.currentReps = (stats && stats.lastReps !== undefined) ? stats.lastReps : ex.targetReps;
    currentWorkoutSession.setsCompleted = new Array(ex.sets).fill(false);
    
    updateDedicatedExerciseUI();
}

function finishWorkoutSession() {
    closeDedicatedExercise();
    
    const workout = WEEKLY_WORKOUT_SCHEDULE[currentWorkoutSession.dayIndex];
    
    // Marca dia como concluído no progresso
    if (!userState.workoutSessionProgress) userState.workoutSessionProgress = {};
    userState.workoutSessionProgress[currentWorkoutSession.dayIndex] = {
        completed: true,
        date: new Date().toISOString().slice(0, 10)
    };
    
    // Conclui meta de treino na home caso não esteja concluída
    if (!userState.habitsCompleted[0]) {
        toggleHabit(0);
    }
    
    // Incrementa XP e contador de treinos
    addXP(50);
    userState.completedWorkoutsCount = (userState.completedWorkoutsCount || 0) + 1;
    saveStateToStorage();
    
    // Exibe modal celebrativo
    const kcalValEl = document.getElementById("workout-completed-kcal-val");
    if (kcalValEl && workout) kcalValEl.innerText = `~${workout.kcal} kcal`;
    
    const msgEl = document.getElementById("workout-completed-msg");
    if (msgEl && workout) {
        msgEl.innerText = `Você finalizou com maestria o ${workout.title}! Cargas e séries registradas com sucesso.`;
    }
    
    const completedModal = document.getElementById("modal-workout-completed");
    if (completedModal) completedModal.style.display = "flex";
    
    renderWorkoutTab();
}

// Compatibilidade legada
function populateWorkoutsGrid() {
    renderWorkoutTab();
}

function filterWorkouts(cat) {
    // Mantido para compatibilidade se invocado
}

// MODAL DETALHE DO TREINO & PLAYER ATIVO
let activeWorkoutState = {
    workout: null,
    currentExerciseIndex: 0,
    currentSet: 1,
    timerSeconds: 0,
    timerInterval: null
};

// Banco de Dados de Detalhes dos Exercícios (Guia FUSE)
const exercisesGuideDB = {
    "Agachamento Livre": {
        image: "assets/img/agachamento-livre.jpg",
        muscles: "Quadríceps, Glúteos, Posterior de Coxa, Core",
        instructions: "Fique em pé com os pés na largura dos ombros. Agache projetando os quadris para trás, mantendo a coluna alinhada e descendo até as coxas ficarem paralelas ao chão.",
        errors: "Evite curvar as costas, levantar os calcanhares ou deixar os joelhos entrarem para dentro (valgo dinâmico).",
        tips: "Inspire ao descer e expire forte ao subir. Mantenha o peso distribuído no calcanhar.",
        rest: "45 segundos"
    },
    "Elevação Pélvica": {
        image: "assets/img/elevacao-pelvica.png",
        muscles: "Glúteo Máximo, Posteriores de Coxa, Core",
        instructions: "Deite de costas com os joelhos dobrados e os pés apoiados no chão. Contraia os glúteos e eleve os quadris até que o corpo forme uma linha reta dos ombros aos joelhos.",
        errors: "Não force a coluna lombar arquivando excessivamente as costas no topo do movimento.",
        tips: "Pressione os calcanhares contra o chão e aperte os glúteos por 2 segundos no topo.",
        rest: "45 segundos"
    },
    "Quatro Apoios Unilateral": {
        image: "", // Utiliza o fallback automático de "Demonstração Indisponível"
        muscles: "Glúteo Médio e Máximo, Core",
        instructions: "Na posição de quatro apoios, eleve uma das pernas dobrada a 90 graus até que a coxa fique alinhada com o tronco, mantendo a sola do pé apontada para o teto.",
        errors: "Não balance o quadril lateralmente e evite arquear excessivamente a coluna lombar.",
        tips: "Mantenha o abdômen travado e controle a descida lenta do movimento.",
        rest: "30 segundos"
    },
    "Ponte Glúteos Isometrica": {
        image: "", // Utiliza o fallback automático de "Demonstração Indisponível"
        muscles: "Glúteos, Isquiotibiais, Core",
        instructions: "Mantenha o quadril elevado na posição de ponte e segure a contração estática sem descer pelo tempo recomendado na ficha.",
        errors: "Deixar o quadril ceder com o tempo ou esquecer de contrair fortemente os glúteos.",
        tips: "Mantenha a respiração contínua e concentre-se na ativação glútea profunda.",
        rest: "30 segundos"
    },
    "Agachamento com Halteres": {
        image: "assets/img/agachamento-livre.jpg",
        muscles: "Quadríceps, Glúteos, Core",
        instructions: "Segure dois halteres ao lado do corpo. Agache mantendo a postura ereta, peito estufado e o calcanhar firme no chão.",
        errors: "Olhar para o chão ou inclinar o tronco excessivamente para a frente jogando a carga na lombar.",
        tips: "Mantenha o peito aberto e empurre o chão com força ao subir.",
        rest: "60 segundos"
    },
    "Cadeira Extensora": {
        image: "assets/img/leg-press.jpg",
        muscles: "Quadríceps (Foco frontal)",
        instructions: "Ajuste o rolo de espuma sobre os tornozelos. Estenda totalmente os joelhos contra a resistência, pause por 1 segundo e retorne devagar.",
        errors: "Dar impulsos bruscos ou não estender totalmente as pernas no topo.",
        tips: "Segure firme nos apoios laterais para manter o quadril estabilizado no banco.",
        rest: "45 segundos"
    },
    "Mesa Flexora": {
        image: "assets/img/stiff.jpg",
        muscles: "Posterior de Coxa (Isquiotibiais)",
        instructions: "Deite de bruços no aparelho e flexione os joelhos trazendo o rolo em direção aos glúteos. Retorne controlando a descida.",
        errors: "Tirar o quadril do banco durante a fase de esforço.",
        tips: "Mantenha os pés em dorsoflexão e contraia o posterior de coxa de forma isolada.",
        rest: "45 segundos"
    },
    "Passada com Carga": {
        image: "assets/img/stiff.jpg",
        muscles: "Quadríceps, Glúteos, Adutores",
        instructions: "Dê um passo largo à frente, descendo o quadril até que o joelho da perna de trás quase toque o chão e o da frente forme 90 graus.",
        errors: "Dar passos muito curtos ou deixar o joelho da frente passar excessivamente da ponta do pé.",
        tips: "Mantenha o tronco ereto e dê passos firmes e largos.",
        rest: "60 segundos"
    },
    "Polichinelos": {
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400",
        muscles: "Panturrilhas, Ombros, Cardio",
        instructions: "Salte abrindo as pernas e batendo as mãos acima da cabeça simultaneamente. Salte novamente fechando as pernas e descendo os braços.",
        errors: "Aterissar com os pés totalmente planos ou com as pernas rígidas sem amortecimento.",
        tips: "Amorteça a queda na ponta dos pés e mantenha um ritmo constante.",
        rest: "15 segundos"
    },
    "Corrida Estacionária": {
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=400",
        muscles: "Cardio, Core, Quadríceps",
        instructions: "Simule uma corrida sem sair do lugar, elevando os joelhos até a altura da cintura e coordenando o movimento dos braços.",
        errors: "Postura curvada à frente ou pouca elevação dos joelhos.",
        tips: "Mantenha o peito aberto e respire de forma cadenciada.",
        rest: "15 segundos"
    },
    "Burpees Adaptados": {
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
        muscles: "Full Body, Cardio, Core",
        instructions: "Fique de pé, agache colocando as mãos no chão, jogue os pés para trás em posição de prancha, retorne os pés e fique de pé estendendo os braços.",
        errors: "Deixar o quadril ceder na posição de prancha ou curvar as costas ao levantar.",
        tips: "Faça o movimento de forma fluida sem pressa para manter a técnica ideal.",
        rest: "30 segundos"
    },
    "Agachamento com Salto": {
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=400",
        muscles: "Quadríceps, Glúteos, Panturrilhas",
        instructions: "Execute um agachamento livre e exploda para cima com um salto vertical. Amorteça a queda agachando suavemente.",
        errors: "Aterissar com pernas estendidas ou bater o calcanhar com força no chão.",
        tips: "Pense na aterrissagem como o início do próximo agachamento.",
        rest: "30 segundos"
    },
    "Postura da Criança (Child Pose)": {
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
        muscles: "Costas, Ombros, Quadris",
        instructions: "Ajoelhe-se no chão, sente-se nos calcanhares e incline-se para a frente, estendendo os braços no chão à sua frente e apoiando a testa no tapete.",
        errors: "Tentar forçar a postura se sentir dor excessiva nos joelhos.",
        tips: "Respire profundamente pelo nariz expandindo as costelas nas costas.",
        rest: "10 segundos"
    },
    "Alongamento Gato-Vaca": {
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
        muscles: "Coluna Vertebral, Core, Pescoço",
        instructions: "Na posição de quatro apoios, arqueie a coluna para cima empurrando o chão (gato) e depois curve a coluna para baixo olhando para o teto (vaca).",
        errors: "Realizar movimentos rápidos e de forma brusca.",
        tips: "Sincronize com a respiração: expire no gato e inspire na vaca.",
        rest: "10 segundos"
    },
    "Torção de Coluna Deitada": {
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=400",
        muscles: "Lombar, Glúteos, Peitorais",
        instructions: "Deitada de costas, abra os braços em cruz, dobre uma das pernas e gire o quadril levando o joelho em direção ao chão do lado oposto.",
        errors: "Forçar o ombro oposto a sair do chão.",
        tips: "Mantenha o olhar para o lado contrário da torção para alongar a coluna cervical.",
        rest: "10 segundos"
    },
    "Alongamento Isquiotibiais": {
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=400",
        muscles: "Posterior de Coxa, Panturrilhas",
        instructions: "Sentada com uma perna estendida à frente, incline o tronco em direção ao pé, mantendo a coluna o mais reta possível.",
        errors: "Curvar excessivamente os ombros na tentativa de alcançar o pé.",
        tips: "Concentre o alongamento atrás do joelho e na coxa.",
        rest: "10 segundos"
    },
    "Puxada Aberta no Pulley": {
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400",
        muscles: "Dorsais (Costas), Bíceps, Ombros",
        instructions: "Sente-se no aparelho, segure a barra com pegada aberta and puxe-a em direção à parte superior do peito, contraindo as escápulas.",
        errors: "Inclinar o tronco excessivamente para trás ou puxar a barra atrás da nuca.",
        tips: "Puxe com os cotovelos direcionados para baixo e não com a força dos braços.",
        rest: "45 segundos"
    },
    "Remada Baixa com Triângulo": {
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=400",
        muscles: "Costas (Romboides, Grande Dorsal), Bíceps",
        instructions: "Segure o triângulo, apoie os pés e puxe a carga em direção ao abdômen, mantendo os cotovelos rentes ao corpo e peito estufado.",
        errors: "Curvar a lombar ou balançar o tronco para ganhar impulso.",
        tips: "Mantenha o peito estufado e esmague as costas no final do movimento.",
        rest: "45 segundos"
    },
    "Desenvolvimento de Ombros": {
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
        muscles: "Deltoides (Ombros), Tríceps",
        instructions: "Sentada ou em pé, segure os halteres na altura das orelhas e empurre-os verticalmente para cima até estender quase totalmente os braços.",
        errors: "Arquear a coluna lombar ou bater os halteres no topo.",
        tips: "Mantenha os cotovelos levemente projetados para a frente do corpo.",
        rest: "45 segundos"
    },
    "Rosca Martelo Unilateral": {
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400",
        muscles: "Bíceps, Braquiorradial (Antebraço)",
        instructions: "Segure os halteres com pegada neutra (palmas voltadas uma para a outra) e flexione o cotovelo alternadamente mantendo o punho firme.",
        errors: "Balançar os cotovelos para trás ou ajudar com o ombro.",
        tips: "Mantenha o cotovelo colado ao lado da costela o tempo todo.",
        rest: "30 segundos"
    }
};

function openWorkoutDetail(id) {
    const w = workoutsDB.find(workout => workout.id === id);
    activeWorkoutState.workout = w;
    
    document.getElementById("det-workout-title").innerText = w.title;
    document.getElementById("det-workout-dur").innerText = `${w.duration} min`;
    document.getElementById("det-workout-diff").innerText = w.difficulty;
    document.getElementById("det-workout-kcal").innerText = `${w.kcal} kcal`;
    document.getElementById("det-workout-desc").innerText = w.desc;
    
    // Lista de exercícios
    const listWrapper = document.getElementById("det-workout-exercises");
    listWrapper.innerHTML = "";
    w.exercises.forEach(ex => {
        const row = document.createElement("div");
        row.className = "exercise-row-item";
        row.style.border = "1px solid transparent";
        
        row.onclick = () => {
            row.classList.toggle("completed");
            const checkIcon = row.querySelector(".exercise-check-icon");
            if (row.classList.contains("completed")) {
                checkIcon.innerHTML = `<i data-lucide="check-circle-2" style="color: var(--accent-rose); width: 16px; height: 16px;"></i>`;
                row.style.background = "#FFF1F2";
                row.style.borderColor = "#FDA4AF";
            } else {
                checkIcon.innerHTML = `<i data-lucide="circle" style="color: #CBD5E1; width: 16px; height: 16px;"></i>`;
                row.style.background = "#F8FAFC";
                row.style.borderColor = "transparent";
            }
            lucide.createIcons();
        };
        
        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="exercise-check-icon" style="display: flex; align-items: center;">
                    <i data-lucide="circle" style="color: #CBD5E1; width: 16px; height: 16px;"></i>
                </div>
                <span style="font-weight: 600; color: var(--text-primary); font-size: 12.5px;">${ex.name}</span>
            </div>
            <span class="exercise-row-reps">${ex.sets}s x ${ex.reps}</span>
        `;
        listWrapper.appendChild(row);
    });
    
    openModal("modal-workout-detail");
}

function openExerciseGuide(name, sets, reps) {
    const fallbackImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'><rect width='400' height='225' fill='%23120a0e'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='600' fill='%23e8a598'>Demonstração Indisponível</text><text x='50%25' y='62%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23a89e9f'>Brevemente adicionaremos o tutorial visual</text></svg>";
    
    const guide = exercisesGuideDB[name] || {
        image: fallbackImg,
        muscles: "Músculos do corpo",
        instructions: "Execute o exercício mantendo a postura ereta e o core contraído.",
        errors: "Evite pressa e falta de amplitude de movimento.",
        tips: "Mantenha respiração constante.",
        rest: "30 segundos"
    };

    document.getElementById("ex-guide-name").innerText = name;
    document.getElementById("ex-guide-target").innerText = guide.muscles;
    document.getElementById("ex-guide-sets").innerText = `${sets} séries`;
    document.getElementById("ex-guide-reps").innerText = reps;
    document.getElementById("ex-guide-rest").innerText = guide.rest;
    document.getElementById("ex-guide-instructions").innerText = guide.instructions;
    document.getElementById("ex-guide-errors").innerText = guide.errors;
    document.getElementById("ex-guide-tips").innerText = guide.tips;

    const imgEl = document.getElementById("ex-guide-img");
    if (imgEl) {
        imgEl.src = guide.image || fallbackImg;
    }

    openModal("modal-exercise-guide");
}

function startActiveWorkout() {
    closeModal("modal-workout-detail");
    
    const w = activeWorkoutState.workout;
    activeWorkoutState.currentExerciseIndex = 0;
    activeWorkoutState.currentSet = 1;
    activeWorkoutState.timerSeconds = w.duration * 60;

    // Atualiza UI do Player
    document.getElementById("play-workout-title").innerText = w.title;
    updatePlayerExerciseUI();

    // Cronômetro
    const timerText = document.getElementById("play-timer-text");
    timerText.innerText = `${w.duration.toString().padStart(2, '0')}:00`;
    
    if (activeWorkoutState.timerInterval) clearInterval(activeWorkoutState.timerInterval);
    
    activeWorkoutState.timerInterval = setInterval(() => {
        if (activeWorkoutState.timerSeconds <= 0) {
            clearInterval(activeWorkoutState.timerInterval);
            completeWorkoutAction();
            return;
        }
        activeWorkoutState.timerSeconds--;
        const mins = Math.floor(activeWorkoutState.timerSeconds / 60);
        const secs = activeWorkoutState.timerSeconds % 60;
        timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);

    openModal("modal-workout-player");
}

function updatePlayerExerciseUI() {
    const w = activeWorkoutState.workout;
    const ex = w.exercises[activeWorkoutState.currentExerciseIndex];
    
    document.getElementById("play-current-exercise").innerText = `${activeWorkoutState.currentExerciseIndex + 1}. ${ex.name}`;
    document.getElementById("play-current-reps").innerText = `Meta sugerida: ${ex.reps}`;
    document.getElementById("play-current-set-txt").innerText = `${activeWorkoutState.currentSet} / ${ex.sets}`;
}

function nextSetAction() {
    const w = activeWorkoutState.workout;
    const ex = w.exercises[activeWorkoutState.currentExerciseIndex];
    
    if (activeWorkoutState.currentSet < ex.sets) {
        activeWorkoutState.currentSet++;
    } else {
        // Passa para o próximo exercício
        if (activeWorkoutState.currentExerciseIndex < w.exercises.length - 1) {
            activeWorkoutState.currentExerciseIndex++;
            activeWorkoutState.currentSet = 1;
        } else {
            alert("Você completou todas as séries sugeridas! Finalize o treino no botão de conclusão.");
        }
    }
    updatePlayerExerciseUI();
}

function completeWorkoutAction() {
    clearInterval(activeWorkoutState.timerInterval);
    closeModal("modal-workout-player");
    
    addXP(40);
    userState.completedWorkoutsCount++;
    
    // Marca check-in de treino na home
    if (!userState.habitsCompleted[0]) {
        toggleHabit(0);
    }
    
    alert(`Parabéns! Você concluiu "${activeWorkoutState.workout.title}" e gastou aproximadamente ${activeWorkoutState.workout.kcal} kcal! +40 XP.`);
    updateProgressUI();
}

const recipeTemplates = {
    "Café da Manhã": {
        tradicional: { title: "Pão de Forma Integral com Ovos Mexidos", time: 8, ingredients: ["2 fatias Pão Integral", "2 unidades Ovos Caipiras", "10g Manteiga", "1 xícara Café sem açúcar"], prep: "Doure o pão integral. Prepare os ovos mexidos na frigideira com manteiga e sirva com café quente." },
        rapidas: { title: "Iogurte Natural com Banana e Aveia", time: 4, ingredients: ["200g Iogurte Natural", "1 unidade Banana Prata", "30g Aveia em Flocos"], prep: "Fatie a banana sobre o iogurte e salpique com farelo de aveia." },
        economica: { title: "Tapioca com Margarina e Ovos Mexidos", time: 7, ingredients: ["80g Goma de Tapioca", "2 unidades Ovos", "10g Margarina"], prep: "Peneire a goma na frigideira bem quente, monte o disco e recheie com ovos mexidos e margarina." },
        vegetariana: { title: "Crepioca de Queijo com Tomate e Orégano", time: 8, ingredients: ["1 unidade Ovo", "40g Goma de Tapioca", "30g Queijo Minas", "1 unidade Tomate fatiado"], prep: "Bata o ovo e a tapioca com garfo, cozinhe o disco na chapa e recheie com queijo minas e tomate." },
        vegana: { title: "Torrada de Abacate com Sementes de Gergelim", time: 6, ingredients: ["2 fatias Pão de Forma", "50g Abacate", "10g Semente de Gergelim"], prep: "Toste o pão. Amasse o abacate sobre a torrada com sal, pimenta e finalize com gergelim." },
        "sem-lactose": { title: "Panqueca de Banana Funcional", time: 8, ingredients: ["1 unidade Banana", "1 unidade Ovo", "20g Farelo de Aveia", "Canela em pó"], prep: "Amasse a banana, misture com o ovo e a aveia. Grelhe a massa na frigideira." },
        "sem-gluten": { title: "Tapioca com Frango Desfiado", time: 10, ingredients: ["80g Goma de Tapioca", "60g Peito de Frango Desfiado", "20g Requeijão zero glúten"], prep: "Monte a tapioca na frigideira e recheie com o peito de frango temperado e requeijão." },
        "alto-prot": { title: "Super Omelete Protéico com Peito de Peru", time: 8, ingredients: ["3 unidades Ovos inteiros", "40g Peito de Peru picado", "30g Queijo Cottage"], prep: "Bata os ovos vigorosamente, adicione o peito de peru e queijo cottage e cozinhe na frigideira untada." },
        "baixo-carb": { title: "Ovos Estalados no Azeite com Bacon e Queijo", time: 6, ingredients: ["3 unidades Ovos caipiras", "20g Bacon picado", "30g Queijo Prato"], prep: "Frite o bacon no azeite, jogue os ovos e cubra com fatias de queijo prato até derreter." }
    },
    "Lanche da Manhã": {
        tradicional: { title: "Mix de Frutas da Estação", time: 4, ingredients: ["100g Mamão Formosa", "100g Melão Picado", "10g Sementes de Linhaça"], prep: "Corte as frutas em cubos e salpique linhaça por cima." },
        rapidas: { title: "Punhado de Castanhas de Caju", time: 1, ingredients: ["30g Castanhas de Caju", "2 unidades Damascos Secos"], prep: "Consumir diretamente. Excelente lanche rápido." },
        economica: { title: "Banana Prata com Canela", time: 2, ingredients: ["1 unidade Banana Prata", "Canela em pó"], prep: "Descasque a banana, corte em rodelas e adicione canela a gosto." },
        vegetariana: { title: "Iogurte Grego com Fio de Mel", time: 2, ingredients: ["150g Iogurte Grego", "10g Mel de Abelha"], prep: "Misture o mel no iogurte gelado." },
        vegana: { title: "Mix de Sementes Tostadas", time: 3, ingredients: ["20g Semente de Girassol", "20g Semente de Abóbora"], prep: "Toste levemente as sementes na frigideira com uma pitada de sal." },
        "sem-lactose": { title: "Salada de Frutas sem Leite", time: 4, ingredients: ["80g Banana picada", "80g Maçã picada", "10g Sementes de Chia"], prep: "Misture os pedaços de frutas frescas com as sementes." },
        "sem-gluten": { title: "Smoothie de Morango com Água de Coco", time: 5, ingredients: ["6 unidades Morangos congelados", "200ml Água de Coco"], prep: "Bata as frutas congeladas com água de coco no liquidificador." },
        "alto-prot": { title: "Whey Protein 80% batido com Água", time: 2, ingredients: ["30g Whey Protein", "200ml Água mineral"], prep: "Bata o whey protein na coqueteleira com água gelada." },
        "baixo-carb": { title: "Castanhas do Pará e Nozes", time: 1, ingredients: ["20g Castanha do Pará", "20g Nozes descascadas"], prep: "Consumir as oleaginosas frescas." }
    },
    "Almoço": {
        tradicional: { title: "Prato Feito: Arroz, Feijão Carioca e Bife de Patinho", time: 25, ingredients: ["100g Arroz Branco", "80g Feijão Carioca", "120g Bife de Patinho", "100g Salada de Alface e Tomate"], prep: "Monte seu prato com arroz, feijão por cima, bife grelhado acebolado e salada fresca." },
        rapidas: { title: "Wrap Integral de Atum e Salada", time: 8, ingredients: ["1 fatia Tortilha Integral", "100g Atum em lata", "40g Alface picada", "30g Tomate"], prep: "Recheie a tortilha com atum temperado com azeite, alface picada e tomate." },
        economica: { title: "Sobrecoxa de Frango Assada com Arroz e Feijão", time: 30, ingredients: ["120g Sobrecoxa de Frango", "100g Arroz Branco", "80g Feijão"], prep: "Asse a sobrecoxa de frango temperada no forno. Acompanhe com arroz e feijão quente." },
        vegetariana: { title: "Arroz com Feijão, Ovos Fritos e Legumes no Vapor", time: 18, ingredients: ["100g Arroz", "80g Feijão", "2 unidades Ovos", "80g Brócolis no vapor"], prep: "Sirva arroz e feijão carioca com dois ovos fritos no azeite de oliva e brócolis cozido." },
        vegana: { title: "Arroz, Feijão, Grão-de-Bico Refogado e Brócolis", time: 20, ingredients: ["100g Arroz Integral", "80g Feijão", "100g Grão-de-Bico", "80g Brócolis"], prep: "Refogue o grão-de-bico com cebola e alho. Sirva acompanhado com arroz, feijão e legumes." },
        "sem-lactose": { title: "Patinho Moído Grelhado com Purê de Mandioquinha", time: 22, ingredients: ["120g Patinho Moído", "120g Mandioquinha", "80g Couve Refogada"], prep: "Prepare o patinho moído temperado. Amasse as mandioquinhas cozidas sem leite e acompanhe com couve." },
        "sem-gluten": { title: "Filé de Tilápia Grelhado com Purê de Batata e Vagem", time: 22, ingredients: ["130g Filé de Tilápia", "100g Purê de Batata", "80g Vagem"], prep: "Grelhe o peixe na chapa. Sirva com purê tradicional (sem trigo) e vagem refogada no alho." },
        "alto-prot": { title: "Peito de Frango Grelhado Duplo com Arroz Integral e Legumes", time: 20, ingredients: ["160g Peito de Frango", "120g Arroz Integral", "100g Brócolis e Cenoura"], prep: "Grelhe os bifes de frango generosos. Acompanhe com arroz integral cozido e mix de vegetais." },
        "baixo-carb": { title: "Bife de Patinho Grelhado com Couve-Flor Gratinada", time: 25, ingredients: ["140g Bife de Patinho", "150g Couve-Flor", "30g Queijo Parmesão"], prep: "Grelhe o bife. Cozinhe a couve-flor no vapor, cubra com queijo parmesão ralado e doure no forno." }
    },
    "Lanche da Tarde": {
        tradicional: { title: "Sanduíche Integral de Peito de Peru e Requeijão", time: 6, ingredients: ["2 fatias Pão Integral", "40g Peito de Peru", "20g Requeijão light"], prep: "Passe requeijão no pão integral de sementes e monte com o peito de peru defumado." },
        rapidas: { title: "Shake Protéico de Whey e Iogurte", time: 3, ingredients: ["30g Whey Protein", "120g Iogurte Natural"], prep: "Bata o whey com iogurte grego na coqueteleira até atingir ponto de mousse." },
        economica: { title: "Pão de Forma com Queijo Prato Grelhado", time: 5, ingredients: ["2 fatias Pão de Forma", "30g Queijo Prato"], prep: "Monte o sanduíche e doure na sanduicheira comum até o queijo derreter completamente." },
        vegetariana: { title: "Pão Integral com Queijo Cottage e Mel", time: 5, ingredients: ["2 fatias Pão Integral", "40g Queijo Cottage", "5g Mel"], prep: "Espalhe o cottage fresco sobre as torradas e finalize com fio de mel." },
        vegana: { title: "Bolacha de Arroz com Homus", time: 4, ingredients: ["3 unidades Bolachas de Arroz", "40g Homus de Grão de Bico"], prep: "Espalhe a pasta de grão de bico sobre as bolachas de arroz salpicadas com sal." },
        "sem-lactose": { title: "Maçã com Pasta de Amendoim Integral", time: 3, ingredients: ["1 unidade Maçã média", "20g Pasta de Amendoim"], prep: "Fatie a maçã fresca e passe as tiras na pasta de amendoim integral." },
        "sem-gluten": { title: "Tapioca com Pasta de Amendoim", time: 7, ingredients: ["80g Goma de Tapioca", "20g Pasta de Amendoim"], prep: "Faça o disco de tapioca e recheie com pasta de amendoim levemente aquecida." },
        "alto-prot": { title: "Sanduíche de Frango Desfiado Fit", time: 8, ingredients: ["2 fatias Pão Integral", "80g Peito de Frango Desfiado", "20g Creme de Ricota"], prep: "Misture o frango desfiado com creme de ricota para fazer um patê e monte no pão." },
        "baixo-carb": { title: "Enroladinho de Presunto e Queijo", time: 3, ingredients: ["40g Presunto Cozido", "40g Queijo Prato", "1 unidade Tomate cereja"], prep: "Enrole fatias de queijo dentro das de presunto e fixe com palitos e tomate." }
    },
    "Jantar": {
        tradicional: { title: "Arroz Branco, Feijão Carioca, Sobrecoxa e Couve", time: 25, ingredients: ["100g Arroz Branco", "80g Feijão", "120g Sobrecoxa de Frango", "80g Couve refogada"], prep: "Monte o prato tradicional quente com arroz, feijão, frango assado e couve refogada na manteiga." },
        rapidas: { title: "Crepioca Rápida de Frango Desfiado", time: 8, ingredients: ["1 unidade Ovo", "40g Goma de Tapioca", "80g Peito de Frango Desfiado"], prep: "Bata o ovo com a tapioca. Faça a panqueca na chapa e recheie com peito de frango." },
        economica: { title: "Ovos Mexidos Cremosos com Arroz e Tomate", time: 10, ingredients: ["3 unidades Ovos caipiras", "100g Arroz Branco", "1 unidade Tomate"], prep: "Mexa os ovos na frigideira com alho e tomate picado. Sirva quente misturado com arroz." },
        vegetariana: { title: "Macarrão Integral com Molho Pesto e Cottage", time: 18, ingredients: ["100g Macarrão Integral", "20g Molho Pesto", "40g Queijo Cottage"], prep: "Cozinhe a massa integral al dente, envolva com pesto e decore com queijo cottage." },
        vegana: { title: "Salada de Lentilha com Legumes e Arroz Integral", time: 20, ingredients: ["100g Lentilha cozida", "100g Arroz Integral", "80g Abobrinha refogada"], prep: "Misture lentilhas temperadas com alho e abobrinha. Sirva morno com arroz integral." },
        "sem-lactose": { title: "Iscas de Carne de Patinho com Mandioca Cozida", time: 22, ingredients: ["120g Carne de Patinho", "120g Mandioca Cozida", "80g Brócolis salteado"], prep: "Grelhe as tiras de patinho com cebola. Acompanhe com mandioca cozida com sal e brócolis." },
        "sem-gluten": { title: "Escondidinho de Batata Doce com Frango", time: 25, ingredients: ["100g Batata Doce", "120g Peito de Frango Desfiado", "30g Queijo sem glúten"], prep: "Forre o refratário com frango desfiado temperado, cubra com purê de batata doce e queijo e gratine." },
        "alto-prot": { title: "Bife de Patinho Grelhado com Arroz Integral e Brócolis", time: 22, ingredients: ["140g Bife de Patinho", "120g Arroz Integral", "100g Brócolis cozido"], prep: "Grelhe o bife de carne magra. Monte com arroz integral quente e brócolis temperados com azeite." },
        "baixo-carb": { title: "Filé de Tilápia Grelhado com Abobrinha Espaguete", time: 18, ingredients: ["140g Filé de Tilápia", "150g Abobrinha ralada", "10g Azeite de oliva"], prep: "Grelhe o peixe. Refogue as tiras de abobrinha no azeite com alho e sirva como base." }
    },
    "Ceia": {
        tradicional: { title: "Chá de Erva Doce com Biscoito Integral", time: 4, ingredients: ["200ml Chá de Erva Doce", "3 unidades Biscoito de Maizena"], prep: "Prepare a infusão do chá morno. Consuma acompanhado dos biscoitos simples." },
        rapidas: { title: "Copo de Leite Desnatado Morno", time: 3, ingredients: ["200ml Leite Desnatado", "Canela em pó"], prep: "Aqueça o leite desnatado no micro-ondas por 40 segundos e adicione canela." },
        economica: { title: "Banana Prata com Aveia", time: 2, ingredients: ["1 unidade Banana Prata", "15g Aveia em Flocos"], prep: "Amasse a banana levemente e salpique com farelo de aveia." },
        vegetariana: { title: "Copo de Iogurte Integral", time: 2, ingredients: ["150g Iogurte Natural"], prep: "Consumir o iogurte grego natural fresco." },
        vegana: { title: "Punhado de Amêndoas Cruas", time: 1, ingredients: ["20g Amêndoas"], prep: "Consumir as amêndoas diretamente antes de dormir." },
        "sem-lactose": { title: "Pera Cozida com Canela", time: 10, ingredients: ["1 unidade Pera", "Canela em pó"], prep: "Cozinhe a pera inteira na água por 6 minutos. Salpique canela e coma morna." },
        "sem-gluten": { title: "Copo de Leite de Amêndoas com Canela", time: 3, ingredients: ["200ml Leite de Amêndoas", "Canela em pó"], prep: "Aqueça o leite vegetal e finalize com uma pitada de canela." },
        "alto-prot": { title: "Mingau de Whey com Aveia", time: 5, ingredients: ["15g Whey Protein", "15g Aveia em Flocos", "100ml Água"], prep: "Misture a aveia e água, cozinhe no micro-ondas por 40s. Misture o whey vigorosamente." },
        "baixo-carb": { title: "Gelatina Fit sem Açúcar", time: 2, ingredients: ["150g Gelatina Diet zero açúcar"], prep: "Consumir gelatina gelada antes do sono para controle metabólico." }
    }
};

// Substituições Inteligentes Database (Calculadora)
const substitutionsDB = {
    "arroz": {
        name: "Arroz Branco Cozido (100g)",
        kcal: 130, carb: 28, prot: 2.5, fat: 0.2,
        options: [
            { name: "Batata Doce Cozida", portion: "100g", kcal: 112, carb: 26, prot: 2, fat: 0.1, icon: "🍠" },
            { name: "Mandioca Cozida", portion: "80g", kcal: 125, carb: 30, prot: 1, fat: 0.2, icon: "🥔" },
            { name: "Macarrão de Sêmola Cozido", portion: "80g", kcal: 110, carb: 24, prot: 3, fat: 0.5, icon: "🍝" },
            { name: "Aveia em Flocos", portion: "35g", kcal: 120, carb: 22, prot: 5, fat: 2.2, icon: "🥣" },
            { name: "Pão de Forma Integral", portion: "2 fatias (50g)", kcal: 120, carb: 24, prot: 5, fat: 1.5, icon: "🍞" }
        ]
    },
    "frango": {
        name: "Frango Grelhado (100g)",
        kcal: 159, carb: 0, prot: 32, fat: 2.5,
        options: [
            { name: "Patinho Moído Grelhado", portion: "100g", kcal: 219, carb: 0, prot: 32, fat: 7.5, icon: "🥩" },
            { name: "Filé de Tilápia Grelhado", portion: "130g", kcal: 140, carb: 0, prot: 28, fat: 2, icon: "🐟" },
            { name: "Ovos Inteiros Cozidos", portion: "4 unidades", kcal: 280, carb: 2, prot: 24, fat: 20, icon: "🍳" },
            { name: "Atum Enlatado ao Natural", portion: "120g", kcal: 135, carb: 0, prot: 30, fat: 1, icon: "🐟" },
            { name: "Queijo Coalho Grelhado", portion: "90g", kcal: 290, carb: 2, prot: 26, fat: 20, icon: "🧀" }
        ]
    },
    "ovo": {
        name: "Ovo Inteiro Cozido (2 unidades)",
        kcal: 140, carb: 1, prot: 12, fat: 10,
        options: [
            { name: "Omelete Simples (2 ovos)", portion: "2 unidades", kcal: 140, carb: 1, prot: 12, fat: 10, icon: "🍳" },
            { name: "Queijo Minas Frescal", portion: "70g", kcal: 150, carb: 2, prot: 12, fat: 10, icon: "🧀" },
            { name: "Whey Protein 80%", portion: "1 scoop (30g) + 5g Castanhas", kcal: 150, carb: 3, prot: 24, fat: 3.5, icon: "🥛" },
            { name: "Peito de Frango Grelhado + Azeite", portion: "50g + 1 colher chá azeite", kcal: 130, carb: 0, prot: 16, fat: 7, icon: "🍗" }
        ]
    },
    "iogurte": {
        name: "Iogurte Natural Integral (200g)",
        kcal: 130, carb: 9, prot: 7, fat: 7,
        options: [
            { name: "Kefir de Leite Natural", portion: "200g", kcal: 110, carb: 8, prot: 7, fat: 5, icon: "🥛" },
            { name: "Iogurte Desnatado + Pasta Amendoim", portion: "200g + 10g pasta", kcal: 145, carb: 9, prot: 11, fat: 7, icon: "🥜" },
            { name: "Leite Semidesnatado", portion: "250ml", kcal: 115, carb: 12, prot: 8, fat: 3, icon: "🥛" }
        ]
    },
    "batata": {
        name: "Batata Doce Cozida (100g)",
        kcal: 112, carb: 26, prot: 2, fat: 0.1,
        options: [
            { name: "Arroz Integral Cozido", portion: "100g", kcal: 120, carb: 25, prot: 2.6, fat: 1, icon: "🍚" },
            { name: "Batata Inglesa Cozida", portion: "150g", kcal: 125, carb: 28, prot: 3, fat: 0.2, icon: "🥔" },
            { name: "Abóbora Cabotiá Cozida", portion: "250g", kcal: 100, carb: 24, prot: 2.5, fat: 0.5, icon: "🎃" },
            { name: "Inhame Cozido", portion: "100g", kcal: 116, carb: 27, prot: 1.5, fat: 0.2, icon: "🍠" }
        ]
    }
};

function switchNutritionSubTab(subTabId) {
    const dietContainer = document.getElementById("nut-diet-container");
    const subsContainer = document.getElementById("nut-subs-container");
    const dietBtn = document.getElementById("btn-nut-tab-diet");
    const subsBtn = document.getElementById("btn-nut-tab-subs");
    
    if (subTabId === "diet") {
        dietContainer.style.display = "block";
        subsContainer.style.display = "none";
        dietBtn.classList.add("active");
        subsBtn.classList.remove("active");
        dietBtn.style.color = "#fff";
        subsBtn.style.color = "var(--text-secondary)";
    } else {
        dietContainer.style.display = "none";
        subsContainer.style.display = "block";
        dietBtn.classList.remove("active");
        subsBtn.classList.add("active");
        dietBtn.style.color = "var(--text-secondary)";
        subsBtn.style.color = "#fff";
        updateSubstitutionsGrid();
    }
}

function updateSubstitutionsGrid() {
    const key = document.getElementById("select-sub-food").value;
    const data = substitutionsDB[key];
    if (!data) return;

    // Popula cabeçalho de estatísticas do alimento de origem
    const statsBox = document.getElementById("sub-source-stats");
    statsBox.innerHTML = `
        <div style="flex: 1; text-align: center;">
            <span style="font-size:16px; font-weight:700; color:var(--text-primary); display:block;">${data.kcal}</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Calorias</span>
        </div>
        <div style="flex: 1; text-align: center; border-left: 1px solid #E2E8F0;">
            <span style="font-size:16px; font-weight:700; color:#F43F5E; display:block;">${data.carb}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Carbos</span>
        </div>
        <div style="flex: 1; text-align: center; border-left: 1px solid #E2E8F0;">
            <span style="font-size:16px; font-weight:700; color:#10B981; display:block;">${data.prot}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Proteínas</span>
        </div>
        <div style="flex: 1; text-align: center; border-left: 1px solid #E2E8F0;">
            <span style="font-size:16px; font-weight:700; color:#F59E0B; display:block;">${data.fat}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Gorduras</span>
        </div>
    `;

    // Popula as opções equivalentes
    const grid = document.getElementById("subs-equivalents-grid");
    grid.innerHTML = "";
    data.options.forEach(opt => {
        const card = document.createElement("div");
        card.style.background = "#FFFFFF";
        card.style.border = "1px solid #E2E8F0";
        card.style.borderRadius = "var(--radius-sm)";
        card.style.padding = "12px";
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.gap = "12px";
        card.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.02)";

        card.innerHTML = `
            <div style="font-size: 24px; width: 44px; height: 44px; border-radius: 50%; background: #FFF1F2; border: 1px solid #FDA4AF; display:flex; align-items:center; justify-content:center; color: var(--accent-rose);">
                ${opt.icon}
            </div>
            <div style="flex: 1;">
                <h4 style="font-size: 13px; font-weight:600; color:var(--text-primary); margin-bottom:2px;">${opt.name}</h4>
                <p style="font-size: 11px; color:var(--text-secondary);">Porção sugerida: <strong style="color:var(--accent-rose);">${opt.portion}</strong></p>
                <p style="font-size: 10px; color:var(--text-secondary); margin-top:2px;">${opt.kcal} kcal • Carb: ${opt.carb}g | Prot: ${opt.prot}g | Gord: ${opt.fat}g</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleNutritionFilter(filterName, el) {
    if (!userState.activeDietFilters) {
        userState.activeDietFilters = [];
    }
    
    const idx = userState.activeDietFilters.indexOf(filterName);
    if (idx === -1) {
        userState.activeDietFilters.push(filterName);
        el.classList.add("selected");
    } else {
        userState.activeDietFilters.splice(idx, 1);
        el.classList.remove("selected");
    }
    
    // Salva o estado e regenera o cardápio
    saveStateToStorage();
    changeNutritionConfig();
}

function changeNutritionConfig() {
    const selectedGoal = document.getElementById("nut-select-goal").value;
    
    // Salva no estado
    userState.goal = selectedGoal;
    
    // Recalcula calorias e macros
    const weight = userState.weight;
    const height = userState.height;
    const age = userState.age;
    
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    let factor = 1.2;
    if (userState.trainingFreq >= 3 && userState.trainingFreq <= 4) factor = 1.375;
    else if (userState.trainingFreq >= 5) factor = 1.55;
    
    let getd = bmr * factor;
    let targetKcal = getd;
    let ratios = { prot: 0.20, carb: 0.50, fat: 0.30 }; // default: manter

    if (selectedGoal === "emagrecer") {
        targetKcal = getd * 0.8;
        ratios = { prot: 0.30, carb: 0.40, fat: 0.30 };
    } else if (selectedGoal === "massa") {
        targetKcal = getd * 1.1;
        ratios = { prot: 0.25, carb: 0.50, fat: 0.25 };
    } else if (selectedGoal === "definicao") {
        targetKcal = getd * 0.9;
        ratios = { prot: 0.30, carb: 0.45, fat: 0.25 };
    } else if (selectedGoal === "hipertrofia-gluteos") {
        targetKcal = getd * 1.12;
        ratios = { prot: 0.25, carb: 0.50, fat: 0.25 };
    } else if (selectedGoal === "alta-proteina") {
        targetKcal = getd;
        ratios = { prot: 0.35, carb: 0.35, fat: 0.30 };
    } else if (selectedGoal === "saudavel" || selectedGoal === "tradicional") {
        targetKcal = getd;
        ratios = { prot: 0.20, carb: 0.50, fat: 0.30 };
    }

    userState.targetCalories = Math.round(targetKcal);
    userState.protGrams = Math.round((targetKcal * ratios.prot) / 4);
    userState.carbGrams = Math.round((targetKcal * ratios.carb) / 4);
    userState.fatGrams = Math.round((targetKcal * ratios.fat) / 9);

    // Atualiza widgets calóricos
    document.getElementById("nut-target-kcal").innerText = userState.targetCalories;
    document.getElementById("macro-prot-txt").innerText = `${userState.protGrams}g`;
    document.getElementById("macro-carb-txt").innerText = `${userState.carbGrams}g`;
    document.getElementById("macro-fat-txt").innerText = `${userState.fatGrams}g`;

    // Atualiza home atalhos
    document.getElementById("home-diet-btn-sub").innerText = `Meta de Kcal do dia: ${userState.targetCalories}`;
    const workoutTabSubEl = document.getElementById("workout-tab-sub");
    if (workoutTabSubEl) {
        workoutTabSubEl.innerText = `Foco no seu objetivo: ${selectedGoal.charAt(0).toUpperCase() + selectedGoal.slice(1)}`;
    }

    // Gera plano baseado no Objetivo + Filtros combinados
    generateDynamicCardapio(selectedGoal, userState.activeDietFilters || []);
}

function generateDynamicCardapio(goal, filters) {
    const mealCategories = ["Café da Manhã", "Lanche da Manhã", "Almoço", "Lanche da Tarde", "Jantar", "Ceia"];
    userState.currentMeals = [];

    // Fallback de estilo padrão baseado no objetivo se nenhum filtro estiver selecionado
    let activeStyle = "tradicional";
    if (filters && filters.length > 0) {
        // Se houver múltiplos filtros, escolhe o mais restritivo como base:
        // Prioridade: vegana > vegetariana > sem-lactose > sem-gluten > alto-prot > baixo-carb > rapidas > economica
        const priorities = ["vegana", "vegetariana", "sem-lactose", "sem-gluten", "alto-prot", "baixo-carb", "rapidas", "economica", "tradicional"];
        const found = priorities.find(p => filters.includes(p));
        if (found) activeStyle = found;
    } else {
        // Estilo padrão procedural baseado no objetivo
        if (goal === "massa" || goal === "hipertrofia-gluteos") activeStyle = "alto-prot";
        else if (goal === "emagrecer") activeStyle = "baixo-carb";
        else activeStyle = "tradicional";
    }

    mealCategories.forEach((cat, idx) => {
        const styleTemplates = recipeTemplates[cat];
        let template = styleTemplates[activeStyle] || styleTemplates["tradicional"] || styleTemplates["all"];
        
        // Fatores de caloria baseados na refeição
        const mealPct = {
            "Café da Manhã": 0.20,
            "Lanche da Manhã": 0.10,
            "Almoço": 0.30,
            "Lanche da Tarde": 0.10,
            "Jantar": 0.25,
            "Ceia": 0.05
        };

        const mealKcal = Math.round(userState.targetCalories * mealPct[cat]);
        
        // Calcula macros proporcionais baseados no objetivo
        let pFactor = 0.20, cFactor = 0.50, fFactor = 0.30;
        if (goal === "massa" || goal === "hipertrofia-gluteos") {
            pFactor = 0.25; cFactor = 0.50; fFactor = 0.25;
        } else if (goal === "emagrecer" || goal === "definicao") {
            pFactor = 0.30; cFactor = 0.40; fFactor = 0.30;
        }

        const prot = Math.round((mealKcal * pFactor) / 4);
        const carb = Math.round((mealKcal * cFactor) / 4);
        const fat = Math.round((mealKcal * fFactor) / 9);

        // Ajusta quantidades sugeridas dinamicamente baseada no peso / Kcal calculada
        const portionAdjuster = mealKcal / 300; // Normalizado para porção base de 300 Kcal
        const adjustedIngredients = template.ingredients.map(ing => {
            const match = ing.match(/^(\d+(?:\.\d+)?)(g|ml| fatias?| colheres?| unidades?) (.*)/i);
            if (match) {
                const qty = parseFloat(match[1]);
                const unit = match[2];
                const restText = match[3];
                const adjustedQty = Math.round(qty * portionAdjuster * 10) / 10;
                return `${adjustedQty}${unit} ${restText}`;
            }
            return ing;
        });

        // Adiciona tags das restrições e preferências combinadas no título do prato
        let activeTags = [];
        if (filters && filters.length > 0) {
            filters.forEach(f => {
                const nameMap = {
                    rapidas: "Rápida",
                    economica: "Econômica",
                    tradicional: "Tradicional",
                    vegetariana: "Veggie",
                    vegana: "Vegana",
                    "sem-lactose": "Sem Lactose",
                    "sem-gluten": "Sem Glúten"
                };
                if (nameMap[f]) activeTags.push(nameMap[f]);
            });
        }

        userState.currentMeals.push({
            id: `dyn-${idx}`,
            type: cat,
            title: template.title + (activeTags.length > 0 ? ` [${activeTags.join(", ")}]` : ""),
            kcal: mealKcal,
            prot: prot,
            carb: carb,
            fat: fat,
            ingredients: adjustedIngredients,
            prep: template.prep,
            time: template.time,
            isFavorite: false
        });
    });

    populateNutritionMealsUI();
    updateShoppingListLiveUI();
}

function populateNutritionMealsUI() {
    const container = document.getElementById("meals-list-container");
    container.innerHTML = "";
    
    userState.currentMeals.forEach((m, idx) => {
        let img = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=250";
        if (m.type.includes("Almoço") || m.type.includes("Jantar")) img = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=250";

        const card = document.createElement("div");
        card.className = "meal-card-item";
        card.onclick = (e) => {
            if (e.target.tagName !== "BUTTON" && !e.target.classList.contains("heart-icon-click")) {
                openRecipeDetail(idx);
            }
        };

        const heartFill = m.isFavorite ? "rgba(232, 165, 152, 1)" : "none";
        const heartColor = m.isFavorite ? "var(--accent-rose)" : "var(--text-secondary)";

        card.innerHTML = `
            <div class="meal-img-box">
                <img src="${img}" alt="${m.title}">
            </div>
            <div class="meal-details-box">
                <div class="card-header-row" style="margin-bottom: 2px;">
                    <span class="meal-category-tag">${m.type}</span>
                    <button class="btn-like heart-icon-click" onclick="toggleFavoriteRecipe(${idx})" style="padding:0; color:${heartColor};">
                        <i data-lucide="heart" fill="${heartFill}"></i>
                    </button>
                </div>
                <h3 class="meal-card-title">${m.title}</h3>
                <p class="meal-card-macros-txt">${m.kcal} kcal • ⏱️ ${m.time} min • P: ${m.prot}g | C: ${m.carb}g | G: ${m.fat}g</p>
                <div class="meal-actions-row">
                    <button class="btn-swap-meal" onclick="swapSingleMeal(${idx})">🔄 Sugerir Outra</button>
                    <button class="btn-swap-meal" style="border-color: #E2E8F0;" onclick="openRecipeDetail(${idx})">📖 Ver Preparo</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    lucide.createIcons();
}

function openRecipeDetail(mealIndex) {
    const m = userState.currentMeals[mealIndex];
    
    document.getElementById("rec-det-tag").innerText = m.type;
    document.getElementById("rec-det-title").innerText = m.title;
    document.getElementById("rec-det-kcal").innerText = `${m.kcal} kcal`;
    document.getElementById("rec-det-prot").innerText = `${m.prot}g`;
    document.getElementById("rec-det-carb").innerText = `${m.carb}g`;
    document.getElementById("rec-det-fat").innerText = `${m.fat}g`;
    
    const ingContainer = document.getElementById("rec-det-ingredients");
    ingContainer.innerHTML = "";
    m.ingredients.forEach(ing => {
        const li = document.createElement("li");
        li.innerText = ing;
        ingContainer.appendChild(li);
    });

    document.getElementById("rec-det-instructions").innerText = m.prep;
    
    openModal("modal-recipe-detail");
}

function toggleFavoriteRecipe(idx) {
    event.stopPropagation();
    userState.currentMeals[idx].isFavorite = !userState.currentMeals[idx].isFavorite;
    populateNutritionMealsUI();
    saveStateToStorage();
}

function swapSingleMeal(index) {
    event.stopPropagation();
    const meal = userState.currentMeals[index];
    const styleEl = document.getElementById("nut-select-style");
    const selectedStyle = styleEl ? styleEl.value : "all";
    
    // Filtra opções extras de substituição (Swap DB) ou gera uma alternativa aleatória da categoria
    const categoryTemplates = recipeTemplates[meal.type];
    const keys = Object.keys(categoryTemplates);
    // Pega uma chave aleatória que não seja a ativa
    let randomKey = keys[Math.floor(Math.random() * keys.length)];
    let alternateTemplate = categoryTemplates[randomKey] || categoryTemplates["all"];
    
    // Substitui a refeição no plano mantendo a caloria alvo
    userState.currentMeals[index] = {
        ...meal,
        title: `${alternateTemplate.title} (Alternativa)`,
        ingredients: [...alternateTemplate.ingredients],
        prep: alternateTemplate.prep,
        time: alternateTemplate.time
    };
    
    populateNutritionMealsUI();
    updateShoppingListLiveUI();
    saveStateToStorage();
    
    // Alerta sutil de feedback
    alert(`Receita alternada! Nova opção: "${userState.currentMeals[index].title}". A lista de compras semanal foi atualizada automaticamente.`);
}

function searchNutritionRecipes() {
    const query = document.getElementById("recipe-search-input").value.toLowerCase();
    const items = document.querySelectorAll("#meals-list-container .meal-card-item");
    
    items.forEach((item, idx) => {
        const meal = userState.currentMeals[idx];
        const matchTitle = meal.title.toLowerCase().includes(query);
        const matchIngredients = meal.ingredients.some(ing => ing.toLowerCase().includes(query));
        
        if (matchTitle || matchIngredients) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function saveCardapioAction() {
    alert("✨ Cardápio Semanal Salvo! Suas preferências foram salvas na nuvem com sucesso.");
}

// ATUALIZAÇÃO DA LISTA DE COMPRAS EM TEMPO REAL
function updateShoppingListLiveUI() {
    const container = document.getElementById("shopping-list-live-container");
    container.innerHTML = "";
    
    // Junta todos os ingredientes de todas as refeições do plano ativo
    let allIngredients = [];
    userState.currentMeals.forEach(m => {
        allIngredients = allIngredients.concat(m.ingredients);
    });

    // Remove duplicados e exibe na checklist
    const uniqueIngredients = [...new Set(allIngredients)];
    
    uniqueIngredients.forEach((ing, idx) => {
        const itemRow = document.createElement("div");
        itemRow.className = "shopping-item-row";
        itemRow.onclick = () => {
            const chk = itemRow.querySelector("input");
            chk.checked = !chk.checked;
            if (chk.checked) itemRow.classList.add("checked");
            else itemRow.classList.remove("checked");
        };

        itemRow.innerHTML = `
            <input type="checkbox" id="ing-chk-${idx}">
            <label for="ing-chk-${idx}">${ing}</label>
        `;
        container.appendChild(itemRow);
    });
}

function generateShoppingList() {
    let list = "🛒 LISTA DE COMPRAS SEMANAL FUSE 🛒\n\n";
    userState.currentMeals.forEach(m => {
        list += `• ${m.type} (${m.title}):\n`;
        m.ingredients.forEach(i => list += `   - ${i}\n`);
    });
    alert(list + "\nLista copiada para sua área de transferência (Simulação).");
}

// 7. COMUNIDADE E REDE SOCIAL
function previewPostImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImg = document.getElementById("post-image-preview");
            const previewContainer = document.getElementById("post-image-preview-container");
            previewImg.src = e.target.result;
            previewContainer.style.display = "block";
        }
        reader.readAsDataURL(file);
    }
}

function removePostImagePreview() {
    const previewImg = document.getElementById("post-image-preview");
    const previewContainer = document.getElementById("post-image-preview-container");
    const fileInput = document.getElementById("post-image-file");
    previewImg.src = "";
    previewContainer.style.display = "none";
    if (fileInput) fileInput.value = "";
}

function createNewPost() {
    const textInput = document.getElementById("post-input");
    const text = textInput.value.trim();
    const previewImg = document.getElementById("post-image-preview");
    const imageSrc = previewImg.src;
    const hasImage = previewImg.style.display !== "none" && imageSrc;
    
    if (!text && !hasImage) {
        alert("Sua publicação precisa de pelo menos uma mensagem ou foto.");
        return;
    }
    
    // Default mock image if they clicked publish but didn't upload any file
    const finalImage = hasImage ? imageSrc : "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=350";
    
    const newPost = {
        id: "p_" + Date.now(),
        author: userState.name || "Amanda Fernandes",
        avatar: userState.profilePhoto || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        level: userState.levelNum || 1,
        time: "Agora mesmo",
        content: text || "Treino concluído com sucesso! 💪✨",
        image: finalImage,
        likes: 0,
        likedByMe: false,
        reports: 0,
        comments: []
    };
    
    if (!userState.communityPosts) {
        userState.communityPosts = [...defaultPosts];
    }
    
    userState.communityPosts.unshift(newPost);
    
    // LÓGICA DE PONTUAÇÃO DO DESAFIO:
    // Apenas a primeira publicação válida do dia gera pontos!
    const todayStr = new Date().toISOString().slice(0, 10);
    if (userState.lastPostPointsDate !== todayStr) {
        userState.lastPostPointsDate = todayStr;
        
        // Atribui 20 pontos de desafio
        userState.challengePoints += 20;
        
        // Marca a tarefa como concluída no desafio
        userState.challengeTasksCompleted[5] = true; // "community" task index is 5!
        
        alert("🎉 Conquista compartilhada! +20 pontos computados no ranking do Desafio Core!");
    } else {
        alert("Publicação enviada com sucesso para o Círculo!");
    }
    
    // Reseta o input e a imagem
    textInput.value = "";
    removePostImagePreview();
    
    addXP(15);
    saveStateToStorage();
    renderCommunityFeed();
    renderChallengeUI();
    updateProgressUI();
}

function toggleLikePost(postId) {
    const post = userState.communityPosts.find(p => p.id === postId);
    if (post) {
        post.likedByMe = !post.likedByMe;
        post.likes = post.likedByMe ? post.likes + 1 : post.likes - 1;
        saveStateToStorage();
        renderCommunityFeed();
    }
}

function toggleCommentsSection(postId) {
    const box = document.getElementById(`comments-box-${postId}`);
    if (box) {
        box.style.display = box.style.display === "none" ? "block" : "none";
    }
}

function handleCommentKeyPress(event, postId) {
    if (event.key === "Enter") {
        submitNewComment(postId);
    }
}

function submitNewComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (!text) return;
    
    const post = userState.communityPosts.find(p => p.id === postId);
    if (post) {
        if (!post.comments) post.comments = [];
        post.comments.push({
            author: userState.name || "Amanda Fernandes",
            content: text
        });
        input.value = "";
        saveStateToStorage();
        renderCommunityFeed();
    }
}

let selectedReportReasonText = "";

function openReportPostModal(postId) {
    document.getElementById("report-target-post-id").value = postId;
    selectedReportReasonText = "";
    
    const options = document.querySelectorAll(".report-reason-option");
    options.forEach(opt => opt.classList.remove("active"));
    
    openModal("modal-report-post");
}

function selectReportReason(reason, el) {
    selectedReportReasonText = reason;
    const options = document.querySelectorAll(".report-reason-option");
    options.forEach(opt => opt.classList.remove("active"));
    el.classList.add("active");
}

function submitReportPost(testInstant) {
    const postId = document.getElementById("report-target-post-id").value;
    
    if (!selectedReportReasonText && !testInstant) {
        alert("Por favor, selecione um motivo para a denúncia.");
        return;
    }
    
    const posts = userState.communityPosts || [];
    const post = posts.find(p => p.id === postId);
    if (!post) {
        closeModal("modal-report-post");
        return;
    }
    
    const added = testInstant ? 10 : 1;
    post.reports = (post.reports || 0) + added;
    
    if (post.reports >= 10) {
        // Remove do feed
        userState.communityPosts = posts.filter(p => p.id !== postId);
        
        // Se for o post da própria usuária, remove os pontos do desafio!
        if (post.author === userState.name) {
            const todayStr = new Date().toISOString().slice(0, 10);
            if (userState.lastPostPointsDate === todayStr) {
                userState.challengePoints = Math.max(0, userState.challengePoints - 20);
                userState.challengeTasksCompleted[5] = false;
                userState.lastPostPointsDate = ""; // Permite postar de novo para tentar recuperar
                alert("⚠️ Sua publicação foi removida do feed por excesso de denúncias! Os 20 pontos associados foram removidos do seu ranking.");
            } else {
                alert("⚠️ Sua publicação foi removida por excesso de denúncias.");
            }
        } else {
            alert("Publicação removida com sucesso devido ao excesso de denúncias da comunidade.");
        }
    } else {
        alert(`Denúncia registrada! A publicação acumulou ${post.reports}/10 denúncias.`);
    }
    
    closeModal("modal-report-post");
    saveStateToStorage();
    renderCommunityFeed();
    renderChallengeUI();
}

function renderCommunityFeed() {
    const feedContainer = document.getElementById("feed-container");
    if (!feedContainer) return;
    
    if (!userState.communityPosts) {
        userState.communityPosts = [...defaultPosts];
    }
    
    feedContainer.innerHTML = "";
    
    userState.communityPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "community-post-card";
        card.style.animation = "fadeIn 0.3s ease";
        
        let imageHtml = "";
        if (post.image) {
            imageHtml = `<img src="${post.image}" class="post-uploaded-img" alt="Foto da publicação">`;
        }
        
        const likeClass = post.likedByMe ? "btn-like-active" : "btn-like";
        const likeFillAttr = post.likedByMe ? 'fill="currentColor"' : "";
        
        let commentsHtml = "";
        if (post.comments && post.comments.length > 0) {
            commentsHtml = post.comments.map(c => `
                <div class="comment-item">
                    <span class="comment-author">${c.author}:</span>
                    <span>${c.content}</span>
                </div>
            `).join("");
        }
        
        card.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="Avatar ${post.author}" class="post-user-avatar">
                <div>
                    <span class="post-user-name">${post.author}</span>
                    <div class="post-badge-group">
                        <span class="user-level-badge">Nível ${post.level}</span>
                        <span class="post-time">• ${post.time}</span>
                    </div>
                </div>
                <button class="btn-report" onclick="openReportPostModal('${post.id}')" style="margin-left:auto; background:transparent; border:none; color:var(--text-secondary); cursor:pointer; font-size:11px; display:flex; align-items:center; gap:4px; padding: 4px 8px;">
                    <i data-lucide="flag" style="width:11px; height:11px;"></i> Denunciar
                </button>
            </div>
            
            <p class="post-content">${post.content}</p>
            
            ${imageHtml}
            
            <div class="post-actions">
                <button class="${likeClass}" onclick="toggleLikePost('${post.id}')">
                    <i data-lucide="heart" ${likeFillAttr}></i> <span class="like-count">${post.likes}</span> apoios
                </button>
                <button class="btn-comment" onclick="toggleCommentsSection('${post.id}')">
                    <i data-lucide="message-circle"></i> <span class="comment-count">${post.comments ? post.comments.length : 0}</span> comentários
                </button>
            </div>
            
            <div class="comment-section-box" id="comments-box-${post.id}" style="display: none;">
                <div class="comment-input-box">
                    <input type="text" placeholder="Escreva um comentário motivador..." class="comment-text-input" id="comment-input-${post.id}" onkeypress="handleCommentKeyPress(event, '${post.id}')">
                    <button class="btn-send-comment" onclick="submitNewComment('${post.id}')">Enviar</button>
                </div>
                <div class="comments-list">
                    ${commentsHtml || '<p style="font-size:10px; color:var(--text-secondary); text-align:center; padding: 4px 0;">Seja a primeira a comentar! 💖</p>'}
                </div>
            </div>
        `;
        feedContainer.appendChild(card);
    });
    
    lucide.createIcons();
}

// 8. PERFIL & ATUALIZAÇÕES DE PESO
function updateWeightModal() {
    const input = prompt("Qual o seu peso atual verificado hoje (kg)?", userState.weight);
    const val = parseFloat(input);
    if (!isNaN(val) && val > 20) {
        userState.weight = val;
        document.getElementById("prof-current-weight").innerText = `${val} kg`;
        
        // Atualiza macros calóricos se o peso mudar substancialmente
        finishOnboarding();
        alert(`Peso atualizado com sucesso para ${val} kg. Suas necessidades calóricas semanais foram recalculadas!`);
    } else {
        alert("Valor de peso inválido.");
    }
}

// 9. PROPÓSITO 7 DIAS — EVANGELHO DE JOÃO (JORNADA DEVOCIONAL)

const PROPOSITO_SCHEDULE = [
    {
        day: 1,
        chapters: "João 1, 2 e 3",
        theme: "O Verbo se fez carne • Primeiros sinais da graça",
        scripture: "“No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.” (João 1:1)",
        guidance: "Reserve este instante em silêncio. Não tenha pressa em apenas virar páginas: permita que cada versículo ecoe no seu espírito."
    },
    {
        day: 2,
        chapters: "João 4, 5 e 6",
        theme: "A Samaritana • A Cura • O Pão da Vida",
        scripture: "“Aquele, porém, que beber da água que eu lhe der nunca mais terá sede.” (João 4:14)",
        guidance: "Perceba como Jesus encontra pessoas no seu cotidiano e sacia a sede mais profunda da alma."
    },
    {
        day: 3,
        chapters: "João 7, 8 e 9",
        theme: "A Água Viva • A Luz do Mundo • O Cego de Nascença",
        scripture: "“Eu sou a luz do mundo; quem me segue não andará nas trevas; pelo contrário, terá a luz da vida.” (João 8:12)",
        guidance: "Abra os olhos do coração para reconhecer a luz de Cristo dissipando qualquer escuridão ou dúvida."
    },
    {
        day: 4,
        chapters: "João 10, 11 e 12",
        theme: "O Bom Pastor • A Ressurreição de Lázaro",
        scripture: "“Eu sou o bom pastor; o bom pastor dá a vida pelas ovelhas.” (João 10:11)",
        guidance: "Ouça a voz mansa do Bom Pastor que te chama pelo nome e cuida de cada detalhe da sua caminhada."
    },
    {
        day: 5,
        chapters: "João 13, 14 e 15",
        theme: "O Lava-pés • O Consolador • A Videira Verdadeira",
        scripture: "“Eu sou a videira, vós, os ramos. Quem permanece em mim, e eu, nele, esse dá muito fruto.” (João 15:5)",
        guidance: "Permaneça conectada à Videira Verdadeira através do descanso e da oração sincera."
    },
    {
        day: 6,
        chapters: "João 16, 17 e 18",
        theme: "A Obra do Espírito • A Oração Sacerdotal • A Entrega",
        scripture: "“No mundo, passais por aflições; mas tende bom ânimo; eu venci o mundo.” (João 16:33)",
        guidance: "Sinta a oração de Jesus por você e a paz consoladora do Espírito Santo que habita em nós."
    },
    {
        day: 7,
        chapters: "João 19, 20 e 21",
        theme: "A Cruz • A Ressurreição • O Encontro na Praia",
        scripture: "“Disse-lhes outra vez: Paz seja convosco! Assim como o Pai me enviou, eu também vos envio.” (João 20:21)",
        guidance: "Celebre o amor que venceu a morte e o convite renovado para segui-Lo todos os dias com devoção."
    }
];

function ensurePropositoState() {
    if (!userState.proposito) {
        userState.proposito = {
            activeDay: 1,
            completedDays: [],
            reflections: {}
        };
    }
    if (!Array.isArray(userState.proposito.completedDays)) {
        userState.proposito.completedDays = [];
    }
    if (!userState.proposito.reflections || typeof userState.proposito.reflections !== 'object') {
        userState.proposito.reflections = {};
    }
    if (!userState.proposito.activeDay || userState.proposito.activeDay < 1 || userState.proposito.activeDay > 7) {
        userState.proposito.activeDay = 1;
    }
}

function selectPropositoDay(dayNum) {
    ensurePropositoState();
    if (dayNum < 1 || dayNum > 7) return;
    userState.proposito.activeDay = dayNum;
    renderPropositoUI();
}

function togglePropositoCheckin() {
    ensurePropositoState();
    const activeDay = userState.proposito.activeDay;
    const completed = userState.proposito.completedDays;
    const idx = completed.indexOf(activeDay);
    
    if (idx >= 0) {
        completed.splice(idx, 1);
    } else {
        completed.push(activeDay);
        completed.sort((a, b) => a - b);
        
        // Se concluiu todos os 7 dias
        if (completed.length === 7) {
            setTimeout(() => {
                alert("Parabéns por concluir os 7 Dias do Evangelho de João! 🤍\nQue a Palavra continue viva e frutificando no seu coração todos os dias.");
            }, 300);
        }
    }
    
    saveStateToStorage();
    renderPropositoUI();
}

function savePropositoReflection() {
    // Guia de anotações manuais no caderno / Bíblia
}

function renderPropositoUI() {
    ensurePropositoState();
    
    const counterEl = document.getElementById("proposito-counter-txt");
    const fillEl = document.getElementById("proposito-progress-fill");
    const daysContainer = document.getElementById("proposito-days-container");
    const dayBadge = document.getElementById("proposito-day-badge");
    const readingTitle = document.getElementById("proposito-reading-title");
    const readingTheme = document.getElementById("proposito-reading-theme");
    const checkinBtn = document.getElementById("btn-proposito-checkin");
    const checkinBoxIcon = document.getElementById("checkin-checkbox-icon");
    const checkinBtnLabel = document.getElementById("checkin-btn-label");
    const completionCard = document.getElementById("proposito-completion-card");
    
    if (!counterEl || !fillEl || !daysContainer) return;
    
    const completedCount = userState.proposito.completedDays.length;
    counterEl.innerText = `Propósito: ${completedCount}/7 dias concluídos`;
    const percent = Math.round((completedCount / 7) * 100);
    fillEl.style.width = `${percent}%`;
    
    // Renderiza a linha do tempo dos 7 dias
    daysContainer.innerHTML = "";
    for (let d = 1; d <= 7; d++) {
        const isCompleted = userState.proposito.completedDays.includes(d);
        const isSelected = userState.proposito.activeDay === d;
        
        const dayBtn = document.createElement("button");
        dayBtn.type = "button";
        dayBtn.onclick = () => selectPropositoDay(d);
        
        let bg = "#F8FAFC";
        let border = "1px solid #E2E8F0";
        let textColor = "var(--text-secondary)";
        let iconHtml = `<span style="font-size: 13px; opacity: 0.6;">○</span>`;
        
        if (isCompleted) {
            bg = "#FFF1F2";
            border = "1px solid #FDA4AF";
            textColor = "var(--accent-rose)";
            iconHtml = `<span style="font-size: 13px; font-weight: bold; color: var(--accent-rose);">✓</span>`;
        }
        
        if (isSelected) {
            bg = "var(--accent-rose)";
            border = "1.5px solid var(--accent-rose)";
            textColor = "#ffffff";
            dayBtn.style.boxShadow = "0 4px 12px rgba(251, 113, 133, 0.35)";
        }
        
        dayBtn.style.cssText += `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 8px 4px;
            border-radius: 10px;
            background: ${bg};
            border: ${border};
            color: ${textColor};
            cursor: pointer;
            transition: all 0.2s ease;
        `;
        
        dayBtn.innerHTML = `
            ${iconHtml}
            <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.3px;">Dia ${d}</span>
        `;
        
        daysContainer.appendChild(dayBtn);
    }
    
    // Leitura do dia ativo
    const activeDay = userState.proposito.activeDay;
    const schedule = PROPOSITO_SCHEDULE.find(s => s.day === activeDay) || PROPOSITO_SCHEDULE[0];
    
    if (dayBadge) dayBadge.innerText = `DIA ${schedule.day}`;
    if (readingTitle) readingTitle.innerText = schedule.chapters;
    if (readingTheme) readingTheme.innerText = schedule.theme;
    
    const isDayCompleted = userState.proposito.completedDays.includes(activeDay);
    if (checkinBtn && checkinBoxIcon && checkinBtnLabel) {
        if (isDayCompleted) {
            checkinBoxIcon.innerText = "☑";
            checkinBtnLabel.innerText = "✓ Concluí a leitura de hoje";
            checkinBtn.style.background = "#ECFDF5";
            checkinBtn.style.borderColor = "#A7F3D0";
            checkinBtn.style.color = "#10B981";
        } else {
            checkinBoxIcon.innerText = "☐";
            checkinBtnLabel.innerText = "Concluí a leitura de hoje";
            checkinBtn.style.background = "#FFF1F2";
            checkinBtn.style.borderColor = "var(--accent-rose)";
            checkinBtn.style.color = "var(--accent-rose)";
        }
    }
    
    // Exibe ou oculta card de conclusão final
    if (completionCard) {
        if (completedCount === 7) {
            completionCard.style.display = "block";
        } else {
            completionCard.style.display = "none";
        }
    }
    
    if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
    }
}

// Compatibilidade com chamadas legadas
function renderChallengeUI() {
    renderPropositoUI();
}

function selectChallengeDay(dayNum) {
    selectPropositoDay(dayNum);
}

function openPaymentModal() {
    openModal("modal-payment");
}

let activePaymentMethod = "pix";

function selectPaymentMethod(method) {
    activePaymentMethod = method;
    const btnPix = document.getElementById("btn-pay-pix");
    const btnCard = document.getElementById("btn-pay-card");
    const boxPix = document.getElementById("pix-payment-box");
    const boxCard = document.getElementById("card-payment-box");
    
    if (method === "pix") {
        btnPix.classList.add("active");
        btnPix.style.background = "rgba(232, 165, 152, 0.08)";
        btnPix.style.borderColor = "var(--accent-rose)";
        btnPix.querySelector("span").style.color = "var(--text-primary)";
        
        btnCard.classList.remove("active");
        btnCard.style.background = "rgba(255, 255, 255, 0.02)";
        btnCard.style.borderColor = "rgba(255, 255, 255, 0.08)";
        btnCard.querySelector("span").style.color = "var(--text-secondary)";
        
        boxPix.style.display = "block";
        boxCard.style.display = "none";
    } else {
        btnCard.classList.add("active");
        btnCard.style.background = "rgba(232, 165, 152, 0.08)";
        btnCard.style.borderColor = "var(--accent-rose)";
        btnCard.querySelector("span").style.color = "var(--text-primary)";
        
        btnPix.classList.remove("active");
        btnPix.style.background = "rgba(255, 255, 255, 0.02)";
        btnPix.style.borderColor = "rgba(255, 255, 255, 0.08)";
        btnPix.querySelector("span").style.color = "var(--text-secondary)";
        
        boxCard.style.display = "block";
        boxPix.style.display = "none";
    }
}

function confirmChallengePayment() {
    if (activePaymentMethod === "card") {
        const cardNum = document.getElementById("pay-card-num").value.trim();
        const cardExp = document.getElementById("pay-card-exp").value.trim();
        const cardCvv = document.getElementById("pay-card-cvv").value.trim();
        
        if (cardNum === "" || cardExp === "" || cardCvv === "") {
            alert("Por favor, preencha todos os campos do cartão.");
            return;
        }
    }
    
    // Inscrição com sucesso
    userState.challengeSubscribed = true;
    closeModal("modal-payment");
    
    alert("🎉 Inscrição Confirmada! Você acaba de entrar no Desafio Core: 21 Dias de Disciplina. Vamos transformar nossos hábitos juntas!");
    
    renderChallengeUI();
    saveStateToStorage();
    switchTab("challenge");
}

function completeChallengeTask(taskKey, btnEl) {
    const currentChallengeDay = getChallengeDay(userState.challengeStartedAt);
    if (currentChallengeDay < 1 || currentChallengeDay > 21) {
        alert("O desafio não está ativo no momento. Verifique as datas correspondentes.");
        return;
    }
    
    const taskKeys = ["workout", "diet", "weight", "water", "checkin", "community"];
    const idx = taskKeys.indexOf(taskKey);
    if (idx === -1) return;
    
    const dayKey = String(currentChallengeDay);
    if (!userState.challengeProgress) userState.challengeProgress = {};
    if (!userState.challengeProgress[dayKey]) {
        userState.challengeProgress[dayKey] = {
            date: getTodayStr(),
            tasksCompleted: [false, false, false, false, false, false],
            pointsEarned: 0,
            completedAt: null
        };
    }
    
    const dayProgress = userState.challengeProgress[dayKey];
    if (dayProgress.tasksCompleted[idx]) return;
    
    // Marca como completado no dia do desafio
    dayProgress.tasksCompleted[idx] = true;
    dayProgress.pointsEarned += 20;
    
    // Sincroniza com as tarefas de hoje para manter compatibilidade e exibição na Home se necessário
    userState.challengeTasksCompleted[idx] = true;
    
    // Incrementa pontos globais
    userState.challengePoints += 20;
    
    // Verifica se completou todas as 6 tarefas do dia
    if (dayProgress.tasksCompleted.every(t => t)) {
        dayProgress.completedAt = new Date().toISOString();
    }
    
    addXP(15); // Ganha XP geral
    
    alert(`🌟 Incrível! Você completou a tarefa do desafio (Dia ${currentChallengeDay}): +20 Pontos & +15 XP Geral!`);
    
    renderChallengeUI();
    saveStateToStorage();
}

function openEditProfileModal() {
    document.getElementById("edit-prof-name").value = userState.name;
    document.getElementById("edit-prof-age").value = userState.age;
    document.getElementById("edit-prof-height").value = userState.height;
    document.getElementById("edit-prof-weight").value = userState.weight;
    document.getElementById("edit-prof-init-weight").value = userState.initialWeight;
    document.getElementById("edit-prof-goal").value = userState.goal;
    document.getElementById("edit-prof-place").value = userState.place;
    document.getElementById("edit-prof-level").value = userState.level;
    
    // Mostra a foto atual no preview
    const previewEl = document.getElementById("edit-prof-avatar-preview");
    if (previewEl) {
        previewEl.src = userState.profilePhoto || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150";
    }
    
    openModal("modal-edit-profile");
}

function saveEditProfileChanges() {
    const nameVal = document.getElementById("edit-prof-name").value.trim();
    const ageVal = parseInt(document.getElementById("edit-prof-age").value);
    const heightVal = parseInt(document.getElementById("edit-prof-height").value);
    const weightVal = parseFloat(document.getElementById("edit-prof-weight").value);
    const initWeightVal = parseFloat(document.getElementById("edit-prof-init-weight").value);
    const goalVal = document.getElementById("edit-prof-goal").value;
    const placeVal = document.getElementById("edit-prof-place").value;
    const levelVal = document.getElementById("edit-prof-level").value;
    
    if (nameVal === "" || isNaN(ageVal) || isNaN(heightVal) || isNaN(weightVal) || isNaN(initWeightVal)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    // Atualiza o estado
    userState.name = nameVal;
    userState.age = ageVal;
    userState.height = heightVal;
    userState.weight = weightVal;
    userState.initialWeight = initWeightVal;
    userState.goal = goalVal;
    userState.place = placeVal;
    userState.level = levelVal;
    
    // Recalcula necessidades nutricionais
    recalculateUserNutritionAndMacros();
    
    // Fecha modal
    closeModal("modal-edit-profile");
    
    // Recarrega todos os dados da sessão na tela
    restoreSession();
    
    alert("✨ Perfil e objetivos atualizados! Suas necessidades diárias foram recalculadas com sucesso.");
}

function logoutUserAction() {
    if (confirm("Deseja realmente sair da sua conta? Seu progresso continuará salvo na nuvem.")) {
        // Limpa usuário logado ativo
        currentUserEmail = "";
        localStorage.removeItem("fuse_current_user_email");
        userState = JSON.parse(JSON.stringify(defaultState)); // Restaura para cópia limpa do defaultState
        
        // Esconde container do app e mostra login
        document.getElementById("app-screen").style.display = "none";
        document.getElementById("auth-screen").classList.add("active");
        
        alert("Você saiu da conta com sucesso.");
    }
}

let selectedSubPlan = "yearly";
let selectedSubPaymentMethod = "pix";

function selectSubscriptionPlan(plan) {
    selectedSubPlan = plan;
    const planMonthly = document.getElementById("plan-monthly");
    const planYearly = document.getElementById("plan-yearly");
    
    if (plan === "monthly") {
        planMonthly.style.borderColor = "var(--accent-rose)";
        planMonthly.style.background = "rgba(232, 165, 152, 0.05)";
        planYearly.style.borderColor = "rgba(255,255,255,0.06)";
        planYearly.style.background = "rgba(255,255,255,0.01)";
    } else {
        planYearly.style.borderColor = "var(--accent-rose)";
        planYearly.style.background = "rgba(232, 165, 152, 0.05)";
        planMonthly.style.borderColor = "rgba(255,255,255,0.06)";
        planMonthly.style.background = "rgba(255,255,255,0.01)";
    }
}

function selectSubPaymentMethod(method) {
    selectedSubPaymentMethod = method;
    const btnPix = document.getElementById("btn-sub-pay-pix");
    const btnCard = document.getElementById("btn-sub-pay-card");
    const boxPix = document.getElementById("sub-pix-payment-box");
    const boxCard = document.getElementById("sub-card-payment-box");
    
    if (method === "pix") {
        btnPix.style.borderColor = "var(--accent-rose)";
        btnPix.style.background = "rgba(232, 165, 152, 0.08)";
        btnPix.querySelector("span").style.color = "var(--text-primary)";
        
        btnCard.style.borderColor = "rgba(255,255,255,0.08)";
        btnCard.style.background = "rgba(255,255,255,0.02)";
        btnCard.querySelector("span").style.color = "var(--text-secondary)";
        
        boxPix.style.display = "block";
        boxCard.style.display = "none";
    } else {
        btnCard.style.borderColor = "var(--accent-rose)";
        btnCard.style.background = "rgba(232, 165, 152, 0.08)";
        btnCard.querySelector("span").style.color = "var(--text-primary)";
        
        btnPix.style.borderColor = "rgba(255,255,255,0.08)";
        btnPix.style.background = "rgba(255,255,255,0.02)";
        btnPix.querySelector("span").style.color = "var(--text-secondary)";
        
        boxPix.style.display = "none";
        boxCard.style.display = "block";
    }
}

function confirmAppSubscription() {
    closeModal("modal-subscription-checkout");
    
    alert("🎉 Assinatura Ativada! Seja muito bem-vinda ao FUSE Premium. Vamos começar a configurar o seu perfil!");
    
    // Prossiga para onboarding
    document.getElementById("onboarding-screen").classList.add("active");
    updateOnboardingStepUI();
}

// INTEGRAÇÃO DE ASSINATURA CAKTO (WEBHOOK & REDIRECT)
function checkCaktoUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const caktoEmail = urlParams.get("cakto_email");
    const caktoName = urlParams.get("cakto_name");
    const caktoStatus = urlParams.get("cakto_status");
    
    if (caktoEmail && caktoStatus === "approved") {
        const emailClean = caktoEmail.trim().toLowerCase();
        const nameClean = caktoName ? decodeURIComponent(caktoName).trim() : "Cliente FUSE";
        const productParam = urlParams.get("cakto_product") || "fuse";
        const isChallenge = productParam.toLowerCase().includes("desafio");
        const transactionId = urlParams.get("transaction_id") || "trans_redirect_" + Date.now();
        
        // Cria usuário se não existir ou atualiza status de pagamento
        if (!usersDB[emailClean]) {
            usersDB[emailClean] = {
                password: "senha123", // senha padrão de ativação automática
                userState: {
                    ...defaultState,
                    user_id: generateUUID(),
                    createdAt: new Date().toISOString(),
                    name: nameClean,
                    email: emailClean,
                    hasLoggedIn: false
                }
            };
        }
        
        const state = usersDB[emailClean].userState;
        
        // Idempotência no redirect
        if (!state.processedTransactions) state.processedTransactions = [];
        if (!state.processedTransactions.includes(transactionId)) {
            state.processedTransactions.push(transactionId);
            
            state.communityJoinedAt = new Date().toISOString();
            state.challengeSubscribed = true;
            state.challengeAccess = true;
            state.challengeStartedAt = "2026-08-23"; // Data de início do desafio
            state.purchasedAt = new Date().toISOString();
            state.purchasedProduct = "FUSE Premium + Desafio Core";
            state.purchaseStatus = "paid";
        }
        
        currentUserEmail = emailClean;
        userState = state;
        saveStateToStorage();
        
        // Limpa os parâmetros da URL
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
        
        alert(`🎉 Bem-vinda ao FUSE, ${nameClean}!\n\nSeu acesso à Comunidade e ao Desafio Core foi liberado com sucesso.`);
        
        if (state.hasLoggedIn || state.anamneseConcluida) {
            restoreSession();
        } else {
            document.getElementById("auth-screen").classList.remove("active");
            document.getElementById("onboarding-screen").classList.add("active");
            updateOnboardingStepUI();
        }
        return true;
    }
    return false;
}

function simulateCaktoWebhook() {
    const nameInput = document.getElementById("cakto-sim-name").value.trim();
    const emailInput = document.getElementById("cakto-sim-email").value.trim().toLowerCase();
    const productSelect = document.getElementById("cakto-sim-product");
    const productVal = productSelect ? productSelect.value : "FUSE";
    
    if (!nameInput || !emailInput) {
        alert("Por favor, preencha o nome e e-mail para simular o Webhook.");
        return;
    }
    
    const transactionId = "trans_webhook_" + Date.now();
    const isChallenge = productVal === "Desafio Core";
    
    // Cria ou recupera o usuário no banco de dados local simulado
    if (!usersDB[emailInput]) {
        usersDB[emailInput] = {
            password: "senha123",
            userState: {
                ...defaultState,
                user_id: generateUUID(),
                createdAt: new Date().toISOString(),
                name: nameInput,
                email: emailInput,
                hasLoggedIn: false
            }
        };
    }
    
    const state = usersDB[emailInput].userState;
    if (!state.processedTransactions) state.processedTransactions = [];
    
    // Idempotência
    if (state.processedTransactions.includes(transactionId)) {
        alert(`⚠️ [SIMULAÇÃO WEBHOOK]\n\nTransação ${transactionId} já processada (Idempotência).`);
        return;
    }
    
    state.processedTransactions.push(transactionId);
    
    if (isChallenge) {
        state.challengeSubscribed = true;
        state.challengeAccess = true;
        state.challengeStartedAt = "2026-08-23"; // Data de início do desafio
        state.purchasedAt = new Date().toISOString();
        state.purchasedProduct = "Desafio Core";
        state.purchaseStatus = "paid";
    } else {
        state.communityJoinedAt = new Date().toISOString();
    }
    
    localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
    
    alert(`⚡ [WEBHOOK CAKTO - SIMULAÇÃO]\n\nEvento: purchase_approved\nID Transação: ${transactionId}\nCliente: ${nameInput}\nE-mail: ${emailInput}\nProduto: ${productVal}\n\nResultado: Compra registrada e acesso liberado com sucesso no banco de dados FUSE!`);
}

function simulateCaktoRedirect() {
    const nameInput = document.getElementById("cakto-sim-name").value.trim();
    const emailInput = document.getElementById("cakto-sim-email").value.trim().toLowerCase();
    const productSelect = document.getElementById("cakto-sim-product");
    const productVal = productSelect ? productSelect.value : "FUSE";
    
    if (!nameInput || !emailInput) {
        alert("Por favor, preencha o nome e e-mail para simular.");
        return;
    }
    
    const encodedName = encodeURIComponent(nameInput);
    const prodParam = productVal === "Desafio Core" ? "desafio" : "fuse";
    const transactionId = "trans_redirect_" + Date.now();
    const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?cakto_email=${emailInput}&cakto_name=${encodedName}&cakto_status=approved&cakto_product=${prodParam}&transaction_id=${transactionId}`;
    
    alert(`🔗 Redirecionando para a URL de Retorno da Cakto:\n\n${redirectUrl}`);
    window.location.href = redirectUrl;
}

function renderWeeklyTracker() {
    const container = document.getElementById("weekly-tracker-container");
    if (!container) return;
    
    container.innerHTML = "";
    const daysLabel = ["S", "T", "Q", "Q", "S", "S", "D"];
    
    if (!userState.weeklyCheckins) {
        userState.weeklyCheckins = [true, true, true, true, true, true, false];
    }
    
    userState.weeklyCheckins.forEach((completed, index) => {
        const dotDiv = document.createElement("div");
        dotDiv.className = `weekday-dot ${completed ? "completed" : (index === 6 ? "active" : "")}`;
        dotDiv.style.cursor = "pointer";
        dotDiv.setAttribute("onclick", `toggleWeeklyDay(${index})`);
        
        dotDiv.innerHTML = `
            <span>${daysLabel[index]}</span>
            <i data-lucide="${completed ? "check" : "circle"}"></i>
        `;
        
        container.appendChild(dotDiv);
    });
    
    lucide.createIcons();
}

function toggleWeeklyDay(index) {
    if (!userState.weeklyCheckins) {
        userState.weeklyCheckins = [true, true, true, true, true, true, false];
    }
    
    const wasCompleted = userState.weeklyCheckins[index];
    userState.weeklyCheckins[index] = !wasCompleted;
    
    // Se marcou como completado, aumenta o streak, senão diminui
    if (userState.weeklyCheckins[index]) {
        userState.streak += 1;
        if (index === 6) {
            userState.streakUpdated = true;
        }
    } else {
        userState.streak = Math.max(0, userState.streak - 1);
        if (index === 6) {
            userState.streakUpdated = false;
        }
    }
    
    // Atualiza contadores visuais
    document.getElementById("streak-counter").innerText = `${userState.streak} dias ativos`;
    document.getElementById("profile-streak-count").innerText = userState.streak;
    
    const modalStreakVal = document.getElementById("modal-streak-val");
    if (modalStreakVal) {
        modalStreakVal.innerText = `${userState.streak} Dias de Streak 🔥`;
    }
    
    // Atualiza conquista de medalha no perfil
    const medal = document.getElementById("medal-ritual-perfeito");
    if (userState.streak >= 8) {
        if (medal) {
            medal.classList.remove("blocked");
            medal.querySelector(".badge-item-desc").innerText = "Desbloqueado!";
        }
    } else {
        if (medal) {
            medal.classList.add("blocked");
            medal.querySelector(".badge-item-desc").innerText = "Bloqueado (8 dias streak)";
        }
    }
    
    saveStateToStorage();
    renderWeeklyTracker();
}

function skipOnboardingToLogin() {
    document.getElementById("onboarding-screen").classList.remove("active");
    document.getElementById("auth-screen").classList.add("active");
    
    // Configura o formulário para modo login
    authMode = "login";
    const loginWrapper = document.getElementById("login-form-wrapper");
    const registerWrapper = document.getElementById("register-form-wrapper");
    const titleText = document.getElementById("auth-subtitle-text");
    const btnToggle = document.getElementById("auth-toggle-btn");
    const descToggle = document.getElementById("auth-toggle-desc");
    
    loginWrapper.style.display = "block";
    registerWrapper.style.display = "none";
    titleText.innerText = "Faça login para continuar sua jornada";
    btnToggle.innerText = "Ativar conta";
    descToggle.innerText = "Primeiro acesso?";
}

function compressAndSaveAvatar(file, previewId, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const maxDim = 120; // 120x120 é perfeito para avatar e ocupa ~3-4KB!
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
                if (width > maxDim) {
                    height = Math.round(height * maxDim / width);
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round(width * maxDim / height);
                    height = maxDim;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            
            // Converte para JPEG comprimido (alta compressão, qualidade 0.7)
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
            
            // Atualiza preview no DOM
            const previewEl = document.getElementById(previewId);
            if (previewEl) previewEl.src = compressedDataUrl;
            
            // Executa callback passando o data URL comprimido
            if (callback) callback(compressedDataUrl);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function handleOnboardingAvatarUpload(input) {
    if (input.files && input.files[0]) {
        compressAndSaveAvatar(input.files[0], "onb-avatar-preview", function(compressedDataUrl) {
            userState.profilePhoto = compressedDataUrl;
            
            // Remove destaque dos presets
            document.querySelectorAll(".onb-preset-avatar").forEach(img => {
                img.style.borderColor = "transparent";
            });
        });
    }
}

function handleEditProfileAvatarUpload(input) {
    if (input.files && input.files[0]) {
        compressAndSaveAvatar(input.files[0], "edit-prof-avatar-preview", function(compressedDataUrl) {
            userState.profilePhoto = compressedDataUrl;
            saveStateToStorage();
        });
    }
}

function selectPresetAvatar(src, el) {
    // Remove destaque dos presets
    document.querySelectorAll(".onb-preset-avatar").forEach(img => {
        img.style.borderColor = "transparent";
    });
    // Destaca o selecionado
    el.style.borderColor = "var(--accent-rose)";
    
    // Atualiza preview na tela de onboarding
    document.getElementById("onb-avatar-preview").src = src;
    // Salva no estado
    userState.profilePhoto = src;
}

// VARIÁVEL TEMPORÁRIA PARA ARMAZENAR E-MAIL E RESULTADO VERIFICADO NO PRIMEIRO ACESSO
let verifiedFirstAccessEmail = "";
let verifiedFirstAccessResult = null;

async function verifyFirstAccessEmail() {
    const emailInput = document.getElementById("first-access-email");
    const email = emailInput.value.trim().toLowerCase();
    
    if (!email) {
        alert("Por favor, informe seu e-mail de compra.");
        return;
    }
    
    const btnEl = document.getElementById("btn-verify-purchase");
    btnEl.innerText = "Verificando assinatura na Cakto...";
    btnEl.disabled = true;
    
    try {
        const result = await checkCaktoPurchaseAPI(email);
        
        btnEl.innerText = "Verificar Assinatura";
        btnEl.disabled = false;
        
        if (result.success) {
            verifiedFirstAccessEmail = email;
            verifiedFirstAccessResult = result;
            alert(`🎉 Compra ativa confirmada via API Cakto!\n\nAgora defina o seu nome e sua senha de acesso para ativar a sua conta.`);
            
            // Avança para o Passo 2
            document.getElementById("first-access-step-1").style.display = "none";
            document.getElementById("first-access-step-2").style.display = "block";
            
            // Pre-preenche o nome se disponível
            if (result.customerName) {
                document.getElementById("first-access-name").value = result.customerName;
            }
        } else {
            alert("Nenhuma compra aprovada foi encontrada para este e-mail no Cakto.\n\nPor favor, confira se o e-mail digitado é exatamente o mesmo utilizado no momento da compra.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        btnEl.innerText = "Verificar Assinatura";
        btnEl.disabled = false;
        alert("Erro temporário ao conectar com o servidor da Cakto. Tente novamente.");
    }
}

function createFirstAccessPassword() {
    const name = document.getElementById("first-access-name").value.trim();
    const pass = document.getElementById("first-access-pass").value.trim();
    const email = verifiedFirstAccessEmail;
    
    if (!email) {
        alert("Sessão expirada. Por favor, verifique seu e-mail novamente.");
        document.getElementById("first-access-step-1").style.display = "block";
        document.getElementById("first-access-step-2").style.display = "none";
        return;
    }
    
    if (!name) {
        alert("Por favor, preencha seu nome completo.");
        return;
    }
    
    if (!pass || pass.length < 4) {
        alert("Por favor, insira uma senha com pelo menos 4 caracteres.");
        return;
    }
    
    // Registra ou atualiza no simulated usersDB
    if (!usersDB[email]) {
        const state = JSON.parse(JSON.stringify(defaultState));
        state.user_id = generateUUID();
        state.createdAt = new Date().toISOString();
        state.email = email;
        state.name = name;
        state.hasLoggedIn = false;
        
        // Sempre libera acesso completo
        state.communityJoinedAt = new Date().toISOString();
        state.challengeSubscribed = true;
        state.challengeAccess = true;
        state.challengeStartedAt = "2026-08-23";
        state.purchasedAt = new Date().toISOString();
        state.purchasedProduct = "FUSE Premium + Desafio Core";
        state.purchaseStatus = "paid";
        
        usersDB[email] = {
            password: pass,
            userState: state
        };
    } else {
        usersDB[email].password = pass;
        usersDB[email].userState.name = name;
        usersDB[email].userState.hasLoggedIn = false;
        
        const state = usersDB[email].userState;
        state.communityJoinedAt = state.communityJoinedAt || new Date().toISOString();
        state.challengeSubscribed = true;
        state.challengeAccess = true;
        state.challengeStartedAt = state.challengeStartedAt || "2026-08-23";
        state.purchasedAt = state.purchasedAt || new Date().toISOString();
        state.purchasedProduct = "FUSE Premium + Desafio Core";
        state.purchaseStatus = "paid";
    }
    
    // Salva o banco de dados atualizado
    localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
    
    // Inicia login automático
    currentUserEmail = email;
    userState = usersDB[email].userState;
    localStorage.setItem("fuse_current_user_email", email);
    saveStateToStorage();
    
    alert(`🎉 Conta ativada com sucesso!\n\nBem-vinda ao FUSE, ${name}! Redirecionando para a Anamnese inicial...`);
    
    // Transiciona para a anamnese
    document.getElementById("auth-screen").classList.remove("active");
    document.getElementById("onboarding-screen").classList.add("active");
    currentOnboardingStep = 1;
    updateOnboardingStepUI();
}

// --- SISTEMA DE HISTÓRICO DE HÁBITOS E RITUAL DIÁRIO ---

function autoSaveDailyRecord() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const obsTextarea = document.getElementById("daily-observations");
    const obsValue = obsTextarea ? obsTextarea.value.trim() : "";
    
    if (!userState.dailyHistory) {
        userState.dailyHistory = [];
    }
    
    const existingIndex = userState.dailyHistory.findIndex(r => r.date === todayStr);
    const timestampStr = new Date().toLocaleString('pt-BR');
    
    const record = {
        id: todayStr,
        date: todayStr,
        timestamp: timestampStr,
        habitsCompleted: [...userState.habitsCompleted],
        observations: obsValue
    };
    
    if (existingIndex !== -1) {
        // Preserva o timestamp original de criação para manter o horário de criação do registro original
        record.timestamp = userState.dailyHistory[existingIndex].timestamp || timestampStr;
        userState.dailyHistory[existingIndex] = record;
    } else {
        userState.dailyHistory.push(record);
    }
    
    // Salva no banco local
    if (currentUserEmail && usersDB[currentUserEmail]) {
        usersDB[currentUserEmail].userState = userState;
    }
    saveStateToStorage();
    
    // Renderiza a lista atualizada no perfil
    renderDailyHistoryList();
    
    // Atualiza status de auto-salvamento no topo do formulário
    const statusEl = document.getElementById("auto-save-status");
    if (statusEl) {
        statusEl.innerHTML = `<span style="color: var(--color-success); font-size: 10px; font-weight: 600; display: flex; align-items: center; gap: 4px;">🟢 Salvo</span>`;
        setTimeout(() => {
            if (statusEl.innerText.includes("Salvo")) {
                statusEl.innerHTML = `<span style="color: var(--text-secondary); font-size: 10px;">Sincronizado</span>`;
            }
        }, 1500);
    }
}

function saveDailyRecordAction() {
    autoSaveDailyRecord();
    const timestampStr = new Date().toLocaleString('pt-BR');
    alert(`✨ Registro diário sincronizado e salvo no banco de dados com sucesso!\nHorário: ${timestampStr}`);
}

function renderDailyHistoryList() {
    const listEl = document.getElementById("daily-history-list");
    const emptyEl = document.getElementById("daily-history-empty");
    if (!listEl || !emptyEl) return;
    
    listEl.innerHTML = "";
    
    if (!userState.dailyHistory) {
        userState.dailyHistory = [];
    }
    
    if (userState.dailyHistory.length === 0) {
        emptyEl.style.display = "block";
        return;
    }
    
    emptyEl.style.display = "none";
    
    // Ordena do mais recente para o mais antigo (ordem cronológica decrescente)
    const sortedHistory = [...userState.dailyHistory].sort((a, b) => b.date.localeCompare(a.date));
    
    // Agrupa em: Hoje, Ontem, Dias anteriores
    const todayStr = new Date().toISOString().slice(0, 10);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);
    
    const groupToday = [];
    const groupYesterday = [];
    const groupOlder = [];
    
    sortedHistory.forEach(record => {
        if (record.date === todayStr) {
            groupToday.push(record);
        } else if (record.date === yesterdayStr) {
            groupYesterday.push(record);
        } else {
            groupOlder.push(record);
        }
    });
    
    const renderGroup = (title, records) => {
        if (records.length === 0) return;
        
        // Cabeçalho do grupo de histórico
        const header = document.createElement("h4");
        header.className = "history-group-title";
        header.style.fontSize = "10.5px";
        header.style.fontWeight = "700";
        header.style.color = "var(--accent-rose)";
        header.style.textTransform = "uppercase";
        header.style.marginTop = "14px";
        header.style.marginBottom = "8px";
        header.style.letterSpacing = "0.5px";
        header.innerText = title;
        listEl.appendChild(header);
        
        records.forEach(record => {
            const completedCount = record.habitsCompleted.filter(h => h).length;
            const itemCard = document.createElement("div");
            itemCard.className = "history-item-card";
            itemCard.onclick = () => openHistoryRecordDetail(record.date);
            
            const dateParts = record.date.split("-");
            const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : record.date;
            
            itemCard.innerHTML = `
                <div class="history-item-header">
                    <span class="history-item-date">📅 ${formattedDate}</span>
                    <span class="history-item-ratio">${completedCount}/6 concluídos</span>
                </div>
                <p class="history-item-obs">${record.observations ? record.observations : 'Sem observações'}</p>
            `;
            
            listEl.appendChild(itemCard);
        });
    };
    
    renderGroup("Hoje", groupToday);
    renderGroup("Ontem", groupYesterday);
    renderGroup("Dias anteriores", groupOlder);
}

function openHistoryRecordDetail(dateStr) {
    if (!userState.dailyHistory) return;
    const record = userState.dailyHistory.find(r => r.date === dateStr);
    if (!record) return;
    
    const dateParts = record.date.split("-");
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : record.date;
    
    const timeStr = record.timestamp.split(" às ")[1] || record.timestamp.split(" ")[1] || record.timestamp;
    document.getElementById("history-detail-date").innerText = `Registrado em: ${formattedDate} às ${timeStr}`;
    
    const tasksContainer = document.getElementById("history-detail-tasks");
    tasksContainer.innerHTML = "";
    
    const habitTitles = [
        "Fiz cardio",
        "Treinei",
        "Bebi água",
        "Comi de forma equilibrada",
        "Fiz meu devocional",
        "Fiz algo por mim mesma"
    ];
    
    // Resumo de aproveitamento no topo
    const completedCount = record.habitsCompleted.filter(h => h).length;
    const ratioText = `${completedCount} de 6 hábitos concluídos (${Math.round((completedCount/6)*100)}%)`;
    
    const progressSummary = document.createElement("div");
    progressSummary.style.padding = "8px 12px";
    progressSummary.style.background = "rgba(255,255,255,0.02)";
    progressSummary.style.border = "1px solid rgba(255,255,255,0.06)";
    progressSummary.style.borderRadius = "8px";
    progressSummary.style.marginBottom = "14px";
    progressSummary.style.fontSize = "11.5px";
    progressSummary.style.fontWeight = "600";
    progressSummary.style.color = "var(--accent-rose)";
    progressSummary.style.display = "flex";
    progressSummary.style.justifyContent = "space-between";
    progressSummary.style.alignItems = "center";
    
    progressSummary.innerHTML = `
        <span>Aproveitamento:</span>
        <span>${ratioText}</span>
    `;
    tasksContainer.appendChild(progressSummary);
    
    // Lista todos os hábitos diferenciando concluídos de não concluídos
    habitTitles.forEach((title, idx) => {
        const isCompleted = record.habitsCompleted[idx];
        const taskItem = document.createElement("div");
        taskItem.className = `history-detail-task-item ${isCompleted ? 'completed' : 'uncompleted'}`;
        
        taskItem.innerHTML = `
            <div class="task-check-icon" style="background: ${isCompleted ? 'var(--color-success)' : '#F1F5F9'}; color: ${isCompleted ? '#FFFFFF' : '#94A3B8'};">
                ${isCompleted ? '✓' : '✗'}
            </div>
            <span style="color: ${isCompleted ? 'var(--text-primary)' : 'var(--text-secondary)'}; font-weight: ${isCompleted ? '600' : '400'}; text-decoration: ${isCompleted ? 'none' : 'line-through'};">${title}</span>
        `;
        
        tasksContainer.appendChild(taskItem);
    });
    
    const obsBox = document.getElementById("history-detail-obs-box");
    if (record.observations) {
        obsBox.innerText = record.observations;
        obsBox.style.fontStyle = "normal";
        obsBox.style.color = "var(--text-primary)";
    } else {
        obsBox.innerText = "Nenhuma observação registrada para este dia.";
        obsBox.style.fontStyle = "italic";
        obsBox.style.color = "var(--text-secondary)";
    }
    
    openModal("modal-history-detail");
}

// Configurações e Listeners de Redefinição/Edição de Perfil na aba Configurações
document.addEventListener("DOMContentLoaded", () => {
    const btnReset = document.getElementById("btn-reset-app");
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            if (confirm("⚠️ Tem certeza que deseja redefinir todos os seus dados e progresso? Esta ação não pode ser desfeita.")) {
                localStorage.clear();
                alert("Todos os dados foram redefinidos. O aplicativo será recarregado.");
                window.location.reload();
            }
        });
    }
    
    const btnSaveName = document.getElementById("btn-save-name");
    const inputProfileName = document.getElementById("input-profile-name");
    if (btnSaveName && inputProfileName) {
        // Inicializa input de saudação com o nome atual ao restaurar
        setTimeout(() => {
            if (userState && userState.name) {
                inputProfileName.value = userState.name;
            }
        }, 1000);
        
        btnSaveName.addEventListener("click", () => {
            const newName = inputProfileName.value.trim();
            if (newName) {
                userState.name = newName;
                if (currentUserEmail && usersDB[currentUserEmail]) {
                    usersDB[currentUserEmail].userState = userState;
                }
                saveStateToStorage();
                document.getElementById("user-display-name").innerText = newName;
                document.getElementById("profile-display-name").innerText = newName;
                alert("Nome de perfil atualizado com sucesso!");
            } else {
                alert("Por favor, digite um nome válido.");
            }
        });
    }

    // Auto-salva quando o usuário digita na caixa de observações
    const obsTextarea = document.getElementById("daily-observations");
    if (obsTextarea) {
        obsTextarea.addEventListener("input", autoSaveDailyRecord);
    }
});

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
    xp: 420,
    levelNum: 8,
    levelTitle: "Nível 8: Constância",
    streak: 7,
    weeklyCheckins: [true, true, true, true, true, true, false],
    habitsCompleted: [false, false, false, false, false, false],
    habitsCount: 6,
    completedWorkoutsCount: 14,
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
    
    // Configurações do Desafio Core R$ 19,99
    challengeSubscribed: false,
    challengeTasksCompleted: [false, false, false, false, false, false],
    challengePoints: 210
};

// Banco de Dados de Usuárias Cadastradas (Simula banco de dados na nuvem)
let usersDB = JSON.parse(localStorage.getItem("fuse_users_db")) || {};
let currentUserEmail = localStorage.getItem("fuse_current_user_email") || "";

// Pré-popula usuário padrão de teste para login direto imediato
if (Object.keys(usersDB).length === 0) {
    usersDB["amanda@fuse.com.br"] = {
        password: "senha123",
        userState: {
            ...defaultState,
            name: "Amanda Fernandes",
            hasLoggedIn: true
        }
    };
    localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
}

let userState = defaultState;

if (currentUserEmail && usersDB[currentUserEmail]) {
    userState = usersDB[currentUserEmail].userState;
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

// Lógica de reinicialização diária automática à meia-noite
const todayStr = new Date().toISOString().slice(0, 10);
if (!userState.lastCheckInDate) {
    userState.lastCheckInDate = todayStr;
} else if (userState.lastCheckInDate !== todayStr) {
    userState.habitsCompleted = [false, false, false, false, false, false];
    userState.lastCheckInDate = todayStr;
    userState.streakUpdated = false;
}

function saveStateToStorage() {
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
}

// ESTÁGIOS DA TELA
let currentOnboardingStep = 1;
const totalOnboardingSteps = 7;

// 1. SPLASH SCREEN
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa Lucide Icons
    lucide.createIcons();

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
    if (userState.hasLoggedIn) {
        restoreSession();
    } else {
        document.getElementById("auth-screen").classList.add("active");
    }
}

function restoreSession() {
    // 1. ATUALIZA TEXTOS E HEADERS DA HOME E PERFIL
    document.getElementById("user-display-name").innerText = userState.name;
    document.getElementById("profile-display-name").innerText = userState.name;
    document.getElementById("workout-tab-sub").innerText = `Foco no seu objetivo: ${userState.goal.charAt(0).toUpperCase() + userState.goal.slice(1)}`;
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
    renderChallengeUI();
    renderCommunityFeed();
    renderWeeklyTracker();

    // Mostra o container principal
    document.getElementById("app-screen").style.display = "flex";
    
    updateProgressUI();
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
        titleText.innerText = "Crie sua conta para assinar o FUSE";
        btnToggle.innerText = "Fazer Login";
        descToggle.innerText = "Já possui uma assinatura?";
    } else {
        authMode = "login";
        loginWrapper.style.display = "block";
        registerWrapper.style.display = "none";
        titleText.innerText = "Faça login para continuar sua jornada";
        btnToggle.innerText = "Criar conta";
        descToggle.innerText = "Ainda não possui assinatura?";
    }
}

async function checkCaktoPurchaseAPI(email) {
    try {
        const response = await fetch(`/api/verify-purchase?email=${encodeURIComponent(email)}`);
        if (!response.ok) return { success: false };
        return await response.json();
    } catch (e) {
        console.error("Erro ao chamar API de verificação:", e);
        return { success: false };
    }
}

async function handleAuth(isLoginButton) {
    if (authMode === "register") {
        const nameVal = document.getElementById("reg-name").value.trim();
        const emailVal = document.getElementById("reg-email").value.trim().toLowerCase();
        const passVal = document.getElementById("reg-pass").value.trim();
        
        if (nameVal === "" || emailVal === "" || passVal === "") {
            alert("Por favor, preencha todos os campos do cadastro.");
            return;
        }
        
        if (usersDB[emailVal]) {
            alert("Este e-mail já possui uma conta ativa. Faça login.");
            return;
        }
        
        const btnEl = document.querySelector("#register-form-wrapper .btn-auth-primary");
        const originalText = btnEl ? btnEl.innerText : "Criar Conta e Iniciar";
        if (btnEl) {
            btnEl.innerText = "Verificando assinatura na Cakto...";
            btnEl.disabled = true;
        }
        
        const verify = await checkCaktoPurchaseAPI(emailVal);
        
        if (btnEl) {
            btnEl.innerText = originalText;
            btnEl.disabled = false;
        }
        
        if (!verify.success) {
            alert("Nenhuma compra aprovada foi encontrada para este e-mail no Cakto. Para liberar seu acesso, por favor conclua o pagamento da sua assinatura.");
            openModal("modal-subscription-checkout");
            return;
        }
        
        // Registra nova conta com dados confirmados
        currentUserEmail = emailVal;
        userState = JSON.parse(JSON.stringify(defaultState));
        userState.name = nameVal || verify.customerName;
        userState.hasLoggedIn = false;
        
        usersDB[currentUserEmail] = {
            password: passVal,
            userState: userState
        };
        saveStateToStorage();
        
        alert(`🎉 Assinatura premium confirmada via API!\n\nBem-vinda ao FUSE, ${userState.name}!`);
        
        document.getElementById("auth-screen").classList.remove("active");
        document.getElementById("onboarding-screen").classList.add("active");
        updateOnboardingStepUI();
        
    } else {
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
            
            if (verify.success) {
                // Cria a conta automaticamente usando a senha informada
                userState = JSON.parse(JSON.stringify(defaultState));
                userState.name = verify.customerName;
                userState.hasLoggedIn = false;
                
                usersDB[emailVal] = {
                    password: passVal,
                    userState: userState
                };
                localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
                account = usersDB[emailVal];
                
                alert(`🎉 Compra ativa confirmada via API Cakto!\n\nSeu acesso premium foi liberado.`);
            } else {
                alert("Conta não cadastrada. Se você realizou o pagamento na Cakto, certifique-se de usar o mesmo e-mail do checkout!");
                return;
            }
        }
        
        if (account.password !== passVal) {
            alert("Senha incorreta. Tente novamente.");
            return;
        }
        
        // Login com sucesso
        currentUserEmail = emailVal;
        userState = account.userState;
        saveStateToStorage();
        
        document.getElementById("auth-screen").classList.remove("active");
        
        if (userState.hasLoggedIn) {
            restoreSession();
        } else {
            document.getElementById("onboarding-screen").classList.add("active");
            updateOnboardingStepUI();
        }
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
    
    // Atualiza cabeçalhos de título
    const titles = {
        1: "Qual a sua idade?",
        2: "Qual sua altura?",
        3: "Qual seu peso atual?",
        4: "Qual seu objetivo principal?",
        5: "Qual seu nível de treino?",
        6: "Pretende treinar quantos dias?",
        7: "Duração e Local de Treino"
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
    // Inicializa peso de referência
    userState.initialWeight = userState.weight;

    // 1. CÁLCULO METABÓLICO (Mifflin-St Jeor)
    recalculateUserNutritionAndMacros();

    // 2. CONFIGURA OS SELETORES DE PLANO ALIMENTAR CONFORME ONBOARDING
    document.getElementById("nut-select-goal").value = (userState.goal === "ganhar-peso") ? "ganhar-peso" : userState.goal;
    document.getElementById("nut-select-style").value = "all"; // padrão inicial
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
    renderChallengeUI();
    renderCommunityFeed();
    saveStateToStorage();

    document.getElementById("onboarding-screen").classList.remove("active");
    document.getElementById("app-screen").style.display = "flex";
    
    updateProgressUI();
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

// 5. SISTEMA DE PORTAL DE TREINO DILIGENTE
function populateWorkoutsGrid() {
    const container = document.getElementById("workouts-list-container");
    container.innerHTML = "";
    
    workoutsDB.forEach(w => {
        let img = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500";
        if (w.category.includes("gluteos")) img = "assets/img/gluteos-workout.png";
        else if (w.category.includes("pernas")) img = "assets/img/pernas-workout.png";
        else if (w.category.includes("cardio")) img = "assets/img/cardio-workout.jpg";
        else if (w.category.includes("alongamento")) img = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500";
        else if (w.category.includes("braços") || w.category.includes("superiores")) img = "assets/img/superiores-workout.jpg";

        const card = document.createElement("div");
        card.className = "workout-card-item";
        card.setAttribute("data-cat", `${w.category} ${w.place}`);
        card.onclick = () => openWorkoutDetail(w.id);
        
        card.innerHTML = `
            <div class="workout-thumbnail-box">
                <img src="${img}" alt="${w.title}">
                <span class="workout-duration">${w.duration} min</span>
            </div>
            <div class="workout-details">
                <div class="workout-meta-row">
                    <span class="workout-difficulty">${w.difficulty} • ${w.place.toUpperCase()}</span>
                    <span class="workout-xp">+${w.kcal} kcal</span>
                </div>
                <h3 class="workout-title">${w.title}</h3>
                <p class="workout-desc">${w.desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterWorkouts(cat) {
    const pills = document.querySelectorAll("#tab-workouts .pill");
    pills.forEach(p => p.classList.remove("active"));
    event.target.classList.add("active");
    
    const items = document.querySelectorAll(".workout-card-item");
    items.forEach(item => {
        const dataCats = item.getAttribute("data-cat");
        if (cat === "all" || dataCats.includes(cat)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
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
                row.style.background = "rgba(232, 165, 152, 0.06)";
                row.style.borderColor = "rgba(232, 165, 152, 0.2)";
            } else {
                checkIcon.innerHTML = `<i data-lucide="circle" style="color: rgba(255,255,255,0.15); width: 16px; height: 16px;"></i>`;
                row.style.background = "rgba(255,255,255,0.02)";
                row.style.borderColor = "transparent";
            }
            lucide.createIcons();
        };
        
        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="exercise-check-icon" style="display: flex; align-items: center;">
                    <i data-lucide="circle" style="color: rgba(255,255,255,0.15); width: 16px; height: 16px;"></i>
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
        <div style="flex: 1; text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
            <span style="font-size:16px; font-weight:700; color:#ffb3a7; display:block;">${data.carb}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Carbos</span>
        </div>
        <div style="flex: 1; text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
            <span style="font-size:16px; font-weight:700; color:#a2e0c9; display:block;">${data.prot}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Proteínas</span>
        </div>
        <div style="flex: 1; text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
            <span style="font-size:16px; font-weight:700; color:#ffdca3; display:block;">${data.fat}g</span>
            <span style="font-size:9px; color:var(--text-secondary); text-transform:uppercase;">Gorduras</span>
        </div>
    `;

    // Popula as opções equivalentes
    const grid = document.getElementById("subs-equivalents-grid");
    grid.innerHTML = "";
    data.options.forEach(opt => {
        const card = document.createElement("div");
        card.style.background = "rgba(255,255,255,0.01)";
        card.style.border = "1px solid rgba(255,255,255,0.03)";
        card.style.borderRadius = "var(--radius-sm)";
        card.style.padding = "12px";
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.gap = "12px";

        card.innerHTML = `
            <div style="font-size: 24px; width: 44px; height: 44px; border-radius: 50%; background: rgba(232, 165, 152, 0.05); display:flex; align-items:center; justify-content:center; color: var(--accent-rose);">
                ${opt.icon}
            </div>
            <div style="flex: 1;">
                <h4 style="font-size: 13px; font-weight:600; color:var(--text-primary); margin-bottom:2px;">${opt.name}</h4>
                <p style="font-size: 11px; color:var(--text-secondary);">Porção sugerida: <strong style="color:var(--accent-rose);">${opt.portion}</strong></p>
                <p style="font-size: 10px; color:rgba(255,255,255,0.4); margin-top:2px;">${opt.kcal} kcal • Carb: ${opt.carb}g | Prot: ${opt.prot}g | Gord: ${opt.fat}g</p>
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
    document.getElementById("workout-tab-sub").innerText = `Foco no seu objetivo: ${selectedGoal.charAt(0).toUpperCase() + selectedGoal.slice(1)}`;

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
                    <button class="btn-swap-meal" style="border-color: rgba(255,255,255,0.05);" onclick="openRecipeDetail(${idx})">📖 Ver Preparo</button>
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
    const selectedStyle = document.getElementById("nut-select-style").value;
    
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
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
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

// 9. SISTEMA DE DESAFIOS GAMIFICADOS (TAXA R$ 19,99)

function renderChallengeUI() {
    if (userState.challengeSubscribed) {
        document.getElementById("challenge-paywall-box").style.display = "none";
        document.getElementById("challenge-active-box").style.display = "block";
        
        // Carrega estado das tarefas concluídas do Dia 1
        const taskKeys = ["workout", "diet", "weight", "water", "checkin", "community"];
        let completedCount = 0;
        
        taskKeys.forEach((key, idx) => {
            const isCompleted = userState.challengeTasksCompleted[idx];
            const row = document.getElementById(`ch-task-${key}`);
            const btn = row.querySelector(".btn-complete-task");
            
            if (isCompleted) {
                row.classList.add("completed");
                btn.innerText = "Concluído";
                btn.classList.add("completed");
                btn.disabled = true;
                completedCount++;
            } else {
                row.classList.remove("completed");
                btn.innerText = "Concluir";
                btn.classList.remove("completed");
                btn.disabled = false;
            }
        });
        
        // Calcula porcentagem do progresso do dia/desafio
        const percentage = Math.round((completedCount / taskKeys.length) * 100);
        document.getElementById("challenge-percent-txt").innerText = `${percentage}% concluído`;
        document.getElementById("challenge-progress-fill").style.width = `${percentage}%`;
        
        // Atualiza a bolinha D1 no calendário se concluído
        const dayCircle1 = document.querySelector(".calendar-day-circle.active");
        if (completedCount === taskKeys.length) {
            dayCircle1.classList.add("completed");
        } else {
            dayCircle1.classList.remove("completed");
        }
        
        // Atualiza o ranking
        document.getElementById("ranking-pts-me").innerText = `${userState.challengePoints} pts`;
        
        // Reordena dinamicamente a tabela de classificação (ranking)
        const rankingContainer = document.querySelector(".ranking-table");
        
        // Mapeia os dados atuais para ordenar
        const players = [
            { posText: "🥇 1º", name: "Camila Silva", pts: 240, class: "gold-pos" },
            { posText: "🥈 2º", name: "Mariana Costa", pts: 220, class: "silver-pos" },
            { posText: "🥉 3º", name: userState.name + " (Você)", pts: userState.challengePoints, class: "bronze-pos", isMe: true },
            { posText: "4º", name: "Luana Mendes", pts: 180, class: "" }
        ];
        
        // Ordena decrescente por pontos
        players.sort((a, b) => b.pts - a.pts);
        
        // Atualiza posições textuais e medalhas
        players.forEach((p, index) => {
            let medal = `${index + 1}º`;
            if (index === 0) medal = "🥇 1º";
            else if (index === 1) medal = "🥈 2º";
            else if (index === 2) medal = "🥉 3º";
            
            p.posText = medal;
            
            // Define classes de destaque
            if (index === 0) p.class = "gold-pos";
            else if (index === 1) p.class = "silver-pos";
            else if (index === 2) p.class = "bronze-pos";
            else p.class = "";
        });
        
        // Recria o HTML do Ranking
        rankingContainer.innerHTML = "";
        players.forEach(p => {
            const rowDiv = document.createElement("div");
            rowDiv.className = `ranking-row ${p.class}`;
            rowDiv.innerHTML = `
                <span class="ranking-pos">${p.posText}</span>
                <span class="ranking-user" ${p.isMe ? 'id="ranking-user-me"' : ''}>${p.name}</span>
                <span class="ranking-pts" ${p.isMe ? 'id="ranking-pts-me"' : ''}>${p.pts} pts</span>
            `;
            rankingContainer.appendChild(rowDiv);
        });
        
    } else {
        document.getElementById("challenge-paywall-box").style.display = "block";
        document.getElementById("challenge-active-box").style.display = "none";
    }
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
    
    alert("🎉 Inscrição Confirmada! Você acaba de entrar no Desafio Core: 10 Dias de Disciplina. Vamos transformar nossos hábitos juntas!");
    
    renderChallengeUI();
    saveStateToStorage();
    switchTab("challenge");
}

function completeChallengeTask(taskKey, btnEl) {
    const taskKeys = ["workout", "diet", "weight", "water", "checkin", "community"];
    const idx = taskKeys.indexOf(taskKey);
    if (idx === -1 || userState.challengeTasksCompleted[idx]) return;
    
    // Marca como completado
    userState.challengeTasksCompleted[idx] = true;
    userState.challengePoints += 20;
    
    addXP(15); // Ganha XP geral
    
    alert(`🌟 Incrível! Você completou a tarefa do desafio: +20 Pontos & +15 XP Geral!`);
    
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
        
        // Cria usuário se não existir ou atualiza status de pagamento
        if (!usersDB[emailClean]) {
            usersDB[emailClean] = {
                password: "senha123", // senha padrão de ativação automática
                userState: {
                    ...defaultState,
                    name: nameClean,
                    hasLoggedIn: false
                }
            };
        }
        
        currentUserEmail = emailClean;
        userState = usersDB[emailClean].userState;
        saveStateToStorage();
        
        // Limpa os parâmetros da URL
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
        
        alert(`🎉 Assinatura Aprovada via Cakto!\n\nBem-vinda, ${nameClean}! Seu acesso ao FUSE Premium foi liberado com sucesso. Vamos configurar o seu perfil!`);
        
        // Vai direto para o onboarding
        document.getElementById("auth-screen").classList.remove("active");
        document.getElementById("onboarding-screen").classList.add("active");
        updateOnboardingStepUI();
        return true;
    }
    return false;
}

function simulateCaktoWebhook() {
    const nameInput = document.getElementById("cakto-sim-name").value.trim();
    const emailInput = document.getElementById("cakto-sim-email").value.trim().toLowerCase();
    
    if (!nameInput || !emailInput) {
        alert("Por favor, preencha o nome e e-mail para simular o Webhook.");
        return;
    }
    
    // Simula a requisição POST que a Cakto envia no background
    if (!usersDB[emailInput]) {
        usersDB[emailInput] = {
            password: "senha123",
            userState: {
                ...defaultState,
                name: nameInput,
                hasLoggedIn: false
            }
        };
        localStorage.setItem("fuse_users_db", JSON.stringify(usersDB));
        alert(`⚡ [WEBHOOK CAKTO - SIMULAÇÃO]\n\nEvento: purchase_approved\nCliente: ${nameInput}\nE-mail: ${emailInput}\n\nResultado: Conta criada com sucesso no banco de dados FUSE! A cliente agora já pode fazer login direto com a senha padrão 'senha123'.`);
    } else {
        alert(`⚡ [WEBHOOK CAKTO - SIMULAÇÃO]\n\nResultado: A conta para o e-mail '${emailInput}' já existe no banco de dados FUSE.`);
    }
}

function simulateCaktoRedirect() {
    const nameInput = document.getElementById("cakto-sim-name").value.trim();
    const emailInput = document.getElementById("cakto-sim-email").value.trim().toLowerCase();
    
    if (!nameInput || !emailInput) {
        alert("Por favor, preencha o nome e e-mail para simular.");
        return;
    }
    
    const encodedName = encodeURIComponent(nameInput);
    const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?cakto_email=${emailInput}&cakto_name=${encodedName}&cakto_status=approved`;
    
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

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
    
    // Configurações do Desafio Core R$ 9,99
    challengeSubscribed: false,
    challengeTasksCompleted: [false, false, false, false, false, false],
    challengePoints: 210
};

let userState = JSON.parse(localStorage.getItem("fuse_user_state")) || defaultState;

// Sincroniza estado de hábitos antigo se houver incompatibilidade
if (!userState.habitsCompleted || userState.habitsCompleted.length !== 6) {
    userState.habitsCompleted = [false, false, false, false, false, false];
    userState.habitsCount = 6;
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

function handleAuth(isLoginButton) {
    if (authMode === "register") {
        const nameInput = document.getElementById("reg-name").value.trim();
        if (nameInput === "") {
            alert("Por favor, preencha o seu nome.");
            return;
        }
        userState.name = nameInput;
    } else {
        // Login simulado usa o nome padrão
        userState.name = "Amanda Fernandes";
    }

    // Passa para o Onboarding
    document.getElementById("auth-screen").classList.remove("active");
    document.getElementById("onboarding-screen").classList.add("active");
    updateOnboardingStepUI();
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

function finishOnboarding() {
    // 1. CÁLCULO METABÓLICO (Mifflin-St Jeor)
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

    // 2. CONFIGURA OS SELETORES DE PLANO ALIMENTAR CONFORME ONBOARDING
    document.getElementById("nut-select-goal").value = (userState.goal === "ganhar-peso") ? "ganhar-peso" : userState.goal;
    document.getElementById("nut-select-style").value = "all"; // padrão inicial
    changeNutritionConfig();

    // 3. POPULA PORTAL DE TREINOS COM FILTRO DE EQUIPAMENTO E TEMPO
    populateWorkoutsGrid();

    // 4. ATUALIZA TEXTOS E HEADERS DA HOME
    document.getElementById("user-display-name").innerText = userState.name;
    document.getElementById("profile-display-name").innerText = userState.name;
    document.getElementById("home-workout-chk-desc").innerText = `Treinar na ${userState.place} (${userState.idealDuration} min)`;
    
    // Atualiza Banners Rápidos
    const defaultWorkout = workoutsDB.find(w => w.place === userState.place) || workoutsDB[0];
    document.getElementById("home-workout-btn-sub").innerText = `${defaultWorkout.title} • ${defaultWorkout.duration} min`;

    // Atualiza Dados do Perfil
    document.getElementById("prof-initial-weight").innerText = `${userState.initialWeight} kg`;
    document.getElementById("prof-current-weight").innerText = `${userState.weight} kg`;

    // Transição da Tela e Salvamento de Sessão
    userState.hasLoggedIn = true;
    renderChallengeUI();
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
        
        const sundayDot = document.getElementById("dot-sunday");
        sundayDot.classList.remove("active");
        sundayDot.classList.add("completed");
        sundayDot.querySelector("i").innerHTML = `<i data-lucide="check"></i>`;
        lucide.createIcons();
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
        // Determina imagem simulada decorativa baseada na categoria
        let img = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500";
        if (w.category.includes("cardio")) img = "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500";
        else if (w.category.includes("alongamento")) img = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500";
        else if (w.category.includes("braços")) img = "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500";

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
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Quadríceps, Glúteos, Posterior de Coxa, Core",
        instructions: "Fique em pé com os pés na largura dos ombros. Agache projetando os quadris para trás, mantendo a coluna alinhada e descendo até as coxas ficarem paralelas ao chão.",
        errors: "Evite curvar as costas, levantar os calcanhares ou deixar os joelhos entrarem para dentro (valgo dinâmico).",
        tips: "Inspire ao descer e expire forte ao subir. Mantenha o peso distribuído no calcanhar.",
        rest: "45 segundos"
    },
    "Elevação Pélvica": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Glúteo Máximo, Posteriores de Coxa, Core",
        instructions: "Deite de costas com os joelhos dobrados e os pés apoiados no chão. Contraia os glúteos e eleve os quadris até que o corpo forme uma linha reta dos ombros aos joelhos.",
        errors: "Não force a coluna lombar arquivando excessivamente as costas no topo do movimento.",
        tips: "Pressione os calcanhares contra o chão e aperte os glúteos por 2 segundos no topo.",
        rest: "45 segundos"
    },
    "Quatro Apoios Unilateral": {
        video: "https://videos.pexels.com/video-files/4753995/4753995-sd_360_640_30fps.mp4",
        muscles: "Glúteo Médio e Máximo, Core",
        instructions: "Na posição de quatro apoios, eleve uma das pernas dobrada a 90 graus até que a coxa fique alinhada com o tronco, mantendo a sola do pé apontada para o teto.",
        errors: "Não balance o quadril lateralmente e evite arquear excessivamente a coluna lombar.",
        tips: "Mantenha o abdômen travado e controle a descida lenta do movimento.",
        rest: "30 segundos"
    },
    "Ponte Glúteos Isometrica": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Glúteos, Isquiotibiais, Core",
        instructions: "Mantenha o quadril elevado na posição de ponte e segure a contração estática sem descer pelo tempo recomendado na ficha.",
        errors: "Deixar o quadril ceder com o tempo ou esquecer de contrair fortemente os glúteos.",
        tips: "Mantenha a respiração contínua e concentre-se na ativação glútea profunda.",
        rest: "30 segundos"
    },
    "Agachamento com Halteres": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Quadríceps, Glúteos, Core",
        instructions: "Segure dois halteres ao lado do corpo. Agache mantendo a postura ereta, peito estufado e o calcanhar firme no chão.",
        errors: "Olhar para o chão ou inclinar o tronco excessivamente para a frente jogando a carga na lombar.",
        tips: "Mantenha o peito aberto e empurre o chão com força ao subir.",
        rest: "60 segundos"
    },
    "Cadeira Extensora": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Quadríceps (Foco frontal)",
        instructions: "Ajuste o rolo de espuma sobre os tornozelos. Estenda totalmente os joelhos contra a resistência, pause por 1 segundo e retorne devagar.",
        errors: "Dar impulsos bruscos ou não estender totalmente as pernas no topo.",
        tips: "Segure firme nos apoios laterais para manter o quadril estabilizado no banco.",
        rest: "45 segundos"
    },
    "Mesa Flexora": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Posterior de Coxa (Isquiotibiais)",
        instructions: "Deite de bruços no aparelho e flexione os joelhos trazendo o rolo em direção aos glúteos. Retorne controlando a descida.",
        errors: "Tirar o quadril do banco durante a fase de esforço.",
        tips: "Mantenha os pés em dorsoflexão e contraia o posterior de coxa de forma isolada.",
        rest: "45 segundos"
    },
    "Passada com Carga": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Quadríceps, Glúteos, Adutores",
        instructions: "Dê um passo largo à frente, descendo o quadril até que o joelho da perna de trás quase toque o chão e o da frente forme 90 graus.",
        errors: "Dar passos muito curtos ou deixar o joelho da frente passar excessivamente da ponta do pé.",
        tips: "Mantenha o tronco ereto e dê passos firmes e largos.",
        rest: "60 segundos"
    },
    "Polichinelos": {
        video: "https://videos.pexels.com/video-files/3121405/3121405-sd_540_960_24fps.mp4",
        muscles: "Panturrilhas, Ombros, Cardio",
        instructions: "Salte abrindo as pernas e batendo as mãos acima da cabeça simultaneamente. Salte novamente fechando as pernas e descendo os braços.",
        errors: "Aterissar com os pés totalmente planos ou com as pernas rígidas sem amortecimento.",
        tips: "Amorteça a queda na ponta dos pés e mantenha um ritmo constante.",
        rest: "15 segundos"
    },
    "Corrida Estacionária": {
        video: "https://videos.pexels.com/video-files/3121405/3121405-sd_540_960_24fps.mp4",
        muscles: "Cardio, Core, Quadríceps",
        instructions: "Simule uma corrida sem sair do lugar, elevando os joelhos até a altura da cintura e coordenando o movimento dos braços.",
        errors: "Postura curvada à frente ou pouca elevação dos joelhos.",
        tips: "Mantenha o peito aberto e respire de forma cadenciada.",
        rest: "15 segundos"
    },
    "Burpees Adaptados": {
        video: "https://videos.pexels.com/video-files/3121405/3121405-sd_540_960_24fps.mp4",
        muscles: "Full Body, Cardio, Core",
        instructions: "Fique de pé, agache colocando as mãos no chão, jogue os pés para trás em posição de prancha, retorne os pés e fique de pé estendendo os braços.",
        errors: "Deixar o quadril ceder na posição de prancha ou curvar as costas ao levantar.",
        tips: "Faça o movimento de forma fluida sem pressa para manter a técnica ideal.",
        rest: "30 segundos"
    },
    "Agachamento com Salto": {
        video: "https://videos.pexels.com/video-files/3121405/3121405-sd_540_960_24fps.mp4",
        muscles: "Quadríceps, Glúteos, Panturrilhas",
        instructions: "Execute um agachamento livre e exploda para cima com um salto vertical. Amorteça a queda agachando suavemente.",
        errors: "Aterissar com pernas estendidas ou bater o calcanhar com força no chão.",
        tips: "Pense na aterrissagem como o início do próximo agachamento.",
        rest: "30 segundos"
    },
    "Postura da Criança (Child Pose)": {
        video: "https://videos.pexels.com/video-files/4753995/4753995-sd_360_640_30fps.mp4",
        muscles: "Costas, Ombros, Quadris",
        instructions: "Ajoelhe-se no chão, sente-se nos calcanhares e incline-se para a frente, estendendo os braços no chão à sua frente e apoiando a testa no tapete.",
        errors: "Tentar forçar a postura se sentir dor excessiva nos joelhos.",
        tips: "Respire profundamente pelo nariz expandindo as costelas nas costas.",
        rest: "10 segundos"
    },
    "Alongamento Gato-Vaca": {
        video: "https://videos.pexels.com/video-files/4753995/4753995-sd_360_640_30fps.mp4",
        muscles: "Coluna Vertebral, Core, Pescoço",
        instructions: "Na posição de quatro apoios, arqueie a coluna para cima empurrando o chão (gato) e depois curve a coluna para baixo olhando para o teto (vaca).",
        errors: "Realizar movimentos rápidos e de forma brusca.",
        tips: "Sincronize com a respiração: expire no gato e inspire na vaca.",
        rest: "10 segundos"
    },
    "Torção de Coluna Deitada": {
        video: "https://videos.pexels.com/video-files/4753995/4753995-sd_360_640_30fps.mp4",
        muscles: "Lombar, Glúteos, Peitorais",
        instructions: "Deitada de costas, abra os braços em cruz, dobre uma das pernas e gire o quadril levando o joelho em direção ao chão do lado oposto.",
        errors: "Forçar o ombro oposto a sair do chão.",
        tips: "Mantenha o olhar para o lado contrário da torção para alongar a coluna cervical.",
        rest: "10 segundos"
    },
    "Alongamento Isquiotibiais": {
        video: "https://videos.pexels.com/video-files/4753995/4753995-sd_360_640_30fps.mp4",
        muscles: "Posterior de Coxa, Panturrilhas",
        instructions: "Sentada com uma perna estendida à frente, incline o tronco em direção ao pé, mantendo a coluna o mais reta possível.",
        errors: "Curvar excessivamente os ombros na tentativa de alcançar o pé.",
        tips: "Concentre o alongamento atrás do joelho e na coxa.",
        rest: "10 segundos"
    },
    "Puxada Aberta no Pulley": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Dorsais (Costas), Bíceps, Ombros",
        instructions: "Sente-se no aparelho, segure a barra com pegada aberta e puxe-a em direção à parte superior do peito, contraindo as escápulas.",
        errors: "Inclinar o tronco excessivamente para trás ou puxar a barra atrás da nuca.",
        tips: "Puxe com os cotovelos direcionados para baixo e não com a força dos braços.",
        rest: "45 segundos"
    },
    "Remada Baixa com Triângulo": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Costas (Romboides, Grande Dorsal), Bíceps",
        instructions: "Segure o triângulo, apoie os pés e puxe a carga em direção ao abdômen, mantendo os cotovelos rentes ao corpo e peito estufado.",
        errors: "Curvar a lombar ou balançar o tronco para ganhar impulso.",
        tips: "Mantenha o peito estufado e esmague as costas no final do movimento.",
        rest: "45 segundos"
    },
    "Desenvolvimento de Ombros": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
        muscles: "Deltoides (Ombros), Tríceps",
        instructions: "Sentada ou em pé, segure os halteres na altura das orelhas e empurre-os verticalmente para cima até estender quase totalmente os braços.",
        errors: "Arquear a coluna lombar ou bater os halteres no topo.",
        tips: "Mantenha os cotovelos levemente projetados para a frente do corpo.",
        rest: "45 segundos"
    },
    "Rosca Martelo Unilateral": {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
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
        row.onclick = () => openExerciseGuide(ex.name, ex.sets, ex.reps);
        row.innerHTML = `
            <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 600; color: var(--text-primary); font-size: 13px;">${ex.name}</span>
                <span style="font-size: 10px; color: var(--accent-rose);">📖 Ver tutorial de execução</span>
            </div>
            <span class="exercise-row-reps">${ex.sets}s x ${ex.reps}</span>
        `;
        listWrapper.appendChild(row);
    });
    
    openModal("modal-workout-detail");
}

function openExerciseGuide(name, sets, reps) {
    const guide = exercisesGuideDB[name] || {
        video: "https://videos.pexels.com/video-files/4754020/4754020-sd_360_640_30fps.mp4",
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

    // Configura vídeo
    const video = document.getElementById("ex-guide-video");
    video.src = guide.video;
    video.load();
    video.play().catch(err => console.log("Auto-play blocked, waiting for click."));

    // Restaura ícone de pausa/play
    const icon = document.getElementById("ex-guide-video-icon");
    icon.setAttribute("data-lucide", "pause");
    lucide.createIcons();

    openModal("modal-exercise-guide");
}

function toggleGuideVideo() {
    const video = document.getElementById("ex-guide-video");
    const icon = document.getElementById("ex-guide-video-icon");
    
    if (video.paused) {
        video.play();
        icon.setAttribute("data-lucide", "pause");
    } else {
        video.pause();
        icon.setAttribute("data-lucide", "play");
    }
    lucide.createIcons();
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

function abortWorkoutAction() {
    if (confirm("Deseja realmente abandonar o treino em andamento? Seu progresso de hoje não será salvo.")) {
        clearInterval(activeWorkoutState.timerInterval);
        closeModal("modal-workout-player");
    }
}

// 6. ABA DE ALIMENTAÇÃO E DIETA (CÁLCULOS E FILTROS DINÂMICOS)

// Dicionário procedural para geração de receitas 100% compatíveis
const recipeTemplates = {
    "Café da Manhã": {
        all: { title: "Tapioca Funcional com Frango e Queijo", time: 10, ingredients: ["3 colheres de tapioca", "60g de frango desfiado", "30g de queijo cottage", "Orégano a gosto"], prep: "Aqueça a tapioca na frigideira, recheie com o frango desfiado e queijo cottage. Feche e doure por 1 minuto." },
        rapidas: { title: "Copo de Iogurte Grego com Granola Fit", time: 5, ingredients: ["150g de iogurte grego desnatado", "30g de granola sem açúcar", "5 morangos frescos"], prep: "Em um copo alto, intercale camadas de iogurte, morangos fatiados e granola. Sirva imediatamente." },
        vegana: { title: "Mingau de Aveia com Leite de Amêndoas e Cacau", time: 8, ingredients: ["200ml de leite de amêndoas", "3 colheres de sopa de aveia", "1 colher de sobremesa de cacau 70%", "1 colher de chá de melado"], prep: "Misture tudo em fogo baixo até engrossar. Adoce com melado e salpique cacau por cima." },
        vegetariana: { title: "Crepioca de Espinafre com Queijo", time: 8, ingredients: ["1 ovo inteiro", "2 colheres de tapioca", "Punhado de espinafre picado", "30g de queijo minas"], prep: "Bata o ovo, a tapioca e o espinafre no garfo. Cozinhe na frigideira untada e recheie com o queijo." },
        "sem-lactose": { title: "Panqueca de Banana e Farelo de Aveia", time: 8, ingredients: ["1 banana média", "1 ovo", "2 colheres de farelo de aveia", "Canela em pó"], prep: "Esmague a banana, misture com o ovo e a aveia. Cozinhe em fogo baixo dos dois lados." },
        "sem-gluten": { title: "Crepioca de Frango com Linhaça", time: 10, ingredients: ["1 ovo", "2 colheres de tapioca (sem glúten)", "1 colher de semente de linhaça", "60g de frango desfiado"], prep: "Misture a massa com linhaça. Doure na frigideira e recheie com o frango cozido." },
        economica: { title: "Ovos Mexidos Cremosos com Pão Francês", time: 6, ingredients: ["2 ovos de granja", "1 colher de chá de manteiga", "1 pão francês sem miolo"], prep: "Bata os ovos e cozinhe em fogo brando mexendo sempre para dar cremosidade. Sirva com o pão." }
    },
    "Lanche da Manhã": {
        all: { title: "Porção de Mix de Castanhas e Damascos", time: 3, ingredients: ["15g de castanha de caju", "15g de amêndoas", "2 damascos secos"], prep: "Consumir diretamente. Excelente opção prática rica em gorduras boas para o cérebro." },
        rapidas: { title: "Maçã Fatiada com Pasta de Amendoim", time: 3, ingredients: ["1 maçã média", "1 colher de sopa de pasta de amendoim integral"], prep: "Fatie a maçã e consuma passando as fatias na pasta de amendoim." },
        vegana: { title: "Mix de Sementes de Girassol e Abóbora", time: 2, ingredients: ["20g de sementes de girassol tostadas", "20g de sementes de abóbora"], prep: "Misture as sementes tostadas com uma pitada de sal rosa. Prático e rico em minerais." },
        vegetariana: { title: "Iogurte Natural com Mel", time: 2, ingredients: ["150g de iogurte natural desnatado", "1 colher de chá de mel de abelha"], prep: "Misture o mel ao iogurte grego gelado." },
        "sem-lactose": { title: "Copo de Salada de Frutas com Linhaça", time: 5, ingredients: ["80g de mamão picado", "80g de melão picado", "1 colher de sopa de sementes de linhaça"], prep: "Misture as frutas picadas em um pote e salpique linhaça por cima." },
        "sem-gluten": { title: "Smoothie de Morango e Água de Coco", time: 4, ingredients: ["6 morangos congelados", "200ml de água de coco natural", "10g de chia"], prep: "Bata tudo no liquidificador até homogeneizar e consuma bem gelado." },
        economica: { title: "Banana Prata com Aveia em Flocos", time: 2, ingredients: ["1 banana prata", "1 colher de sopa de aveia em flocos grossos"], prep: "Descasque a banana, amasse levemente no prato e salpique a aveia." }
    },
    "Almoço": {
        all: { title: "Bowl de Frango Grelhado, Arroz Integral e Brócolis", time: 20, ingredients: ["120g de peito de frango", "100g de arroz integral cozido", "100g de brócolis no vapor", "Azeite de oliva"], prep: "Grelhe o frango temperado com ervas. Monte o prato com o arroz integral quente e brócolis." },
        rapidas: { title: "Wrap de Atum com Rap10 Integral", time: 8, ingredients: ["1 folha de tortilha integral", "1 lata de atum ralado em água", "Alface picada", "Tomate fresco"], prep: "Aqueça a tortilha rapidamente na frigideira, recheie com atum temperado, alface e tomate." },
        vegana: { title: "Estrogonofe de Grão de Bico com Leite de Aveia", time: 18, ingredients: ["120g de grão de bico cozido", "80ml de leite de aveia culinário", "Molho de tomate caseiro", "Cogumelos Paris"], prep: "Refogue os cogumelos e o grão de bico. Adicione o molho de tomate e finalize com o leite de aveia." },
        vegetariana: { title: "Bowl de Quinoa Cozida, Tofu Grelhado e Aspargos", time: 15, ingredients: ["100g de quinoa cozida", "100g de tofu firme grelhado", "80g de aspargos frescos"], prep: "Grelhe o tofu temperado com cúrcuma. Sirva com quinoa morna e aspargos salteados no azeite." },
        "sem-lactose": { title: "Patinho Moído Grelhado com Purê de Mandioquinha", time: 20, ingredients: ["120g de patinho moído grelhado", "120g de purê de mandioquinha (sem leite)", "Couve refogada"], prep: "Grelhe o patinho com cebola e alho. Sirva com purê feito com água do cozimento e couve." },
        "sem-gluten": { title: "Filé de Tilápia com Batata Doce Assada", time: 22, ingredients: ["140g de filé de tilápia grelhado", "120g de batata doce assada em rodelas", "Rúcula e tomate"], prep: "Grelhe o peixe na chapa. Asse a batata com alecrim e sirva com salada fresca." },
        economica: { title: "Prato Feito Tradicional: Arroz, Feijão e Sobrecoxa", time: 25, ingredients: ["100g de arroz branco", "80g de feijão carioca cozido", "120g de sobrecoxa de frango assada"], prep: "Asse o frango com alho e colorau. Monte com feijão temperado por cima do arroz quente." }
    },
    "Lanche da Tarde": {
        all: { title: "Torrada de Pão Integral com Abacate e Ovo", time: 8, ingredients: ["1 fatia de pão integral de sementes", "30g de abacate amassado", "1 ovo cozido"], prep: "Toste o pão. Espalhe o abacate temperado com limão e sal, coloque o ovo fatiado por cima." },
        rapidas: { title: "Shake de Whey de Morango e Iogurte", time: 3, ingredients: ["30g de whey protein", "100g de iogurte grego desnatado", "100ml de água gelada"], prep: "Misture vigorosamente na coqueteleira até obter uma consistência espumosa e cremosa." },
        vegana: { title: "Palitos de Cenoura e Pepino com Homus", time: 6, ingredients: ["1 cenoura média em palitos", "1 pepino pequeno", "2 colheres de sopa de pasta homus (grão de bico)"], prep: "Corte os vegetais em tiras finas e sirva acompanhados com a pasta de homus." },
        vegetariana: { title: "Muffin de Caneca Protéico de Cacau", time: 5, ingredients: ["1 ovo", "2 colheres de aveia", "1 colher de cacau 100%", "1 colher de chá de mel"], prep: "Bata os ingredientes em uma caneca com garfo. Cozinhe no micro-ondas por 1m30s." },
        "sem-lactose": { title: "Tapioca com Pasta de Amendoim", time: 7, ingredients: ["3 colheres de tapioca", "1 colher de sopa de pasta de amendoim integral"], prep: "Prepare o disco de tapioca na frigideira e recheie com a pasta de amendoim morna." },
        "sem-gluten": { title: "Bolachas de Arroz com Abacate e Chia", time: 4, ingredients: ["3 bolachas de arroz integral", "40g de abacate amassado", "Sementes de chia"], prep: "Espalhe o abacate temperado sobre as bolachas e salpique chia." },
        economica: { title: "Pão de Forma com Queijo Minas Grelhado", time: 5, ingredients: ["2 fatias de pão de forma comum", "40g de queijo minas padrão"], prep: "Monte o sanduíche e doure na frigideira untada em fogo baixo até derreter o queijo." }
    },
    "Jantar": {
        all: { title: "Salmão Grelhado com Purê de Batata e Vagem", time: 25, ingredients: ["120g de lombo de salmão", "100g de purê de batata inglesa", "80g de vagem refogada"], prep: "Grelhe o salmão na pele. Sirva com purê de batata quente e vagem cozida salteada." },
        rapidas: { title: "Omelete de Tomate e Manjericão Express", time: 8, ingredients: ["3 ovos caipiras", "5 tomates cereja cortados", "Folhas frescas de manjericão"], prep: "Bata os ovos, jogue na frigideira quente. Adicione tomates, manjericão, dobre e sirva." },
        vegana: { title: "Sopa Nutritiva de Lentilhas e Legumes", time: 20, ingredients: ["120g de lentilhas cozidas", "Cenoura, abobrinha e chuchu picados", "Caldo de legumes caseiro"], prep: "Cozinhe os legumes no caldo com as lentilhas cozidas. Tempere com coentro e azeite." },
        vegetariana: { title: "Shakshuka (Ovos no Molho de Tomate Rústico)", time: 18, ingredients: ["2 ovos inteiros", "150g de tomate pelado cozido", "Pimentão vermelho e cebola"], prep: "Refogue pimentão e cebola. Adicione o molho de tomates. Quebre os ovos por cima, tampe e deixe cozinhar." },
        "sem-lactose": { title: "Frango Grelhado com Salada Verde e Abacate", time: 15, ingredients: ["130g de peito de frango", "Mix de rúcula e alface à vontade", "50g de abacate em fatias"], prep: "Grelhe o frango em tiras. Monte a salada, regue com azeite, limão e adicione as fatias de abacate." },
        "sem-gluten": { title: "Escondidinho de Mandioca com Carne Moída", time: 25, ingredients: ["100g de mandioca cozida e espremida", "120g de patinho moído cozido", "Tempero verde"], prep: "Forre o refratário com carne moída temperada, cubra com o purê de mandioca e leve para gratinar." },
        economica: { title: "Arroz com Lentilha e Ovos Estalados", time: 20, ingredients: ["100g de arroz cozido", "80g de lentilhas cozidas", "2 ovos fritos no azeite"], prep: "Misture o arroz com a lentilha e sirva com os dois ovos estalados no topo." }
    },
    "Ceia": {
        all: { title: "Chá de Camomila e Amêndoas", time: 4, ingredients: ["Sachê de camomila orgânica", "200ml de água quente", "10 unidades de amêndoas"], prep: "Faça a infusão do chá por 5 minutos. Beba morno acompanhado das amêndoas." },
        rapidas: { title: "Leite de Amêndoas Morno com Canela", time: 3, ingredients: ["180ml de leite de amêndoas", "Canela em pó a gosto"], prep: "Aqueça o leite vegetal rapidamente no micro-ondas e polvilhe canela para relaxar." },
        vegana: { title: "Chá de Capim Limão com Castanhas", time: 4, ingredients: ["Infusão de capim limão fresca", "3 castanhas-do-pará"], prep: "Prepare o chá e consuma com as castanhas ricas em selênio e gorduras protetoras." },
        vegetariana: { title: "Copo de Leite Morno com Mel", time: 3, ingredients: ["150ml de leite integral ou desnatado", "1 colher de chá de mel"], prep: "Aqueça o leite morno e adoce com o mel. Ajuda a melhorar a qualidade do sono." },
        "sem-lactose": { title: "Coco Seco em Fatias e Infusão de Erva Doce", time: 4, ingredients: ["30g de coco seco fatiado", "Chá de erva doce morno"], prep: "Mastigue as fatias de coco seco devagar acompanhadas do chá quentinho antes de dormir." },
        "sem-gluten": { title: "Pera Cozida com Canela", time: 10, ingredients: ["1 pera média cozida com casca", "Canela em pó"], prep: "Cozinhe a pera na água por alguns minutos até amolecer levemente. Salpique canela." },
        economica: { title: "Banana Prata Assada no Micro-ondas com Canela", time: 3, ingredients: ["1 banana prata", "Canela em pó"], prep: "Corte a banana ao meio, coloque no prato, aqueça por 40 segundos e finalize com canela." }
    }
};

// Modificação das configurações de dieta (Aba Nutrir)
function changeNutritionConfig() {
    const selectedGoal = document.getElementById("nut-select-goal").value;
    const selectedStyle = document.getElementById("nut-select-style").value;
    
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
    } else if (selectedGoal === "ganhar-peso") {
        targetKcal = getd * 1.15;
        ratios = { prot: 0.20, carb: 0.55, fat: 0.25 };
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

    // Gera plano baseado no Objetivo + Estilo
    generateDynamicCardapio(selectedGoal, selectedStyle);
}

function generateDynamicCardapio(goal, style) {
    const mealCategories = ["Café da Manhã", "Lanche da Manhã", "Almoço", "Lanche da Tarde", "Jantar", "Ceia"];
    userState.currentMeals = [];

    mealCategories.forEach((cat, idx) => {
        // Encontra o template correspondente ao Estilo. Se não achar, usa 'all'
        const styleTemplates = recipeTemplates[cat];
        let template = styleTemplates[style] || styleTemplates["all"];
        
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
        // Calcula macros proporcionais fictícios reais
        const prot = Math.round((mealKcal * 0.25) / 4);
        const carb = Math.round((mealKcal * 0.50) / 4);
        const fat = Math.round((mealKcal * 0.25) / 9);

        userState.currentMeals.push({
            id: `dyn-${idx}`,
            type: cat,
            title: template.title,
            kcal: mealKcal,
            prot: prot,
            carb: carb,
            fat: fat,
            ingredients: [...template.ingredients],
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
function createNewPost() {
    const input = document.getElementById("post-input");
    const text = input.value.trim();
    
    if (text === "") {
        alert("Por favor, preencha algo antes de publicar.");
        return;
    }
    
    const feedContainer = document.getElementById("feed-container");
    const card = document.createElement("div");
    card.className = "community-post-card";
    card.style.animation = "fadeIn 0.3s ease";
    
    card.innerHTML = `
        <div class="post-header">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Avatar Amanda" class="post-user-avatar">
            <div>
                <span class="post-user-name">${userState.name}</span>
                <div class="post-badge-group">
                    <span class="user-level-badge">Nível ${userState.levelNum}</span>
                    <span class="post-time">• Agora mesmo</span>
                </div>
            </div>
        </div>
        <p class="post-content">"${text}"</p>
        <div class="post-actions">
            <button class="btn-like" onclick="likePostMock(this)">
                <i data-lucide="heart"></i> <span class="like-count">0</span> apoios
            </button>
            <button class="btn-comment" onclick="alert('Comentários na comunidade liberados no aplicativo final.')">
                <i data-lucide="message-circle"></i> Comentar
            </button>
        </div>
    `;
    
    feedContainer.insertBefore(card, feedContainer.firstChild);
    lucide.createIcons();
    
    input.value = "";
    addXP(15);
    alert("Publicação enviada para o Círculo FUSE! +15 XP.");
    updateProgressUI();
}

function likePostMock(btn) {
    const likeCountSpan = btn.querySelector(".like-count");
    let count = parseInt(likeCountSpan.innerText);
    
    if (btn.classList.contains("btn-like-active")) {
        btn.className = "btn-like";
        btn.querySelector("i").removeAttribute("fill");
        likeCountSpan.innerText = count - 1;
    } else {
        btn.className = "btn-like-active";
        btn.querySelector("i").setAttribute("fill", "currentColor");
        likeCountSpan.innerText = count + 1;
    }
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

// 9. SISTEMA DE DESAFIOS GAMIFICADOS (TAXA R$ 9,99)

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
    
    alert("🎉 Inscrição Confirmada! Você acaba de entrar no Desafio Core: 21 Dias de Disciplina. Vamos transformar nossos hábitos juntas!");
    
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

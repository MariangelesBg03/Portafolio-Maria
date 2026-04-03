/**
 * Script Optimizado para el Portafolio de María
 */
document.addEventListener('DOMContentLoaded', () => {

        // --- 0. CONTROLADOR DE ESTADO CENTRAL (i18n & Tema) ---
    const texts = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Sobre mí",
            "nav-cv-es": "CV Español",
            "nav-cv-en": "CV Inglés",
            "nav-mode": "🌙 Modo",
            "hero-title": "María de los Ángeles",
            "badge-1": "Estudiante de Ingeniería de Sistemas",
            "badge-2": "Técnico Superior en Administración",
            "badge-3": "Frontend Developer Jr",
            "hero-description": "<strong>Futura Ingeniera de Sistemas y Técnico Superior en Administración</strong> con enfoque híbrido en desarrollo de software y gestión técnica.",
            "bento-about-title": "Sobre mi...",
            "bento-about-text": "Futura Ingeniera de Sistemas con un enfoque de alto rigor en la arquitectura de información.",
            "bento-skill1-title": "Ingeniería de Software",
            "bento-skill1-text": "Desarrollo basado en <strong>POO</strong> y manipulación dinámica del <strong>DOM</strong>.",
            "bento-skill2-title": "Gestión Estratégica",
            "bento-skill2-text": "Especialista en <strong>optimización de flujos directivos</strong> y auditoría administrativa.",
            "bento-voice-title": "Voz & Partituras",
            "bento-voice-text": "La disciplina del canto aplicada a la armonía y ritmo del <strong>Clean Code</strong>.",
            "essence-left-title": "Más allá de la Ingeniería",
            "essence-left-text": "Mi trayectoria no se limita a los sistemas; poseo una sólida base en atención al cliente.",
            "essence-right-title": "Vibración & Arcanos",
            "essence-right-text": "La armonía que encuentro en el canto fluye con la simbología del tarot.",
            "tarot-prompt": "Haz clic...",
            "solar-system-title": "Tecnologías Core"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About me",
            "nav-cv-es": "CV Spanish",
            "nav-cv-en": "CV English",
            "nav-mode": "🌙 Mode",
            "hero-title": "Maria de los Angeles",
            "badge-1": "Systems Engineering Student",
            "badge-2": "Senior Administrative Technician",
            "badge-3": "Jr Frontend Developer",
            "hero-description": "<strong>Future Systems Engineer and Senior Administrative Technician</strong> with a hybrid focus on software development and technical management.",
            "bento-about-title": "About me...",
            "bento-about-text": "Future Systems Engineer with a high-rigor approach to information architecture.",
            "bento-skill1-title": "Software Engineering",
            "bento-skill1-text": "Development based on <strong>OOP</strong> and dynamic <strong>DOM</strong> manipulation.",
            "bento-skill2-title": "Strategic Management",
            "bento-skill2-text": "Specialist in <strong>executive flow optimization</strong> and administrative auditing.",
            "bento-voice-title": "Voice & Sheet Music",
            "bento-voice-text": "The discipline of singing applied to the harmony and rhythm of <strong>Clean Code</strong>.",
            "essence-left-title": "Beyond Engineering",
            "essence-left-text": "My career is not limited to systems; I have a solid foundation in customer service.",
            "essence-right-title": "Vibration & Arcana",
            "essence-right-text": "The harmony I find in singing flows alongside tarot symbology.",
            "tarot-prompt": "Click here..."
        }
    };

    const appState = {
        currentLang: localStorage.getItem('portfolio-lang') || 'es',
        currentTheme: localStorage.getItem('portfolio-theme') || 'light'
    };

    const btnTranslation = document.getElementById('btn-translation');
    const btnMode = document.getElementById('btn-mode');

    function applyAppState() {
        // Actualizar Textos (i18n)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[appState.currentLang][key]) {
                el.innerHTML = texts[appState.currentLang][key];
            }
        });

        // Actualizar etiqueta del botón de traducción
        if (btnTranslation) {
            btnTranslation.textContent = appState.currentLang === 'es' ? 'English' : 'Español';
        }

        // Actualizar Tema (Dark/Light)
        document.body.classList.toggle('dark-mode', appState.currentTheme === 'dark');
        if (btnMode) {
            btnMode.innerHTML = appState.currentTheme === 'dark' ? 'Style☀️' : 'Style🌙';
        }
    }

    btnTranslation?.addEventListener('click', () => {
        appState.currentLang = appState.currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('portfolio-lang', appState.currentLang);
        applyAppState();
    });

    btnMode?.addEventListener('click', () => {
        appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('portfolio-theme', appState.currentTheme);
        applyAppState();
    });

    // Inicialización al cargar la página
    applyAppState();

    // --- 1. GESTIÓN DE PESTAÑAS (TABS) ---
    // Seleccionamos las pestañas del banner superior
    const tabs = document.querySelectorAll('.tab');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Limpiamos la clase activa de todas
                tabs.forEach(t => t.classList.remove('active'));
                // Se la ponemos a la que hiciste clic
                tab.classList.add('active');
                
                console.log("Navegando a la sección:", tab.textContent.trim());
            });
        });
    }

    // --- 2. LÓGICA DE LA CARTA DE TAROT (RUEDA DE LA FORTUNA) ---
    const tarotCard = document.getElementById('tarotCard');
    const fortuneDisplay = document.getElementById('fortuneText');

    // Predicciones actualizadas
    const technicalFortunes = [
        "Hoy tu código está de tu lado.",
    "No te recomiendo hacer cambios drásticos en el código.",
    "Hoy es un día perfecto para iniciar un nuevo proyecto.",
    "Evita reuniones largas, tu tiempo es valioso.",
    "La creatividad estará de tu lado, ¡aprovéchala!",
    "Un bug inesperado traerá una gran lección.",
    "Hoy es buen día para aprender algo nuevo.",
    "Confía en tu intuición para tomar decisiones técnicas.",
    "No subestimes el poder de un buen café.",
    "Hoy podrías encontrar una solución elegante a un viejo problema.",
    "Haz una pausa, tu mente lo agradecerá.",
    "El universo te sugiere refactorizar ese código antiguo.",
    "Hoy tu lógica será impecable.",
    "No temas pedir ayuda, la colaboración trae fortuna.",
    "Un commit pequeño puede evitar un gran problema.",
    "Hoy es buen día para documentar tu código.",
    "La paciencia será tu mejor aliada hoy.",
    "No ignores las advertencias del compilador.",
    "Hoy tu creatividad desbloqueará un reto.",
    "Haz backup antes de experimentar, la suerte sonríe a los precavidos."
    ];

    if (tarotCard) {
        tarotCard.addEventListener('click', () => {
            const isFlipped = tarotCard.classList.toggle('flipped');

            // Solo cambiamos el texto al voltear hacia el reverso
            if (isFlipped) {
                const randomIndex = Math.floor(Math.random() * technicalFortunes.length);
                if (fortuneDisplay) {
                    fortuneDisplay.textContent = technicalFortunes[randomIndex];
                }
            }
        });
    }

    // --- 4. LÓGICA DEL CARRUSEL 3D (2DA PARTE) ---
    const certCards = document.querySelectorAll('.cert-card');
    let activeIndex = 0;

    function updateStack() {
        certCards.forEach((card, i) => {
            let diff = i - activeIndex;
            
            // Lógica para que el giro sea infinito/circular
            if (diff > certCards.length / 2) diff -= certCards.length;
            if (diff < -certCards.length / 2) diff += certCards.length;

            if (diff === 0) {
                // Elemento Central
                card.style.transform = "rotateY(0deg) scale(1.1) translateX(0)";
                card.style.opacity = "1";
                card.style.zIndex = "10";
                card.style.pointerEvents = "auto";
            } else if (Math.abs(diff) === 1) {
                // Elementos Laterales (Izquierda y Derecha)
                const rotation = diff > 0 ? -45 : 45;
                const translation = diff > 0 ? 60 : -60;
                card.style.transform = `translateX(${translation}%) rotateY(${rotation}deg) scale(0.8)`;
                card.style.opacity = "0.6";
                card.style.zIndex = "5";
                card.style.pointerEvents = "auto";
            } else {
                // Elementos ocultos en la pila
                card.style.transform = "scale(0)";
                card.style.opacity = "0";
                card.style.zIndex = "0";
                card.style.pointerEvents = "none";
            }
        });
    }

    certCards.forEach((card, i) => {
        card.addEventListener('click', () => {
            activeIndex = i;
            updateStack();
        });
    });

    if (certCards.length > 0) updateStack();
});
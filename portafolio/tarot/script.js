const fortunes = [
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


const tarotCard = document.getElementById('tarotCard');
const fortuneText = document.getElementById('fortuneText');
const cardFront = document.getElementById('cardFront');

let currentIndex = -1;
let isFlipped = false;

const mensajeInicial = 'click para conocer tu fortuna';

tarotCard.addEventListener('click', () => {
    if (!isFlipped) {
        // Elegir una frase aleatoria
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * fortunes.length);
        } while (nextIndex === currentIndex);
        
        currentIndex = nextIndex;
        fortuneText.textContent = fortunes[currentIndex];
        tarotCard.classList.add('flipped');
        isFlipped = true;
    } else {
        // Si ya está volteada, la regresamos para poder sacar otra
        tarotCard.classList.remove('flipped');
        isFlipped = false;
    }
});

// Mostrar mensaje inicial en la carta roja
if (cardFront) {
    cardFront.insertAdjacentHTML('beforeend', `<span id="mensajeInicial">${mensajeInicial}</span>`);
}

tarotCard.addEventListener('click', function mostrarMensajeInicial() {
    const mensaje = document.getElementById('mensajeInicial');
    if (mensaje) mensaje.remove();
    tarotCard.removeEventListener('click', mostrarMensajeInicial);
});

document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Your energy is contagious, it lights up any room you enter.",
        "I admire your passion and dedication in everything you do.",
        "Your sense of humor is a breath of fresh air.",
        "Tienes una manera de hacer que todos los que te rodean se sientan cómodos."
    ];

    const specialPhrase = "Твоя посмішка гарно прикрашає твоє обличчя."; // "Tu sonrisa decora maravillosamente tu rostro." en ucraniano
    const spanishWords = [
        "¿Cómo puedo hacerte sonreír hoy? 》》》 How can I make you smile today?",
        "Estoy pensando en ti 》》》 I'm thinking of you",
        "¿Es hora de verte ya? 》》》 Is it time to see you yet?",
        "¿Dónde puedo encontrar esos ojos que me hipnotizan? 》》》 Where can I find those eyes that mesmerize me?",
        "¿Dónde puedo encontrar un lugar tan dulce como tu sonrisa? 》》》 Where can I find a place as sweet as your smile?",
    ];

    const phraseContainer = document.getElementById('phrases');
    const specialPhraseContainer = document.getElementById('special-phrase');
    const spanishWordsContainer = document.getElementById('spanish-words');
    const backgroundMusic = document.getElementById('background-music');
    const backgroundSelector = document.getElementById('backgrounds');
    const musicSelector = document.getElementById('music');

    // Función para cambiar el fondo
    backgroundSelector.addEventListener('change', (event) => {
        document.body.style.backgroundImage = `url('img/${event.target.value}')`;
    });

    // Función para cambiar la música
    musicSelector.addEventListener('change', (event) => {
        backgroundMusic.src = `music/${event.target.value}`;
        backgroundMusic.play();
    });

    // Añadir frases al contenedor Swiper
    phrases.forEach(phrase => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.textContent = phrase;
        phraseContainer.appendChild(slide);
    });

    // Añadir palabras en español al contenedor Swiper
    spanishWords.forEach(word => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.textContent = word;
        spanishWordsContainer.appendChild(slide);
    });

    const swiperPhrases = new Swiper('.phrases-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 0, 
        centeredSlides: true,
    });

    const swiperSpanishWords = new Swiper('.spanish-words-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
    });

    function updateContent() {
        specialPhraseContainer.textContent = specialPhrase;
    }

    updateContent();
    setInterval(updateContent, 86400000); // Actualiza cada 24 horas

    // Reproduce la música de fondo al cargar la página
    backgroundMusic.play().catch(error => {
        console.log("Reproducción automática de música de fondo está bloqueada por el navegador.");
    });

    // Reproduce la música al hacer clic en el cuerpo del documento
    document.body.addEventListener('click', () => {
        backgroundMusic.play();
    });
});

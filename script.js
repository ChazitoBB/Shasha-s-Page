document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "You make my heart skip a beat.",
        "Don't let a bad moment ruin your day, instead make every moment special.",
        "I've never met a girl as beautiful as you..",
        "I cherish every second we spend together."
        // Añade más frases aquí
    ];

    const specialPhrase = "Ти прекрасна, не забувай про це."; // "Eres Hermosa, no lo olvides" en ucraniano
    const spanishWords = [
        "Te extraño 》》》 I miss you",
        "Buenos días 》》》 Good morning",
        "Buenas noches 》》》 Good night",
        "Hasta mañana 》》》 See you tomorrow"
        // Añade más palabras aquí
    ];

    const phraseContainer = document.getElementById('phrases');
    const specialPhraseContainer = document.getElementById('special-phrase');
    const spanishWordsContainer = document.getElementById('spanish-words');
    const backgroundMusic = document.getElementById('background-music');

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
        spaceBetween: 0, // Sin espacio entre las diapositivas
        centeredSlides: true,
    });

    const swiperSpanishWords = new Swiper('.spanish-words-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 0, // Sin espacio entre las diapositivas
        centeredSlides: true,
    });

    function updateContent() {
        specialPhraseContainer.textContent = specialPhrase;
    }

    updateContent();
    setInterval(updateContent, 86400000); // Actualiza cada 24 horas

    // Reproducir música de fondo
    backgroundMusic.play().catch(error => {
        console.log("Reproducción automática de música de fondo está bloqueada por el navegador.");
    });

    document.body.addEventListener('click', () => {
        backgroundMusic.play();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Suffering and crying means living.",
        "Life is a daring adventure or it is nothing.",
        "In life, sometimes you win, other times you learn.",
        "Being with you is my happy place."
        // Añade más frases aquí
    ];

    const specialPhrase = "У кожному твоєму жесті я знаходжу поезію і витонченість."; // "En cada uno de tus gestos encuentro poesía y gracia." en ucraniano
    const spanishWords = [
        "Necesito irme 》》》 I need to go",
        "Vuelvo en seguida 》》》 I'll be right back",
        "'¿Trabajas mañana?' 》》》 Do you work tomorrow",
        "Dulces sueños 》》》 Sweet dreams",
        "¿Qué hora es? 》》》 What time is it",,
        "Note: I need more photos of you for the backgrounds",
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

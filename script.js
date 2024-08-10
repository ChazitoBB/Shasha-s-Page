document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "They told me to go find the most beautiful rose and I found you.",
        "You are the princess I always dreamed of and if you wish it can come true.",
        "You are imperfectly perfect to be the smile of all my days.",
        "You are the woman of my dreams and the love of my life."
        // Añade más frases aquí
    ];

    const specialPhrase = "Я люблю кожну частину, яка становить твою істоту."; // "Amo cada parte que compone tu ser." en ucraniano
    const spanishWords = [
        "¿Como estas? 》》》 How are you?",
        "¿Cómo te despertaste hoy? 》》》 How did you wake up today?",
        "Tengo hambre 》》》 I'm hungry.",
        "No creo 》》》 I don't think so",
        "Yo creo que si 》》》 I think so",
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

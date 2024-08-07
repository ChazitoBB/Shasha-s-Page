document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "I can't wait to see you again.",
        "You make every day better.",
        "You are the sunshine in my life.",
        "I love every little thing about you."
        // Añade más frases aquí
    ];

    const specialPhrase = "Ти найкраща дівчина у світі"; // "Eres la mejor chica del mundo" en ucraniano
    const spanishWords = [
        "Te extraño 》》》 I miss you",
        "Buenos días 》》》 Good morning",
        "Buenas noches 》》》 Good night"
        // Añade más palabras aquí
    ];

    const phraseContainer = document.getElementById('phrases');
    const specialPhraseContainer = document.getElementById('special-phrase');
    const spanishWordContainer = document.getElementById('spanish-word');
    const backgroundMusic = document.getElementById('background-music');

    // Añadir frases al contenedor Swiper
    phrases.forEach(phrase => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.textContent = phrase;
        phraseContainer.appendChild(slide);
    });

    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 0, // Sin espacio entre las diapositivas
        centeredSlides: true,
    });

    function updateContent() {
        const randomWord = spanishWords[Math.floor(Math.random() * spanishWords.length)];
        specialPhraseContainer.textContent = specialPhrase;
        spanishWordContainer.innerHTML = `<p class="phrase-of-the-day">Phrase of the Day</p>${randomWord}`;
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

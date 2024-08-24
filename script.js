document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Without being what I was looking for, you ended up being what I needed.",
        "There are not enough words to express how much I love you.",
        "My heart beats faster when you're near.",
        "I'd rather spend a minute with you than a lifetime without you."
    ];

    const specialPhrase = "Ваш інтелект і кмітливість не перестають мене дивувати."; // "Tu inteligencia e ingenio nunca dejan de sorprenderme." en ucraniano
    const spanishWords = [
        "Te voy a extrañar mucho 》》》 I'm going to miss you so much",
        "Por favor no fumes tanto 》》》 Please don't smoke so much",
        "Eres perfecta tal como eres, no lo olvides 》》》 You are perfect just the way you are, don't forget that.",
        "Espero verte pronto 》》》 I hope to see you soon",
        "Nunca olvides sorreir, lo haces de maravilla 》》》 Never forget to smile, you do it wonderfully.",
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

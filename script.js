document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Don't be afraid to do things, remember that making mistakes is the same as learning.",
        "You are stronger than you think, just have faith in yourself.",
        "You may not believe me but I always miss you, you are very special to me even if you don't believe it.",
        "You are that mistake I would make a million times."
    ];

    const specialPhrase = "Коли я хочу побачити зірки, мені просто потрібно дивитися в твої очі, тому що Бог використав їх, щоб створити їх."; // "Cuando quiero ver las estrellas sólo necesito mirarte a los ojos porque Dios los usó para crearlos." en ucraniano
    const spanishWords = [
        "Lo siento 》》》 I´m sorry",
        "No lo se 》》》 I don´t know",
        "Tengo hambre 》》》 I'm hungry.",
        "No creo 》》》 I don't think so",
        "Yo creo que si 》》》 I think so",
        "Note: I need more photos of you for the backgrounds",
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

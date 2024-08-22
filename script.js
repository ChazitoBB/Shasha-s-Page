document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Your creativity and imagination are truly inspiring.",
        "The strength and grace you carry is admirable.",
        "Your kindness and compassion for others is a gift.",
        "You are not only beautiful on the outside but also on the inside."
    ];

    const specialPhrase = "Треба питати Бога, чи не впав ангел згори, бо маєш обличчя, бракує тільки крил."; // "Tu sonrisa decora maravillosamente tu rostro." en ucraniano
    const spanishWords = [
        "¿Qué tal? 》》》 What's up?",
        "Todo en orden 》》》 Everything's fine",
        "¿Puedes decirme dónde está...? 》》》 Can you tell me where...?",
        "¿Tienes la hora? 》》》 Do you have the time?",
        "¿Hay algún lugar para comer cerca? 》》》 Is there a place to eat nearby?",
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

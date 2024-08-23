document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Your ability to think outside the box is remarkable.",
        "Your resilience and elegance shine through every challenge.",
        "The empathy and care you show to others make a difference.",
        "Your inner and outer beauty are both captivating."
    ];

    const specialPhrase = "Ви змушуєте троянди боротися, щоб стати вашою брошкою."; // "Haces que las rosas peleen por ser tu broche." en ucraniano
    const spanishWords = [
        "¿Cómo va todo? 》》》 How's everything going?",
        "Todo bien por aquí 》》》 All good over here",
        "¿Sabes dónde puedo encontrar...? 》》》 Do you know where I can find...?",
        "¿Sabes qué hora es? 》》》 Do you know what time it is?",
        "¿Conoces un buen sitio para comer por aquí? 》》》 Do you know a good place to eat around here?",
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

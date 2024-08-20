document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "You are the most beautiful woman I have ever met.",
        "Fight for the life you want, if you don't like the one you have.",
        "Remember that life is made up of moments, make each one of them unique.",
        "You are perfect, don't forget it."
    ];

    const specialPhrase = "Твій блиск золотий, навіть зорі не затьмарять тебе."; // "Tu brillo es dorado, ni siquiera las estrellas te eclipsarán.." en ucraniano
    const spanishWords = [
        "¿Cómo estás? 》》》 How are you?",
        "Estoy bien 》》》 I'm fine",
        "¿Dónde está...? 》》》 Where is...?",
        "¿Qué hora es? 》》》 What time is it?",
        "¿Dónde puedo encontrar...? 》》》 Where can I find...?",
        "¿Cuánto cuesta? 》》》 How much does it cost?",
        "¿Dónde puedo comer? 》》》 Where can I eat?",
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

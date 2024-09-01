document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Sometimes, what we find without looking turns out to be what we needed all along.",
        "Words fall short when it comes to describing how much I cherish you.",
        "Every moment with you feels like a burst of joy.",
        "Every time I see you, my day gets brighter."
    ];

    const specialPhrase = "Я обрав би одну мить поруч із тобою замість вічності на самоті."; // "Elegiría un solo momento a tu lado sobre una eternidad solo." en ucraniano
    const spanishWords = [
        "Te extraño mucho :´c 》》》 I miss you a lot :´c",
        "Por favor no maltrates tus dedos 》》》 Please don't mistreat your fingers",
        "Eres perfecta tal como eres, no lo olvides 》》》 You are perfect just the way you are, don't forget that.",
        "Eres la mas hermosa, ¿sabias eso? 》》》 You are the most beautiful, did you know that?",
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

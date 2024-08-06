document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "You are amazing just the way you are.",
        "Every moment with you is a treasure.",
        "Your smile lights up my world.",
        // Añade más frases aquí
    ];

    const specialPhrase = "Ти особлива"; // "Eres especial" en ucraniano
    const spanishWords = [
        "cómo estuvo tu día 》》》 How was your day",
        // Añade más palabras aquí
    ];

    const phraseContainer = document.getElementById('phrases');
    const specialPhraseContainer = document.getElementById('special-phrase');
    const spanishWordContainer = document.getElementById('spanish-word');
    const backgroundMusic = document.getElementById('background-music');

    function updateContent() {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const randomWord = spanishWords[Math.floor(Math.random() * spanishWords.length)];

        phraseContainer.textContent = randomPhrase;
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

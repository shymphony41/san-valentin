// Función para cambiar entre cuadros con animación suave
function changeSection(hideSelector, showSelector) {
    const hideElement = document.querySelector(hideSelector);
    const showElement = document.querySelector(showSelector);

    hideElement.classList.add("hide");

    setTimeout(() => {
        hideElement.classList.add("hidden");
        hideElement.classList.remove("show");
        showElement.classList.remove("hidden");
        showElement.classList.add("show");
    }, 500);
}

// Función para abrir la carta
function openLetter() {
    changeSection(".closed-letter", ".open-letter");
}

// Función para mostrar la pregunta después del mensaje bonito
function showQuestion() {
    changeSection(".open-letter", ".question");
}

// Función para mostrar el mensaje final si dice que sí
function showYes() {
    changeSection(".question", ".final-message");
}

// Función si dice que no (mensaje divertido)
function showNo() {
    alert("¡No puedes decir que no! 😜 Inténtalo de nuevo.");
}

// Generar corazones flotantes
function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const randomX = Math.random() * window.innerWidth;
    const randomSize = Math.random() * 40 + 30;
    const randomDuration = Math.random() * 3 + 2;

    heart.style.left = `${randomX}px`;
    heart.style.fontSize = `${randomSize}px`;
    heart.style.animationDuration = `${randomDuration}s`;

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, randomDuration * 1000);
}

// Crear corazones cada 500ms
setInterval(createHeart, 500);

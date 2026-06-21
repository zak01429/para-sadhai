// ============================
// Música
// ============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {
        music.play();
        musicBtn.innerHTML = "⏸ Pausar música";
        playing = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Reproducir música";
        playing = false;
    }

});

// ============================
// Contador
// ============================

const inicio = new Date("2026-05-10T00:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / 86400000);

    const horas = Math.floor(diferencia / 3600000) % 24;

    const minutos = Math.floor(diferencia / 60000) % 60;

    const segundos = Math.floor(diferencia / 1000) % 60;

    document.getElementById("counter").innerHTML =
        dias +
        " días " +
        horas +
        " h " +
        minutos +
        " min " +
        segundos +
        " s ❤️";

}

setInterval(actualizarContador, 1000);

actualizarContador();


// ============================
// Sobre
// ============================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

});


// ============================
// Frases
// ============================

const frases = [

"Te amo ❤️",

"Eres mi felicidad ✨",

"Siempre tú 💖",

"Mi lugar favorito eres tú 🥰",

"Contigo todo es mejor 💞",

"Mi corazón te eligió ❤️"

];

const phrase = document.getElementById("phrase");

let indice = 0;

function mostrarFrase() {

    phrase.style.opacity = 0;

    setTimeout(() => {

        phrase.innerHTML = frases[indice];

        phrase.style.opacity = 1;

        indice++;

        if (indice >= frases.length) {

            indice = 0;

        }

    }, 400);

}

mostrarFrase();

setInterval(mostrarFrase, 5000);


// ============================
// Corazones
// ============================

function crearCorazon() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️", "💖", "💗", "💕"][Math.floor(Math.random() * 4)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(crearCorazon, 180);


// ============================
// Pétalos
// ============================

function crearPetalo() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (16 + Math.random() * 12) + "px";

    petal.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 9000);

}

setInterval(crearPetalo, 350);


// ============================
// Flores
// ============================

const flores = ["🌸", "🌷", "🌼", "🌺"];

for (let i = 0; i < 120; i++) {

    const flor = document.createElement("div");

    flor.className = "flower";

    flor.innerHTML = flores[Math.floor(Math.random() * flores.length)];

    flor.style.left = Math.random() * 100 + "vw";

    flor.style.bottom = Math.random() * 130 + "px";

    document.getElementById("flowers").appendChild(flor);

}


// ============================
// Estrellas
// ============================

for (let i = 0; i < 70; i++) {

    const estrella = document.createElement("div");

    estrella.className = "star";

    estrella.innerHTML = "✦";

    estrella.style.left = Math.random() * 100 + "%";

    estrella.style.top = Math.random() * 45 + "%";

    estrella.style.fontSize = (8 + Math.random() * 10) + "px";

    estrella.style.animationDelay = Math.random() * 2 + "s";

    document.getElementById("stars").appendChild(estrella);

}
const containerVideoEl = document.getElementById("containerVideo")
const containerPrincipalEl = document.getElementById("containerPrincipal")
const buttonVideoEl = document.getElementById("button-video")
const buttonXEl = document.getElementById("buttonX")
const videoEl = document.querySelector("#containerVideo video");


function showVideoContainer() {
    containerVideoEl.classList.remove("hidden"); // Mostrar el contenedor de video
    containerPrincipalEl.classList.add("hidden"); // Ocultar el contenedor principal
    videoEl.play();
}

function hideVideoContainer() {
    containerVideoEl.classList.add("hidden"); // Ocultar el contenedor de video
    containerPrincipalEl.classList.remove("hidden"); // Mostrar el contenedor principal
    videoEl.pause();
    videoEl.currentTime = 0
}

buttonVideoEl.addEventListener("click", () => {
    showVideoContainer();
});

buttonXEl.addEventListener("click", () => {
    hideVideoContainer();
});


/*
    paragraph.classList.contains("hidden")
    paragraph.classList.remove("hidden");
    paragraph.classList.add("visible");
*/
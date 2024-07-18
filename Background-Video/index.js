document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById("background-video")
    const buttom = document.getElementById ("buttom")

    buttom.addEventListener ("click",() =>{
        if (video.paused) {
            video.play();
            buttom.textContent = '⏸️';
        } else {
            video.pause();
            buttom.textContent = '▶️';
        }})
})
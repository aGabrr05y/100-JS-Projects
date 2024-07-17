const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("rest")


let totalTime = 25*60;
let intervalId;


function updateDisplay () {
    let minutes = Math.floor(totalTime/60);
    let seconds = totalTime % 60;
    timerEl.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function starTimer (){
    if (!intervalId){
        intervalId = setInterval(() =>{
            if (totalTime > 0){
            totalTime--;
            updateDisplay()} 
        else{
            clearInterval(intervalId);
        }}, 1000)
    }}

startEl.addEventListener ("click", () =>{
    starTimer()
})

function stopTime (){
    clearInterval(intervalId);
    intervalId = null;
}

stopEl.addEventListener("click", () =>{
    stopTime()
})

function resetTime (){
    totalTime = 25*60;
    updateDisplay()
}

resetEl.addEventListener("click", () =>{
    resetTime()
})

const startEL = document.getElementById("start")
const stopEL = document.getElementById("stop")
const resetEL = document.getElementById("reset")
const timerEL = document.getElementById("timer")

let intervalvalid;
let totalTime = 0;


function updateDisplay (){
    let seconds = totalTime%60;
    let minutes = Math.floor(totalTime / 60) % 60;
    let hours = Math.floor(totalTime / 3600)
    timerEL.innerHTML = 
        (`<strong> 
        ${hours < 10?'0':''}${hours}: 
        ${minutes < 10?'0':''}${minutes}: 
        ${seconds < 10?'0':''}${seconds}
        </strong>`)
}
function startTime (){
    if (!intervalvalid){
        intervalvalid = setInterval (() =>{
            totalTime++
            updateDisplay()
        }, 1000)
    }
}
startEL.addEventListener("click",() =>{
    startTime()
})

function stopTime (){
    clearInterval(intervalvalid)
    intervalvalid = null
}

stopEL.addEventListener("click", ()=>{
    stopTime()
})

function restTime (){
    totalTime = 0
    updateDisplay()
}

resetEL.addEventListener("click", ()=>{
    restTime()
})

updateDisplay()
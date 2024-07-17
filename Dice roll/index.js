const diceEl = document.getElementById("dice");
const buttonEl = document.getElementById("roll-button")
const rollHistory = document.getElementById("roll-history")

const allDices = [ "&#9856;", "&#9856;","&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"]
let numberofRolls = 0;


function getDiceNumber (){
    let random = Math.floor(Math.random()* allDices.length)
    return allDices[random]
}

buttonEl.addEventListener("click", () =>{
    dice = getDiceNumber()
    diceEl.innerHTML = dice
    createHistory(dice)
})


function createHistory (dice){
    numberofRolls++
    let history = document.createElement("li");
    history.innerHTML = (`Roll ${numberofRolls}: <span class = "dadito"> ${dice} </span>`)
    rollHistory.appendChild(history)

}


/*const diceEl = document.getElementById("dice");
const buttonEl = document.getElementById("roll-button");
const rollHistory = document.getElementById("roll-history");

const allDices = ["&#9856;", "&#9856;", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
let numberofRolls = 0;

function getDiceNumber() {
    let random = Math.floor(Math.random() * allDices.length); // Usar Math.floor en lugar de Math.round para obtener un índice entero
    return allDices[random];
}

buttonEl.addEventListener("click", () => {
    let dadito = getDiceNumber();
    diceEl.innerHTML = dadito; // Mostrar la figura del dado en diceEl
    createHistory(dadito); // Pasar dadito como argumento a createHistory
});

function createHistory(dadito) {
    numberofRolls++;
    let history = document.createElement("li");
    history.innerHTML = `Roll ${numberofRolls}: ${dadito}`; // Insertar la figura del dado como HTML
    rollHistory.appendChild(history);
}
*/

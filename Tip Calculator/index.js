document.addEventListener('DOMContentLoaded', function() {
    const billinput = document.querySelector(".billinput");
    const tipinput = document.querySelector(".tipinput");
    const total = document.querySelector(".total");
    const form = document.querySelector(".form");

function displayError(message) {
    total.innerText = message;}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let bill = parseFloat(billinput.value);
    let tip = parseFloat(tipinput.value);
    if (bill > 0 && tip >= 0){
    let calculo = (tip * bill)/100
    let resultado = (calculo + bill).toFixed(2)
    total.innerText = (`Total: ${resultado}`)}
    else{
        displayError("Introduce un numero Valido")
    }

}
)})



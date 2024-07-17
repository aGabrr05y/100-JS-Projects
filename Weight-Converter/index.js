const inputEl = document.getElementById("input")
const resultEl = document.getElementById("result")
const errorEL = document.getElementById("error")


let onekg =  0.45359237;
let timer;

function kgCalculator (){
    let weight = parseFloat(inputEl.value);
    let calculation = (weight * onekg).toFixed(2)
    return calculation
}

inputEl.addEventListener("input", () => {
    let result = kgCalculator()
    if (result.startsWith("NaN") || inputEl.value <= 0){
        resultEl.textContent = ""
        showError()
    }
    else {
        resultEl.textContent = result
}})

function showError (){
    clearTimeout(timer)
    errorEL.innerHTML = ""
    timer = setTimeout(() =>
        {errorEL.textContent = "Please enter a valid number"},1000)
}
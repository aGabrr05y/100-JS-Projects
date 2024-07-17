const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")


function celsiusToFk (){
    const celsius = parseFloat(celsiusEl.value)
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    fahrenheitEl.value = fahrenheit.toFixed(2)
    kelvinEl.value = kelvin.toFixed(2)
}


function fahrenheitToCk (){
    const fahrenheit = parseFloat(fahrenheitEl.value)
    let celsius = ((fahrenheit - 32) * 5)/9;
    let kelvin = (((fahrenheit - 32) * 5)/9)+273.15;
    celsiusEl.value = celsius.toFixed(2)
    kelvinEl.value = kelvin.toFixed(2)    
}

function kelvinToCf (){
    const kelvin = parseFloat(kelvinEl.value)
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    celsiusEl.value = celsius.toFixed(2)
    fahrenheitEl.value = fahrenheit.toFixed(2)

}

fahrenheitEl.addEventListener("input", () =>{
    fahrenheitToCk()
})

celsiusEl.addEventListener("input", () => {
    celsiusToFk()
})

kelvinEl.addEventListener("input", () => {
    kelvinToCf()
})
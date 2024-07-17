const month = document.querySelector(".month");
const exactDate = document.querySelector(".exactDate")
const alldays = document.querySelector(".alldays")

let date = new Date();
let day = date.getDay();
let mes = date.getMonth();
let year = date.getFullYear();
let dayNumber = date.getDate();

let daysOfTheweek = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let months = ['January','February','March','April','May','Jun','July','Agust','September','October','November','Dicember']
month.innerHTML = months[mes];

exactDate.innerHTML = (`${daysOfTheweek[day-1].substring(0,3)} ${months[mes].substring(0,3)} ${dayNumber} ${year}`)

let totalday = getDaysInMonth(year, mes)
function getDaysInMonth(yearr, month) {
    // Crear una fecha para el primer día del mes siguiente
    let date = new Date(yearr, month + 1, 0);
    // El día del mes será el número total de días en el mes
    return date.getDate();
}



function forMonths (){
    let counter = 1
    let contend = 1

    while (counter < totalday){
        let row = document.createElement("tr")
        
        for (let i= 0; i < 7 && counter <= totalday; i++){
            let cell = document.createElement("td")
            cell.textContent = contend;
            row.appendChild(cell);

            if (contend == dayNumber){
                cell.classList.add("today")
            }
                        
            counter++;
            contend++;
        }
        alldays.appendChild(row)
    }

}



forMonths();
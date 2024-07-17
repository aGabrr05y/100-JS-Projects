const amountEl = document.getElementById("amount")
const rateEl = document.getElementById("rate")
const monthsToPayEl = document.getElementById("toPay")
const resultEl = document.getElementById("result")



function totalAmount() {
    let amount = parseFloat(amountEl.value);
    let rate = parseFloat(rateEl.value);
    let monthsToPay = parseFloat(monthsToPayEl.value);

    if (!isNaN(amount) && !isNaN(rate) && !isNaN(monthsToPay) && monthsToPay > 0) {
        let getingRate = (((amount * rate) / 100) + amount);
        let total = getingRate / monthsToPay;
        resultEl.innerHTML = total.toFixed(2);
    } else {
        resultEl.innerHTML = "";
    }
}

amountEl.addEventListener("blur", totalAmount);
rateEl.addEventListener("blur", totalAmount );
monthsToPayEl.addEventListener("blur", totalAmount);

amountEl.addEventListener("input", totalAmount);
rateEl.addEventListener("input", totalAmount);
monthsToPayEl.addEventListener("input", totalAmount);
document.addEventListener('DOMContentLoaded', function(){
    const result = document.querySelector(".result");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function(){
        const inputdate = document.querySelector("#inputdate").value;

        if (!inputdate) {
            result.textContent = "Please enter a valid date.";
            return;
        }

        let date = new Date();
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth() + 1;

        let dateToList = inputdate.split("-");
        let birthYear = Number(dateToList[0]);
        let birthMonth = Number(dateToList[1]);
        let birthDay = Number(dateToList[2]);

        let age = year - birthYear;

        if (birthMonth > month || (birthMonth === month && birthDay > day)) {
            age--;
        }

        result.textContent = `Your age is ${age} years old`;
    });
});




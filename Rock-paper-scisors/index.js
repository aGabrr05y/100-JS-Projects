document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(".buttons button");
    const resultTextEl = document.getElementById("result-text");
    const playerScoreEl = document.getElementById("player-score");
    const computerScoreEl = document.getElementById("computer-score");

    let playerScore = 0;
    let computerScore = 0;

    function computerSelection() {
        const computerDecisions = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        return computerDecisions[random];
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const result = playRound(button.id, computerSelection());
            resultTextEl.innerHTML = result;  // Actualiza el resultado del juego con HTML
            playerScoreEl.textContent = playerScore;  // Actualiza la puntuación del jugador
            computerScoreEl.textContent = computerScore;  // Actualiza la puntuación de la computadora
        });
    });

    function playRound(user, computer) {
        if (user === computer) {
            return `<span style="color: gray;">It's a tie!</span>`;
        } else if (
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")
        ) {
            playerScore++;
            return `<span style="color: green;">You win! ${user} beats ${computer}</span>`;
        } else {
            computerScore++;
            return `<span style="color: red;">You lose! ${computer} beats ${user}</span>`;
        }
    }
});

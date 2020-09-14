(()=>{
    let playerScore = 0;
    let computerScore = 0;
    let userChoice;
    let endGame = "";
    let result = "";

    document.getElementById("rock").addEventListener("click", () => {
        userChoice = "rock";
        playGame();
    })

    document.getElementById("paper").addEventListener("click", () => {
        userChoice = "paper";
        playGame();
    })

    document.getElementById("scissors").addEventListener("click", () => {
        userChoice = "scissors";
        playGame();
    })

    document.getElementById("resetBtn").addEventListener("click",function (){
        playerScore = 0;
        computerScore = 0;
        endGame = "";
        result = "";
        userChoice = "";

        document.getElementById("outcome").value = result;
        document.getElementById("score").value = "";
        document.getElementById("gameOver").value = endGame;
        document.getElementById("userPick").innerHTML = "Player: ";
        document.getElementById("computerPick").innerHTML = "Computer: ";
    })

    function playGame() {

        let computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // checking answers
        console.log("Player: " + userChoice,"Computer: " + computerChoice)

        if (userChoice === computerChoice) {
            result = "Draw";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                result = "Player wins";
                playerScore++;
            } else if (computerChoice === "paper") {
                result = "Computer wins";
                computerScore++;
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice === "rock") {
                result = "Player wins";
                playerScore++;
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice === "paper") {
                result = "Player wins";
                playerScore++;
            }
        }

        if (computerScore === 10){
            endGame = "You lost";
        } else if (playerScore === 10){
            endGame = "You won";
        }
        document.getElementById("outcome").value = result;
        document.getElementById("score").value = playerScore + " - " + computerScore;
        document.getElementById("userPick").innerHTML = "Player: " + userChoice;
        document.getElementById("computerPick").innerHTML = "Computer: " + computerChoice;
        document.getElementById("gameOver").value = endGame;
    }
})();
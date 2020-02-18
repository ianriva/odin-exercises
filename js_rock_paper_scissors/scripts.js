//global variables
let playerRounds = 0;
let computerRounds = 0;
const options = ["rock","paper","scissors"];

//divs
let elections = document.getElementById("elections");
let scoreDetail = document.getElementById("score-detail");

//btns
const rock = document.getElementById("btn-rock");
const paper = document.getElementById("btn-paper");
const scissors = document.getElementById("btn-scissors");
const reset = document.getElementById("btn-reset");

//reset
reset.addEventListener("click", () => {
    playerRounds = 0;
    computerRounds = 0;
    scoreDetail.innerHTML = `You ${playerRounds} - PC ${computerRounds}`;
    elections.innerHTML = "";
});

//computer selection
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3)); // 0 to 2
    return randomNumber;
}


//play round 
function playRound(playerChoice) {
    elections.innerHTML = playerChoice;
    let computerChoice = computerPlay();
    switch (playerChoice) {
        case 0:
            switch (computerChoice) {
                case 0:
                    elections.innerHTML = "Draw!";
                    break;
                case 1:
                    computerRounds++;
                    elections.innerHTML = `You lose!, ${options[computerChoice]} beats ${options[playerChoice]}`;
                    break;
                case 2:
                    playerRounds++;
                    elections.innerHTML = `You win!, ${options[playerChoice]} beats ${options[computerChoice]}`;
                    break;
            }
            break;
        case 1:
            switch (computerChoice) {
                case 0:
                    playerRounds++;
                    elections.innerHTML = `You win!, ${options[playerChoice]} beats ${options[computerChoice]}`;
                    break;
                case 1:
                    elections.innerHTML = "Draw!";
                    break;
                case 2:
                    computerRounds++;
                    elections.innerHTML = `You lose!, ${options[computerChoice]} beats ${options[playerChoice]}`;
                    break;
            }
            break;
        case 2:
            switch (computerChoice) {
                case 0:
                    computerRounds++;
                    elections.innerHTML = `You lose!, ${options[computerChoice]} beats ${options[playerChoice]}`;
                    break;
                case 1:
                    playerRounds++;
                    elections.innerHTML = `You win!, ${options[playerChoice]} beats ${options[computerChoice]}`;
                    break;
                case 2:
                    elections.innerHTML = "Draw!";
                    break;
            }
            break;
    }
    scoreDetail.innerHTML = `You ${playerRounds} - PC ${computerRounds}`;
}

//player selection
rock.addEventListener("click",() => {playRound(0)});
paper.addEventListener("click", () => {playRound(1)});
scissors.addEventListener("click", () => {playRound(2)});

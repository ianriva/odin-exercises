//TODO
//verify buttons - event listeners
// election's div displaying correctly?
//game rounds working?


//global variables
let playerRounds = 0;
let computerRounds = 0;
let playerSelection = null;
const scoreDetail = document.getElementById("score-detail");
//set score
function setScore(playerRounds, computerRounds) {
    scoreDetail.textContent = `You : ${playerRounds} - PC : ${computerRounds}`;;
}
setScore(playerRounds, computerRounds);
//buttons
const btn_rock = document.getElementById('btn-rock');
const btn_papper = document.getElementById('btn-paper');
const btn_scissors = document.getElementById('btn-scissors');
const btn_reset = document.getElementById('btn-reset');

//reset
function resetGame() {
    playerRounds = 0;
    computerRounds = 0;
    playerSelection = null;
    btn_reset.style.borderColor = "white";

    game();
}
btn_reset.addEventListener("click", resetGame);

//game
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3)); // 0 to 2
    return randomNumber;
}

function playRound() {
    const options = ["rock", "paper", "scissors"]; 
    let computerSelection = computerPlay();
    while (playerSelection === null) {
        btn_rock.addEventListener("click", () => {
            playerSelection = parseInt(0);
        });
        btn_paper.addEventListener("click", () => {
            playerSelection = parseInt(1);
        });
        btn_scissors.addEventListener("click", () => {
            playerSelection = parseInt(2);
        });
    }
    
    let elections = document.getElementById("elections");
    
    switch (playerSelection) {
        case 0:
            switch (computerSelection) {
                case 0:
                    elections.textContent = "Draw!";
                    break;
                case 1:
                    computerRounds++;
                    elections.textContent = `You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`;
                    break;
                case 2:
                    playerRounds++;
                    elections.textContent = `You win!, ${options[playerSelection]} beats ${options[computerSelection]}`;
                    break;
            }
            break;
        case 1:
            switch (computerSelection) {
                case 0:
                    playerRounds++;
                    elections.textContent = `You win!, ${options[playerSelection]} beats ${options[computerSelection]}`;
                    break;
                case 1:
                    elections.textContent = "Draw!";
                    break;
                case 2:
                    computerRounds++;
                    elections.textContent = `You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`;
                    break;
            }
            break;
        case 2:
            switch (computerSelection) {
                case 0:
                    computerRounds++;
                    elections.textContent = `You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`;
                    break;
                case 1:
                    playerRounds++;
                    elections.textContent = `You win!, ${options[playerSelection]} beats ${options[computerSelection]}`;
                    break;
                case 2:
                    elections.textContent = "Draw!";
                    break;
            }
            break;
    }
    
    setScore(playerRounds,computerRounds);
    playerSelection = null; // reset value for the next round
}


function game() {
    let whoWins = '';
    do {
        playRound();
    }while (playerRounds<5 && computerRounds <5);
    //evaluate who won
    if (playerRounds > computerRounds) {
        whoWins = "<h1>You won the game!</h1>";
    } else {
        whoWins = "<h1>You lost the game!</h1>";
    }
    document.getElementById("elections").innerHTML = whoWins;
    btn_reset.style.borderColor = "red";
}



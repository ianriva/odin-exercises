let playerRounds = 0;
let computerRounds = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3));
    return randomNumber;
}

function playerPlay() {
    
    let playerChoose = parseInt(window.prompt("Choose a number, 0 for rock, 1 for paper or 2 for scissors"));
    if (playerChoose !== 0 && playerChoose !== 1 && playerChoose !== 2) {
            return playerPlay();
    } else {
        return playerChoose;
    }
}

function playRound() {
    const options = ["rock", "paper", "scissors"];
    let playerSelection = playerPlay(); 
    let computerSelection = computerPlay();
    switch (playerSelection) {
        case 0:
            switch (computerSelection) {
                case 0:
                    console.log("Draw!");
                    break;
                case 1:
                    computerRounds++;
                    console.log(`You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`);
                    break;
                case 2:
                    playerRounds++;
                    console.log(`You win!, ${options[playerSelection]} beats ${options[computerSelection]}`);
                    break;
            }
            break;
        case 1:
            switch (computerSelection) {
                case 0:
                    playerRounds++;
                    console.log(`You win!, ${options[playerSelection]} beats ${options[computerSelection]}`);
                    break;
                case 1:
                    console.log("Draw!");
                    break;
                case 2:
                    computerRounds++;
                    console.log(`You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`);
                    break;
            }
            break;
        case 2:
            switch (computerSelection) {
                case 0:
                    computerRounds++;
                    console.log(`You lose!, ${options[computerSelection]} beats ${options[playerSelection]}`);
                    break;
                case 1:
                    playerRounds++;
                    console.log(`You win!, ${options[playerSelection]} beats ${options[computerSelection]}`);
                    break;
                case 2:
                    console.log("Draw!");
                    break;
            }
            break;
    }
}

function game() {
    do {
        playRound();
        console.log(`Player: ${playerRounds} -- Computer ${computerRounds}`);
    }while (playerRounds<5 && computerRounds <5);
    if (playerRounds > computerRounds) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

game();

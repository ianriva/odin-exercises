

function computerPlay() {
    const arreglo = ["rock", "paper", "scissors"];
    aleatorio = Math.floor(Math.random() * (3));
    opcion = arreglo[aleatorio];
    return aleatorio;
}

function playerPlay() {
    const arreglo = ["rock", "paper", "scissors"];
    do {
        eleccion = prompt("choose a number, 0 for rock, 1 for paper or 2 for scissors");
    } while (eleccion == 1 || eleccion == 2 || eleccion == 3);
    return eleccion;
}

function playRound(computerPlay, playerPlay) {
    if (computerPlay == playerPlay) {
        alert("even!");
    }
}
alert(computerPlay()); // alert console.log
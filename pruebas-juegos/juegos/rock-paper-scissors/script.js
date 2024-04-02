
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function rockPaperScissorsGenerator() {
    randomDecision = Math.floor(Math.random() * 3) + 1; 
    let imagenTwo;

    if (randomDecision == ROCK){
        imagenTwo = "rock2";
    } else if(randomDecision == PAPER) {
        imagenTwo = "paper2";
    } else if( randomDecision == SCISSORS) {
        imagenTwo = "scissors2";
    }
    return { randomDecision: randomDecision, imagenTwo: imagenTwo};
}

function rock() { 

    let decision = rockPaperScissorsGenerator();
    let imagenOne = document.getElementById("rock1");
    let imagenTwo = document.getElementById(decision.imagenTwo)

    if (decision.randomDecision == SCISSORS) {
        document.getElementById("result").textContent = "You won"
    } else if (decision.randomDecision == PAPER) {
        document.getElementById("result").textContent = "Game over"
    } else {
        document.getElementById("result").textContent = "Tie"
    }
    imagenTwo.style.display = "block";
    imagenOne.style.display = "block";
}

function scissors() {

    let decision = rockPaperScissorsGenerator();
    let imagenOne = document.getElementById("scissors1");
    let imagenTwo = document.getElementById(decision.imagenTwo)

    if (decision.randomDecision == PAPER) {
        document.getElementById("result").textContent = "You won"
    } else if (decision.randomDecision == ROCK) {
        document.getElementById("result").textContent = "Game over"
    } else {
        document.getElementById("result").textContent = "Tie"
    }
    imagenOne.style.display = "block";
    imagenTwo.style.display = "block";
}

function paper() {

    let decision = rockPaperScissorsGenerator();
    let imagenOne = document.getElementById("paper1");
    let imagenTwo = document.getElementById(decision.imagenTwo)

    if (decision.randomDecision == ROCK) {
        document.getElementById("result").textContent = "You won"
    } else if (decision.randomDecision == SCISSORS) {
        document.getElementById("result").textContent = "Game over"
    } else {
        document.getElementById("result").textContent = "Tie"
    }
    
    imagenOne.style.display = "block";
    imagenTwo.style.display = "block";
}

function reiniciarPagina() {
    location.reload();
}


const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const winners = [
  [ROCK, SCISSORS],
  [PAPER, ROCK],
  [SCISSORS, PAPER],
];
const losers = [
  [ROCK, PAPER],
  [PAPER, SCISSORS],
  [SCISSORS, ROCK],
];

function resetDecitions() {
  document.getElementById("rock1").style.display = "none";
  document.getElementById("paper1").style.display = "none";
  document.getElementById("scissors1").style.display = "none";
  document.getElementById("rock2").style.display = "none";
  document.getElementById("paper2").style.display = "none";
  document.getElementById("scissors2").style.display = "none";
}

function rockPaperScissorsGenerator(election) {
  resetDecitions();

  let randomDecision = Math.floor(Math.random() * 3) + 1;
  let imagenOne;
  if (election == "ROCK") {
    imagenOne = document.getElementById("rock1");
  } else if (election == "PAPER") {
    imagenOne = document.getElementById("paper1");
  } else if (election == "SCISSORS") {
    imagenOne = document.getElementById("scissors1");
  }
  let imagenTwo;
  if (randomDecision === 1) {
    randomDecision = ROCK;
    imagenTwo = document.getElementById("rock2");
  } else if (randomDecision === 2) {
    randomDecision = PAPER;
    imagenTwo = document.getElementById("paper2");
  } else if (randomDecision === 3) {
    randomDecision = SCISSORS;
    imagenTwo = document.getElementById("scissors2");
  }
  let game = [election, randomDecision];
  if (
    winners.some(
      (winner) => winner[0] === election && winner[1] === randomDecision
    )
  ) {
    document.getElementById("result").textContent = "You won";
  } else if (
    losers.some((loser) => loser[0] === election && loser[1] === randomDecision)
  ) {
    document.getElementById("result").textContent = "Game over";
  } else if (election === randomDecision) {
    document.getElementById("result").textContent = "Tie";
  }
  imagenOne.style.display = "block";
  imagenTwo.style.display = "block";
}

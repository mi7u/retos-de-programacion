// lista de elecciones
const elections = [
  { name: "rock", icon: "🪨", win: ["scissors"] },
  { name: "paper", icon: "📄", win: ["rock"] },
  {
    name: "scissors",
    icon: "✂️",
    win: ["paper"],
  },
];

// comparar las manos, para obtener el resultado
function compareHands(handA, handB) {
  if (handA === handB) return "draw 🤓";
  if (handA.win.indexOf(handB.name) !== -1) return "win 😃";
  return "lose 🥺";
}

function rockPaperScissorsGenerator(electionIndex) {
  // inicializar elementos
  const player1Img = document.getElementById("player1");
  const player2Img = document.getElementById("player2");

  const player1_result = document.getElementById("player1_result");
  const player2_result = document.getElementById("player2_result");
  const tesult_text = document.getElementById("result_text");
  const state_text = document.getElementById("state_text");

  let randomDecision = Math.floor(Math.random() * 3);

  const player1Election = elections[electionIndex];
  const player2Election = elections[randomDecision];

  const compared = compareHands(player1Election, player2Election);

  player1_result.textContent = player1Election.icon;
  player2_result.textContent = player2Election.icon;
  result_text.textContent = compared;
}

// lista de elecciones
const elections = {
  rock: {
    img: "img/rock.jpg",
  },
  paper: {
    img: "img/paper.jpg",
  },
  scissors: {
    img: "img/scissors.jpg",
  },
};

// condiciones victoriosas
const winners = [
  [elections.rock, elections.scissors],
  [elections.paper, elections.rock],
  [elections.scissors, elections.paper],
];

// comparar las manos, para obtener el resultado
function compareHands(handA, handB) {
  if (handA === handB) return "draw ☝️🤓";

  if (winners.some((element) => element[0] === handA && element[1] === handB)) {
    return "win 😃";
  }

  return "lose 🥺";
}

function rockPaperScissorsGenerator(election) {
  // inicializar elementos
  const player1Img = document.getElementById("player1");
  const player2Img = document.getElementById("player2");
  const result = document.getElementById("result");

  result.textContent = " "; // resetea el texto de result

  // Obtener el objeto elejido por ambos jugadores
  player1Election = elections[election];
  let randomDecision = Math.floor(Math.random() * 3);
  player2Election = Object.values(elections)[randomDecision];

  // mostrar la imagen elegida
  player1Img.src = player1Election.img;
  player2Img.src = player2Election.img;

  // calcular y mostrar el resultado
  result.textContent = compareHands(player1Election, player2Election);
}

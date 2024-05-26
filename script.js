let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerMove = (cellIndex) => {
  if (gameState[cellIndex] !== "" || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;

  if (checkWin()) {
    document.getElementById("status").innerText = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (checkDraw()) {
    document.getElementById("status").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").innerText = `${currentPlayer}'s turn`;
};

const checkWin = () => {
  return winPatterns.some((condition) => {
    return condition.every((index) => {
      return gameState[index] === currentPlayer;
    });
  });
};

const checkDraw = () => {
  return gameState.every((cell) => cell !== "");
};

const resetGame = () => {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("status").innerText = `${currentPlayer}'s turn`;
  Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.innerText = "";
  });
};

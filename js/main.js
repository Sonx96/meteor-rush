// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const homeBtnNode = document.querySelector("#home-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const gamewinScreenNode = document.querySelector("#gamewin-screen");

let gameObj = null;

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");

  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();

  gameObj.gameLoop();
}

function playAgain() {
  console.log("vuelve a jugar");

  gameoverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();

  gameObj.gameLoop();
}

function homeScreen() {
  console.log("pantalla inicio");

  gamewinScreenNode.style.display = "none";
  startScreenNode.style.display = "flex";
}

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", playAgain);
homeBtnNode.addEventListener("click", homeScreen);

window.addEventListener("keydown", (event) => {
  if (gameObj.isGameOn === true) {
    if (event.key === "ArrowRight" || event.key === "d") {
      gameObj.nave.moveEffectRight();
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      gameObj.nave.moveEffectLeft();
    } else if (event.key === "ArrowUp" || event.key === "w") {
      gameObj.nave.moveEffectDown();
    } else if (event.key === "ArrowDown" || event.key === "s") {
      gameObj.nave.moveEffectUp();
    }
  }
});

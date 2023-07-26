// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");

let gameObj = null;

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");

  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  console.log(gameObj);

  gameObj.gameLoop();
}

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
    gameObj.nave.moveEffectRight();
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    gameObj.nave.moveEffectLeft();
  } else if (event.key === "ArrowUp" || event.key === "w") {
    gameObj.nave.moveEffectDown();
  } else if (event.key === "ArroDown" || event.key === "s") {
    gameObj.nave.moveEffectUp();
  }
});

# METEOR-RUSJ

## [Play the Game!](https://sonx96.github.io/meteor-rush/)

![Game Logo](www.your-image-logo-here.com)


# Description

Juego inspirado en el género shoot'em up o juegos retro de naves, con estética pixel art.


# Main Functionalities

- Nave con movilidad respecto al eje X e Y.
- Meteoritos con mov. en el eje Y.
- Cometas con mov. en el eje X.
- Combustible con mov. en el eje Y.
- Colisiones entre los distintos objetos que aparecen en pantalla.
- Condición de victoria o derrota según colisiones.
- Sistema de puntuación en pantalla.
- Pantallas de inicio, victoria y derrota.
- Botones en cada una de las pantallas para ir a otra de estas.



# Backlog Functionalities

- Efectos de sonido y música.
- Animaciones de mov. de la nave según se mueva a derecha o izquierda.
- Sistema de disparos con colisiones para destruir meteoritos.
- Diferentes objetos con distintas funciones al colisionar con la nave.

# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

- List here sections for your your different JS files.
- One for main.js to manage DOM elements, one for the Game class and one for each other class file of your game.
- Inside each file you can list the functions, clases, properties and methods of your code.

Example:

## main.js

- function startGame();
- function playAgain();
- function homeScreen();


## Game.js

- Game {
    this.nave;
    this.meteorArr;
    this.fuelArr;
    this.cometArr;
    this.fuelCount;
    this.frames;
    this.isGameOn;
- meteorSpawn() {};
- meteorDelete() {};
- collisionNaveMeteor() {};
- fuelSpawn() {};
- fuelDelete() {};
- collisionNaveFuel() {};
- updateFuelCounter() {};
- cometSpawn() {};
- cometDelete() {};
- collisionNaveComet() {};
- gameWin() {};
- gameOver() {};
- gameLoop() {};
}

## nave.js

- Nave {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.moveXSpeed;
    this.moveYSpeed;
    this.node.style.width;
    this.node.style.height;
    this.node.style.position;
    this.node.style.top;
    this.node.style.left;
- moveEffectRight() {};
- moveEffectLeft() {};
- moveEffectUp() {};
- moveEffectDown() {};
- positionUpdateX() {};
- positionUpdateY() {};
}

## meteor.js

- Comet {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.cometSpeed;
    this.node.style.width;
    this.node.style.height;
    this.node.style.position;
    this.node.style.top;
    this.node.style.left;
- automaticCometMov() {};
- positionCometUpdate() {};
}

## comet.js

- Meteor {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.meteorSpeed;
    this.node.style.width;
    this.node.style.height;
    this.node.style.position;
    this.node.style.top;
    this.node.style.left;
- automaticMeteorMov() {};
- positionMeteorUpdate() {};
}

# Extra Links 

### Slides
[Link](https://docs.google.com/presentation/d/1ft6U5HViTimGvpfkoJmC0cSb8dqLdcAsVTy0FF2OZkU/edit#slide=id.g25c6a4c54fd_0_292)

## Deploy
[Link](https://sonx96.github.io/meteor-rush/)
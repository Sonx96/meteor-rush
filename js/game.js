class Game {
  constructor() {
    this.nave = new Nave();

    this.meteorArr = [];
    this.fuelArr = [];
    this.fuelCount = 0;

    this.frames = 2;
    this.isGameOn = true;
  }

  meteorSpawn = () => {
    if (this.meteorArr.length === 0 || this.frames % 60 === 0) {
      let newMeteor = new Meteor();
      this.meteorArr.push(newMeteor);
    }
  };

  meteorDelete = () => {
    if (this.meteorArr[0].y > 400) {
      this.meteorArr[0].node.remove();
      this.meteorArr.shift();
    }
  };

  collisionNaveMeteor = () => {
    this.meteorArr.forEach((cadaMeteor) => {
      if (
        this.nave.x < cadaMeteor.x - 15 + cadaMeteor.w &&
        this.nave.x + this.nave.w > cadaMeteor.x &&
        this.nave.y < cadaMeteor.y - 20 + cadaMeteor.h &&
        this.nave.h + this.nave.y > cadaMeteor.y
      ) {
        this.gameOver();
      }
    });
  };

  fuelSpawn = () => {
    if (this.fuelArr.length === 0) {
      let newFuel = new Fuel();
      this.fuelArr.push(newFuel);
    }
  };

  fuelDelete = () => {
    if (this.fuelArr[0].y > 650) {
      this.fuelArr[0].node.remove();
      this.fuelArr.shift();
    }
  };

  collisionNaveFuel = () => {
    this.fuelArr.forEach((cadaFuel) => {
      if (
        this.nave.x < cadaFuel.x + cadaFuel.w &&
        this.nave.x + this.nave.w > cadaFuel.x &&
        this.nave.y < cadaFuel.y + cadaFuel.h &&
        this.nave.h + this.nave.y > cadaFuel.y
      ) {
        this.fuelCount++;
        console.log(this.fuelCount);
        this.fuelArr[0].node.remove();
        this.fuelArr.shift();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
  };

  gameLoop = () => {
    this.frames++;

    this.meteorSpawn();

    this.meteorArr.forEach((eachMeteor) => {
      eachMeteor.automaticMeteorMov();
    });

    this.meteorDelete();

    this.collisionNaveMeteor();

    this.fuelSpawn();

    this.fuelArr.forEach((eachFuel) => {
      eachFuel.automaticFuelMov();
    });

    this.fuelDelete();

    this.collisionNaveFuel();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// planificación

//PROPIEDADES
//nave => posicion y tamaño
//meteoritos => posicion y tamaño

//METODOS
//movimiento nave
//movimiento meteoritos
//colisiones
//hueco aleatorio en fila meteoritos

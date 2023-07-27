class Game {
  constructor() {
    this.nave = new Nave();

    this.meteorArr = [];
    this.fuelArr = [];
    this.cometArr = [];
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
    this.meteorArr.forEach((eachMeteor) => {
      if (
        this.nave.x < eachMeteor.x - 10 + eachMeteor.w &&
        this.nave.x + this.nave.w - 10 > eachMeteor.x &&
        this.nave.y < eachMeteor.y - 10 + eachMeteor.h &&
        this.nave.h + this.nave.y - 10 > eachMeteor.y
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
    if (this.fuelArr[0].y > 450) {
      this.fuelArr[0].node.remove();
      this.fuelArr.shift();
    }
  };

  collisionNaveFuel = () => {
    this.fuelArr.forEach((eachFuel) => {
      if (
        this.nave.x < eachFuel.x - 10 + eachFuel.w &&
        this.nave.x + this.nave.w - 10 > eachFuel.x &&
        this.nave.y < eachFuel.y - 10 + eachFuel.h &&
        this.nave.h + this.nave.y - 10 > eachFuel.y
      ) {
        this.fuelCount++;
        console.log(this.fuelCount);
        this.updateFuelCounter();
        this.fuelArr[0].node.remove();
        this.fuelArr.shift();
      }
    });
  };

  updateFuelCounter = () => {
    fuelCounterNode.textContent = `Fuel: ${this.fuelCount}`;
  };

  cometSpawn = () => {
    if (this.cometArr.length === 0) {
      let newComet = new Comet();
      this.cometArr.push(newComet);
    }
  };

  cometDelete = () => {
    if (this.cometArr[0].x > 760) {
      this.cometArr[0].node.remove();
      this.cometArr.shift();
    }
  };

  collisionNaveComet = () => {
    this.cometArr.forEach((eachComet) => {
      if (
        this.nave.x < eachComet.x - 10 + eachComet.w &&
        this.nave.x + this.nave.w - 10 > eachComet.x &&
        this.nave.y < eachComet.y - 10 + eachComet.h &&
        this.nave.h + this.nave.y - 10 > eachComet.y
      ) {
        this.gameOver();
      }
    });
  };

  gameWin = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gamewinScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
    this.fuelCount = 0;
    this.updateFuelCounter();
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
    this.fuelCount = 0;
    this.updateFuelCounter();
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

    if (this.fuelCount === 5) {
      this.gameWin();
    }

    this.cometSpawn();

    this.cometArr.forEach((eachComet) => {
      eachComet.automaticFuelMov();
    });

    this.cometDelete();

    this.collisionNaveComet();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}


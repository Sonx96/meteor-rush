class Game {
  constructor() {
    this.nave = new Nave();

    this.meteorArr = [];

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
    if (this.meteorArr[0].y > 420) {
      this.meteorArr[0].node.remove();
      this.meteorArr.shift();
    }
  };

  gameLoop = () => {
    this.frames++;

    this.meteorSpawn();

    this.meteorArr.forEach((eachMeteor) => {
      eachMeteor.automaticMov();
    });

    this.meteorDelete();

    if(this.isGameOn === true){
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

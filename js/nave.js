class Nave {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/nave.png";
    gameBoxNode.append(this.node);

    //propiedades nave
    this.x = 240; //posicion eje X
    this.y = 270; //posicion eje Y
    this.w = 100; //ancho
    this.h = 100; //alto

    this.moveXSpeed = 20;
    this.moveYSpeed = 20;

    //ajustar tamaño y posicion
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //metodos nave

  moveEffectRight = () => {
    if (this.x < 480) {
      this.x += this.moveXSpeed;
      this.positionUpdateX();
    }
  };

  moveEffectLeft = () => {
    if (this.x > -20) {
      this.x -= this.moveXSpeed;
      this.positionUpdateX();
    }
  };

  moveEffectUp = () => {
    if (this.y < 260) {
      this.y += this.moveYSpeed;
      this.positionUpdateY();
    }
  };

  moveEffectDown = () => {
    if (this.y > -10) {
      this.y -= this.moveYSpeed;
      this.positionUpdateY();
    }
  };

  positionUpdateX = () => {
    this.node.style.left = `${this.x}px`;
  };

  positionUpdateY = () => {
    this.node.style.top = `${this.y}px`;
  };
}

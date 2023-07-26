class Nave {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/nave.png";
    gameBoxNode.append(this.node);

    //propiedades nave
    this.x = 270; //posicion eje X
    this.y = 300; //posicion eje Y
    this.w = 80; //ancho
    this.h = 80; //alto

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
    if (this.x < 500) {
      this.x += this.moveXSpeed;
      this.positionUpdateX();
    }
  };

  moveEffectLeft = () => {
    if (this.x > 20) {
      this.x -= this.moveXSpeed;
      this.positionUpdateX();
    }
  };

  moveEffectUp = () => {
    if (this.y < 300) {
      this.y += this.moveYSpeed;
      this.positionUpdateY();
    }
  };

  moveEffectDown = () => {
    if (this.y > 20) {
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

class Nave {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/nave.png";
    gameBoxNode.append(this.node);

    this.x = 270;
    this.y = 300;
    this.w = 70;
    this.h = 90;

    this.moveXSpeed = 20;
    this.moveYSpeed = 20;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

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

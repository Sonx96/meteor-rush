class Comet {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/comet.png";
    gameBoxNode.append(this.node);

    this.x = -150;
    this.y = Math.floor(Math.random() * 320);
    this.w = 80;
    this.h = 25;

    this.cometSpeed = 2;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  automaticCometMov = () => {
    this.x += this.cometSpeed;
    this.positionCometUpdate();
  };

  positionCometUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}

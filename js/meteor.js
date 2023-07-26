class Meteor {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/meteor.png";
    gameBoxNode.append(this.node);

    // propiedades meteor
    this.x = Math.floor(Math.random() * 550);
    this.y = -100;
    this.w = 80;
    this.h = 80;

    this.meteorSpeed = 4;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //metodos meteor
  automaticMeteorMov = () => {
    this.y += this.meteorSpeed;
    this.positionMeteorUpdate();
  };

  positionMeteorUpdate = () => {
    this.node.style.top = `${this.y}px`;
  };
}

class Fuel {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/fuel.png";
    gameBoxNode.append(this.node);

    this.x = Math.floor(Math.random() * 500); //posicion eje X
    this.y = -100; //posicion eje Y
    this.w = 40; //ancho
    this.h = 60; //alto

    this.fuelSpeed = 2;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  automaticFuelMov = () => {
    this.y += this.fuelSpeed;
    this.positionFuelUpdate();
  };

  positionFuelUpdate = () => {
    this.node.style.top = `${this.y}px`;
  };
}

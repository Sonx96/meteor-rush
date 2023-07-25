
class Nave {
 
    constructor(){

        this.node = document.createElement("img");
        this.node.src = "./images/nave.png";
        gameBoxNode.append(this.node);

        //propiedades nave
        this.x = 230; //posicion eje X
        this.y = 250; //posicion eje Y
        this.w = 150; //ancho
        this.h = 150; //alto

        this.moveRightSpeed = 5;
        this.moveLeftSpeed = 5;

        //ajustar tamño y posicion
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
 }

    //metodos nave

    moveEffectRight = () => {
        this.x += this.moveRightSpeed;
        this.positionUpdate();
    }

    moveEffectLeft = () => {
        this.x -= this.moveLeftSpeed;
        this.positionUpdate();
    }

    positionUpdate = () => {
        this.node.style.left = `${this.x}px`;
        //la nave solo se mueve en el eje x;
    }
}
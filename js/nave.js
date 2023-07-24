
class Nave {
 
    constructor(){

        this.node = document.createElement("img");
        this.node.src = "./images/nave.png";
        gameBoxNode.append(this.node);

        //propiedades nave
        this.x = 230;
        this.y = 250;
        this.w = 150;
        this.h = 150;

        //ajustar tamño y posicion
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
 }

    moveEffect = () => {
        this.x -= 20;
        this.node.style.left = `${this.y}px`;
    }
}
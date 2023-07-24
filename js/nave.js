console.log("desde nave.js")

class Nave {
 
    constructor(){
        console.log("se creo la nave");

        this.node = document.createElement("img");
        this.node.src = "./images/nave.png";
        gameBoxNode.append(this.node);
 }
}
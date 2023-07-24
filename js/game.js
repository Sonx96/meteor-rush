
class Game {
    
    constructor () {
        
        this.nave = new Nave()
    }

    gameLoop = () => {
        console.log("ejecutando gameLoop")

        requestAnimationFrame(this.gameLoop)
    }
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

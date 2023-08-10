class Player {
    constructor () {
        this.positionX = 50;
        this.positionY = 50;
        this.width = 4;
        this.height= 3;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");

        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm  = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }

    moveLeft(){
            this.positionX--;  
            this.domElement.style.left = this.positionX + "vw";
        } 
    moveRight(){
            this.positionX++; 
            this.domElement.style.left = this.positionX + "vw";
        } 
        }
    


const player = new Player();

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});





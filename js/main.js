class Player {
    constructor () {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height= 10;
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
    

class Obstacle {
    constructor (){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 20;
        this.height= 5;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");

        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY -= 2;
        this.domElement.style.bottom = this.positionY + "vh";


    }
}


const player = new Player();

const obstaclesArr = [];

setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
    console.log("we've created a new obstacle...", obstaclesArr.length);  
}, 4000)



setInterval(() => {
    obstaclesArr.forEach( (obstacleInstance) => {
        obstacleInstance.moveDown();
    });
}, 200);


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});





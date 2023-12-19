import Entity from "./entity";
import GameObject from "./game_object";
import Player from "./player";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        // this.ctx = this.canvas.getContext("2d");
        // this.redraw = this.redraw.bind(this);
        // this.spawnObject = this.spawnObject.bind(this);
        this.gameObjects = [];
        this.spirit = 100;

        // let player = new Player(this.gameObjects.length);
        this.paused = false;
        this.player = new Player(canvas, this.gameObjects.length);
        
        
        this.addObject(this.player);
        this.addObject(new GameObject(
            canvas, 
            this.gameObjects.length, 
            [(canvas.width / 2), (canvas.height / 2)]))
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }
    
    addObject(gameObject) {
        this.gameObjects.push(gameObject)
    }

    removeObject(gameObject) {
        this.gameObjects = this.gameObjects.slice(0, gameObject.id).concat(this.gameObjects.slice(gameObject.id))
    }

    handleCollision(obj1, obj2) {
        if (obj1.tangible && obj2.tangible) {
        //     let thisCentV = obj1.centerVert();
        //     let thatCentV = obj2.centerVert();
        //     let thisCentH = obj1.centerHorz();
        //     let thatCentH = obj2.centerHorz();
        //     let shuntThisX;
        //     let shuntThisY;
        //     let shuntThatX;
        //     let shuntThatY;
        //     if (thisCentH < thatCentH) {
        //         shuntThisX = (thisCentH - thatCentH) / 2;
        //         shuntThatX = (thatCentH - thisCentH) / 2;
        //     } else {
        //         shuntThisX = (thatCentH - thisCentH) / 2;
        //         shuntThatX = (thisCentH - thatCentH) / 2;
        //     }
        //     if (thisCentV < thatCentV) {
        //         shuntThisY = (thisCentV - thatCentV) / 2;
        //         shuntThatY = (thatCentV - thatCentV) / 2;
        //     } else {
        //         shuntThisY= (thatCentV - thatCentV) / 2;
        //         shuntThatY = (thisCentV - thatCentV) / 2;
        //     }
        //     obj1.shunt(shuntThisX, shuntThisY);
        //     obj2.shunt(shuntThatX, shuntThatY);
            obj1.objRollback();
            obj2.objRollback();
        }
        this.handleSpecialInteractions(obj1, obj2);
    }

    handleSpecialInteractions(obj1, obj2) {
        let classes = [obj1.constructor.name, obj2.constructor.name];
        if (classes.includes("Enemy")) {
            if (classes.includes("Sleigh")) {
                if (obj1.constructor.name === "Enemy") {
                    obj1.holdingGift = true
                } else {
                    obj2.holdingGift = true;
                }
            } else if (classes.includes("Attack")) {
                if (obj1.constructor.name === "Enemy") {
                    obj1.fuckinDies()
                } else {
                    obj2.fuckinDies();
                }
            }
        }
    }

    // redraw() {
    //     this.gameObjects.forEach((object) => {
    //         object.render()
    //     })
    // }

    // spawnObject(type = "entity", pos = [0, 0]) {
    //     switch (type) {
    //         case "entity":
    //             this.gameObjects.push(new Entity(this.gameObjects.length), pos);
    //             break;
    //         case "player":
    //             if (this.gameObjects.every((entity) => entity.constructor.name !== "Player")) {
    //                 this.gameObjects.push(new Player(this.gameObjects.length, pos));
    //             }
    //             break;
    //     }
    // }
}

export default Game;
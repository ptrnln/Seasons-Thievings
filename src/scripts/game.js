import Entity from "./entity";
import Player from "./player";

class Game {
    constructor(ele) {
        this.ele = ele;
        this.ctx = this.ele.getContext("2d");
        this.redraw = this.redraw.bind(this);
        // this.spawnObject = this.spawnObject.bind(this);
        this.gameObjects = [];

        let player = new Player(this.gameObjects.length);

        this.player = player;
        this.gameObjects.push(player);


        // this.spawnObject("player")
        // this.spawnObject("player", [50, 50])
    }

    redraw() {
        this.gameObjects.forEach((object) => {
            object.render()
        })
    }

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
import Entity from "./entity";
import Player from "./player";

class Game {
    constructor(ele) {
        this.ele = ele;
        this.ctx = this.ele.getContext("2d");
        this.redraw = this.redraw.bind(this);
        this.spawnEntity = this.spawnEntity.bind(this);
        this.entities = [];

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.ele.width, this.ele.height);
        this.entities.push(new Player(this.entities.length, "player"));
    }

    redraw() {
        this.ctx.fillRect(0, 0, this.ele.width, this.ele.height);
        this.entities.forEach((entity) => {
            entity.redraw(this.ctx)
        })
    }

    spawnEntity(name) {
        this.entities.push(new Entity(this.entities.length, name));
    }
}

export default Game;
import Entity from "./entity.js";

class Player extends Entity {
    constructor(id, pos = [0.0, 0.0]) {
        super(id, pos);
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = window.canvas.dataset.scale * this.fullHeight;
        this.height = window.canvas.dataset.scale * this.fullWidth;
    }


    move() {
        this.pos = newPos;
    }

}

export default Player;
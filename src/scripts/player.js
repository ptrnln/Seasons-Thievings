import Entity from "./entity.js";

class Player extends Entity {
    constructor(canvas, id, pos = [0, 0]) {
        super(canvas, id, pos);
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = canvas.dataset.scale * this.fullHeight;
        this.height = canvas.dataset.scale * this.fullWidth;
        this.speed = 2;
        this.move = this.move.bind(this);
    }


    


    move(dir) {
        console.log(dir)
        switch(dir) {
            case "u":
                this.pos[1] -= this.speed;
                break;
            case "l":
                this.pos[0] -= this.speed;
                break;
            case "d":
                this.pos[1] += this.speed;
                break;
            case "r":
                this.pos[0] += this.speed;
        }
    }

}

export default Player;
import Entity from "./entity.js";
import Keyboard from "./keyboard.js";

class Player extends Entity {
    constructor(canvas, id, pos = [0, 0]) {
        super(canvas, id, pos);
        this.keyboard = new Keyboard();
        this.fullWidth = 25;
        this.fullHeight = 25;
        this.width = this.fullHeight;
        this.height = this.fullWidth;
        this.speed = 2;
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.getMove = this.getMove.bind(this);
        this.enforceBounds = this.enforceBounds.bind(this);
    }
    

    update() {
        this.pos = this.getMove();
        this.render();
    }

    enforceBounds(newPos) {
        let i = 0;
        newPos = newPos.map((coord) => {
            if (i === 0) {
                if (coord < 0) return 0;
                if (coord + this.width > this.canvas.width) return this.canvas.width - this.width;
            } else {
                if (coord < 0) return 0;
                if (coord + this.height > this.canvas.height) return this.canvas.height - this.height;
            }
            i++;
            return coord;
        });
        return newPos;
    }

    getMove() {
        let dir = this.keyboard.getMove();
        let newPos;
        switch(dir) {
            case "u":
                newPos = [this.pos[0], (this.pos[1] - this.speed)];
                break;
            case "l":
                newPos = [(this.pos[0] - this.speed), this.pos[1]];
                break;
            case "d":
                newPos = [this.pos[0], (this.pos[1] + this.speed)];
                break;
            case "r":
                newPos = [(this.pos[0] + this.speed), this.pos[1]];
                break;
            case "ul":
                newPos = [(this.pos[0] - this.speed), (this.pos[1] - this.speed)];
                break;
            case "ur":
                newPos = [(this.pos[0] + this.speed), (this.pos[1] - this.speed)];
                break;
            case "dl":
                newPos = [(this.pos[0] - this.speed), (this.pos[1] + this.speed)];
                break;
            case "dr":
                newPos = [(this.pos[0] + this.speed), (this.pos[1] + this.speed)];
                break; 
            case "s":
                newPos = this.pos;
        }
        return this.enforceBounds(newPos);
    }

}

export default Player;
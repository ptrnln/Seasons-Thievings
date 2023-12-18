import Entity from "./entity.js";
import Keyboard from "./keyboard.js";

class Player extends Entity {
    constructor(canvas, id, pos = [0, 0]) {
        super(canvas, id, pos);
        this.keyboard = new Keyboard();
        this.ctx = canvas.getContext("2d");
        this.animations = {
            "walkRight": [],
            "walkLeft": [],
            "walkDown": [],
            "walkUp": []
        };

        for(let i = 1; i <= 6; i++) {
            let img = new Image();
            let img2 = new Image();
            let img3 = new Image();
            let img4 = new Image()
            img.src = `./assets/elf_walk_side_${i}.png`
            img2.src = `./assets/elf_walk_left_${i}.png`
            img3.src = `./assets/elf_walk_down_${i}.png`
            img4.src = `./assets/elf_walk_up_${i}.png`
            this.animations.walkRight.push(img);
            this.animations.walkLeft.push(img2);
            this.animations.walkDown.push(img3);
            this.animations.walkUp.push(img4);
        };
        this.lastLoop;
        this.currentLoop = (dir = this.facing()) => {
            switch (dir) {
                case "l":
                    return this.lastLoop = "walkLeft";
                case "r":
                    return this.lastLoop ="walkRight";
                case "d":
                    return this.lastLoop = "walkDown";
                case "u":
                    return this.lastLoop = "walkUp";
            }
            return "walkUp";
        };
        this.width = this.animations[this.currentLoop()][0].width;
        this.height = this.animations[this.currentLoop()][0].height;
        this.speed = 3;
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.getMove = this.getMove.bind(this);
        this.enforceBounds = this.enforceBounds.bind(this);
        this.animationLooper = setInterval((that = this) => {
            that.animations[that.currentLoop()] =
            that.animations[that.currentLoop()].slice(1).concat(that.animations[that.currentLoop()].slice(0, 1));
        }, 75);
    }

    render() {
        this.ctx.drawImage(this.animations[this.currentLoop()][0], ...this.pos)
    }
    

    facing() {
        switch(this.keyboard.lastPressed) {
            case "ArrowUp":
            case "KeyW":
                return "u";
            case "ArrowLeft":
            case "KeyA":
                return "l";
            case undefined:
            case "ArrowDown":
            case "KeyS":
                return "d";
            case "ArrowRight":
            case "KeyD":
                return "r";
        }
        return "d";
    }

    enforceBounds(newPos) {
        newPos = newPos.map((coord, i = 0) => {
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
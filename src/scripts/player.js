import Attack from "./attack.js";
import Entity from "./entity.js";
import Keyboard from "./keyboard.js";
import SpriteAnimation from "./sprite_animation.js"

class Player extends Entity {
    constructor(game, canvas, id, pos) {
        super(game, canvas, id, pos);
        this.keyboard = new Keyboard();
        this.ctx = canvas.getContext("2d");
        this.top = this.top.bind(this);
        this.left = this.left.bind(this);
        this.bottom = this.bottom.bind(this);
        this.right = this.right.bind(this);
        this.animations = {
            "walk_right": new SpriteAnimation(
                "walk_right", 
                Array.from(document.querySelectorAll(".elf_walk_right")),
                true
            ),
            "walk_left": new SpriteAnimation(
                "walk_left",
                Array.from(document.querySelectorAll(".elf_walk_left")),
                true
            ),
            "walk_down": new SpriteAnimation(
                "walk_down",
                Array.from(document.querySelectorAll(".elf_walk_down")),
                true
            ),
            "walk_up": new SpriteAnimation(
                "walk_up",
                Array.from(document.querySelectorAll(".elf_walk_up")),
                true
            ),
            "punch_left": new SpriteAnimation(
                "punch_left",
                Array.from(document.querySelectorAll(".elf_punch_left")),
                false
            ),
            "punch_right": new SpriteAnimation(
                "punch_right",
                Array.from(document.querySelectorAll(".elf_punch_right")),
                false
            ),
            "idle_left": new SpriteAnimation(
                "idle_left",
                [document.querySelector(".elf_walk_left")],
                false
            ),
            "idle_right": new SpriteAnimation(
                "idle_right",
                [document.querySelector(".elf_walk_right")],
                false
            ),
            "idle_up": new SpriteAnimation(
                "idle_up",
                [Array.from(document.querySelectorAll(".elf_walk_up"))[4]],
                false
            ),
            "idle_down": new SpriteAnimation(
                "idle_down",
                [document.querySelector(".elf_walk_down")],
                false
            )
        };
        this.facing = "l";
        this.moving = false;
        this.punching = false;
        this.actionDisabled = false;
        this.currentLoop = () => {
            let actionStr = "";
            if (this.punching) { actionStr += "p-" }
            else if (this.moving) { actionStr += "w-" }
            else actionStr += "i-"
            switch (actionStr + this.facing) {
                case "w-u":
                    return {
                        name: "walk_up",
                        content: this.animations["walk_up"],
                        repeats: true
                    }
                case "i-u":
                    return {
                        name: "idle_up",
                        content: this.animations["idle_up"],
                        repeats: false
                    }
                case "w-l":
                    return { 
                        name: "walk_left",
                        content: this.animations["walk_left"],
                        repeats: true
                    } 
                case "i-l":
                    return {
                        name: "idle_left",
                        content: this.animations["idle_left"],
                        repeats: false
                    }
                case "p-l":
                    return {
                        name: "punch_left",
                        content: this.animations["punch_left"],
                        repeats: false
                    }
                case "w-d":
                    return {
                        name: "walk_down",
                        content: this.animations["walk_down"],
                        repeats: true
                    }
                case "i-d":
                    return {
                        name: "idle_down",
                        content: this.animations["idle_down"],
                        repeats: false
                    }
                case "w-r":
                    return {
                        name: "walk_right",
                        content: this.animations["walk_right"],
                        repeats: true
                    }
                case "i-r":
                    return {
                        name: "idle_right",
                        content: this.animations["idle_right"],
                        repeats: false
                    }
                    case "p-r":
                        return {
                        name: "punch_right",
                        content: this.animations["punch_right"],
                        repeats: false
                    }
            }
        };
        this.hitBoxImg = new Image()
        this.hitBoxImg.src = this.animations["walk_left"].currentFrame().src;
        this.width = this.hitBoxImg.width;
        this.height = this.hitBoxImg.height;
        this.speed = 3;
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.getMove = this.getMove.bind(this);
        this.enforceBounds = this.enforceBounds.bind(this);
        this.collidesWith = this.collidesWith.bind(this);
        this.punch = this.punch.bind(this);
        this.currentLoop = this.currentLoop.bind(this);
    }

    render() {
        this.ctx.drawImage(this.animations[this.currentLoop().name].currentFrame(), ...this.pos)
        // this.ctx.beginPath();
        // this.ctx.moveTo(...this.pos);
        // this.ctx.lineTo(this.right(), this.top());
        // this.ctx.lineTo(this.right(), this.bottom());
        // this.ctx.lineTo(this.left(), this.bottom());
        // this.ctx.lineTo(...this.pos);
        // this.ctx.stroke()
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
        if (this.actionDisabled) return this.pos
        let dir = this.keyboard.getMove();
        let newPos;
        switch(dir) {
            case "u":
                this.facing = "u";
                newPos = [this.pos[0], (this.pos[1] - this.speed)];
                break;
            case "l":
                this.facing = "l"
                newPos = [(this.pos[0] - this.speed), this.pos[1]];
                break;
            case "d":
                this.facing = "d"
                newPos = [this.pos[0], (this.pos[1] + this.speed)];
                break;
            case "r":
                this.facing = "r"
                newPos = [(this.pos[0] + this.speed), this.pos[1]];
                break;
            case "ul":
                this.facing = "l"
                newPos = [(this.pos[0] - this.speed), (this.pos[1] - this.speed)];
                break;
            case "ur":
                this.facing = "r"
                newPos = [(this.pos[0] + this.speed), (this.pos[1] - this.speed)];
                break;
            case "dl":
                this.facing = "l"
                newPos = [(this.pos[0] - this.speed), (this.pos[1] + this.speed)];
                break;
            case "dr":
                this.facing = "r"
                newPos = [(this.pos[0] + this.speed), (this.pos[1] + this.speed)];
                break; 
            case "i":
                this.moving = false;
                return this.pos;
            case "p":
                this.punch();
                return this.pos;
        }
        return this.enforceBounds(newPos);
    }

    punch() {
        if (this.punching) return;
        this.actionDisabled = true;
        this.punching = true;
        this.moving = false;
        let attackBoxSize = 25;
        setTimeout(() => {
            this.actionDisabled = false;
            this.punching = false;
        }, (75 * 6))
        switch (this.facing) {
            case "u":
                this.game.addObject(new Attack(
                    this.game, 
                    this.canvas, 
                    this.game.gameObjects.length,
                    [(this.centerHorz() - attackBoxSize / 2), this.pos[0] - attackBoxSize],
                    attackBoxSize,
                    attackBoxSize
                ))
                break;
            case "l":
                this.game.addObject(new Attack(
                    this.game, 
                    this.canvas, 
                    this.game.gameObjects.length,
                    [this.pos[0] - attackBoxSize, (this.centerVert() - attackBoxSize / 2)],
                    attackBoxSize,
                    attackBoxSize
                ))
                break;
            case "d":
                this.game.addObject(new Attack(
                    this.game, 
                    this.canvas, 
                    this.game.gameObjects.length,
                    [(this.centerHorz() - attackBoxSize / 2), this.bottom()],
                    attackBoxSize,
                    attackBoxSize
                ))
                break;
            case "r":
                this.game.addObject(new Attack(
                    this.game, 
                    this.canvas, 
                    this.game.gameObjects.length,
                    [this.right(), (this.centerVert() - attackBoxSize / 2)],
                    attackBoxSize,
                    attackBoxSize
                ))
        }
    }

    

}

export default Player;
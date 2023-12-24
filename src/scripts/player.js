import Attack from "./attack.js";
import Entity from "./entity.js";
import Keyboard from "./keyboard.js";
import SpriteAnimation from "./sprite_animation.js"
import AnimationList from "./animations.js";

class Player extends Entity {
    constructor(game, canvas, id, pos) {
        super(game, canvas, id, pos);
        this.keyboard = new Keyboard(game);
        this.ctx = canvas.getContext("2d");
        this.top = this.top.bind(this);
        this.left = this.left.bind(this);
        this.bottom = this.bottom.bind(this);
        this.right = this.right.bind(this);
        this.animations = AnimationList.Player;
        console.log(this.animations);
        this.facing = "r";
        this.moving = false;
        this.punching = false;
        this.actionDisabled = false;
        this.currentAction = () => {
            let actionStr = "";
            if (this.punching) { actionStr += "p-" }
            else if (this.moving) { actionStr += "w-" }
            else actionStr += "i-"
            switch (actionStr + this.facing) {
                case "w-u":
                    return "walk_up"
                case "i-u":
                    return "idle_up"
                case "w-l":
                    return  "walk_left" 
                case "i-l":
                    return "idle_left"
                case "p-l":
                    return "punch_left"
                case "w-d":
                    return "walk_down"
                case "i-d":
                    return "idle_down"
                case "w-r":
                    return "walk_right"
                case "i-r":
                    return "idle_right"
                case "p-r":
                    return "punch_right"
            }
        };
        let animationName = this.currentAction();
        let { sourceFiles } = this.animations[animationName];
        let { repeats } = this.animations[animationName];
        this.currentAnimation = new SpriteAnimation({
            name: animationName,
            sourceFiles: sourceFiles,
            repeats: repeats
        })
        console.log(this.currentAnimation)
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
        this.currentAction = this.currentAction.bind(this);
    }

    render() {
        this.ctx.drawImage(this.animations[this.currentAction()].currentFrame(), ...this.pos)
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
        let dir = this.keyboard.getInput();
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
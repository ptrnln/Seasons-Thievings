import Entity from "./entity";

class Enemy extends Entity {
    constructor(game, canvas, id, pos = [0, 0]) {
        super(game, canvas, id, pos)
        this.ctx = canvas.getContext("2d");
        // this.game = game
        // this.id = id;
        // this.pos = pos;
        this.top = this.top.bind(this);
        this.left = this.left.bind(this);
        this.bottom = this.bottom.bind(this);
        this.right = this.right.bind(this);
        this.lastPos = this.pos;
        this.holdingGift = false;
        this.invisible = false;
        this.dead = false;
        this.destination = this.game.gameObjects.filter(obj => obj.constructor.name === "Sleigh")[0].pos
        this.animations = {
            "walkLeft": Array.from(document.querySelectorAll(".enemy_walk_left")),
            "walkRight": Array.from(document.querySelectorAll(".enemy_walk_right")),
            // "fleeLeft": Array.from(document.querySelectorAll(".enemy_flee_left")),
            // "fleeRight": Array.from(document.querySelectorAll(".enemy_flee_right"))
            "death": Array.from(document.querySelectorAll(".enemy_death_right_w_gift"))

        }
        this.currentLoop = () => {
            if (this.dead) return {
                name: "death",
                content: this.animations["death"],
                repeats: false
            }
            return { 
                name: "walkLeft",
                content: this.animations["walkLeft"],
                repeats: true
            } 
            let actionStr = "";
            if (this.punching) { actionStr += "p-" }
            else if (this.moving) { actionStr += "w-" }
            else actionStr += "i-"
            switch (actionStr + this.facing) {
                case "w-u":
                    return {
                        name: "walkUp",
                        content: this.animations["walkUp"],
                        repeats: true
                    }
                case "i-u":
                    return {
                        name: "idle",
                        content: [this.animations["idle"][0]],
                        repeats: false
                    }
                case "w-l":
                    return { 
                        name: "walkLeft",
                        content: this.animations["walkLeft"],
                        repeats: true
                    } 
                case "i-l":
                    return {
                        name: "idle",
                        content: [this.animations["idle"][1]],
                        repeats: false
                    }
                case "p-l":
                    return {
                        name: "punchLeft",
                        content: this.animations["punchLeft"],
                        repeats: false
                    }
                case "w-d":
                    return {
                        name: "walkDown",
                        content: this.animations["walkDown"],
                        repeats: true
                    }
                case "i-d":
                    return {
                        name: "idle",
                        content: [this.animations["idle"][2]],
                        repeats: false
                    }
                case "w-r":
                    return {
                        name: "walkRight",
                        content: this.animations["walkRight"],
                        repeats: true
                    }
                case "i-r":
                    return {
                        name: "idle",
                        content: [this.animations["idle"][3]],
                        repeats: false
                    }
                    case "p-r":
                        return {
                        name: "punchRight",
                        content: this.animations["punchRight"],
                        repeats: false
                    }
            }
        };
        this.width = this.currentLoop().content[0].width;
        this.height = this.currentLoop().content[0].height;
        this.currentLoop = this.currentLoop.bind(this);
        this.collidesWith = this.collidesWith.bind(this);
        this.render = this.render.bind(this);
    }

    fuckinDies() {
        this.tangible = false;
        this.dead = true;
        setTimeout(() => {
            setInterval(() => {
            this.invisible ? this.invisible = false : this.invisible = true
        }, 500)}, 1000)
        setTimeout(() => {
            this.game.removeObject(this);
        }, 8000)
    }

    facing() {

    }
    
    getMove() {
        return this.pos;
    }

    steal() {
        let xOutsideValues = [0 - (this.width + 1), this.canvas.width + this.width + 1]
        let yOutsideValues = [0 - (this.height - 1), this.canvas.height + this.height + 1]
        this.holdingGift = true;
        switch (Math.floor(Math.random() * 2)) {
            case 0:
                this.destination = [
                    xOutsideValues[Math.floor(Math.random() * 2)],
                    Math.floor((Math.random() * (this.canvas.height * 2) - this.canvas.height))
                ]
                break;
            case 1:
                this.destination = [
                    Math.floor((Math.random() * (this.canvas.width * 2) - this.canvas.width)),
                    yOutsideValues[Math.floor(Math.random() * 2)]
                    ]
        }
    }
}

export default Enemy
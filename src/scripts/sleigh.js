import GameObject from "./game_object";

class Sleigh extends GameObject {
    constructor(game, canvas, id, pos) {
        debugger
        super(game, canvas, id, pos);
        this.tangible = false;
        this.static = true;
        this.top = this.top.bind(this);
        this.left = this.left.bind(this);
        this.bottom = this.bottom.bind(this);
        this.right = this.right.bind(this);
        this.states = {
            100: document.querySelector(".sleigh_100"),
            75: document.querySelector(".sleigh_75"),
            50: document.querySelector(".sleigh_50"),
            25: document.querySelector(".sleigh_25"),
            0: document.querySelector(".sleigh_0")
        }
        this.currentState = () => {
            let currentSpirit = this.game.spirit;
            if (currentSpirit === 100) return this.states[100]
            if (currentSpirit > 50 && currentSpirit < 75) return this.states[50]
            if (currentSpirit > 25 && currentSpirit < 50) return this.states[25]
            if (currentSpirit === 0) return this.states[0]
            return this.states[75]
        }
        this.hitBoxImg = new Image();
        this.hitBoxImg.src = this.currentState().src;
        this.width = this.currentState().width;
        this.height = this.currentState().height;
        this.pos = [(Math.floor((this.canvas.width / 2) - (this.width / 2))), (Math.floor((this.canvas.height / 2) - (this.height / 2)))]
    }

    render() {
        this.ctx.drawImage(this.currentState(), ...this.pos)
    }
}
export default Sleigh
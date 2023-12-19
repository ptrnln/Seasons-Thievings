import GameObject from "./game_object";

class Entity extends GameObject {
    constructor(canvas, id, pos) {
        super(canvas, id, pos);
        this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.tangible = true;
        this.static = false;
        this.width = canvas.dataset.scale * this.fullHeight;
        this.height = canvas.dataset.scale * this.fullWidth;
    }

    

}

export default Entity;
import GameObject from "./game_object";

class Entity extends GameObject {
    constructor(id, pos = [0, 0]) {
        super(id, pos);
        this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = window.canvas.dataset.scale * this.fullHeight;
        this.height = window.canvas.dataset.scale * this.fullWidth;
    }

    // render() {
    //     console.log("I'm in the entity's render method!");
    // }
}

export default Entity;
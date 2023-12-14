import Entity from "./entity.js";

class Player extends Entity {
    constructor(id, name) {
        super(id, name);
        this.redraw = this.redraw.bind(this);
    }


    move(newPos) {
        this.pos = newPos;
    }

    render() {

    }
}

export default Player;
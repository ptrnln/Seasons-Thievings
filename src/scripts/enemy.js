import Entity from "./entity";

class Enemy extends Entity {
    constructor(canvas, id, pos) {
        super(canvas, id, pos) 
        this.holdingGift = false;
    }

    fuckinDies() {
        window["game.removeObject"](this.id)
    }
}
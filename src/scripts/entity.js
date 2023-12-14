class Entity {
    constructor(id, name, pos = [0, 0]) {
        this.id = id;
        this.name = name;
        this.pos = pos;
        this.redraw = this.redraw.bind(this)
        this.width = .1;
        this.height = .1;
    }

    redraw(ctx) {
        // let that = this;
        ctx.fillStyle = 'red'
        ctx.fillRect(
            this.pos[0], // x coordinate
            this.pos[1], // y coordinate
            (Math.floor(this.width * ctx.canvas.width)), // width (relative to canvas size)
            (Math.floor(this.height * ctx.canvas.width)) // height
        )
    }
}

export default Entity;
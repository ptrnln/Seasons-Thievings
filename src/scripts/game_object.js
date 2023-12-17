class GameObject {
    constructor(canvas, id, pos = [0, 0]) {
        this.id = id;
        this.pos = pos;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        // this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = this.fullHeight;
        this.height = this.fullWidth;
    }

    render() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(
            this.pos[0], // x coordinate
            this.pos[1], // y coordinate
            this.width, // width
            this.height // height
        )
    }

    // resize() {
    //     this.pos[0] = Math.floor(this.canvas.dataset.scale * this.pos[0]);
    //     this.pos[1] = Math.floor(this.canvas.dataset.scale * this.pos[1]);
    //     this.width = this.canvas.dataset.scale * this.fullWidth;
    //     this.height = this.canvas.dataset.scale * this.fullHeight;
    // }

}

export default GameObject;
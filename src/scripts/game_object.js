class GameObject {
    constructor(canvas, id, pos = [0, 0]) {
        this.id = id;
        this.pos = pos;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = canvas.dataset.scale * this.fullHeight;
        this.height = canvas.dataset.scale * this.fullWidth;
    }

    render() {
        // console.log(this.pos);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(
            this.pos[0], // x coordinate
            this.pos[1], // y coordinate
            this.width, // width
            this.height // height
        )
    }

    resize() {
        this.width = this.canvas.dataset.scale * this.fullWidth;
        this.height = this.canvas.dataset.scale * this.fullHeight;
    }

}

export default GameObject;
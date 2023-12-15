class GameObject {
    constructor(id, pos = [0, 0]) {
        this.id = id;
        this.pos = pos;
        this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = window.canvas.dataset.scale * this.fullHeight;
        this.height = window.canvas.dataset.scale * this.fullWidth;
    }

    render() {
        window.ctx.fillStyle = 'red'
        window.ctx.fillRect(
            this.pos[0], // x coordinate
            this.pos[1], // y coordinate
            this.width, // width
            this.height // height
        )
    }

    resize() {
        this.width = window.canvas.dataset.scale * this.fullWidth;
        this.height = window.canvas.dataset.scale * this.fullHeight;
    }

}

export default GameObject;
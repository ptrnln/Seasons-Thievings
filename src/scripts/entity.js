import GameObject from "./game_object";

class Entity extends GameObject {
    constructor(game, canvas, id, pos) {
        super(game, canvas, id, pos);
        this.render = this.render.bind(this)
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.lastPos = this.pos;
        this.tangible = true;
        this.static = false;
        this.top = this.top.bind(this);
        this.left = this.left.bind(this);
        this.bottom = this.bottom.bind(this);
        this.right = this.right.bind(this);
        this.collidesWith = this.collidesWith.bind(this);
        // this.width = canvas.dataset.scale * this.fullHeight;
        // this.height = canvas.dataset.scale * this.fullWidth;
        this.animationLooper = setInterval((that = this) => {
            if (!that.currentLoop().repeats && !that.animCounter) {
                that.animCounter = 0
            }
            if (!that.animCounter || that.animCounter < that.currentLoop.length) {
                let loop = that.currentLoop().content;
                if (that.moving || that.punching) that.animations[that.currentLoop().name] = loop.slice(1).concat(loop.slice(0, 1));
            }
            if (!!that.animCounter) that.animCounter++;
        }, 75);
    }

    render() {
        this.ctx.drawImage(this.currentLoop().content[0], ...this.pos)
        // this.ctx.beginPath();
        // this.ctx.moveTo(...this.pos);
        // this.ctx.lineTo(this.right(), this.top());
        // this.ctx.lineTo(this.right(), this.bottom());
        // this.ctx.lineTo(this.left(), this.bottom());
        // this.ctx.lineTo(...this.pos);
        // this.ctx.stroke()
    }

}

export default Entity;
class GameObject {
    constructor(canvas, id, pos) {
        this.id = id;
        this.pos = pos || [0, 0];
        this.lastPos = pos;
        this.fullWidth = 50;
        this.fullHeight = 50;
        this.width = this.fullHeight;
        this.height = this.fullWidth;
        this.tangible = true;
        this.static = true;
        this.left = () => this.pos[0];
        this.right = () => this.pos[0] + this.width;
        this.top = () => this.pos[1];
        this.bottom = () => this.pos[1] + this.height;
        this.centerVert = () => {
            let top = this.top();
            return (this.bottom() - top) / 2 + top;
        }
        this.centerHorz = () => {
            let left = this.left();
            return (this.right() - left) / 2 + left;
        }
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.getMove = this.getMove.bind(this);
    }

    render() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(
            this.pos[0], // x coordinate
            this.pos[1], // y coordinate
            this.width, // width
            this.height // height
        )
        this.ctx.strokeStyle = 'yellow'
        this.ctx.beginPath();
        this.ctx.moveTo(...this.pos);
        this.ctx.lineTo(this.right(), this.top());
        this.ctx.lineTo(this.right(), this.bottom());
        this.ctx.lineTo(this.left(), this.bottom());
        this.ctx.lineTo(...this.pos);
        this.ctx.stroke()
    }

    update() {
        this.lastPos = this.pos;
        if (!this.static) {
            this.pos = this.getMove();
        }
    }

    collidesWith(gameObject) {
        let thisLeft = this.left();
        let thisRight = this.right();
        let thisTop = this.top();
        let thisBottom = this.bottom();
        let thisCentV = this.centerVert();
        let thisCentH = this.centerHorz();
        let thatLeft = gameObject.left();
        let thatRight = gameObject.right();
        let thatTop = gameObject.top();
        let thatBottom = gameObject.bottom();
        if (![thisLeft, thisCentH, thisRight].some((coord) => {
            return coord >= thatLeft && coord <= thatRight;
        })) {
            return false
        }
        if (![thisTop, thisCentV, thisBottom].some((coord) => {
            return coord >= thatTop && coord <= thatBottom
        })) {
            return false;
        }
        return true;
    };

    // resize() {
    //     this.pos[0] = Math.floor(this.canvas.dataset.scale * this.pos[0]);
    //     this.pos[1] = Math.floor(this.canvas.dataset.scale * this.pos[1]);
    //     this.width = this.canvas.dataset.scale * this.fullWidth;
    //     this.height = this.canvas.dataset.scale * this.fullHeight;
    // }
    getMove() {
        return this.pos;
    }

    shunt(dx, dy) {
        if (!this.static) {
            this.pos = [this.pos[0] + dx, this.pos[1] + dy];
        }
    }

    objRollback() {
        this.pos = this.lastPos;
    }

}

export default GameObject;
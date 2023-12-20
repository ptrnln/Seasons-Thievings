import GameObject from "./game_object";

    class Attack extends GameObject {
        constructor(game, canvas, id, pos, length, width) {
            super(game, canvas, id, pos)
            // this.game = game
            // this.ctx = canvas.getContext("2d")
            // this.id = id;
            // this.pos = pos;
            this.static = true;
            this.moving = false;
            this.actionDisabled = true;
            this.tangible = false;
            this.length = length;
            this.width = width;
            this.render = this.render.bind(this);
            const remove = setTimeout(() => {
                this.game.removeObject(this);
            }, 10);
        }

}

export default Attack
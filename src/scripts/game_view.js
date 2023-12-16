import Game from "./game"

class GameView {
    constructor(game, canvas) {
        this.game = game;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gameRender = this.gameRender.bind(this);
        this.gameRender();
        }

    gameRender = function() {
        // console.log("running");
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(this.gameRender);
        this.game.gameObjects.forEach((gameObject) => {
            gameObject.render();
        })
    }

    resize() {
        this.game.gameObjects.forEach((object) => {
            object.resize();
        })
    }
}

export default GameView;
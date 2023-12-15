import Game from "./game"

class GameView {
    constructor() {
        this.game = new Game(window.canvas);
        this.gameRender = this.gameRender.bind(this);
        this.gameRender();
    }

    gameRender = function() {
        ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);
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
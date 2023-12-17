import Game from "./game"
import Player from "./player";

class GameView {
    constructor(game, canvas) {
        this.game = game;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gameRender = this.gameRender.bind(this);
        this.gameRender();
        }

    gameRender = function() {
        // console.log(this.game.player);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(this.gameRender);
        this.game.gameObjects.forEach((gameObject) => {
            gameObject.update();
        })
    }

    // resize() {
    //     this.game.gameObjects.forEach((object) => {
    //         object.resize();
    //     })
    // }
}

export default GameView;
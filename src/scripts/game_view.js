import Game from "./game"
import Player from "./player";

class GameView {
    constructor(game, canvas) {
        this.background = new Image(canvas.width, canvas.height);
        this.background.src = "./assets/background.png";
        this.game = game;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gameRender = this.gameRender.bind(this);
        this.gameRender();
        }

    gameRender = function() {
        // console.log(this.game.player);
        requestAnimationFrame(this.gameRender);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.background, 0, 0);
        this.game.gameObjects.forEach((gameObject) => {
            gameObject.update();
            // console.log(`[${gameObject.constructor.name}]: 
            // left: ${gameObject.left()}, right: ${gameObject.right()} 
            // top: ${gameObject.top()}, bottom: ${gameObject.bottom()}`)
        })
    }

    // resize() {
    //     this.game.gameObjects.forEach((object) => {
    //         object.resize();
    //     })
    // }
}

export default GameView;
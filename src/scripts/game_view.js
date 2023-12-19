import Game from "./game"
import Player from "./player";
import GameObject from "./game_object";

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
        let objects = this.game.gameObjects;
        requestAnimationFrame(this.gameRender);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.background, 0, 0);
        objects.forEach((gameObject) => {
            gameObject.update();

            for (let i = 0; i < objects.length; i++) {
                for (let ii = 0; ii < objects.length; ii++) {
                    if (ii > i && objects[i].collidesWith(objects[ii])){
                        this.game.handleCollision(objects[i], objects[ii]);
                    }
                }
            }
            // this.ctx.beginPath();
            // this.ctx.moveTo(this.canvas.width, gameObject.centerVert());
            // this.ctx.lineTo(0, gameObject.centerVert());
            // this.ctx.stroke();
            // this.ctx.beginPath();
            // this.ctx.moveTo(gameObject.centerHorz(), this.canvas.height);
            // this.ctx.lineTo(gameObject.centerHorz(), 0);
            // this.ctx.stroke();

            gameObject.render();
        })
    }

    // resize() {
    //     this.game.gameObjects.forEach((object) => {
    //         object.resize();
    //     })
    // }
}

export default GameView;
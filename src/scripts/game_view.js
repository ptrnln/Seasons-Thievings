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
        if (this.game.paused) return;
        let objects = this.game.gameObjects;
        requestAnimationFrame(this.gameRender);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.background, 0, 0);

        let sortedObjects = objects.map((object, i = 0) => {
            let res = {
                yVal: object.pos[1],
                index: i
            }
            i++;
            return res;
        }).sort((a, b) => {
            return a.yVal - b.yVal
        }).map(obj => objects[obj.index])

        objects.forEach(gameObject => {
            if (!gameObject.actionDisabled) gameObject.update();
            for (let i = 0; i < objects.length; i++) {
                if (i !== gameObject.id) {
                    if (gameObject.collidesWith(objects[i])){
                        this.game.handleCollision(gameObject, objects[i]);
                    } 
                }
            }
        })

        sortedObjects.forEach((gameObject) => {

            // this.ctx.beginPath();
            // this.ctx.moveTo(this.canvas.width, gameObject.centerVert());
            // this.ctx.lineTo(0, gameObject.centerVert());
            // this.ctx.stroke();
            // this.ctx.beginPath();
            // this.ctx.moveTo(gameObject.centerHorz(), this.canvas.height);
            // this.ctx.lineTo(gameObject.centerHorz(), 0);
            // this.ctx.stroke();
           if (!gameObject.invisible) gameObject.render();
           if (this.game.debugMode) {
                gameObject.renderDebug()
           }
        })
    }

    // resize() {
    //     this.game.gameObjects.forEach((object) => {
    //         object.resize();
    //     })
    // }
}

export default GameView;
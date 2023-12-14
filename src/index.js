const { default: Example } = require("./scripts/example");
const { default: Game } = require("./scripts/game");

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const canvas = document.getElementById("game-canvas");
    const fullscreen = false;
    
    document.onfullscreenchange = (e) => {
        fullscreen ? fullscreen = false : fullscreen = true;
    }
    
    visualViewport.addEventListener("resize", this.onresize);

    canvas.width = Math.floor(.8 * visualViewport.width);

    this.game = new Game(canvas);

    onresize = (e) => {
        if (fullscreen) {
            canvas.height = visualViewport.height;
            canvas.width = Math.floor(1.333 * canvas.height);
        } else {
            canvas.width = Math.floor(.8 * visualViewport.width);
            canvas.height = Math.floor(.75 * canvas.width)
        }
        this.game.redraw();
    }
    

})
const { default: Game } = require("./scripts/game");
const { default: GameView } = require("./scripts/game_view");


document.addEventListener("DOMContentLoaded", () => {
    window.canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext("2d");

    window.canvas.dataset.maxWidth = 1200;
    
    visualViewport.addEventListener("resize", this.onresize);

    var maxWidth = canvas.dataset.maxWidth;
    
    const targetWidth = Math.floor(.8 * window.innerWidth);
    window.canvas.width = targetWidth > maxWidth ? maxWidth : targetWidth;
    window.canvas.height = Math.floor(.75 * window.canvas.width);
    window.canvas.dataset.scale = window.canvas.width / maxWidth;
    
    console.log(window.canvas);
    
    var gameView = new GameView();

    // canvas.addEventListener('click', (evt) => {
    //     let mousePos = getMousePos(canvas, evt);
      
    //     if (isInside(mousePos, rect)) {
    //       alert('clicked inside rect');
    //     } else {
    //       alert('clicked outside rect');
    //     }
    // }, false);

    this.game = new Game(window.canvas);

    onresize = (e) => {
        const targetWidth = Math.floor(.8 * window.innerWidth)
        window.canvas.width = targetWidth > maxWidth ? maxWidth : targetWidth;
        window.canvas.height = Math.floor(.75 * window.canvas.width);
        window.canvas.dataset.scale = window.canvas.width / maxWidth;
        gameView.resize();
    }

    // function getMousePos(canvas, event) {
    //     let rect = canvas.getBoundingClientRect();
    //     return {
    //       x: event.clientX - rect.left,
    //       y: event.clientY - rect.top,
    //     };
    // }

//     function isInside(pos, rect) {
//         return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
//     }

//    function makeFullScreen() {
//         if (canvas.requestFullscreen) {
//             canvas.requestFullscreen();
//         } else if (canvas.mozRequestFullScreen) { // Firefox
//             canvas.mozRequestFullScreen();
//         } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
//             canvas.webkitRequestFullscreen();
//         } else if (canvas.msRequestFullscreen) { // IE/Edge
//             canvas.msRequestFullscreen();
//         }
//     }

//     function FullScreenButton(rect, lWidth, fillColor, lineColor) {
//         const context = canvas.getContext("2d");
//         context.beginPath();
//         context.rect(rect.x, rect.y, rect.width, rect.height);
//         context.fillStyle = fillColor;
//         context.fill();
//         context.lineWidth = lWidth;
//         context.strokeStyle = '#000000';
//         context.stroke();
//         context.closePath();
//     }
//     canvas.append(new FullScreenButton(rect, 2, "black"));
    

})
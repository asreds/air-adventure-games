var myGamePiece;
var myObstacles = [];
var myScore;

window.startGame = function startGame () {
  myGamePiece = new component(50, 60, 'assets/img/airplane.png', 180, 200, 'image');
  myScore = new component("30px", "Consolas", "black", 20, 40, "text");
  myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        document.getElementById('canvas').insertBefore(this.canvas, document.getElementById('canvas').childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        //handle keyboard
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
            clearmove();
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

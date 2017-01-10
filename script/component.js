
/**
* component to show plane
*/

function component (width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        if (type == "image") {
          ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        // limit let and rigt component on canvas
        if ((this.speedX === 1 && this.x <=360) || (this.speedX === -1 && this.x>2)) {
            this.x += this.speedX;
        }

        if ((this.y <=468 && this.speedY === 1) || this.speedY === -1) {
            this.y += this.speedY;
        }
    },
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
 var x, y;
 for (i = 0; i < myObstacles.length; i += 1) {
     if (myGamePiece.crashWith(myObstacles[i])) {
         myGameArea.stop();
         return;
     }
 }
 myGameArea.clear();
 myGameArea.frameNo += 1;
 if (myGameArea.frameNo == 1 || everyinterval(150)) {
    y = 10;
    x = myGameArea.canvas.width;
    minWidth = 20;
    maxWidth = 150;
    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    myObstacles.push(new component(width, 10, "green", 0, y));
    myObstacles.push(new component(x - width - gap, 10 , "green", width + gap , y));
 }
 for (i = 0; i < myObstacles.length; i += 1) {
     myObstacles[i].y += 1;
     myObstacles[i].update();
 }
//update from keyboard
if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }

myScore.text="SCORE: " + Math.round(myGameArea.frameNo / 4);
myScore.update();
myGamePiece.newPos();
myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}


window.moveup = function moveup() {
    myGamePiece.speedY -= 1;
}

window.movedown = function movedown() {
    myGamePiece.speedY += 1;
}

window.moveleft = function moveleft() {
    myGamePiece.speedX -= 1;
}

window.moveright = function moveright() {
    myGamePiece.speedX += 1;
    console.log(myGamePiece.x)
}

window.clearmove = function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

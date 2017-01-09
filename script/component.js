
/**
* component to show plane
*/


function component(width, height, color, x, y, type) {
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
    }   
}

function updateGameArea() {
    myGameArea.clear();

    //update from keyboard
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }

    myGamePiece.newPos();  
    myGamePiece.update();
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

/**
* component to show plane
*/


function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y; 	
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }   
}

function updateGameArea() {
    myGameArea.clear();
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
}

window.clearmove = function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
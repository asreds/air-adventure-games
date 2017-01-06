/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	window.startGame = function startGame() {
	    myGameArea.start();
	    myGamePiece = new component(30, 30, "red", 200, 440);
	}

	var myGameArea = {
	    canvas : document.createElement("canvas"),
	    start : function() {
	        this.canvas.width = 400;
	        this.canvas.height = 500;
	        this.context = this.canvas.getContext("2d");
	        document.getElementById('canvas').insertBefore(this.canvas, document.getElementById('canvas').childNodes[0]);
	        this.interval = setInterval(updateGameArea, 20);
	    },
	    clear : function() {
	        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    }
	}


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


/***/ }
/******/ ]);
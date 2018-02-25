/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

console.log("Webpack is working");

const Util = __webpack_require__(3);
window.Util = Util;

const MovingObject = __webpack_require__(1);
window.MovingObject = MovingObject;

const Asteroid = __webpack_require__(2);
window.Asteroid = Asteroid;

const Game = __webpack_require__(4);
window.Game = Game;

const GameView = __webpack_require__(5);
window.GameView = GameView;


document.addEventListener("DOMContentLoaded", function() { 
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);
  gameView.start();
  });



/***/ }),
/* 1 */
/***/ (function(module, exports) {

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = Game.prototype.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const min_distance = this.radius + otherObject.radius;
  const distance = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
  
  return distance > min_distance ? false : true;
  
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  this.game.remove(otherObject);
}




module.exports = MovingObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(3);


function Asteroid (pos, game) {
  MovingObject.call(this, {game: game, pos: pos, vel: Util.randomVec(5), color: Asteroid.COLOR, radius: Asteroid.RADIUS});
}

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 5;

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;

/***/ }),
/* 3 */
/***/ (function(module, exports) {



const Util = {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  
  inherits(childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  }
  
};

module.exports = Util;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(2);
window.Asteroid = Asteroid;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 5000;

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
};

Game.prototype.randomPosition = function() {
  return [600 * Math.random(), 600 * Math.random()];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 600, 600);
  this.asteroids.forEach(function(el) {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(el) {
    el.move();
  });
};

Game.prototype.wrap = function(pos) {
  return [((pos[0] % 600) + 600) % 600, ((pos[1] % 600) + 600) % 600];
};

Game.prototype.checkCollisions = function() {
  for (var i = 0; i < this.asteroids.length; i++) {
     for (var j = 0; j < this.asteroids.length; j++) {
       if (i === j) {
         continue;
       } else if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
         this.asteroids[i].collideWith(this.asteroids[j]);
       }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  const astIndex = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(astIndex, 1);
};

module.exports = Game;















// end

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function GameView (game, context) {
  this.context = context;
  this.game = game;
}


GameView.prototype.start = function() {
  setInterval(this.game.step.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game), 20, this.context);
};


module.exports = GameView;

/***/ })
/******/ ]);
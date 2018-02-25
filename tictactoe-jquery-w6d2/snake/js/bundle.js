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

const Coord = __webpack_require__(2);
const Snake = __webpack_require__(3);
const Board = __webpack_require__(1);
const View = __webpack_require__(4);


$( () => {
  const rootEl = $('.snake');
  new HanoiView(rootEl);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];

  }
}

module.exports = Board;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Coord {
  constructor() {

  }

  plus() {}

  equals() {}

  isOpposite() {}


}

module.exports = Coord;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Snake {
  constructor(direction){
    this.direction = direction;
    this.segments =[];

  }

  move() {

  }

  turn(new_dir) {

  }





}

module.exports = Snake;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(1);

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
  }

  handleKeyEvent() {
    // this.$el.on('keydown', function(e) {
    //   switch (expression) {
    //     case expression:
    //
    //       break;
    //     default:
    //
    //   }
    // });
  }
}


module.exports = View;


/***/ })
/******/ ]);
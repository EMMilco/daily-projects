console.log("Webpack is working");

const Util = require("./utils.js");
window.Util = Util;

const MovingObject = require("./moving_objects.js");
window.MovingObject = MovingObject;

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

const Game = require("./game.js");
window.Game = Game;

const GameView = require("./game_view.js");
window.GameView = GameView;


document.addEventListener("DOMContentLoaded", function() { 
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);
  gameView.start();
  });


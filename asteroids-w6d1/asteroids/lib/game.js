const Asteroid = require("./asteroid.js");
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
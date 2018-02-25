const Util = require('./utils.js');


function Asteroid (pos, game) {
  MovingObject.call(this, {game: game, pos: pos, vel: Util.randomVec(5), color: Asteroid.COLOR, radius: Asteroid.RADIUS});
}

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 5;

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;
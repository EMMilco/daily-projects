function GameView (game, context) {
  this.context = context;
  this.game = game;
}


GameView.prototype.start = function() {
  setInterval(this.game.step.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game), 20, this.context);
};


module.exports = GameView;
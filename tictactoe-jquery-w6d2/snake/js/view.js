const Board = require('./board.js');

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

class View {
  constructor(game, $el) {
    this.game = game;
    this.$container = $el;
    this.setupBoard(game.board.grid);
    this.bindEvents();
  }

  bindEvents() {
    $("li").on('click', (e) => {
      const $li = $(e.target);

      this.makeMove($li);
      if (this.game.winner()) {
        alert(`${this.game.board.winner()} wins!`);
      }
    });
  }

  makeMove($square) {
    const pos = [$square.data("row"), $square.data("col")];
    const mark = this.game.currentPlayer;
    this.game.playMove(pos);
    if (mark === 'x') {
      $square.addClass("xed");
      $square.text("X");
    } else {
      $square.addClass("oed");
      $square.text("O");
    }
  }

  setupBoard(grid) {
    const $grid = $("<ul>");
    this.$container.append($grid);
    grid.forEach((rank,row) => {
      rank.forEach((square,col ) => {
        const $li = $("<li>");
        $li.data('row', row);
        $li.data('col', col);
        $grid.append($li);
      });
    });
  }
}







module.exports = View;

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setUpTowers();
    this.render();
    this.clicked = null;
    this.clickTower();
  }

  setUpTowers() {
    const $tower1 = $('<ul>');
    const $tower2 = $('<ul>');
    const $tower3 = $('<ul>');

    [$tower1, $tower2, $tower3].forEach(function(tower, index) {
      tower.data('id', index);
      for (var i = 0; i < 3; i++) {
        tower.append($('<li>'));
        }
    });

    // const $small = $('<li>');
    // const $med = $('<li>');
    // const $large = $('<li>');
    //
    // $small.attr('id', 'small');
    // $med.attr('id', 'med');
    // $large.attr('id', 'large');
    //
    // $tower1.append($small);
    // $tower1.append($med);
    // $tower1.append($large);

    this.$el.append($tower1);
    this.$el.append($tower2);
    this.$el.append($tower3);
  }

  render() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const $ul = $('ul').eq(i);
        const $li = $ul.children().eq(j);
        $li.removeClass();
        if (this.game.towers[i][j] !== undefined) {
          $li.addClass(`disc${this.game.towers[i][j]}`);
        }
      }
    }
  }

  clickTower() {
    $('ul').on('click', (e) => {
      if (this.clicked === null) {
        this.firstTower = $(e.currentTarget);
        this.clicked = Number($(e.currentTarget).data('id'));
        $(e.currentTarget).addClass('selected');
      } else {
        const secondPile = Number($(e.currentTarget).data('id'));
        if (!this.game.move(this.clicked, secondPile)) {
          alert("Invalid Move!");
        }
        this.firstTower.removeClass();
        this.render();
        this.clicked = null;
        if (this.game.isWon()) {
          alert("Congrats you WON");
        }

      }

    });

  }

}

module.exports = View;

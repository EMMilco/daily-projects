$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

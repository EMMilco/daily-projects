const Coord = require('./coord.js');
const Snake = require('./snake.js');
const Board = require('./board.js');
const View = require('./view.js');


$( () => {
  const rootEl = $('.snake');
  new HanoiView(rootEl);
});

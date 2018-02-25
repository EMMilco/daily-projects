const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor () {
    this.stax = [[3, 2, 1], [], []];
  }

  run (completionCB) {
    if (this.isWon()) {
      completionCB();
      reader.close();
    } else {
      this.promptMove(this.move.bind(this));
    }
  }

  promptMove (callback) {
    console.log(this.stax);
    function completionCB () {
      console.log("heyy you won eventually");
    }
    reader.question(`Where from? `, (fromInd) => {
      reader.question(`Where to? `, (toInd) => {
        callback(fromInd, toInd);
        this.run(completionCB);
      })
    })
  }

  isValidMove(start, finish) {
    const startStack = this.stax[start];
    const endStack = this.stax[finish];
    if (startStack.length === 0) {
      return false;
    } else if (endStack.length === 0) {
      return true;
    } else {
      return startStack[startStack.length-1] < endStack[endStack.length-1];
    }
  }

  move(start, finish) {
    const startStack = this.stax[start];
    const endStack = this.stax[finish];
    if (this.isValidMove(start,finish)) {
      endStack.push(startStack.pop());
      return true;
    }
    console.log('Move failed');
    return false;
  }

  print() {
    console.log(JSON.stringify(this.stax));
  }

  isWon() {
    return (this.stax[1].length === 3 || this.stax[2].length === 3);
  }
}

module.exports = Game;

class Clock {
  constructor() {
    const startTime = new Date();
    this.secs = startTime.getSeconds();
    this.mins = startTime.getMinutes();
    this.hrs = startTime.getHours();
    this.printTime();
    const ticker = this._tick.bind(this)
    setInterval(ticker, 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    if (this.secs < 10) {
      this.secs = `0${this.secs}`;
    }
    if (this.mins < 10) {
      this.mins = `0${this.mins}`;
    }
    if (this.hrs > 12) {
      this.hrs = 1;
    }

    console.log(`${this.hrs}:${this.mins}:${this.secs}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.secs++;
    if (this.secs > 59) {
      this.secs = 0;
      this.mins++;
      if (this.mins > 59) {
        this.mins = 0;
        this.hrs++;
        if (this.hrs > 12) {
          this.hrs = 1;
        }
      }
    }
    this.printTime();
  }
}

// const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  function completionCallback() {
    console.log(`Total Sum: ${sum}`);
    reader.close();
  }

  if (numsLeft === 0) {completionCallback()
  } else {
  numsLeft--;
  reader.question(`What number would you like to add? The current sum is: ${sum}.  ${numsLeft} numbers left. \n`, (res) => {
    addNumbers(sum+Number(res), numsLeft, completionCallback);
  });}
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));





// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`${el1} > ${el2}, [T]rue or [F]alse?`, (res) => {
    if (res === 'T' || res === 'True') {
      callback(true);
    }
    else { callback(false); }
  })
};

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) { outerBubbleSortLoop(madeAnySwaps) }
  else {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      let madeAnySwaps = false;
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      };
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  }
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      reader.close();
      sortCompletionCallback;
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([1,2,5, 2, 3,1], () => {console.log('completed')});

Function.prototype.myBind = function (context) {
  const callback = () => {this.apply(context);}
  return callback; }

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

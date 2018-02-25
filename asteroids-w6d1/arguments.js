function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}


Function.prototype.myBind = function (context, ...bindArgs) {
  return (callArgs) => {
    const args = bindArgs.concat(callArgs);
    return this.call(context, ...args);
  };
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  
  woof(species) {
    console.log(`My name is ${this.name} and I am ${species}`);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
}

// const felix = new Cat("felix");
// 
// const boundWoof = Dog.prototype.woof.myBind(felix, "cat");
// const boundWoof2 = Dog.prototype.woof.myBind(felix);

const curriedSum = (numArgs) => {
  const nums = [];
  const adder = (num) => {
    nums.push(num);
    if (nums.length === numArgs) {
      return nums.reduce((a,b) => a + b );
    } else {
      return adder;
    }
  };
  return adder;
};

Function.prototype.curry = function(numArgs) {
  const args = [];
  const curried = (arg) => {
    args.push(arg);
    if (args.length >= numArgs) {
      return this.apply(null, args);
    } else {
      return curried;
    }
  };
  return curried;
};


function threeSum (a,b,c) {
  return a + b + c;
}










// end 






console.clear();


// Problem set
// Douglas Crockford - Javascritp: the Good Parts course
// https://www.pluralsight.com/courses/javascript-good-parts


// Reusable functions
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function double(a) {
  return 2 * a;
}

function square(a) {
  return a * a;
}



// write a function that takes an argument
// and returns that argument.

function identity(x) {
  return x;
}



// write two binary functions, add and mul,
// that take two numbers and return their sum and product.

function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}



// write a function that takes an argument
// and returns a function that returns that argument.

function identityf(x) {
  return function() {
    return identity(x);
  };
}



// write a function that adds from two invocations

function addf(x) {
  return function(y) {
    return add(x, y);
  };
}



// write a function that takes a binary function,
// and makes it callable with two invocations.

function applyf(f) {
  return function(x) {
    return function(y) {
      return f(x, y);
    };
  };
}



// write a function that takes a function and an
// argument, and returns a function that can supply
// a second argument.

function curry(f, x) {
  return applyf(f)(x);
}



// without writing any new functions, show three ways to
// create the inc function.

var inc1 = applyf(add, 1);
var inc2 = addf(1);
var inc3 = curry(add, 1);



// write methodize, a function that converts a binary
// function to a method.
// Number.prototype.add = methodize(add); -> (3).add(4)

function methodize(binary) {
  return function(y) {
    return binary(this, y);
  };
}



// write a demothodize, a function that converts a
// method to a binary function.
// demethodize(Number.prototype.add)(5,6)

function demothodize(f) {
  return function(x, y) {
    return f.call(x, y);
  };
}



// write a function twice that takes a binary function and
// returns a unary function that passes its argument to the
// binary function twice.

function twice(binary) {
  return function(x) {
    return binary(x, x);
  };
}



// write a function composeu that takes two unary functions
// and returns a unary function that calls then both

function composeu(f, g) {
  return function(x) {
    return g(f(x));
  };
}



// write a function composeb that takes two binary functions
// and returns a function that calls them both.

function composeb(f, g) {
  return function(x, y, z) {
    return g(f(x, y), z);
  };
}



// write a function that allows another function to only be called one.
// add_once = once(add);
// add_once(3, 4) -> 7
// add_once(3, 4) -> throw!

function once(fn) {
  var wasCalled = false;
  
  return function(a,b) {
    if (wasCalled === false) {
      wasCalled = true;
      return fn(a,b);
    }
    throw new Error('Already called');
  }
}


function once2(fn) {
  return function() {
    var fnNew = fn;
    fn = null;
    return fnNew.apply(this, arguments);
  }
}



// write a factory function that returns two functions
// that implement an up/down counter.
// counter = counterf(10);
// counter.inc() -> 11
// counter.dec() -> 10

function counterf(num) {
  return {
    inc: function() {
      num += 1;
      return num;
    },
    dec: function() {
      num -= 1;
      return num;
    }
  };
}

function counterf2(num) {
  return {
    inc: function() {
      return --num;
    },
    dec: function() {
      return ++num;
    }
  };
}



// write a revocable function that allows you to do something like:
var temp = revocable(square);
console.log(  temp.invoke(3)  ); // 9
console.log(  temp.revoke()  );
console.log(  temp.revoke(4)  );


function revocable(fn) {
  return {
    invoke: function() {
      return fn.apply(this, arguments);
    },
    revoke: function() {
      return fn = null;
    }
  }
}


function revocable2(fn) {
  return {
    invoke: function() {
      return fn(...arguments);
    },
    revoke: function() {
      return fn = null;
    }
  }
}

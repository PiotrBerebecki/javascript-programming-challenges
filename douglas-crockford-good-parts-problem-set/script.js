console.clear();

// Problem set
// Douglas Crockford - Javascritp: the Good Parts course
// https://www.pluralsight.com/courses/javascript-good-parts



// write a function that takes an argument
// and returns that argument.
// console.log(  identity2(3)  );  // 3

function identity(x) {
  return x;
}



// write binary functions: add, mul, double, square
// that take two numbers and return their the proper result.
// console.log(  add(3,4)  );  // 7
// console.log(  mul(3,4)  );  // 12

function add(a, b) {
  return a + b;
}

// add a third optional argument
// used in the curry example below
function mul(a, b, c) {
  return a * b * (c ? c : 1);
}

function double(a) {
  return 2 * a;
}

function square(a) {
  return a * a;
}



// write a function that takes an argument
// and returns a function that returns that argument.
// var idf = identityf(3);  // 3
// console.log(  idf()  );

function identityf(x) {
  return function() {
    return identity(x);
  };
}



// write a function that adds from two invocations
// console.log(  addf(3)(4)  ); // 7

function addf(a) {
  return function(b) {
    return add(a, b);
  };
}



// write a function that takes a binary function,
// and makes it callable with two invocations.
// var addf = applyf(add);
// console.log(  addf(3)(4)  ) // 7
// console.log(  applyf(mul)(5)(6)  ) // 30

function applyf(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}



// write a function that takes a function and an
// argument, and returns a function that can supply
// a second argument.
// var add3 = curry(add, 3);
// console.log(  add3(4)  );  // 7
// console.log(  curry(mul, 5)(6)  );  // 30

function curry(fn, a) {
  return function(b) {
    return fn(a, b);
  };
}

// reusing existing fuctions
function curry2(fn, a) {
  return applyf(fn)(a);
}



// Same as above but arbitary number of arguments
// console.log(  curryMore(mul, 5)(6, 2)  );  // 60
function curryMore(fn, a) {
  return function(...b) {
    return fn(a, ...b);
  };
}



// without writing any new functions, show three ways to
// create the inc function.
// inc(5); // 6
// inc(inc(5)); // 7

// var inc = addf(1);
// var inc = applyf(add)(1);
// var inc = curry(add, 1);

// console.log(  inc(5)  ); // 6
// console.log(  inc(inc(5))  ); // 7



// write methodize, a function that converts a binary
// function to a method.
Number.prototype.add = methodize(add);
// console.log(  (3).add(4)  ); // 7

function methodize(fn) {
  return function(a) {
    return fn(this, a);
  };
}

// or allow for more arguments
function methodize2(fn) {
  return function(...a) {
    return fn(this, ...a);
  };
}



// write a demothodize, a function that converts a
// method to a binary function.
// console.log(  demethodize(Number.prototype.add)(5, 6)  ) // 11

function demethodize(fn) {
  return function(a, b) {
    return fn.call(a, b);
  };
}

// or using apply
function demethodize2(fn) {
  return function(a, ...b) {
    return fn.apply(a, b);
  };
}



// write a function twice that takes a binary function and
// returns a unary function that passes its argument to the
// binary function twice.
// var double = twice(add);
// console.log(  double(11)  );  // 22

// var square = twice(mul);
// console.log(  square(11)  ); // 121

function twice(fn) {
  return function(a) {
    return fn(a, a);
  };
}



// write a function composeu that takes two unary functions
// and returns a unary function that calls then both
// console.log(  composeu(double, square)(3)  ); // 36

function composeu(fn1, fn2) {
  return function(a) {
    return fn2(fn1(a));
  };
}



// write a function composeb that takes two binary functions
// and returns a function that calls them both.
// console.log(  composeb(add, mul)(2, 3, 5)  ); // 25

function composeb(fn1, fn2) {
  return function(a, b, c) {
    return fn2(fn1(a, b), c);
  };
}



// write a function that allows another function to only be called one.
// add_once = once(add);
// console.log(  add_once(3, 4)  ); //  7
// console.log(  add_once(3, 4)  ); //  throw!


// or
function once(fn) {
  return function() {
    var fnNew = fn;
    fn = null;
    return fnNew.apply(null, arguments);
  };
}


// or
function once2(fn) {
  var wasCalled = false;
  
  return function(a, b) {
    if (wasCalled === false) {
      wasCalled = true;
      return fn(a, b);
    }
    throw new Error('Already called');
  };
}


// or
function once3(fn) {
  return function(a, b) {
    var fnNew = fn;
    fn = null;
    return fnNew.call(null, a, b);
  };
}



// write a factory function that returns two functions
// that implement an up/down counter.
// var counter = counterf(10);
// console.log(  counter.inc()  ) // 11
// console.log(  counter.dec()  ) // 10

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

// or
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
console.log(  temp.revoke(4)  ); // throw!

function revocable(fn) {
  return {
    invoke: function() {
      return fn.apply(this, arguments);
    },
    revoke: function() {
      return fn = null;
    }
  };
}

// or
function revocable2(fn) {
  return {
    invoke: function() {
      return fn(...arguments);
    },
    revoke: function() {
      return fn = null;
    }
  };
}

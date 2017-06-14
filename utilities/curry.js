// http://codepen.io/PiotrBerebecki/pen/mmPvxM?editors=1010

const add3 = (a, b, c) => a + b + c;

// Write a curry function according to the following specs:
console.log(curry(add3, 1, 2, 3)); // 6
console.log(curry(add3)(1)(2)(3)); // 6
console.log(curry(add3)(1, 2)(3)); // 6
console.log(curry(add3)(1)(2, 3)); // 6

// ES6 bind
const curry = (fn, ...args) => {
  if (fn.length === args.length) {
    return fn(...args);
  }
  return curry.bind(null, fn, ...args);
};

// ES6 bind 'tiny'
const curry = (fn, ...args) =>
  (fn.length === args.length ? fn(...args) : curry.bind(null, fn, ...args));

// ES6 apply
const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return (...nextArgs) => {
    return curry.apply(null, [fn, ...args, ...nextArgs]);
  };
};

// ES6 call
const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return (...nextArgs) => {
    return curry.call(null, fn, ...args, ...nextArgs);
  };
};

// ES5
function curry(fn, args) {
  var args1 = Array.prototype.slice.call(arguments);

  if (args1.length - 1 === fn.length) {
    return fn.apply(null, args1.slice(1));
  }

  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return curry.apply(null, args1.concat(args2));
  };
}

console.log(curry(add3, 1, 2, 3)); // 6
console.log(curry(add3)(1)(2)(3)); // 6
console.log(curry(add3)(1, 2)(3)); // 6
console.log(curry(add3)(1)(2, 3)); // 6

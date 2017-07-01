// https://www.codewars.com/kata/curry-me-softly/javascript

const CurryIt = fn => {
  let argsCache = [];
  let fn2;

  return function(...args) {
    if (Array.isArray(this)) {
      argsCache = [...this];
    }

    if (typeof args[0] === 'function') {
      fn2 = args[0];
      return;
    }

    if (args.length === 0) {
      const argsCacheCopy = [...argsCache];
      argsCache = [];

      if (typeof fn2 === 'function') {
        if (typeof fn === 'function') {
          return fn.call(argsCacheCopy, fn2);
        }
        return fn2(...argsCacheCopy);
      }
      return fn(...argsCacheCopy);
    }
    argsCache = [...argsCache, ...args];
  };
};

// ==================================================
function adder() {
  return [].slice.call(arguments).reduce(function(a, b) {
    return a + b;
  }, 0);
}

const curryAdder = CurryIt(adder);

curryAdder(1);
curryAdder(99);
curryAdder(100);

console.log(curryAdder()); // 200

curryAdder(1);
curryAdder(1);
curryAdder(1);

console.log(curryAdder()); // 3

// ==================================================
const exampleArray = [2, 3, 4];
const curryReduce = CurryIt(Array.prototype.reduce);
curryReduce.call(exampleArray, function(a, b) {
  return a + b;
});
curryReduce(8);
console.log(curryReduce()); // 17

// http://www.codewars.com/kata/memoized-fibonacci/javascript
// Memoize fibonacci numbers for faster lookup.

// fibonacci(8) // 21

// 0 1 2 3 4 5 6  7  8
// 0 1 1 2 3 5 8 13 21

const fibonacci = (function() {
  const cache = {
    0: 0,
    1: 1,
  };

  return function(n) {
    if (typeof cache[n] === 'number') {
      return cache[n];
    }

    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
})();

// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(10)); // 55
// console.log(fibonacci(50)); // 12586269025

// Memoize fibonacci numbers for faster lookup.

// fibonacci(5) // 3

// 1 2 3 4 5 6 7  8  9
// 0 1 1 2 3 5 8 13 21

const nthFibo = (function() {
  const cache = {
    1: 0,
    2: 1,
  };

  return function(n) {
    if (typeof cache[n] === 'number') {
      return cache[n];
    }
    return (cache[n] = nthFibo(n - 1) + nthFibo(n - 2));
  };
})();

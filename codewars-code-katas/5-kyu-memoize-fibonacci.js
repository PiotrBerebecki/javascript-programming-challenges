// http://www.codewars.com/kata/memoized-fibonacci/javascript
// Memoize fibonacci numbers for faster lookup.

// fibonacci(8) // 21

// 0 1 2 3 4 5 6  7  8
// 0 1 1 2 3 5 8 13 21

const fibonacci = (function() {
  const cache = {};

  return function(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    // Recurse only if necessary
    if (cache[n - 2] === undefined) {
      cache[n - 2] = fibonacci(n - 2);
    }

    if (cache[n - 1] === undefined) {
      cache[n - 1] = fibonacci(n - 1);
    }

    cache[n] = cache[n - 1] + cache[n - 2];
    return cache[n];
  };
})();

// cache all up to a number
const fibonacci2 = (function() {
  const cache = {
    0: 0,
    1: 1,
    lastAdded: 1,
  };

  return function(n) {
    if (typeof cache[n] === 'number') {
      return cache[n];
    }

    while (cache.lastAdded < n) {
      const { lastAdded } = cache;
      const next = lastAdded + 1;
      cache[next] = cache[lastAdded] + cache[lastAdded - 1];
      cache.lastAdded = next;
    }
    return cache[n];
  };
})();

const t0 = performance.now();
fibonacci(350);
const t1 = performance.now();
console.log(t1 - t0, 'ms');

const t2 = performance.now();
fibonacci(300);
const t3 = performance.now();
console.log(t3 - t2, 'ms');

const t0a = performance.now();
fibonacci2(350);
const t1a = performance.now();
console.log(t1a - t0a, 'ms');

const t2a = performance.now();
fibonacci2(300);
const t3a = performance.now();
console.log(t3a - t2a, 'ms');

// console.log(fibonacci(8))

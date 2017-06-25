// If you are calculating complex things or execute time-consuming API calls,
//  you sometimes want to cache the results. In this case we want you to
//   create a function wrapper, which takes a function and caches its
//   results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again,
// instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method
//  wasn't invoked before with these arguments

const cache = fn => {
  const cache = [];

  return (...args) => {
    const cacheIndex = cache.findIndex(cached => {
      return (
        cached.args.length === args.length &&
        cached.args.every((arg, idx) => arg === args[idx])
      );
    });

    if (cacheIndex !== -1) {
      return cache[cacheIndex].result;
    }

    const result = fn(...args);
    cache.push({
      args,
      result,
    });
    return result;
  };
};

const mul = (a, b) => a * b;
const cachedFunction = cache(mul);

console.log(cachedFunction(2, 4)); // executed
console.log(cachedFunction(2, 4)); // not executed with the same arguments
console.log(cachedFunction(2, 5)); // executed

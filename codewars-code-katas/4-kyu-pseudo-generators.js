// http://www.codewars.com/kata/es5-generators-i/javascript

// Implement pseudo-generators with ES5.

// const seq = generator(factorialSeq);
// console.log((seq.next())); // 1; // 0! = 1
// console.log((seq.next())); // 1; // 1! = 1
// console.log((seq.next())); // 2; // 2! = 2
// console.log((seq.next())); // 6; // 3! = 6
// console.log((seq.next())); // 24; // 4! = 24

function generator(sequencer, ...args) {
  return {
    next() {
      return (function() {
        return sequencer(...args);
      })();
    },
  };
}

const factorialSeq = (function() {
  let next = 0;

  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  return function() {
    const current = next;
    next++;
    return factorial(current);
  };
})();

// const seq = generator(factorialSeq);
// console.log((seq.next())); // 1; // 0! = 1
// console.log((seq.next())); // 1; // 1! = 1
// console.log((seq.next())); // 2; // 2! = 2
// console.log((seq.next())); // 6; // 3! = 6
// console.log((seq.next())); // 24; // 4! = 24

const fibonacciSeq = (function() {
  let next = 0;

  function fib(n) {
    if (n <= 1) {
      return 1;
    }
    return fib(n - 2) + fib(n - 1);
  }

  return function() {
    const current = next;
    next++;
    return fib(current);
  };
})();

// const seq = generator(fibonacciSeq);
// console.log(seq.next()); // fib(0) = 1
// console.log(seq.next()); // fib(1) = 1
// console.log(seq.next()); // fib(2) = 2
// console.log(seq.next()); // fib(3) = 3
// console.log(seq.next()); // fib(4) = 5
// console.log(seq.next()); // fib(5) = 8
// console.log(seq.next()); // fib(6) = 13

const rangeSeq = (function() {
  let callNumber = 0;

  return function(...args) {
    return args[0] + callNumber++ * args[1];
  };
})();

// const seq = generator(rangeSeq, 5, 3); // 5,8,11,14,17
// console.log(seq.next()) // 5
// console.log(seq.next()) // 8
// console.log(seq.next()) // 11
// console.log(seq.next()) // 14

const primeSeq = (function() {
  let next = 2;

  function nextPrime(n) {
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (Number.isInteger(num / i)) {
          return false;
        }
      }
      return true;
    }

    while (!isPrime(n)) {
      n++;
    }

    return n;
  }

  return function() {
    const current = next;
    next = nextPrime(next + 1);

    return current;
  };
})();

// const seq = generator(primeSeq);
// console.log(seq.next()) // 2
// console.log(seq.next()) // 3
// console.log(seq.next()) // 5
// console.log(seq.next()) // 7
// console.log(seq.next()) // 11
// console.log(seq.next()) // 13
// console.log(seq.next()) // 17
// console.log(seq.next()) // 19

const partialSumSeq = (function() {
  let callNumber = 0;
  let next = 0;

  return function(...args) {
    const current = next + args[callNumber];
    callNumber++;
    next = current;
    if (callNumber <= args.length) {
      return current;
    }
    throw new Error('End of sequence');
  };
})();

// const seq = generator(partialSumSeq, -1, 4, 2, 5);
// console.log(seq.next()) // -1
// console.log(seq.next()) // 3
// console.log(seq.next()) // 5
// console.log(seq.next()) // 10 //End of sequence
// console.log(seq.next()) // error

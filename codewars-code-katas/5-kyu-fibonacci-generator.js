// Write the fibonacci generator
//
// const fib = genfib();
// console.log(fib()) // -> returns 0
// console.log(fib()) // -> returns 1
// console.log(fib()) // -> returns 1
// console.log(fib()) // -> returns 2
// console.log(fib()) // -> returns 3
// console.log(fib()) // -> returns 5

const genfib = () => {
  let a = 0;
  let b = 1;

  return () => {
    const next = a;
    a = b;
    b = b + next;
    return next;
  };
};

const fib = genfib();
console.log(fib()); // -> returns 0
console.log(fib()); // -> returns 1
console.log(fib()); // -> returns 1
console.log(fib()); // -> returns 2
console.log(fib()); // -> returns 3
console.log(fib()); // -> returns 5

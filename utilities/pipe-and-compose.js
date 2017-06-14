const sumThree = (a, b, c) => a + b + c;
const dbl = a => a * 2;
const toCurrency = num => `£${num}`;

// ****************************************************************
// pipe
// ****************************************************************

// in two steps
const _pipe = (f, g) => (...args) => g(f(...args));
const pipe = (...fns) => fns.reduce(_pipe);

// in one step
const pipe = (fnFirst, ...fns) => (...args) =>
  fns.reduce((acc, fn) => fn(acc), fnFirst(...args));

const sumThreeAndDouble = pipe(sumThree, dbl)(1, 2, 3);
console.log(sumThreeAndDouble); // 12

// ****************************************************************
// compose
// ****************************************************************

// in two steps
const _compose = (f, g) => (...args) => f(g(...args));
const compose = (...fns) => fns.reduce(_compose);

// in one step
const compose = (...fns) => (...args) =>
  fns.slice(0, -1).reduceRight((acc, fn) => fn(acc), fns.slice(-1)[0](...args));

const sumThreeAndToCurrency = compose(toCurrency, sumThree)(1, 2, 3);
console.log(sumThreeAndToCurrency); // £6

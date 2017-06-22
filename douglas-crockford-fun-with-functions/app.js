console.clear();

// *******************************************************************
// write a function that takes an argument
// and returns that argument.
// console.log(  identity(2)  );  // 2

const identity = x => x;
// console.log(  identity(2)  ); // 2

// *******************************************************************
// write binary functions: add, mul, double, square
// that take two numbers and return their the proper result.
// console.log(  add(3,4)  );  // 7
// console.log(  mul(3,4)  );  // 12

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const mulThree = (a, b, c) => mul(a, mul(a, b));

const double = a => 2 * a;

const square = a => a * a;

// console.log(  add(3,4)  );  // 7
// console.log(  mul(3,4)  );  // 12

// *******************************************************************
// var idf = identityf(3);
// console.log(  idf()  );  // 3

const identityf = x => () => x;

// var idf = identityf(3);
// console.log(  idf()  );  // 3

// *******************************************************************
// console.log(  addf(3)(4)  ); // 7

const addf = a => b => add(a, b);

// console.log(  addf(3)(4)  ); // 7

// *******************************************************************
// write a curry function
// console.log(  curry(add, 5, 6)  );  // 11
// console.log(  curry(add, 5)(6)  );  // 11
// console.log(  curry(add)(5)(6)  );  // 11

const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return curry.bind(null, fn, ...args);
};

// console.log(  curry(add, 5, 6)  );  // 11
// console.log(  curry(add, 5)(6)  );  // 11
// console.log(  curry(add)(5)(6)  );  // 11

// *******************************************************************
// Write a curry reverse function
// var sub3 = curryr(sub, 3);
// console.log(  sub3(11)  );  // 8
// console.log(  sub3(3)   );  // 0

const curryr = (fn, b) => a => fn(a, b);

// var sub3 = curryr(sub, 3);
// console.log(  sub3(11)  );  // 8
// console.log(  sub3(3)   );  // 0

// *******************************************************************
// var addFn = liftFn(add);
// console.log(  addFn(3)(4)  );        // 7
// console.log(  liftFn(mul)(5)(6)  );  // 11

// const liftFn = fn => curry(fn)
const liftFn = fn => a => b => fn(a, b);

// var addFn = liftFn(add);
// console.log(  addFn(3)(4)  );        // 7
// console.log(  liftFn(mul)(5)(6)  );  // 11

// *******************************************************************
// find four ways to make inc function
// var inc = ?????;
// console.log(  inc(5)  );       // 6
// console.log(  inc(inc(5))  );  // 7

var inc = curry(add, 1);
// var inc = curryr(add, 1);
// var inc = addf(1);
// var inc = liftFn(add)(1);

// console.log(  inc(5)  );       // 6
// console.log(  inc(inc(5))  );  // 7

// *******************************************************************
// var doubl = twice(add);
// console.log( doubl(11)  );     // 22
// var sq = twice(mul);
// console.log( sq(11)  );    // 121

const twice = fn => n => fn(n, n);

// var doubl = twice(add);
// console.log( doubl(11)  );     // 22
// var sq = twice(mul);
// console.log( sq(11)  );    // 121

// *******************************************************************
// var bus = reverse(sub);
// console.log(  bus(3, 2)  );    // -1

const reverse = fn => (a, b) => fn(b, a);
// const reverse = fn => (...args) => fn(...args.reverse());

// var bus = reverse(sub);
// console.log(  bus(3, 2)  );    // -1

// *******************************************************************
// console.log( pipe(double, square)(5)  );    // 100
// console.log( pipe(add, square)(5, 5)  );    // 100

const pipe = (fnFirst, ...fns) => (...args) =>
  fns.reduce((acc, fn) => fn(acc), fnFirst(...args));

// console.log( pipe(double, square)(5)  );    // 100
// console.log( pipe(add, square)(5, 5)  );    // 100

// *******************************************************************
// console.log(  composeb(add, mul)(2, 3, 7)  );    // 35

const composeb = (fn1, fn2) => (a, b, c) => fn2(fn1(a, b), c);

// console.log(  composeb(add, mul)(2, 3, 7)  );    // 35

// *******************************************************************
// var add_ltd = limit(add, 1);
// console.log(  add_ltd(3, 4)  );    // 7
// console.log(  add_ltd(3, 5) );    // undefined

const limit = (fn, limit) => {
  let callNumber = 0;
  return (...args) => {
    callNumber++;
    if (callNumber > limit) {
      return;
    }
    return fn(...args);
  };
};

// var add_ltd = limit(add, 1);
// console.log(  add_ltd(3, 4)  );   // 7
// console.log(  add_ltd(3, 5) );    // undefined

// *******************************************************************
// var gen = from(0);
// console.log(  gen()  );    // 0
// console.log(  gen()  );    // 1
// console.log(  gen()  );    // 2

const from = n => () => n++;

// var gen = from(0);
// console.log(  gen()  );    // 0
// console.log(  gen()  );    // 1
// console.log(  gen()  );    // 2

// *******************************************************************
// const gen = to(from(3), 5);
// console.log(  gen()  );    // 3
// console.log(  gen()  );    // 4
// console.log(  gen()  );    // undefined

const to = (iterator, end) => () => {
  const next = iterator();
  if (next < end) {
    return next;
  }
};

// const gen = to(from(3), 5);
// console.log(  gen()  );    // 3
// console.log(  gen()  );    // 4
// console.log(  gen()  );    // undefined

// *******************************************************************
// const gen = fromTo(0, 3);
// console.log(  gen()  );  // 0
// console.log(  gen()  );  // 1
// console.log(  gen()  );  // 2
// console.log(  gen()  );  // undefined

const fromTo = (start, end) => to(from(start), end);

// const fromTo = (start, end) => () => {
//   const next = start++
//   return next < end ? next : undefined;
// }

// const fromTo = (start, end) => {
//   let next = start;
//   return () => {
//     next++;
//     if (next < end) { return next; }
//   }
// }

// const gen = fromTo(0, 3);
// console.log(  gen()  );  // 0
// console.log(  gen()  );  // 1
// console.log(  gen()  );  // 2
// console.log(  gen()  );  // undefined

// *******************************************************************
// const gen = element(["a", "b", "c", "d"], fromTo(1, 3));
// console.log(  gen()  );     // "b"
// console.log(  gen()  );     // "c"
// console.log(  gen()  );     // undefined

const element = (arr, gen) => () => {
  return arr[gen()];
};

// const gen = element(["a", "b", "c", "d"], fromTo(1, 3));
// console.log(  gen()  );     // "b"
// console.log(  gen()  );     // "c"
// console.log(  gen()  );     // undefined

// *******************************************************************
// Modify the element factory function above so that the generator argument is optional.
// If a generator is not provided, then each of the elements of the array will be produced.

// const gen = elementPro(['a', 'b', 'c', 'd']);
// console.log(  gen()  );    // "a"
// console.log(  gen()  );    // "b"
// console.log(  gen()  );    // "c"
// console.log(  gen()  );    // "d"
// console.log(  gen()  );    // undefined

const elementPro = (arr, gen) => {
  if (gen === undefined) {
    gen = fromTo(0, arr.length);
  }

  return () => {
    return arr[gen()];
  };
};

// const gen = elementPro(['a', 'b', 'c', 'd']);
// console.log(  gen()  );    // "a"
// console.log(  gen()  );    // "b"
// console.log(  gen()  );    // "c"
// console.log(  gen()  );    // "d"
// console.log(  gen()  );    // undefined

// *******************************************************************
// const array = [];
// const gen = collect(fromTo(0, 2), array);
// console.log(  gen()  );    // 0
// console.log(  gen()  );    // 1
// console.log(  gen()  );    // undefined
// console.log(  array  );    // [0, 1]

const collect = (gen, arr) => {
  return () => {
    const next = gen();
    if (next !== undefined) {
      arr.push(next);
    }
    return next;
  };
};

// const array = [];
// const gen = collect(fromTo(0, 2), array);
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // undefined
// console.log(array); // [0, 1]

// *******************************************************************
// Write a filter factory that takes a generator and a predicate and
// produces a generator that produces only the values approved by
// the predicate.
// const gen = filter(fromTo(0, 5), function third(value) {
//   return value % 3 === 0;
// });
// console.log(gen()); // 0
// console.log(gen()); // 3
// console.log(gen()); // undefined

const filter = (gen, predicate) => {
  return () => {
    let next = gen();
    while (predicate(next) === false && next !== undefined) {
      next = gen();
    }
    return next;
  };
};

// const gen = filter(fromTo(0, 5), function third(value) {
//   return value % 3 === 0;
// });
// console.log(gen()); // 0
// console.log(gen()); // 3
// console.log(gen()); // undefined

// *******************************************************************
// Write a concat factory that takes two generators and produces a generator
// that combines the sequences.

// const gen = concat(fromTo(0, 3), fromTo(0, 2));
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 2
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // undefined

const concat = (gen1, gen2) => {
  return () => {
    let next = gen1();
    if (next === undefined) {
      return gen2();
    }
    return next;
  };
};

// const gen = concat(fromTo(0, 3), fromTo(0, 2));
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 2
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // undefined

// *******************************************************************
// Same as above but arbitrary number of parameters

// const gen = concat(fromTo(0, 3), fromTo(0, 2));
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 2
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // undefined

// const concatPro = (...gens) => {
//   let genIdx = 0;
//   return () => {
//     let next = gens[genIdx]();
//     if (next === undefined) {
//       genIdx++;
//       if (gens[genIdx]) {
//         return gens[genIdx]();
//       }
//     }
//
//     return next;
//   };
// };

// const concatPro = (...gens) => {
//   let next = elementPro(gens);
//   return () => {
//     return next()();
//   };
// };

// const elementPro = (arr, gen) => {
//   if (gen === undefined) {
//     gen = fromTo(0, arr.length);
//   }
//
//   return () => {
//     return arr[gen()];
//   };
// };

// const gen = concatPro(fromTo(0, 3), fromTo(0, 2), fromTo(4, 6));
console.log(gen()); // 0
console.log(gen()); // 1
console.log(gen()); // 2
console.log(gen()); // 0
console.log(gen()); // 1
console.log(gen()); // 4
console.log(gen()); // 5
console.log(gen()); // undefined

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

// *******************************************************************

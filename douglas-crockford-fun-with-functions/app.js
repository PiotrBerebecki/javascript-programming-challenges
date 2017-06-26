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
// const idf = identityf(3);
// console.log(  idf()  );  // 3

const identityf = x => () => x;

// const idf = identityf(3);
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
// const sub3 = curryr(sub, 3);
// console.log(  sub3(11)  );  // 8
// console.log(  sub3(3)   );  // 0

const curryr = (fn, b) => a => fn(a, b);

// const sub3 = curryr(sub, 3);
// console.log(  sub3(11)  );  // 8
// console.log(  sub3(3)   );  // 0

// *******************************************************************
// const addFn = liftFn(add);
// console.log(  addFn(3)(4)  );        // 7
// console.log(  liftFn(mul)(5)(6)  );  // 11

// const liftFn = fn => curry(fn)
const liftFn = fn => a => b => fn(a, b);

// const addFn = liftFn(add);
// console.log(  addFn(3)(4)  );        // 7
// console.log(  liftFn(mul)(5)(6)  );  // 11

// *******************************************************************
// find four ways to make inc function
// const inc = ?????;
// console.log(  inc(5)  );       // 6
// console.log(  inc(inc(5))  );  // 7

const inc = curry(add, 1);
// const inc = curryr(add, 1);
// const inc = addf(1);
// const inc = liftFn(add)(1);

// console.log(  inc(5)  );       // 6
// console.log(  inc(inc(5))  );  // 7

// *******************************************************************
// const doubl = twice(add);
// console.log( doubl(11)  );     // 22
// const sq = twice(mul);
// console.log( sq(11)  );    // 121

const twice = fn => n => fn(n, n);

// const doubl = twice(add);
// console.log( doubl(11)  );     // 22
// const sq = twice(mul);
// console.log( sq(11)  );    // 121

// *******************************************************************
// const bus = reverse(sub);
// console.log(  bus(3, 2)  );    // -1

const reverse = fn => (a, b) => fn(b, a);
// const reverse = fn => (...args) => fn(...args.reverse());

// const bus = reverse(sub);
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
// const add_ltd = limit(add, 1);
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

// const add_ltd = limit(add, 1);
// console.log(  add_ltd(3, 4)  );   // 7
// console.log(  add_ltd(3, 5) );    // undefined

// *******************************************************************
// const gen = from(0);
// console.log(  gen()  );    // 0
// console.log(  gen()  );    // 1
// console.log(  gen()  );    // 2

const from = n => () => n++;

// const gen = from(0);
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

// const gen = concatPro(fromTo(0, 3), fromTo(0, 2), fromTo(4, 6));
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 2
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 4
// console.log(gen()); // 5
// console.log(gen()); // undefined

const concatPro = (...gens) => {
  const next = elementPro(gens);
  let gen = next();
  return function recur() {
    const value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
};

// const gen = concatPro(fromTo(0, 3), fromTo(0, 2), fromTo(4, 6));
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 2
// console.log(gen()); // 0
// console.log(gen()); // 1
// console.log(gen()); // 4
// console.log(gen()); // 5
// console.log(gen()); // undefined

// *******************************************************************
// Make a factory genSym that makes generators that make unique symbols.

// const geng = genSym('G');
// const genh = genSym('H');
// console.log(geng()); // "G1"
// console.log(genh()); // "H1"
// console.log(geng()); // "G2"
// console.log(genh()); // "H2"

const genSym = prefix => {
  const gen = from(1);
  return () => {
    return prefix + gen();
  };
};

// const genSym2 = prefix => {
//   const ids = {};
//
//   return () => {
//     ids[prefix] = ids[prefix] ? ids[prefix] + 1 : 1;
//     return `${prefix}${ids[prefix]}`;
//   };
// };

// const geng = genSym('G');
// const genh = genSym('H');
// console.log(geng()); // "G1"
// console.log(genh()); // "H1"
// console.log(geng()); // "G2"
// console.log(genh()); // "H2"

// *******************************************************************
// Make a factory factory gensymff that takes a seed and returns a factory.

const genSymFromSeed = seed => {
  return prefix => {
    const gen = from(seed);
    return () => {
      return prefix + gen();
    };
  };
};

// const genSymFromOne = genSymFromSeed(1);
// const geng = genSymFromOne('G');
// const genh = genSymFromOne('H');
// console.log(geng()); // "G1"
// console.log(genh()); // "H1"
// console.log(geng()); // "G2"
// console.log(genh()); // "H2"

// *******************************************************************
// Make a function fibonaccif that returns a generator that will
// return the next fibonacci number.

// const fib = fibonacci(0, 1);
// console.log(fib()); // 0
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5

const fibonacci = (a, b) => {
  return () => {
    const next = a;
    a = b;
    b = b + next;
    return next;
  };
};

// const fib = fibonacci(0, 1);
// console.log(fib()); // 0
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5

// *******************************************************************
// const object = counter();
// const up = object.up;
// const down = object.down;
// console.log(up()); // 1
// console.log(down()); // 0
// console.log(counter.count); // undefined
// console.log(down()); // -1
// console.log(up()); // 0

const counter = () => {
  let count = 0;

  function up() {
    return ++count;
  }
  function down() {
    return --count;
  }
  return { up, down };
};

// const object = counter();
// const up = object.up;
// const down = object.down;
// console.log(up()); // 1
// console.log(down()); // 0
// console.log(counter.count); // undefined
// console.log(down()); // -1
// console.log(up()); // 0

// *******************************************************************
// Make a revocable constructor that takes a binary function,
// and returns an object containing an invoke function
// that can invoke the binary function, and a revoke function
// that disables the invoke function.
// const rev = revocable(add);
// const add_rev = rev.invoke;
// console.log(add_rev(3, 4)); // 7
// rev.revoke();
// console.log(add_rev(5, 7)); // undefined

const revocable = fn => {
  function invoke(a, b) {
    if (fn) {
      return fn(a, b);
    }
  }

  function revoke() {
    fn = null;
  }

  return { invoke, revoke };
};

// const rev = revocable(add);
// const add_rev = rev.invoke;
// console.log(add_rev(3, 4)); // 7
// rev.revoke();
// console.log(add_rev(5, 7)); // undefined
// *******************************************************************
// Write a constructor toObject that takes a value
// and an optional source string and returns
// them in an object. The value of source should be a string.

// console.log(JSON.stringify(toObject(1))); // {"value": 1, "source": "1"}
// console.log(JSON.stringify(toObject(Math.PI, 'pi'))); // {"value": 3.14159…, "source": "pi"}

const toObject = (value, source) => {
  return {
    value,
    source: source ? source : String(value),
  };
};

// console.log(JSON.stringify(toObject(1))); // {"value": 1, "source": "1"}
// console.log(JSON.stringify(toObject(Math.PI, 'pi'))); // {"value": 3.14159…, "source": "pi"}

// *******************************************************************
// Write a function addObjects that takes two m objects and returns an m object.

// console.log(JSON.stringify(addObjects(toObject(3), toObject(4)))); // {"value": 7, "source": "(3+4)"}
// console.log(JSON.stringify(addObjects(toObject(1), toObject(Math.PI, 'pi')))); // {"value": 4.14159…, "source": "(1+pi)"}

const addObjects = (o1, o2) => {
  return toObject(o1.value + o2.value, `(${o1.source}+${o2.source})`);
};

// console.log(JSON.stringify(addObjects(toObject(3), toObject(4)))); // {"value": 7, "source": "(3+4)"}
// console.log(JSON.stringify(addObjects(toObject(1), toObject(Math.PI, 'pi')))); // {"value": 4.14159…, "source": "(1+pi)"}

// *******************************************************************
// Write a function liftm that takes a binary function
// and a string and returns a function that acts on m objects.

// const addTwo = operation(add, '+');
// console.log(JSON.stringify(addTwo(toObject(3), toObject(4))));
// // {"value": 7, "source": "(3+4)"}
// const mulTwo = operation(mul, '*');
// console.log(JSON.stringify(mulTwo(toObject(3), toObject(4))));
// // {"value": 12, "source": "(3*4)"}

const operation = (fn, operator) => {
  return (obj1, obj2) => {
    return toObject(
      fn(obj1.value, obj2.value),
      `(${obj1.source}${operator}${obj2.source})`
    );
  };
};

// const addTwo = operation(add, '+');
// console.log(JSON.stringify(addTwo(toObject(3), toObject(4))));
// // {"value": 7, "source": "(3+4)"}
// const mulTwo = operation(mul, '*');
// console.log(JSON.stringify(mulTwo(toObject(3), toObject(4))));
// // {"value": 12, "source": "(3*4)"}

// *******************************************************************
// Modify function operation so that the functions it produces
// can accept arguments that are either numbers or `toObject` objects.

// const addNice = operationPro(add, '+');
// console.log(JSON.stringify(addNice(toObject(3), 4)));
// // {"value": 7, "source": "(3+4)"}

const operationPro = (fn, operator) => {
  return (a, b) => {
    if (typeof a === 'number') {
      a = toObject(a);
    }
    if (typeof b === 'number') {
      b = toObject(b);
    }
    return toObject(
      fn(a.value, b.value),
      `(${a.source}${operator}${b.source})`
    );
  };
};

// const addNice = operationPro(add, '+');
// console.log(JSON.stringify(addNice(toObject(3), 4)));
// // {"value": 7, "source": "(3+4)"}

// *******************************************************************
// const array = [];
// repeat(collect(fromTo(0, 4), array));
// console.log(array); // [0, 1, 2, 3]

const repeat = gen => {
  let next = null;
  while (next !== undefined) {
    next = gen();
  }
};

// const array = [];
// repeat(collect(fromTo(0, 4), array));
// console.log(array); // [0, 1, 2, 3]

// *******************************************************************
// Use the repeat function in the below
// console.log(map([2, 1, 0], inc)); // [3, 2, 1]

function map(array, unary) {
  var ele = elementPro(array);
  var result = [];
  repeat(
    collect(function() {
      var value = ele();
      if (value !== undefined) {
        return unary(value);
      }
    }, result)
  );
  return result;
}

// console.log(map([2, 1, 0], inc)); // [3, 2, 1]

// *******************************************************************
// Use the repeat function in the below
// console.log(reduce([], add)); // undefined
// console.log(reduce([2], add)); // 2
// console.log(reduce([2, 1, 0], add)); // 3

function reduce(array, binary) {
  var ele = elementPro(array);
  var result;
  repeat(function() {
    var value = ele();
    if (value !== undefined) {
      result = result === undefined ? value : binary(result, value);
    }
    return value;
  });
  return result;
}

// console.log(reduce([], add)); // undefined
// console.log(reduce([2], add)); // 2
// console.log(reduce([2, 1, 0], add)); // 3

// *******************************************************************
// Write a function exp that evaluates simple array expressions.
// const sae = [mul, 5, 11];
// console.log(expLight(sae));    // 55
// console.log(expLight(42));     // 42

const expLight = value => {
  return Array.isArray(value) ? value[0](value[1], value[2]) : value;
};

// const sae = [mul, 5, 11];
// console.log(expLight(sae)); // 55
// console.log(expLight(42)); // 42

// *******************************************************************
// Modify exp to evaluate nested array expressions.
// const nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
// console.log(exp(nae)); // 5

// const nae = [
//     Math.sqrt,
//     [
//         add,
//         [square, 3],
//         [square, 4]
//     ]
// ];
// exp(nae)    // 5

const exp = value => {
  return Array.isArray(value) ? value[0](exp(value[1]), exp(value[2])) : value;
};

// const nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
// console.log(exp(nae)); // 5

// *******************************************************************
// Write a function addg that adds from many invocations,
// until it sees an empty invocation.

// console.log(addg()); // undefined
// console.log(addg(2)()); // 2
// console.log(addg(2)(7)()); // 9
// console.log(addg(3)(0)(4)()); // 7
// console.log(addg(1)(2)(4)(8)()); // 15

const addg = num => {
  if (num === undefined) {
    return undefined;
  }
  return nextNum => {
    if (nextNum === undefined) {
      return num;
    }
    return addg(num + nextNum);
  };
};

// const addg = num =>
//   num === undefined
//     ? undefined
//     : nextNum => (nextNum === undefined ? num : addg(num + nextNum));

// console.log(addg()); // undefined
// console.log(addg(2)()); // 2
// console.log(addg(2)(7)()); // 9
// console.log(addg(3)(0)(4)()); // 7
// console.log(addg(1)(2)(4)(8)()); // 15

// *******************************************************************
// Write a function addg that adds from many invocations,
// until it sees an empty invocation.

// console.log(iftg(mul)()); // undefined
// console.log(iftg(mul)(3)()); // 3
// console.log(iftg(mul)(3)(2)()); // 6
// console.log(iftg(mul)(3)(0)(4)()); // 0
// console.log(iftg(mul)(1)(2)(4)(8)()); // 64

const iftg = fn => {
  return function inner(num) {
    if (num === undefined) {
      return undefined;
    }
    return nextNum => {
      if (nextNum === undefined) {
        return num;
      }
      return inner(fn(num, nextNum));
    };
  };
};

// console.log(iftg(mul)()); // undefined
// console.log(iftg(mul)(3)()); // 3
// console.log(iftg(mul)(3)(2)()); // 6
// console.log(iftg(mul)(3)(0)(4)()); // 0
// console.log(iftg(mul)(1)(2)(4)(8)()); // 64
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

// *******************************************************************

// *******************************************************************

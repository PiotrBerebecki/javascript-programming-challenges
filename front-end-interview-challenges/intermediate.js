console.clear();

const fib2 = (function() {
  const cache = {
    0: 0,
    1: 1,
  };

  return function(n) {
    if (typeof cache[n] === 'number') {
      return cache[n];
    }

    return (cache[n] = fib2(n - 1) + fib2(n - 2));
  };
})();

// console.log(fib2(0)); // 0
// console.log(fib2(1)); // 1
// console.log(fib2(2)); // 1
// console.log(fib2(3)); // 2
// console.log(fib2(4)); // 3
// console.log(fib2(10)); // 55
// console.log(fib2(50)); // 12586269025

const isBalanced2 = str => {
  const opening = {
    '(': true,
    '[': true,
    '{': true,
  };

  const closing = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const opened = [];

  for (let char of str) {
    if (opening[char]) {
      opened.push(char);
    } else if (closing[char]) {
      if (opened[opened.length - 1] === closing[char]) {
        opened.pop();
      } else {
        return false;
      }
    }
  }
  return !opened.length;
};

// console.log(isBalanced2('[]')); // true
// console.log(isBalanced2('[}')); // false
// console.log(isBalanced2('{[()]}')); // true
// console.log(isBalanced2('(foo { bar (baz) [boo] })')); // true
// console.log(isBalanced2('foo { bar { baz }')); // false
// console.log(isBalanced2('foo { (bar [baz] } )')); // false

const uniq = arr => {
  return Array.from(new Set(arr));
};

// console.log(uniq([])); // []
// console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]

const intersection = (arr1, arr2) => {
  const seen = arr1.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});
  return arr2.filter(n => seen[n] !== undefined);
};

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12])); // []

// TODO
const sort = arr => {
  return arr.sort((a, b) => a - b);
};

// console.log(sort([])); // []
// console.log(sort([-4, 1, Infinity, 3, 3, 0])); // [-4, 0, 1, 3, 3, Infinity]

// TODO
const includes = (arr, n) => {
  return arr.some(el => el === n);
};

// console.log(includes([1, 3, 8, 10], 8)); // true
// console.log(includes([1, 3, 8, 8, 15], 15)); // true
// console.log(includes([1, 3, 8, 10, 15], 9)); // false

const assignDeep = (target, source) => {
  for (let key in source) {
    if (isObject(source[key])) {
      if (!isObject(target[key])) {
        target[key] = {};
      }
      target[key] = assignDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
};

function isObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
// console.log(assignDeep({ a: 1 }, {})); // { a: 1 }
// console.log(assignDeep({ a: 1 }, { a: 2 })); // { a: 2 }
// console.log(assignDeep({ a: 1 }, { c: 3, d: 4 })); // { a: 1, c: 3, d: 4}
// console.log(assignDeep({ a: 1 }, { c: 3, d: 4, e: { f: 6 } }));
// console.log(assignDeep({ a: 1, e: { x: 11 } }, { c: 3, d: 4, e: { y: 22 } }));
// console.log(assignDeep({ a: 1 }, { a: { b: 2 } })); // { a: { b: 2 } }
// console.log(assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }));
// { a: { b: { c: 1, d: 2 }}, e: 3 }

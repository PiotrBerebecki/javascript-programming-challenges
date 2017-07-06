console.clear();

const isPrime = n => {
  if (n < 2) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(0)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(8)); // false
// console.log(isPrime(13)); // true
// console.log(isPrime(17)); // true
// console.log(isPrime(73)); // true

const factorial = n => {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
};

// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120
// console.log(factorial(6)); // 720

const fib = n => {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
};

// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(10)); // 55
// console.log(fib(20)); // 6765

const isSorted = arr => {
  return arr.slice(1).every((n, i) => n > arr[i]);
};

// console.log(isSorted([])); // true
// console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
// console.log(isSorted([3, 9, -3, 10])); // false

const filter = (arr, predicate) => {
  const filteredArr = [];
  for (let el of arr) {
    if (predicate(el)) {
      filteredArr.push(el);
    }
  }
  return filteredArr;
};

// console.log(filter([1, 2, 3, 4], n => n < 3)); // [1, 2]

const reduce = (arr, fn, seed) => {
  let acc = seed;
  for (let cur of arr) {
    acc = fn(acc, cur);
  }
  return acc;
};

// console.log(reduce([1, 2, 3, 4], (a, b) => a - b, 0)); // 10

const reverse = str => {
  let reversedStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

// console.log(reverse('')); // ''
// console.log(reverse('abcdef')); // 'fedcba'

const indexOf = (arr, n) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};

// console.log(indexOf([1, 2, 3], 1)); // 0
// console.log(indexOf([1, 2, 3], 4)); // -1

const isPalindrome = str => {
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  return cleanedStr === reverse(cleanedStr);
  // or
  // return cleanedStr === cleanedStr.split('').reverse().join('');
};

// console.log(isPalindrome('')); // true
// console.log(isPalindrome('abcdcba')); // true
// console.log(isPalindrome('abcd')); // false
// console.log(isPalindrome('A man a plan a canal Panama')); // true

const missing = arr => {
  let max = arr[0];
  const actualSum = arr.reduce((acc, cur) => {
    max = Math.max(max, cur);
    return acc + cur;
  }, 0);

  if (actualSum === 0) {
    return undefined;
  }

  const expectedSum = (max + 1) * (max - 1 + 1) / 2;
  const missing = expectedSum - actualSum;
  return missing === 0 ? undefined : missing;
};

// console.log(missing([])); // undefined
// console.log(missing([1, 4, 3])); // 2
// console.log(missing([2, 3, 4])); // 1
// console.log(missing([5, 1, 4, 2])); // 3
// console.log(missing([1, 2, 3, 4])); // undefined

const isBalanced = str => {
  const regex = new RegExp(/{([^{}]+)?}/g);
  while (regex.test(str)) {
    str = str.replace(regex, '');
  }
  return !/({|})/.test(str);
};

const isBalanced2 = str => {
  let count = 0;
  for (let char of str) {
    if (char === '{') {
      count++;
    } else if (char === '}') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
};

// console.log(isBalanced('{}')); // true
// console.log(isBalanced('}{')); // false
// console.log(isBalanced('{{}')); // false
// console.log(isBalanced('{}{}')); // true
// console.log(isBalanced('foo { bar { baz } boo }')); // true
// console.log(isBalanced('foo { bar { baz }')); // false
// console.log(isBalanced('foo { bar } }')); // false

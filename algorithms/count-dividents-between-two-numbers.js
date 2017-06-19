// Write a function:

// function divCount(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// console.log( divCount(9,20,5)); // 3
// console.log( divCount(10,20,5)); // 3
// console.log( divCount(11,20,5)); // 2

// Assume that:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.
// Complexity:

// expected worst-case time complexity is O(1);
// expected worst-case space complexity is O(1).

const divCount = (A, B, K) => {
  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
};

const divCount2 = (A, B, K) => {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
};

const divCount3 = (A, B, K) => {
  return ~~(B / K) - ~~((A - 1) / K);
};

console.log(divCount(9, 20, 5)); // 3
console.log(divCount(10, 20, 5)); // 3
console.log(divCount(11, 20, 5)); // 2

// http://www.codewars.com/kata/sum-number-1/javascript
// Write a function named sum which performs addition in the way shown below
// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
NOTE: Pay attention that last brackets are left empty to indicate end of operations


const sum = num =>
  num === undefined
    ? 0
    : nextNum => (nextNum === undefined ? num : sum(num + nextNum));

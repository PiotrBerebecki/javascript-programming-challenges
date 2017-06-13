// http://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]


function squareOrSquareRoot(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt) ? sqrt : num * num;
  });  
}

const t0 = performance.now();
squareOrSquareRoot([2,3,4,9]);
const t1 = performance.now();
console.log(t1 - t0, 'ms');

console.log(squareOrSquareRoot([2,3,4,9])); // [4,9,2,3]


const isInteger2 = n => n === (n ^ 0);
// const isInteger2 = n => n === Math.floor(n);

function squareOrSquareRoot2(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return isInteger2(sqrt) ? sqrt : num * num;
  });  
}


const isInteger3= n => n % 1 === 0;

function squareOrSquareRoot3(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return isInteger(sqrt) ? sqrt : num * num;
  });  
}


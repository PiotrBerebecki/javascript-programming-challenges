// http://www.codewars.com/kata/ones-and-zeros/train/javascript
//
// Given an array of one's and zero's convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
//

function binaryArrayToNumber(binaryArray) {
  return parseInt(binaryArray.join(''), 2);
}

// http://www.codewars.com/kata/remove-zeros/javascript

// Write a function that takes an array of values and
// moves all elements that are zero to the end of the array,
// otherwise preserving the order of the array.
// The zero elements must also maintain the order in which they occurred.
//
// For example, the following array
//
// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
//
// is transformed into
//
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
//
// Zero elements are defined by either 0 or "0". Some tests
//  may include elements that are not number literals.
//
// You are NOT allowed to use any temporary arrays or objects.
// You are also not allowed to use any Array.prototype or m
// Object.prototype methods.

function removeZeros(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0 || arr[i] === '0') {
      moveZeroToEnd(arr, i);
      i--;
      len--;
    }
  }
  return arr;
}

function moveZeroToEnd(arr, i) {
  const zeroToMove = arr[i];
  for (let idx = i; idx < arr.length; idx++) {
    arr[idx] = arr[idx + 1];
  }
  arr[arr.length - 1] = zeroToMove;
  return arr;
}

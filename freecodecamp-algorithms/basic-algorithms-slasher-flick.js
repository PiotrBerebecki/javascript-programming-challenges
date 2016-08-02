console.clear();

/*
-----------------------------------------
Basic Algorithms - Slasher flick
-----------------------------------------

slasher([1, 2, 3], 2) // [3].
slasher([1, 2, 3], 0) // [1, 2, 3].
slasher([1, 2, 3], 9) // [].
slasher([1, 2, 3], 4) // [].
slasher(['burgers', 'fries', 'shake'], 1) // ['fries', 'shake'].
slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5) // ['cheese', 4].
*/


// --------------------------------------
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

console.log(  slasher([1, 2, 3], 2)  ); // [3]
// console.log(  slasher([1, 2, 3], 5)  ); // []




// --------------------------------------
function slasher2(arr, howMany) {
  arr.splice(0, howMany); // removes from 0 to end position
  return arr;
}
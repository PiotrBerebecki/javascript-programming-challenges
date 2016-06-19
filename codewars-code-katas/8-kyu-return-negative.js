console.clear();

/*
----------------------------------------
8 kyu
Return Negative
----------------------------------------

In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

Example:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0

Notes:
    The number can be negative already, in which case no change is required.
    Zero (0) can't be negative, see examples above.
*/



// --------------------------------------
const makeNegative = number => number > 0 ? -number : number;
 
console.log(makeNegative(0));



// --------------------------------------
function makeNegative2(num) {
  return num > 0 ? -num : num;
}



// --------------------------------------
function makeNegative3(num) {
  return -Math.abs(num);
}
// this returns -0 if passed 0 but 0 === -0 is true
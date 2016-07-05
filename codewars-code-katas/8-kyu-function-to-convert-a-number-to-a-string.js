console.clear();

/*
-----------------------------------------
8 kyu
Function to Convert a Number to a String
-----------------------------------------

We need a function that can transform a number into a string.

What ways of achieving this do you know?
Examples:

numberToString(123); // returns '123';  
numberToString(999); // returns '999';
*/



// --------------------------------------
function numberToString(num) {
  return num.toString();
}
// Alternative methods:
// num + ''

console.log(  numberToString(123)  ); // '123'



// --------------------------------------
// cheaky
var numberToString2 = Number;
// Number() converts to a Number
// String() converts to a String
// Boolean() converts to a Boolean
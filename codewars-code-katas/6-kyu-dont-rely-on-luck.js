console.clear();

/*
-----------------------------------------
6 kyu
Don't rely on luck.
-----------------------------------------

Modify the following random number generator so that it always
returns the predefined numbers:

Math.floor(Math.random() * 100 + 1)
*/



// --------------------------------------
// Modify the actual Math.floor method
var guess = 10;
Math.floor = function(number) {
  return guess;
}
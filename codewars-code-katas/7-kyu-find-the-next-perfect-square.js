// console.clear();

/*
-----------------------------------------
7 kyu
Find the next perfect square!
-----------------------------------------

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. Recall that an integral perfect square 
is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. 
You may assume the parameter is positive.

Examples:

findNextSquare(16) --> returns 25
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/



// --------------------------------------
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 ? -1 : Math.pow(root + 1, 2); 
}
// integer % 1 will always be 0 (0 remainder)

console.log(findNextSquare(4));



// --------------------------------------
function findNextSquare2(sq) {
  return Math.floor(Math.sqrt(sq)) === Math.sqrt(sq) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

// arrow function with ** experimental exponentiation operator


// --------------------------------------
var findNextSquare3 = function findNextSquare3(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
};

// Math.pow((Math.sqrt(sq) + 1), 2)
// ** is an experimental exponentiation operator,
// which is a part of ES7 proposal.
// 2**3 will rise 2 to the power 3. Now in 2016 it is not supported
// in any of the browsers.
// math.pow() is your only option if you are not using traceur or babel.

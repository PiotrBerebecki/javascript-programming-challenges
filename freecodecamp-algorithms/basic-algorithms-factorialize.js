console.clear();

/*
-----------------------------------------
Basic Algorithms - Factorialize
-----------------------------------------

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Examples:

factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/



// --------------------------------------
// recursion
function factorialize(num) {
 if (num <= 1) {return 1;}
 return num * factorialize(num - 1);
}

console.log(  factorialize(5)  ); // 120



// --------------------------------------
// for loop
function factorialize2(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
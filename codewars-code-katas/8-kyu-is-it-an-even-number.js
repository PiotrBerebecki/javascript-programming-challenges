console.clear();

/*
-----------------------------------------
8 kyu
Is it an even number?
-----------------------------------------

Determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.
*/



// --------------------------------------
function testEven(n) {
  return n % 2 === 0;
}
console.log(  testEven(6)  ); // true



// --------------------------------------
function testEven2(n) {
  return !(n % 2);
}
// The "!" exclamation point is part of JavaScript's logical operators.
// It is called the "unary negation operator", or more simply "logical NOT".
// It tries to convert whatever follows it into a boolean value ( true / false ).
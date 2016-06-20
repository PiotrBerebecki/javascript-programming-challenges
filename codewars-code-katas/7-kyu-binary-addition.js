console.clear();

/*
-----------------------------------------
7 kyu
Binary Addition
-----------------------------------------

Implement a function that successfully adds two numbers together and returns their solution 
in binary. The conversion can be done before, or after the addition of the two.

The binary number returned should be a string!

addBinary(1, 2)  // '11'
*/



// --------------------------------------
function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(    addBinary(1, 2)    ); // '11'
console.clear();

/*
-----------------------------------------
5 kyu
How many  bits to change to convert one number into another
(aka Delta Bits)
-----------------------------------------

Write a function convertBits to determine the number of bits required 
to convert positive integer A to positive integer B.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

 31  0 0 0 1 1 1 1 1
 14  0 0 0 0 1 1 1 0
---  ---------------
bit  7 6 5 4 3 2 1 0

Thus 31 and 14 should return 2.
*/



// --------------------------------------
function convertBits(a, b) { 
  
  if (a < b) {var minBin = a.toString(2); var maxBin =  b.toString(2);}
  else {var minBin = b.toString(2); var maxBin =  a.toString(2)}   
  
  minBin = '0'.repeat(maxBin.length-minBin.length) + minBin;
  
  var minBinArr = minBin.split('');
  var maxBinArr = maxBin.split('');
  
  var flipCount = 0;

  minBinArr.forEach(function(el,ind) {
    if (el !== maxBinArr[ind]) {flipCount++;}
  });
  
  return flipCount;
}

console.log(  convertBits(1,0)  ); // 1, in binary (1,0)
// console.log(  convertBits(2,1)  ); // 2, in binary (10, 1)
// console.log(  convertBits(4,0)  ); // 2, in binary (100, 0)
// console.log(  convertBits2(4,5)  ); // 1, in binary (100, 101)
// console.log(  convertBits(31,14)  ); // 2, in binary (11111, 1110)
// console.log(  convertBits(7,17)  ); // 3, in binary (00111, 10001)
// console.log(  convertBits2(0,0)  ); // 0, in binary (0,0)



// --------------------------------------
function convertBits2(a, b) { 
  return ((a ^ b).toString(2).match(/1/g) || []).length
}

// ^ is the bitwise XOR operator (exclusive OR). It works directly on the binary form of numbers.
// It returns the decimal which represents a binary number formed by placing 1
// where one of the bits in the pair was 1. For example: 

//  6 is 110 in binary,
//  3 is 011 in binary,
// this 6 ^ 3, (meaning 110 XOR 011)
// gives 101 (5).

//  XOR truth table:
//       0 ^ 0 => 0
//       0 ^ 1 => 1
//       1 ^ 0 => 1
//       1 ^ 1 => 0
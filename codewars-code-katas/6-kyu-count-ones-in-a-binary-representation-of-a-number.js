console.clear();

/*
-----------------------------------------
6 kyu
Count ones in a binary representation of a number (aka Bit Counting)
-----------------------------------------

Write a function that takes an (unsigned) integer as input, and returns
the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function 
should return 5.

countBits(4), // 1 (as 4 is 100)
countBits(5), // 2 (as 5 is 101)
*/



// --------------------------------------
function countBits(n) {
  return n === 0 ? 0 : n.toString(2).match(/1/g).length;
}

console.log(  countBits(5)  ); // 2



// --------------------------------------
function countBits2(n) {
  return n.toString(2).split('').filter(el => el === '1').length;
}


// --------------------------------------
// bitwise operators
function countBits3(n) {
  for (var c = 0; n; n >>>= 1) {
    c += n & 1;
  }
  return c;
}

// This solution uses 'bitwise right shift'' and 'bitwise AND'.
// n & 1: The bitwise AND operation is used to get the number's least significant binary bit 
// (the 1's place of the binary number). That's added to c with the += operator.

// Next, the number is shifted to the right once with the >>>= operator 
// so a different bit moves into the 1's place.

// It continues doing that as long as the number isn't 0. Once it's 0, 
// all of the "1" bits in it have been shifted into the 1's place and 
// added to c, and returns c.
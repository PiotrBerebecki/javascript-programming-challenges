console.clear();

/*
-----------------------------------------
5 kyu
Caesar cipher rot 13 (aka Rot13)
-----------------------------------------

ROT13 is a simple letter substitution cipher that replaces a letter
with the letter 13 letters after it in the alphabet.

ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered 
with Rot13. If there are numbers or special characters included 
in the string, they should be returned as they are. Only letters 
from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".

Examples:

rot13('abcd'); // 'nopq'
rot13('mnopq'); // 'zabcd'
rot13('mnopq'); // 'zabcd'
rot13('abcd a&b'); // 'nopq n&o'
*/



// --------------------------------------
function rot13(str) {
  return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase()<='m' ? 13 : -13)));
}

// console.log(  rot13B('abcd')  ); // 'nopq'
// console.log(  rot13('ABCD')  ); // 'NOPQ'
// console.log(  rot13('mnopq')  ); // 'zabcd'
// console.log(  rot13('abcd a&b')  ); // 'nopq n&o'



// --------------------------------------
function rot13B(str) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, letter => b[a.indexOf(letter)]);
}
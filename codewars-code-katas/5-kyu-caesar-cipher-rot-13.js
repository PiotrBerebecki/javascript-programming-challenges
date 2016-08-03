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
// Universal caesar's cipher. 13 needs to be changed to the desired key.
function rot13(str) {
  var asciiDiff;
  
  return str.replace(/[a-z]/gi, function(letter) {
    if (letter === letter.toLowerCase()) {asciiDiff = 97;}
    else                                 {asciiDiff = 65;}
    return String.fromCharCode( (letter.charCodeAt(0) - asciiDiff + 13) % 26 + asciiDiff );
  });
 }

// console.log(  rot13('abcd')  ); // 'nopq'
// console.log(  rot13('ABCD')  ); // 'NOPQ'
// console.log(  rot13('mnopq')  ); // 'zabcd'
// console.log(  rot13('abcd a&b')  ); // 'nopq n&o'



// --------------------------------------
// Only works for 13
function rot13_2(str) {
  return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase()<='m' ? 13 : -13)));
}



// --------------------------------------
// Only works for 13
function rot13_3(str) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, letter => b[a.indexOf(letter)]);
}
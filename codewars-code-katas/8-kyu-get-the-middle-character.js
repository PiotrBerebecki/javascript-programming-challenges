console.clear();

/*
-----------------------------------------
8 kyu
Get the Middle Character
-----------------------------------------

You are going to be given a word. Your job is to return the middle character of
the word. If the word's length is odd, return the middle character. If the
word's length is even, return the middle 2 characters.

Examples:

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

Input
A word (string) of length 0 < str < 1000

Output
The middle character(s) of the word represented as a string.
*/



// --------------------------------------
// return substr in one go, use Math.ceil to find the start
function getMiddle(str) {
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 1 ? 1 : 2);
}

console.log(getMiddle("test"));
console.log(getMiddle("tests"));



// --------------------------------------
function getMiddle2(str) {
  var len = str.length;
  return len % 2 ? str.substr(len / 2 - 0.5, 1) : str.substr(len / 2 - 1, 2);
}
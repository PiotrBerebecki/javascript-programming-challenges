console.clear();

/*
-----------------------------------------
6 kyu
Reverse each work in a sentance (aka Reverse words)
-----------------------------------------

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
*/



// --------------------------------------
// recursive
function reverseWords(str) {
  return str.split(' ').map(reverseWord).join(' ');
}

function reverseWord(word) {
  if (word === '') {return word;}
  return word.slice(-1) + reverseWord(word.slice(0,-1));
}

console.log(  reverseWords("This is an example!")  ); // 'sihT si na !elpmaxe'



// --------------------------------------
function reverseWords2(str) {
  return str.split(' ').map(reverseWord2).join(' ');
}

function reverseWord2(word) {
  return word.split('').reverse().join('');
}



// --------------------------------------
function reverseWords3(str) {
  return str.split("").reverse().join("").split(' ').reverse().join(' ');
}
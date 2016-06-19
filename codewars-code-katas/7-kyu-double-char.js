console.clear();

/*
-----------------------------------------
7 kyu
Double Char
-----------------------------------------

Given a string, you have to return a string in which each character (case-
sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "
*/



//----------------------------------------
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1" );
}

console.log( doubleChar("abcd") );



//----------------------------------------
const doubleChar2  = str => str.split('').map(c => c + c).join('');
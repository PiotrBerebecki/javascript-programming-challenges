console.clear();

/*
-----------------------------------------
6 kyu
Reverse words with five letters or more
(aka Stop gninnipS My sdroW!)
-----------------------------------------

In a given string sentence reverse words with 5 letters or more

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/



// --------------------------------------
function reverseLongWord(word) {
  return word.length >= 5 ? word.split('').reverse().join('') : word;
}

function spinWords(str) {
  return str.split(' ').map(reverseLongWord).join(' ');
}

console.log(  spinWords( "Hey fellow warriors" )  ); // Hey wollef sroirraw
console.log(  spinWords( "This is a test" )  ); // This is a test
console.log(  spinWords( "This is another test" )  ); // This is rehtona test



// --------------------------------------
// In one function
function spinWords2(str) {
  return str.split(' ').map(function(word) {
    return (word.length >= 5) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
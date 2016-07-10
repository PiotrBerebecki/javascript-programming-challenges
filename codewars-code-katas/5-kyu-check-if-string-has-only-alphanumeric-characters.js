console.clear();

/*
-----------------------------------------
5 kyu
Check if string has only alphanumeric characters (aka Not very secure)
-----------------------------------------

In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil, so you don't have to check that.

The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces/underscore

The given solution is not bad, but it's still possible to trick the regular 
expression, can you figure out why?

alphanumeric("Mazinkaiser") // true
alphanumeric("hello world_") // false
alphanumeric("PassW0rd") // true
alphanumeric("     ") // false
*/



// --------------------------------------
function alphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(  alphanumeric("Mazinkaiser")  ); // true
// console.log(  alphanumeric("hello world_")  ); // false
// console.log(  alphanumeric("PassW0rd")  ); // true
// console.log(  alphanumeric("     ")  ); // false



// --------------------------------------
// Using case-insensitive (ignore case) flag
function alphanumeric2(str) {
  return /^[a-z0-9]+$/i.test(str);
}
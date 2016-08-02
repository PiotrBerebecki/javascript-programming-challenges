console.clear();

/*
-----------------------------------------
Basic Algorithms - Confirm the ending
-----------------------------------------

Check if a string (first argument, str) ends with the given target string
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced 
in ES2015. But for the purpose of this challenge, we would like you to use JavaScript 
substring / substr method instead.

Examples:

confirmEnding('Bastian', 'n') should return true.
confirmEnding('Connor', 'n') should return false.
confirmEnding('He has to give me a new name', 'name') should return true.
confirmEnding('He has to give me a new name', 'me') should return true.
confirmEnding('He has to give me a new name', 'na') should return false.
*/



// --------------------------------------
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

console.log(  confirmEnding("Bastian", "n")  ); // true

// string.slice(start,end)     // one arg is ok. Similar to [Array.prototyp]e.slice,
                               // (-1) will give last char

// string.substr(start,length) // one arg is ok. Similar to Array.prototype.splice,
                               // but does not remove the items. (-1) will give last char.

// string.substring(start,end) // always needs two arguments, but otherwise works like slice
                               // if you know the length of characters to be extracted use substr().
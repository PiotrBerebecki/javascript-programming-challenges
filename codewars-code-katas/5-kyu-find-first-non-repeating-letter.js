console.clear();

/*
-----------------------------------------
5 kyu
Find first non-repeating letter (aka First non-repeating letter)
-----------------------------------------

Write a function named firstNonRepeatingCharacter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

firstNonRepeatingLetter('abcDFabcd') //  'F'

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").
*/



// --------------------------------------
function firstNonRepeatingLetter(str) {
  var strLower = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (strLower.indexOf(strLower[i]) == strLower.lastIndexOf(strLower[i])) {
      return str[i];
    }
  }
  return '';
}

console.log(  firstNonRepeatingLetter('abcDFabcd')  ); 'F'



// --------------------------------------
function firstNonRepeatingLetter2(str) {
  for (var ind in str) {
    if ( str.match(new RegExp(str[ind], 'gi')).length == 1 ) {
      return str[ind];
    }
  }
  return '';
}
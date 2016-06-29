console.clear();

/*
-----------------------------------------
7 kyu
Check if a string is an isogram
-----------------------------------------

An isogram is a word that has no repeating letters, consecutive or
non-consecutive.

Implement a function that determines whether a string is an isogram.

Assume the empty string is an isogram. there will only be letters.
Ignore letter case.

isIsogram( "abc" ) == true
isIsogram( "aba" ) == false
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "moOse" ) == false // -- ignore letter case
*/



// --------------------------------------
function isIsogram(str) {
  var arr = str.toLowerCase().split('');
  for (var i = 0; i < arr.length; i++) {
    if ( arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) ) {
      return false;
    }
  }
  return true;
}

console.log(  isIsogram('abc')  ); // true



// --------------------------------------
// regex
function isIsogram2(str){ 
  return !/(\w).*\1/i.test(str)
}
// Test if an alphanumeric character occurs twice somewhere in str.
// If it dees then return false as str is not an isogram.



// --------------------------------------
// Variation: this will test for repeated characters next to each other.
function hasRepeatedTogether(str){ 
  return /(\w)\1/i.test(str)
}
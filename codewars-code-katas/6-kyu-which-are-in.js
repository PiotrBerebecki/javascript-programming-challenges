console.clear()

/*
-----------------------------------------
6 kyu
Which are in?
-----------------------------------------

Given two arrays of strings a1 and a2 return a sorted 
array r in lexicographical order and without duplicates 
of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation.
Beware: r must be without duplicates.
*/



// --------------------------------------
function inArray(array1,array2) {
  return array1.filter(function(needle, ind) {
    return array2.some(function(hay) {
      return hay.indexOf(needle) > -1 && array1.indexOf(needle) === ind;
    });
  }).sort();
}

var a1 = ["arp", "live", "strong", "live"];
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(   inArray(a1,a2)   ); // ["arp", "live", "strong"]



// --------------------------------------
// regexp
function inArray2(array1,array2) {
  return array1.filter(function(needle, ind) {
    return array2.some(function(hay) {
      var pattern = new RegExp(needle, 'g')
      return pattern.test(hay) && array1.indexOf(needle) === ind;
    });
  }).sort();
}
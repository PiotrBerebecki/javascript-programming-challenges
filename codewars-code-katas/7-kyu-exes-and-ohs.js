console.clear();

/*
-----------------------------------------
7 kyu
Exes and Ohs
-----------------------------------------

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. 
The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/



// --------------------------------------
// && length
function XO(str) {
  var x = str.match(/x/gi);
  var o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
// x.length is not executed if x = null
// you can do length on an empty array but not on a null
// (which is a result if no matches are found).

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));



// --------------------------------------
// filter, arrow function
function XO2(str) {
  str = str.toLowerCase().split('');
  return str.filter(function (char) {
    return char === 'x';
  }).length === str.filter(function (char) {
    return char === 'o';
  }).length;
}



// --------------------------------------
// This is not correct.
function XO3(str) {
  return (str.match(/x/gi) || 1000).length == (str.match(/o/gi) || 1000).length;
}
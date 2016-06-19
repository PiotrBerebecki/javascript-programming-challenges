console.clear();

/*
----------------------------------------
8 kyu
101010 Stringy Strings
----------------------------------------

Write me a function stringy that takes a size and returns a string of 
alternating '1s' and '0s'. the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/



//--------------------------------------
// clever
function stringy(size) {
  var str = '';
  for (var i = 1; i <= size; i++)  {
      str += i % 2;
    } 
  return str;
}

console.log(stringy(5));



//--------------------------------------
var stringy2 = function(size) {
  var str = '';
  for (var i = 1; i <= size; i++) {
    if (i % 2 !== 0) {
      str += '1';
    } else {
      str += '0';
    }
  }
  return str;
};
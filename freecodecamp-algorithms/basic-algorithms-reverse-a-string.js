console.clear();

/*
-----------------------------------------
Basic Algorithms - Reverse a String
-----------------------------------------
reverseString('hello') should return a string.
reverseString('hello') should become 'olleh'.
reverseString('Howdy') should become 'ydwoH'.
reverseString('Greetings from Earth') should return 'htraE morf sgniteerG'.
*/



// --------------------------------------
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(  reverseString('hello')  ); // olleh



// --------------------------------------
// Step by step
function reverseString2(str) {
  var arrayFromString = str.split('');
  var reversedArray = arrayFromString.reverse();
  str = reversedArray.join('');
  return str;
}
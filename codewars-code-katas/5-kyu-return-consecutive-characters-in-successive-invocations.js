console.clear();

/*
-----------------------------------------
5 kyu
Return consecutive characters in successive invocations
(aka Lazy Repeater)
-----------------------------------------

The makeLooper() function takes a string (of non-zero length) as an argument.
It returns a function. The function it returns will return successive characters 
of the string on successive invocations.

It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/



// --------------------------------------
function makeLooper(str) {
  var count = 0;
  return function() {
    return str[count++ % str.length];
  }
}

var abc = makeLooper('abc');
console.log(  abc()  ); // a
console.log(  abc()  ); // b
console.log(  abc()  ); // c
console.log(  abc()  ); // a



// --------------------------------------
// As above but with a length variable.
function makeLooper2(str) {
  var count = 0;
  var len = str.length;
  return function() {
    return str[count++ % len];
  }
}
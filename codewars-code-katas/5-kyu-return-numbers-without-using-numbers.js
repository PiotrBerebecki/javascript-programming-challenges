console.clear();

/*
-----------------------------------------
5 kyu
Return numbers without using numbers
(aka Evil Programming Government Restrictions)
-----------------------------------------

The evil programming government has banned the use of numbers. 
Your task, if you choose to accept it is to return numbers, 
without using numbers.

Problems:
    You can't use number literals in your source code.
    You can't use the length property directly in your code.

Goal:
    You have to return 'I can write numbers like, 1, 2, 3.'
*/  



// --------------------------------------
// increment
var anarchy = function() {
  var count = Math.PI - Math.PI;
  return `I can write numbers like, ${++count}, ${++count}, ${++count}.`;
}
// count++ would not work as first 0 would be shown.
// var count = 0
// console.log(count++); /* Shows 0, then stores count = 1 */
// post-increment = read value, evaluate it, modify it (apply increment), store it

// count = 0;
// console.log(++count); /* Shows 1, then stores count = 1 */
// pre-increment = read value, modify it (apply increment), evaluate it, store it

console.log(  anarchy()  ); // I can write numbers like, 1, 2, 3.



// --------------------------------------
// as above
var anarchy2 = function() {
  var one = Math.PI / Math.PI;
  var two = one + one;
  var three = two + one;
  return `I can write numbers like, ${one}, ${two}, ${three}.`;
}



// --------------------------------------
var anarchy3 = function() {
  var count = +true;
  return `I can write numbers like, ${count++}, ${count++}, ${count++}.`;
}
// + operator returns the numeric representation of the object. 



// --------------------------------------
// as above
var anarchy4 = function() {
  var count = +false;
  return `I can write numbers like, ${++count}, ${++count}, ${++count}.`;
}



// --------------------------------------
// indexOf
var anarchy5 = function() {
  return `I can write numbers like, ${'ab'.indexOf('b')}, ${'aab'.indexOf('b')}, ${'aaab'.indexOf('b')}.`;
}
console.clear();

/*
-----------------------------------------
7 kyu
Sum element of arrays of arbitrary lenghts (aka Javascript Mathematician)
-----------------------------------------

Write a function that takes two sets of arguments of arbitrary length.
The return value will be the sum of the values of all of the arguments.
The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,2)(3,4) // should return 10
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17

Hint: check out closures
*/



// --------------------------------------
function calculate(...args1) {
  return function(...args2) {
    return [...args1, ...args2].reduce((sum, n) => sum + n, 0);
  };
}

console.log(     calculate(1,2)(3,4)      ); // 10

/*
... is the spread operator

Examples:
var a, b, c, d, e;
a = [1,2,3];
b = "dog";
c = [42, "cat"];

// Using the concat method
d = a.concat(b, c);
console.log(d);  // 1, 2, 3, "dog", 42, "cat"

// Using the spread operator
e = [...a, b, ...c];
console.log(e);  // 1, 2, 3, "dog", 42, "cat"
*/



// --------------------------------------
// One line
const calculate2 = (...args1) => (...args2) => [...args1, ...args2].reduce((sum, n) => sum + n, 0);



// --------------------------------------
// Using concat
function calculate3(...args1) {
  return function(...args2) {
    return args1.concat(args2).reduce((sum, n) => sum + n, 0);
  };
}



// --------------------------------------
// Using Array.prototype.slice.call(arguments) instead of ...args1 
function calculate4() {
  var args1 = Array.prototype.slice.call(arguments);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return args1.concat(args2).reduce((sum, n) => sum + n, 0);
  };
}



// --------------------------------------
// Functional programming
function calculate5(...args1) {
  return function(...args2) {
    return sumArray5(args1.concat(args2));
  };
}

function sumArray5(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}
console.clear();

/* 
-----------------------------------------
Advanced Algorithms - Symmetric difference
-----------------------------------------

Create a function that takes two or more arrays and returns 
an array of the symmetric difference.

Symmetric Difference is the difference between two sets.
So in the Symmetric Difference Algorithm you would work 
through the arrays of numbers something like this:

sym(A, B, C) Translates to sym(sym(A,B),C)

Or in plain English:
1) First find the Symmetric Difference of Set A and Set B.
2) Then find the Symmetric Difference of this new set and Set C.

So,
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
would equal
[1,4,5]

Examples:

symmetricDifference([1,2,3,4], [3,4,5,6])   // [1,2,5,6] without common elements

symmetricDifference([1,2,3,4], [3,4,5,6], [2,4,6,7]    // [1,4,5,7] without common 
elements of first two and then without common element between result and the third one.

symmetricDifference([1,2,3,4], [3,4,5,6], [2,4,6,7], [8,9])    // [1,4,5,7,8,9]
 */



// --------------------------------------
// rest parameter
function symmetricDifference(...collection) {
  var symmetricDiff = collection[0];
  for (var i = 1; i < collection.length; i++) {
    symmetricDiff = symmetricDiff.concat(collection[i]).filter(function(el) {
      return !symmetricDiff.includes(el) || !collection[i].includes(el);
    });
  }
  // remove duplicates and sort
  return Array.from(new Set(symmetricDiff)).sort((a, b) => a - b);
}

var arrA = [1,2,3,4];
var arrB = [3,4,5,6];
var arrC = [2,4,6,7];
var arrD = [8,9];

console.log(  JSON.stringify(symmetricDifference(arrA, arrB, arrC, arrD))  );
// [1,4,5,7,8,9]



// --------------------------------------
// as above
function symmetricDifference2(arr) {
  var args = Array.prototype.slice.call(arguments);
  var symmetricDiff = args[0];
  for (var i = 1; i < args.length; i++) {
    symmetricDiff = symmetricDiff.concat(args[i]).filter(function(item) {
      return symmetricDiff.indexOf(item) === -1 || args[i].indexOf(item) === -1;
    });
  }
  return Array.from(new Set(symmetricDiff)).sort((a, b) => a - b);
}
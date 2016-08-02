console.clear();

/*

-----------------------------------------
Basic Algorithms - Seek and Destroy
-----------------------------------------

You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements 
from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // [1]
destroyer([2, 3, 2, 3], 2, 3) // []
destroyer(['tree', 'hamburger', 53], 'tree', 53) // ['hamburger']
*/



// --------------------------------------
function destroyer(arr, ...vals) {
  return arr.filter(el => !(vals.includes(el)));
}

console.log(  destroyer([1, 2, 3, 1, 2, 3], 2, 3)  );

// ... is the rest parameter


// --------------------------------------
function destroyer2(arr) {
  var vals = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(element) {
    return vals.indexOf(element) < 0;
  });
}

// We can converting the array-like object to 
// the desired array in one slice by specifying the starting point.

// You can invoke arguments by using arguments[n] (where n is the index of 
// the argument in the array-like object) but if you want to use it as an array 
// for iteration purposes or applying array methods to it, you need to convert 
// it to an array by declaring a variable and using the Array.prototype.slice.call 
// method (because arguments is not an array).

// Slice takes an Array and returns a new Array containing all or a subset of 
// an existing Array. Its arguments are the beginning and ending indices of 
// the copy. Even though slice is a method that’s only defined on Arrays, 
// call allows us to use slice on Array-like objects.
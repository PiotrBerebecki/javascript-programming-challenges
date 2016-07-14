console.clear();

/*
-----------------------------------------
5 kyu
Flatten arguments into one dimensional array (aka flatten())
-----------------------------------------

Create a global flatten method. The method takes in any number of arguments 
and flattens them into a single array.

If any of the arguments passed in are an array then the individual objects 
within the array will be flattened so that they exist at the same level as 
the other arguments. 

Any nested arrays, no matter how deep, should be flattened into the single 
array result.

Examples

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/



// --------------------------------------
function flatten(...input) {
  return input.reduce(function(prev, curr) {
    if (Array.isArray(curr)) {return prev.concat(flatten(...curr));}
    else {return prev.concat(curr);}
  }, []);
}

console.log(  JSON.stringify(flatten(1, [2, 3], 4, 5, [6, [7]]))  ); // [1, 2, 3, 4, 5, 6, 7]

// The ...input in a function declaration is called rest parameter. It converts input parameters to an array 
// when used as input withing the body of a function.
// It acts the oppostite when used withing the function call - it passes to the function only
// the elements of an array.
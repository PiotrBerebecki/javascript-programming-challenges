console.clear();

/*
-----------------------------------------
7 kyu
Flatten only one level (aka flatten)
-----------------------------------------

Write a function that flattens an Array of Array objects into a flat Array.
Your function must only do one level of flattening.

flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]) //  [[3], [4], [5], 9, 9, 8, [1, 2, 3]]
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],['a','b','c'],[1,2,3]])  // => [1,2,3,'a','b','c',1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/



// --------------------------------------
function flatten(arr) {
  return arr.reduce(function(arr, curr) {
    return arr.concat(curr)
  }, [])
}

console.log(  JSON.stringify(flatten(  [ 1, [2], [[2,3]] ]  ))  ); // [1,2,[2,3]]



// --------------------------------------
// Clever
function flatten2(arr) {
  return [].concat.apply([], arr);  // or Array.prototype instead of the first []
}

// Using apply is common in functional programming, since one often wishes to 
// pass around arguments as Arrays for use with some argument at some point.
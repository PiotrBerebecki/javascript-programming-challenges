console.clear();

/*
-----------------------------------------
6kyu
Flattening list
-----------------------------------------

Create a function that takes a list of lists as an input and 
returns a flat list that removes only first level of nesting.

Example:

flatten([[1,2],[3,4]]) // [1,2,3,4]
flatten([[1],[2],[3],[4]]) // [1,2,3,4]
flatten([[1],[2,[3]],[4]]) // [1,2,3,4]
flatten([3,4,5,[[9,9,9]],"a,b,c"]) // [3,4,5,[9,9,9],"a,b,c"]
*/



// --------------------------------------
// only one level of nesting
function flatten(arr) {
  return arr.reduce(function(prev, curr) {
    return prev.concat(curr);
  }, []);
}

console.log(  JSON.stringify(flatten(  [[1],[2,[3]],[4]]  ))  ); // [1,2,[3],4]



// --------------------------------------
// removes all levels of nesting (working great but not according to the spec here)
function flatten2(arr) {
  return arr.reduce(function(prev, curr) {
    if (Array.isArray(curr)) {return prev.concat(flatten2(curr));}
    else {return prev.concat(curr);}
  }, []);
}

console.log(  JSON.stringify(flatten2(  [[1],[2,[3]],[4]]  ))  ) // [1,2,3,4]
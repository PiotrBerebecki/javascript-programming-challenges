console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Finders keepers
-----------------------------------------

Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test 
(second argument). 

If there are no elements passing the truth test, then return undefined.

Examples:
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

Here are some helpful terms:
Array.filter()
*/



// --------------------------------------
function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {return arr[i];}
  }
  return undefined;
}

console.log(  findElement2([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })  ); // 8



// --------------------------------------
// Potentially unnecessarily traverses the whole array
// as opposed to the above which stops at the first element
// passing the truth test.
function findElement2(arr, func) {
  return arr.filter(func)[0];
}
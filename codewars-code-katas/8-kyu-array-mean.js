console.clear();

/*
-----------------------------------------
8 kyu
Grasshopper - Array Mean
-----------------------------------------

Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together 
and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers
1+3+5+7 = 16

2. Divide by the number of values in the list. In this example there are 4 numbers 
in the list.
16/4 = 4

3. The mean (or average) of this list is 4
*/



// --------------------------------------
var findAverage = function findAverage(nums) {
  var sum = nums.reduce(function (a, b) {
    return a + b;
  });
  return sum / nums.length;
};
// If the array has only one element and no initialValue is provided,
// or if initialValue is provided but the array is empty,
// the solo value will be returned without calling callback.

console.log(findAverage([1]));



// --------------------------------------
// one line arrow function 
var findAverage2 = function findAverage2(nums) {
  return nums.reduce(function (a, b) {
    return a + b;
  }) / nums.length;
};
console.clear();

/*
-----------------------------------------
5 kyu
Find the missing term in an Arithmetic Progression
-----------------------------------------

An Arithmetic Progression is defined as one in which there is a constant difference 
between the consecutive terms of a given series of numbers. You are provided with 
consecutive elements of an Arithmetic Progression. There is however one hitch:
Exactly one term from the original series is missing from the set of numbers 
which have been given to you. The rest of the given series is the same as 
the original AP. Find the missing term.

You have to write the function findMissing (list), 
list will always be atleast 3 numbers.

Example:

findMissing ([2,3,5]) == 4
*/



// --------------------------------------
function findMissing(arr) {
  var step = (arr[arr.length - 1] - arr[0]) / arr.length;
  return arr.filter((el, ind) => el !== arr[0] + step*ind)[0] - step;
}

console.log(  findMissing([2,3,5])  ); // 4

// How to calculate step change in an array?
// Given (10,15,20,25) the step change is 5
// which is calculated by
// (max - min) / (length - 1)
//  (25 - 10)  / (4      - 1)

// If one element is missing, e.g.
// (10,15,25), the step change is
//  (25 - 10) / lenght   (as there is no need to substract 1)



// --------------------------------------
function findMissing2(arr) {
  var expectedSum = (arr[arr.length-1] + arr[0]) * (arr.length + 1) / 2;
  var actualSum = arr.reduce((sum, curr) => sum + curr);
  return expectedSum - actualSum;
}

// How to calculate a sum of numbers in a known range (array)?
// Given (10,15,20,25), the sum of numbers is 70
// which is calculated by
// (max + min) * lenght / 2

// In the solution above we are adding 1 to the lenght as one element
// is missing.
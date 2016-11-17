/*
-----------------------------------------
6 kyu Length of missing array
https://www.codewars.com/kata/length-of-missing-array/
-----------------------------------------

You get an array of arrays.
If you sort the arrays by their length, you will see, that their 
length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always 
between the given arrays. 

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/



// --------------------------------------
function getLengthOfMissingArray1(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) { return 0; }
  
  const lengthArr = arrayOfArrays
    .map(arr => (arr || []).length)
    .sort((a, b) => a - b);
    
  if (lengthArr[0] === 0) { return 0; }
  
  for (let i = 0; i < lengthArr.length - 1; i++) {
    if (lengthArr[i + 1] - lengthArr[i] !== 1) { return lengthArr[i] + 1; }
  }
}
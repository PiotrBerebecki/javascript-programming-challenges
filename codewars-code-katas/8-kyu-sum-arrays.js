// console.clear();

/*
-----------------------------------------
8 kyu
Sum Arrays
-----------------------------------------

Write a method sum (sum_array in python) that takes an array of numbers and
returns the sum of the numbers. These may be integers or decimals for Ruby and
any instance of Num for Haskell. The numbers can also be negative. If the array
does not contain any numbers then you should return 0.

Examples
Assumptions
    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

What We're Testing
We're testing basic loops and math operations. This is for beginners who are 
just learning loops and math operations.
Disclaimer

This is for beginners so we want to test basic loops and math operations.
Advanced  users may find this extremely easy and can easily write this in one
line.
*/



//----------------------------------------
const sum = arr => arr.reduce(  ( (prev, curr) => prev + curr ), 0  );



//----------------------------------------
// as above 
function sum2(arr) {
  return arr.reduce( (prev, curr) => prev + curr, 0 );
}

console.log(sum2([1, 3]));



//----------------------------------------
function sum3(arr) {
  "use strict";
  return arr.reduce(function(t, n){
    return t + n;
  }, 0);
}



//----------------------------------------
function sum4(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

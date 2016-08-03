console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Sum All Numbers in a Range
-----------------------------------------

We'll pass you an array of two numbers.
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Example
sumAll([1,3])   // -> 6
sumAll([3,1])   // -> 6

Potentially helpful methods:
Math.max()
Math.min()
Array.reduce()
*/



// --------------------------------------
function sumAll(arr) {
  var min, max, sum = 0;
  
  if   (arr[0] < arr[1]) {min = arr[0]; max = arr[1];}
  else                   {min = arr[1]; max = arr[0];}
  
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

console.log(  sumAll3([3, 1])  ); // 6



// --------------------------------------
function sumAll2(arr) {
  arr.sort((a, b) => a - b);
  var min = arr[0];
  var max = arr[1];
  return (max + min) * (max - min + 1) / 2;
}
// The sort() method sorts the elements of an array in place.



// --------------------------------------
function sumAll3(arr) {
  var allNum = [];
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    allNum.push(i);
  }
  return allNum.reduce((sum, curr) => sum + curr);
}
// Using a spread operator (...arr) allows passing the actual array to the Math.min 
// function instead of one-by-one elements.



// --------------------------------------
// recursion
function sumAll4(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  if (min + 1 === max) {
    return min + max;
  }
  return min + sumAll4(min+1,max);
}
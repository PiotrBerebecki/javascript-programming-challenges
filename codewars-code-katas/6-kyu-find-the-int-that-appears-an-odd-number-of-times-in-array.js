console.clear();

/*
-----------------------------------------
6 kyu
Find the int that appears  an odd number of times in array
(aka Find the odd int)
-----------------------------------------

Given an array, find the int that appears 
an odd number of times.
There will always be only one integer 
that appears an odd number of times.

Example:
findOdd([3,4,4]) // 3
findOdd([3])     // 3
*/



// --------------------------------------
function findOdd(arr) {
  var digitRegister = {};
  arr.forEach(function(el) {
    digitRegister[el] = (digitRegister[el] || 0) + 1;
  });
  
  for (var digit in digitRegister) {
    if (digitRegister[digit] % 2 !== 0) {
      return Number(digit);
    }
  }
}

console.log(     findOdd([3,4,4])     ); // 3



// --------------------------------------
// for loop
function findOdd2(arr) {
  var digitRegister = {};
  for (var i = 0; i < arr.length; i++) {
    digitRegister[arr[i]] = (digitRegister[arr[i]] || 0) + 1;
  }
  
  for (var digit in digitRegister) {
    if (digitRegister[digit] % 2 !== 0) {
      return Number(digit);
    }
  }
}
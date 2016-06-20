console.clear();

/*
-----------------------------------------
7 kyu
Beginner Series #3 Sum of Numbers
-----------------------------------------

Given two integers, which can be positive and negative, find the sum of all the numbers between 
including them too and return it. If both numbers are equal return a or b.
Note! a and b are not ordered!

Example: 

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2 
*/



// --------------------------------------
// recursion
function GetSum(a, b) {
  if (a == b) {
    return a;
  } else if (a < b) {
    return a + GetSum(a + 1, b);
  } else if (a > b) {
    return a + GetSum(a - 1, b);
  }
}

console.log(    GetSum(0,  8)    );



// --------------------------------------
// mathematical
function GetSum2(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max + min) * (max - min + 1) / 2
}



// --------------------------------------
// for loop and reduce
function GetSum3(a, b) {
  var fullArr = [];
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    fullArr.push(i);
  }
  return fullArr.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}
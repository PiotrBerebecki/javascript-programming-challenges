console.clear();

/*
-----------------------------------------
7 kyu
Sums of consecutive numbers (aka Gauss needs help!)
-----------------------------------------

Find a sum of consecutive numbers from 1 up to the passed number.
Verify that n is a valid positive integer number.
If not, please, return false.
f(3) // returns 6
*/



// --------------------------------------
function f(n) {
  return (n%1 === 0 && n > 0) ? (n+1) * (n)/2 : false;
};
// Find sum of concecutive numbers    (max+min) * (max-min+1)/2   

console.log(     f(3)      ); // 6



// --------------------------------------
function f2(n) {
  return (parseInt(n, 10) === n && n > 0) ? (n+1) * (n)/2 : false;
};
// parseInt() returns integer

console.log(     f2(3.5)      ); // false as parseInt(3, 10) equals 3
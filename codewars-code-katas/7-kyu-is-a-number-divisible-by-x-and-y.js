console.clear();

/*
-----------------------------------------
7 kyu
Is the number divisible by x and y?
-----------------------------------------

Create a function isDivisible(n,x,y) that checks 
if a number n is divisible by two numbers x AND y

Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5
*/



// --------------------------------------
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

console.log(  isDivisible(21,7,8)  );  // false



// --------------------------------------
function isDivisible2(n, x, y) {
  return !(n%x||n%y);
}
// return remainder and
// - if there is any remainder then it will get turned to false by !
// - if the remainder is 0 then it will get turned to true



// --------------------------------------
// one-liner
const isDivisible3 = (n,x,y) => !(n%x||n%y);



// --------------------------------------
// one-liner
const isDivisible4 = (n,x,y) => n%x===0 && n%y===0;
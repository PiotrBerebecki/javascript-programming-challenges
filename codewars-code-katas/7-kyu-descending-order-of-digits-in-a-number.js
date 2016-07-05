console.clear();

/*
-----------------------------------------
7 kyu
Descending order of digits in a number
-----------------------------------------

Your task is to make a function that can take any non-negative integer 
as a argument and return it with it's digits in descending order. 

Descending order means that you take the highest digit and place 
the next highest digit immediately after it.

Examples:

Input: 12239 Output: 93221

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/



// --------------------------------------
function descendingOrder(num) {
  return parseInt(num.toString().split('').sort((a,b) => b-a).join(''), 10);
}

console.log(  descendingOrder(12239)  ); // 93221
console.log(  descendingOrder(124239)  ); // 943221



// --------------------------------------
function descendingOrder2(num) {
  return +(num.toString().split('').sort((a,b) => b-a).join(''));
}



// --------------------------------------
function descendingOrder3(num) {
  return parseInt(String(num).split('').sort().reverse().join(''), 10);
}
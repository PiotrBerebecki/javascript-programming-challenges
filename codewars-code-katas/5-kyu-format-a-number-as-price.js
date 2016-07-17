console.clear();

/*
-----------------------------------------
5 kyu
Format a number as price (aka Formatting a number as price)
-----------------------------------------

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price1 = numberToPrice(1000000);
console.log(price2); // 1,000,000.00

var price2 = numberToPrice(1500.129);
console.log(price2); // 1,500.12

var price3 = numberToPrice(13253.5123);
console.log(price); // 13,253.51

Numbers should use the standard comma for every 3 numbers and dot to 
separate the cents, cents need to be truncated to 2 decimals, in 
the case that the decimal part of the number is 1 character long or 
none you should add 0's so that the result will always have 2 decimal 
characters, the function will also evaluate negative numbers.

Function should return a string 'NaN' if the input is not a valid number.
*/



// --------------------------------------
function numberToPrice(n) {
  return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,');
}

// toFixed(3).replace(/\d$/, '') is added to truncate 1500.129 to 1500.12
// otherwise
// toFixed(2) would round 1500.129 to 1500.13 which is agains the spec of this kata.

var price1 = numberToPrice(1000000);
console.log(  price1  ); // 1,000,000.00

// var price2 = numberToPrice(1500.129);
// console.log(  price2  ); // 1,500.12
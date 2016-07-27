console.clear();

/*
-----------------------------------------
5 kyu
Largest product of five digits in a string
(aka Largest product in a series)
-----------------------------------------

Complete the greatestProduct method so that it'll find the greatest 
product of five consecutive digits in the given string of numbers.

For example:

greatestProduct('1234567') // 2520 which is a product of (3*4*5*6*7)

The input string always has more than five digits.
*/



// --------------------------------------
function greatestProduct(str) {
  var max = 0;  
  for (var i = 4; i < str.length; i++) {
    max = Math.max(max, str[i-4] * str[i-3] * str[i-2] * str[i-1] * str[i]);
  }  
  return max;
}

// console.log(  greatestProduct('1234567')  ); // 2520
console.clear();

/*
----------------------------------------
8 kyu
Formatting to two decimal places #0
----------------------------------------

Each number should be formatted that it is rounded to two decimal places. You
don't need to check whether the input is a valid number because only valid
numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/



//--------------------------------------
function twoDecimalPlaces(number) {
  return Math.round(number * 100) / 100;
}

console.log(twoDecimalPlaces(5.5589));
// num.toFixed(2) converts to string and has rounding problems. Seek alternatives.




//--------------------------------------
var twoDecimalPlaces2 = number => Math.round(number * 100) / 100;
// console.log(twoDecimalPlaces2(5.5589));



//--------------------------------------
function twoDecimalPlaces3(number) {
  return Math.round(number * 100) / 100;
}
console.clear();

/*
-----------------------------------------
8 kyu
Improving Math.round method
-----------------------------------------

Javascript has a handy built-in Math.round(num) method that 
rounds a number to the nearest integer:
Math.round(3.14); // Returns 3

But what if you want to round 3.1415926535 to two decimal places?
 
Create a method, Math.roundTo(number, precision) which 
rounds a given number to precision decimal places.
*/  



// --------------------------------------
Math.roundTo = function(number, precision)  {
  return Number((+(Math.round(+(number + 'e' + precision)) + 'e' + -precision)).toFixed(precision));
}
// only the solution above returns 35.86 when calling Math.roundTo(35.855, 2)
// solutions below return 35.85

// Math isn't a constructor, so it doesn't have prototype property.
// You cannot do Math.prototype.roundTo
// You cannot do new Math()

console.log( Math.roundTo(35.855, 2) ) // 35.86



// --------------------------------------
Math.roundTo2 = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};



// --------------------------------------
// with interim variable 
Math.roundTo3 = function (number, precision) {
  var calculatedPrecision = Math.pow(10, precision)
  return Math.round(number * calculatedPrecision) / calculatedPrecision;
};



// --------------------------------------
// toFixed 
Math.roundTo4 = function (number, precision) {
  return Number(number.toFixed(precision));
};



// --------------------------------------
// one-liner
Math.roundTo5 = (n,p) => Number(n.toFixed(p));



// --------------------------------------
Math.roundTo6 = function(number, precision)  {
  return (+(Math.round(+(number + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

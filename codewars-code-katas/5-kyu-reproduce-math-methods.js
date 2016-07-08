console.clear();

/*
-----------------------------------------
5 kyu
Reproduce Math methods (aka Math Issues)
-----------------------------------------

Oh no, our Math object was "accidently" reset. 
Can you re-implement some of those functions? 

We can assure, that only non-negative numbers 
are passed as arguments. So you don't have to 
consider things like 
undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.floor()
    Math.ceil()

For testing purposes you can use different names for
the created methods, e.g. roundd, floorr, ceill
*/



// --------------------------------------
Math.roundd = function(num) {
  return num - parseInt(num, 10) < 0.5 ? parseInt(num, 10) : parseInt(num, 10) + 1;
}

Math.floorr = function(num) {
  return parseInt(num, 10)
}

Math.ceill = function(num) {
  return num === parseInt(num, 10) ? num : parseInt(num, 10) + 1;
}

console.log(  Math.roundd(2.4)  ); // 2
// console.log(  Math.roundd(2.5)  ); // 3
// console.log(  Math.floorr(3.4)  ); // 3
// console.log(  Math.ceill(3.4)  ); // 4
// console.log(  Math.ceill(3)  ); // 3
console.clear();

/*
-----------------------------------------
8 kyu
Convert a String to a Number!
-----------------------------------------

Convert str to a number. E.g.

stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7"  ) == -7
*/



// --------------------------------------
var stringToNumber = function(str) {
  return parseInt(str, 10)
}

console.log(  stringToNumber("1234")  ); // 1234



// --------------------------------------
var stringToNumber2 = function(str) {
  return Number(str);
}
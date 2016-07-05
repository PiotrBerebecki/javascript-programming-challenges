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
function stringToNumber(str) {
  return parseInt(str, 10)
}

console.log(  stringToNumber("1234")  ); // 1234



// --------------------------------------
function stringToNumber2(str) {
  return Number(str);
}



// --------------------------------------
function stringToNumber3(str) {
  return +str;
}
// + unary operator can be used alone before a single element. This indicates 
// a math operation and tries to convert the element to a number.

// It can also be used on types other than string. It will internally attempt 
// to call valueOf() or toString() (in that order) and then attempt to convert 
// the result to a number. Thusly, the unary + operator can successfully 
// convert many of the native JS types with certain restrictions:
// undefined / null
// Array
// Boolean
// Date
// Object
// String
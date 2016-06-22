console.clear();

/*
-----------------------------------------
8 kyu
How to convert number to string
-----------------------------------------

Correct the below as it gives error:
var a = 123.toString();
*/



// --------------------------------------
var a = 123..toString();
var b = 123 .toString();
var c = (123).toString();
var d = 123 + '';

console.log(  typeof a  ); // string
console.log(  typeof b  ); // string
console.log(  typeof c  ); // string
console.log(  typeof d  ); // string

/*
The . has two meanings in JS, which are competing here.
First, it can be a decimal point: 123.45
Second, it can be a property accessor: object.property
If the . is right next to a number (on either side),
it's parsed as a decimal point (123. and .45 are both valid Javascript numbers).
Otherwise, it's the property accessor.

The first three below are different ways to force the property accessor . 
to be interpreted as a property accessor instead of as a decimal point.

  123..toString(): Numeric literal 123. followed by .toString()
  123 .toString(): Numeric literal 123 followed by .toString()
  (123).toString(): Numeric expression (123) followed by .toString()
  123 + '': Numeric literal 123, implicitly typecast to string and added to ''
    
123.toString() doesn't work because the . is parsed as part of the number,
like this:

  Numeric literal 123. followed by toString()
  SyntaxError: identifier starts immediately after numeric literal

Since the . gets grabbed as part of number instead of the property accessor,
you end up with the error. It needs to parse .toString() together 
in order to access the toString property of the number.
*/
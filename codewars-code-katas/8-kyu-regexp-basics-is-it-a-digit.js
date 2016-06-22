console.clear();

/*
-----------------------------------------
8 kyu
Regexp Basics - is it a digit?
-----------------------------------------

Create a string constructor method called digit that 
should return true if given object is a digit (0-9), false otherwise.
*/



// --------------------------------------
String.prototype.digit = function() {
  return /^\d$/.test(this);
};

var size = '9'
console.log(  size.digit()  );



// --------------------------------------
String.prototype.digit2 = function() {
  return /^[0-9]$/.test(this);
};
// you can add global flag like this return /^\d$/g.test(this);
console.clear();

/*
-----------------------------------------
7 kyu
Regex validate PIN code
-----------------------------------------

ATM machines allow 4 or 6 digit PIN codes.

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/



// --------------------------------------
function validatePIN(pin) {
  return (/^(\d{4}|\d{6})$/).test(pin);
}

console.log(  validatePIN("1234")  ); // true
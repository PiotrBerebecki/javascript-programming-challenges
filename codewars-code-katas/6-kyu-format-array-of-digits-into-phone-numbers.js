console.clear();

/*
-----------------------------------------
6 kyu
Format array of digits into phone numbers
(aka Create Phone Number)
-----------------------------------------

Given an array of digits format it into a string in the form
of a phone number.

Example:

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
// returns "(123) 456-7890"
*/



// --------------------------------------
function createPhoneNumber(numbers) {
  return numbers
    .join('')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

console.log(  createPhoneNumber([1,2,3,4,5,6,7,8,9,0])  ); // '(123) 456-7890'



// --------------------------------------
// clever
function createPhoneNumber2(numbers) {
  var format = '(xxx) xxx-xxxx';
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}



// --------------------------------------
function createPhoneNumber3(numbers) {
  numbers = numbers.join('')
  return '(' + numbers.substring(0,3) + ') '
    + numbers.substring(3,6)
    + '-'
    + numbers.substring(6);   
}
// The difference between substring and substr is in the second argument.
// The second argument to substring is the index to stop at (but not include),
// but the second argument to substr is the maximum length to return.



// --------------------------------------
function createPhoneNumber4(numbers) {
  numbers = numbers.join('')
  return '(' + numbers.substr(0,3) + ') '
    + numbers.substr(3,3)
    + '-'
    + numbers.substr(6);   
}
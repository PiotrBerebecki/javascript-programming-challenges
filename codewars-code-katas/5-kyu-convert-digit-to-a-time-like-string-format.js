console.clear();

/*
-----------------------------------------
5 kyu
Convert digit to a time-like string format
(aka Time-like string format)
-----------------------------------------

Build up a method that takes an integer and formats it to a 'time - like' format. 
The method must raise an exception if its hour length is less than 3 digits 
and greater than 4.

Example:

solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
*/



// --------------------------------------
function solution(num) {
  if (num < 100 || num > 9999) {throw new Error('3- or 4-digit numbers only');}
  return ('' + num).replace(/^(\d{1,2})(\d{2})$/, '$1:$2');
}

// console.log(  solution(8021)  ); // '8:00'



// --------------------------------------
function solution2(num) {
  if (num < 100 || num > 9999) {throw new Error('3- or 4-digit numbers only');}
  var numStr = num.toString();
  return numStr.slice(0,-2) + ':' + numStr.slice(-2);
}
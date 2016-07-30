console.clear();

/*
-----------------------------------------
5 kyu
Get the Excel column heading (aka Get the Excel column title!)
-----------------------------------------

Given a number indicating the colun order, return the the relevant Excel
column heading.

Examples:

getColumnTitle(1) // 'A'
getColumnTitle(26) // 'Z'
getColumnTitle(27) // 'AA'
getColumnTitle(52) // 'AZ'
getColumnTitle(53) // 'BA'
getColumnTitle(702) // 'ZZ'

Note:

For cases num < 1 your function should throw/raise IndexError.
In case of non-integer argument you should throw/raise TypeError.
*/



// --------------------------------------
function getColumnTitle(num) {
  if (typeof num != 'number') {throw new Error('Incorrect argument type: ' + typeof num);}
  if (num < 1)                {throw new Error('Argument value is less than 1');}
    
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let column = '';
  while (num > 0) {
    let rem = (num - 1) % 26;
    column = letters[rem] + column;
    num = (num - 1 - rem) / 26;
  }
  return column;
}

console.log(  getColumnTitle(27)  ); // 'AA'



// --------------------------------------
// Ascii codes instead of alphabet
function getColumnTitle2(num) {
  if (typeof num != 'number') {throw new Error('Incorrect argument type: ' + typeof num);}
  if (num < 1)                {throw new Error('Argument value is less than 1');}
    
  let column = '';
  while (num > 0) {
    let rem = (num - 1) % 26;
    column = getLetters2(rem) + column;
    num = (num - 1 - rem) / 26;
  }
  return column;
}

function getLetters2(n) {
  return String.fromCharCode(65 + n);
}
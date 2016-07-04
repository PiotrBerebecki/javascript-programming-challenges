console.clear();

/*
-----------------------------------------
5 kyu
String incrementor
-----------------------------------------

Write a function which increments a string, to create a new string. 
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number the number 1 should be appended to 
the new string.

Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
foo0 -> foo1

Attention: If the number has leading zeros the amount of digits should be considered.
*/



// --------------------------------------
function incrementString(str) {
  var m = str.match(/^(\w*?)(\d*)$/);
  var next = (parseInt('0' + m[2],10) + 1) + '';
  return m[1] + m[2].slice(0, -next.length) + next;
}

console.log(  incrementString('foo0042')  ); // foo0043



// --------------------------------------
// cumbersome and not working for foo0
function incrementString2(str) {
  var numStr = str.match(/0?[1-9]\d*$/);
  console.log(numStr)
  if (!numStr) {return str + '1'}
  var prefix = str.split(numStr)[0];
  var numOrg = Number(numStr[0]);
  var numInc = numOrg + 1;
  
  console.log('prefix ' + prefix)
  console.log('numStr[0] ' + numStr)
  console.log('numOrg  ' + numOrg)
  console.log('numInc  ' + numInc)
  
  if (numInc.toString().length > numOrg.toString().length && numStr[0].indexOf('0') === 0) {
    return prefix + numInc;
  }
  if (numStr[0].indexOf('0') === 0) {return prefix + '0' + numInc;}
  else {return prefix + numInc;}
}
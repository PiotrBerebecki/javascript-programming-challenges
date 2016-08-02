console.clear();

/*
-----------------------------------------
Basic Algorithms - Repeat a string repeat a string
-----------------------------------------

Repeat a given string (first argument) num times (second argument).
Return an empty string if num is a negative number.

repeatStringNumTimes('*', 3) should return '***'.
repeatStringNumTimes('abc', 3) should return 'abcabcabc'.
repeatStringNumTimes('abc', 4) should return 'abcabcabcabc'.
repeatStringNumTimes('abc', 1) should return 'abc'.
repeatStringNumTimes('*', 8) should return '********'.
repeatStringNumTimes('abc', -2) should return ''.
*/



// --------------------------------------
// repeat() method
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

console.log(  repeatStringNumTimes2('abc', 3)  ); // 'abcabcabc'



// --------------------------------------
// recursion
function repeatStringNumTimes2(str, num) {
  if (num <= 0)  {return '';}
  if (num === 1) {return str;}
  else           {return str + repeatStringNumTimes2(str, num - 1);}
}



// --------------------------------------
// for loop
function repeatStringNumTimes3(str, num) {
 if (num <= 0) {return '';}
 var newStr = str;
 for (var i = 1; i < num; i++) {
   newStr += str;
 }
 return newStr;
}
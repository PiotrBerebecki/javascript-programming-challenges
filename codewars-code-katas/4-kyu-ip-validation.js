// console.clear();

/*
-----------------------------------------
4 kyu
IP Validation
-----------------------------------------

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
Input to the function is guaranteed to be a single string.

IPv4 addresses accepted in this kata are 4 groups of digist separated by dots.
Groups can be:
* single digit numbers from 0 to 9
* double digit numbers from 00 to 99
* triple digit numbers from 000 to 099
* triple digit numbers from 100 to 199
* triple digit numbers from 200 to 255

Examples of inputs to the function:

'192.1.80.255' // true
'192.00.80.255' // true
'192.000.80.256' // true
'1.099.80.256' // true

'192.0101.80.256' // false

'1.2.3.4 123.45.67.89'  // true
'1.2.3.4 123.45.67.89'  // false

Examples of invalid inputs to the function:
1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089
*/



// --------------------------------------
// regex
function isValidIP(str) {
  return /^(?:(?:0?\d\d?|1\d\d|2[0-4]\d|25[0-5])(?:\.(?!$)|$)){4}$/.test(str);
}

console.log(  isValidIP('010.199.249.255')  ); // true



// --------------------------------------
// similar regex, but with curly braces to specify repetition 
function isValidIP2(str) {
  return /^(?:(?:0?\d{1,2}|1\d{1,2}|2(?:[0-4]\d|5[0-5]))(?:\.(?!$)|$)){4}$/.test(str);
}

// ?: non capturing group is used to save resources as we don't need to 'remember' matches.
// Negative lookahead used here (\.(?!$)|$) matches dot not at the end   or   end
// Positive lookahead not used here (\.(?=$)|$) would match dot at the end   or   end

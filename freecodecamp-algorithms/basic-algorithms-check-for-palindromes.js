console.clear();

/*
-----------------------------------------
Basic Algorithms - Check for palindromes
-----------------------------------------

Non-alphanumeric characters (punctuation, spaces and symbols) 
and capitalisation is to be excluded.

palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
*/



// --------------------------------------
// recursion
function palindrome(str) {
  if (str.length <= 1) {return true;}
  var strCleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (strCleaned[0] != strCleaned.slice(-1)) {return false;}
  return palindrome(strCleaned.slice(1,-1)); 
}

console.log(  palindrome("9Eye-9")  ); // true



// --------------------------------------
// Compare the string with the reversed string
function palindrome2(str) {
  var strCleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();  // or [\W_]
  var strCleanedReversed = strCleaned.split('').reverse().join(''); 
  return strCleaned === strCleanedReversed;
}



// --------------------------------------
// for loop
function palindrome3(str) {
  strCleaned = str.replace(/[\W_]/g, '').toLowerCase();
  for (var i = 0, len = strCleaned.length - 1; i < len/2; i++) {
    if (strCleaned[i] !== strCleaned[len-i]) {
      return false;
    }
  }
  return true;
}



// --------------------------------------
// Similar to above
function palindrome4(str) {
  strCleaned = str.replace(/[\W_]/g, '').toLowerCase();
  var stringLength = strCleaned.length;
  for (var i = 0; i < Math.ceil(stringLength/2 - 0.5); i++) {
    if (strCleaned[i] !== strCleaned[stringLength-1-i]) {
      return false;
    }
  }
  return true;    
}
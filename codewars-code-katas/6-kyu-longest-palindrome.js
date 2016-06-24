
console.clear();

/*
-----------------------------------------
6 kyu
Longest palindrome
-----------------------------------------

Find length of the longest substring in the given string 
that is the same in reverse.

As an example, if the input was “I like racecars that go fast”,
the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/



// --------------------------------------
function longestPalindrome(s) {
  var longest = 0;
  var stringLength = s.length;
  
  for (var i = 0; i < stringLength; i++){
    for (var j = i + 1; j <= stringLength; j++) {
      var testedString = s.slice(i, j);
      var testedStringLength = testedString.length
      if (isPalindrome(testedString) && testedStringLength > longest) {
        longest = testedStringLength;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var sReversed = s.split('').reverse().join('');
  return s == sReversed;
}

console.log(  longestPalindrome('abba-kajak')  ); // 5



// --------------------------------------
function isPalindrome2(s) {
  var stringLength = s.length;
  for (var j = 0; j < Math.ceil(stringLength/2 - 0.5); j++) {
    if (s[j] !== s[stringLength-1-j]) {
      return false;
    }
  }
  return true;    
}



// --------------------------------------
// Cumbersome
function longestPalindrome2(s) {
  var stringLength = s.length;
  var palindromeLengthArray = [];

  for (var i = 0; i < stringLength; i++) {
    for (var j = 0; j < stringLength; j++) {
      var testedString = s.slice(i, stringLength-j);
      var testedStringLength = testedString.length;
      if (testedStringLength === 0) {
        break;
      }
      if (isPalindrome(testedString)) {
        palindromeLengthArray.push(testedStringLength);
      }
    }
  }
  return palindromeLengthArray.reduce((a,b) => Math.max(a, b), 0)
}
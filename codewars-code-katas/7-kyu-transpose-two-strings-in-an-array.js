// console.clear();

/*
-----------------------------------------
7 kyu Transpose two strings in an array
-----------------------------------------

You will be given an array that contains two strings. 
Your job is to create a function that will take those 
two strings and transpose them, so that the strings go 
from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d


A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the 
character would be

Examples:
transposeTwoStrings(['cat',''])  //  "c  \na  \nt  "
transposeTwoStrings(['a','cat']) //  "a c\n  a\n  t"
*/



// ==========================================
function transposeTwoStrings(arr) {  
  const [str1, str2] = arr;
  const maxLength = Math.max(str1.length, str2.length);
  let result = '';
  
  for (let i = 0; i < maxLength; i++) {
    result += `${(str1[i] || ' ')} ${(str2[i] || ' ')}\n`;
  }
  return result.slice(0,-1);
}

console.log(  transposeTwoStrings(['Hello','World'])  );
// should return

// H W  
// e o  
// l r  
// l l  
// o d
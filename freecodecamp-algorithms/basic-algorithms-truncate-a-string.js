console.clear();

/*
-----------------------------------------
Basic Algorithms - Truncate a string
-----------------------------------------

If the num is greater or equal to length of the string, then just return the string.
IF the num is less than or equal to 3, then the addition of the three dots does not 
add to the string length in determining the truncated string.

truncateString('A-tisket a-tasket A green and yellow basket', 11) // 'A-tisket...'.

truncateString('Peter Piper picked a peck of pickled peppers', 14) // 'Peter Piper...'.

truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green 
and yellow basket'.length) // 'A-tisket a-tasket A green and yellow basket'.

truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green 
and yellow basket'.length + 2) // 'A-tisket a-tasket A green and yellow basket'.

truncateString('A-', 1) // 'A...'.

truncateString('Absolutely Longer', 2) // 'Ab...'
*/



// --------------------------------------
function truncateString(str, num) {
  if      (num >= str.length) {return str;}
  else if (num <= 3)          {return str.slice(0, num) + '...';}
  else                        {return str.slice(0, num-3) + '...';}
}

console.log(  truncateString('A-tisket a-tasket and a green and', 11)  ) // A-tisket...
// console.log(  truncateString('abcdefghi', 9)  ) // 'abcdefghi'
// console.log(  truncateString('abcefg', 3)  ) // 'abc...'



// --------------------------------------
// As above but substr instead of slice
function truncateString2(str, num) {
  if      (num >= str.length) {return str;}
  else if (num <= 3)          {return str.substr(0, num) + '...';}
  else                        {return str.substr(0, num-3) + '...';}
}
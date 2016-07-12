console.clear();

/*
-----------------------------------------
5 kyu
Count the number of occurrences in a string
(aka Return substring instance count - 2)
-----------------------------------------

Description:

Complete the solution so that it returns the number of times 
the searchText is found within the fulltext.

searchSubstr( fullText, searchText, true )  // true or false 
so that overlapping solutions are / are not counted.

If the searchText is empty, it should return "0". Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') # should return 1
searchSubstr( 'aaa', 'aa' ) # should return 2
searchSubstr( 'aaa', '' ) # should return 0
searchSubstr( 'aaa', 'aa', false ) # should return 1
*/



// --------------------------------------
function searchSubstr(fullText, searchText, allowOverlap) {
  if (!searchText) {return 0};
  
  var lookahead = '?=';
  if (allowOverlap === false) {lookahead = '';}
  
  var patt = new RegExp(`(${lookahead}${searchText})`, 'g');
  var matches = fullText.match(patt) || [];
  return matches.length;
}

// console.log(  searchSubstr('aa_bb_cc_dd_bb_e', 'bb')  ) // 2
// console.log(  searchSubstr('aaabbbcccc', 'bbb')  ) // 1
// console.log(  searchSubstr('aaa', 'aa')  ) // 2
// console.log(  searchSubstr('aaa', '')  ) // 0
// console.log(  searchSubstr('aaa', 'aa', false)  ) // 1
console.clear();

/*
-----------------------------------------
7 kyu
Building a mini search engine
-----------------------------------------

Input:
1) string
2) word - a word that we are to search for in 1) string as a standalone word.
3) method - can only be 1 or 2. 1 means to find word. 2 means to replace it.
4) newWord - optionam parameter which is to be used to replace the searchWord

Output:
{matches: 0, newString: ''}
If the search method is set to 1, the matches property should be equal to the number of matches
and the newString property should be equal to the empty string.

If the search method is 2, the matches property should be the number of replacements 
and the newString should be the new string where all the matches are replaced with the new word. 
 
The function should be case sensitive. 
The string can contain any characters (alphanumeric and/or symbols).
The words (both word and newWord) can contain only letters and/or numbers.
If invalid input is entered, return 'No valid input'.

Examples:

searchEng('Wow, today is Friday!', 'Friday', 1)             // {matches: 1, newString: ''}
searchEng('Wow, today is Friday!', 'Saturday', 1)           // {matches: 0, newString: ''}

searchEng('Wow, today is Friday!', 'Friday', 2, 'Saturday') // {matches: 1, newString: 'OMG, today is Saturday!'} 

searchEng('Wow, today is Friday!', 'Friday!', 2, 'Saturday') // 'No valid input' 
searchEng('Wow, today is Friday!', 'Friday', 2, 'Saturday!') // 'No valid input' 

searchEng('Wow, today is Friday!', 'Friday', 3, 'Saturday') // 'No valid input' 

*/



// --------------------------------------
function searchEng(string, word, method, newWord) {
  
  if ( /[^a-z0-9]/i.test(word) || /[^a-z0-9]/i.test(newWord) || (method != 1 && method != 2) ) {return 'No valid input';}
  
  var res = {}; 
  var pattern = new RegExp('\\b' + word + '\\b' ,'g'); // or new RegExp(`\\b${word}\\b` ,'g');
  
  if (method === 1) {
    res.matches = (string.match(pattern) || []).length;
    res.newString = '';
  }
  
  if (method === 2) {
    res.matches = (string.match(pattern) || []).length;
    res.newString = string.replace(pattern, newWord);
  }
  
  return res;
}

console.log(  searchEng('Wow, today is Friday', 'Friday', 1)  ); // should return {matches: 1, newString: ''}
// console.log(  searchEng('Wow, today is Friday!', 'Saturday', 1)  ); // should return {matches: 0, newString: ''} 

// console.log(  searchEng('Wow, today is Friday!', 'Friday', 2, 'Saturday')  ); // should return
// {matches: 1, newString: 'OMG, today is Saturday!'}

// console.log(  searchEng('Wow, today is Friday!', 'Friday!', 2, 'Saturday')  ); // 'No valid input' 

// Backslash \ is used in Strings to escape special characters. If you want a backslash in your string
// (e.g. for the \ in \b) you have to escape it via a backslash.



// --------------------------------------
function searchEng2(string, word, method=1, newWord) {
  if ( /[^a-z0-9]/i.test(word) || /[^a-z0-9]/i.test(newWord) || (method != 1 && method != 2) ) {return 'No valid input';}
  let parts = string.split( RegExp('\\b' + word + '\\b') );
  return { matches: parts.length - 1, newString: method === 2 ? parts.join(newWord) : '' }
}



// --------------------------------------
function searchEng3(string, word, method, newWord) {
  if ( /[^a-z0-9]/i.test(word) || /[^a-z0-9]/i.test(newWord) || (method != 1 && method != 2) ) {return 'No valid input';}
  var pattern = new RegExp('\\b' + word + '\\b' ,'g');
  return {
    matches: (string.match(pattern) || []).length,
    newString: method === 1 ? '' : string.replace(pattern, newWord)
  }
}
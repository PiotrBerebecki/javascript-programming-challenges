console.clear();

/*
-----------------------------------------
6 kyu
Remove anchor from URL
-----------------------------------------

Rturns the url with anything after the anchor (#) removed.

Examples:

removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com'

removeUrlAnchor('www.codewars.com?page=1')
// returns 'www.codewars.com?page=1' 
*/



// --------------------------------------
function removeUrlAnchor(url) {
  return url.replace(/#.*/, '');
}

// no need for g (global) flag as we are replacing
// everything after first #
// We need g flag if we are replacing for example
// every occurrance of a given character

console.log(  removeUrlAnchor('www.codewars.com#about')  );
// 'www.codewars.com'



// --------------------------------------
function removeUrlAnchor2(url) {
  return url.split(/#/)[0];
}

// The split method also works if no match of # is found
// in the url. In such a case an array with just one
// element will be returned so we can safely use [0]
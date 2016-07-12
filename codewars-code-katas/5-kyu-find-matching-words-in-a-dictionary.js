console.clear();

/*
-----------------------------------------
5 kyu
Find matching words in a dictionary (aka Word Finder)
-----------------------------------------

In this kata you have to extend the dictionary with a method, 
that returns a list of words matching a pattern. This pattern may 
contain letters (lowercase) and placeholders ("?"). A placeholder 
stands for exactly one arbitrary letter.

Example:

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry', 'blackberry']);

fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
*/



// --------------------------------------
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  var patternDots = pattern.replace(/\?/g, '.');
  var patternRegex = new RegExp(`^${patternDots}$`);
  return this.words.filter(el => patternRegex.test(el));
}

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry', 'blackberry']);
console.log(  fruits.getMatchingWords('?a?a?a')  ); // ['banana', 'papaya']
// console.log(  fruits.getMatchingWords('??????')  ); // ['banana', 'papaya', 'cherry']
// console.log(  fruits.getMatchingWords('lemon')  ); // []
// console.log(  fruits.getMatchingWords('cherr??')  ); // []
// console.log(  fruits.getMatchingWords('cherr??')  ); // []



// --------------------------------------
Dictionary.prototype.getMatchingWords2 = function(pattern) {
  patternDots = new RegExp('^'+pattern.replace(/\?/g, '.')+'$');
  return this.words.filter(patternDots.test.bind(patternDots));
}

// bind() allows us to set the 'this' value on methods.
// bind() creates a new function that will have 'this' set to the first 
// parameter passed to bind().
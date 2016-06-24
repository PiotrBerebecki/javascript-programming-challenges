console.clear();

/*
-----------------------------------------
6 kyu
WeIrD StRiNg CaSe
-----------------------------------------

Write a function that accepts a string, and returns the same string
with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased.

The indexing is zero based, so the zero-ith index is even,
therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words.
Words will be separated by a single space

e.g.
toWeirdCase( "String" );   //=> returns "StRiNg"
toWeirdCase( "Weird string case" );   //=> returns "WeIrD StRiNg CaSe"
*/



// --------------------------------------
function toWeirdCase(string) {
  return string.split(' ').map(function(word) {
    return word.split('').map(function(letter, index) {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(' ');
}

// Using the indexOf instead of the index parameter
// function toWeirdCase(string) {
//   return string.split(' ').map(function(word) {
//     return word.split('').map(function(letter) {
//       return word.indexOf(letter) % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
//     }).join('');
//   }).join(' ');
// }

console.log(  toWeirdCase( "Weird string case" )  ); // "WeIrD StRiNg CaSe"



// --------------------------------------
// functional programming
function toWeirdCaseLetter2(letter, index) {
  return index % 2 ? letter.toLowerCase() : letter.toUpperCase();
}
function toWeirdCaseWord2(word) {
  return word.split('').map(toWeirdCaseLetter2).join('');
}
function toWeirdCase2(string) {
  return string.split(' ').map(toWeirdCaseWord2).join(' ');
}



// --------------------------------------
// regex
function toWeirdCase3(string){
  return string.replace(/\w{1,2}/g, (match) => match[0].toUpperCase() + match.slice(1).toLowerCase())
}
// we cannot do: (match) => match[0].toUpperCase() + match[1].toLowerCase()
// as we Cannot read property 'toLowerCase' of undefined in case of one letter words
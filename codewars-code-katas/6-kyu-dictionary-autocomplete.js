console.clear();

/*
-----------------------------------------
6 kyu
Dictionary autocomplete (aka Autocomplete! Yay!)
-----------------------------------------

The autocomplete function will take in an input string and a dictionary array 
and return the values from the dictionary that start with the input string.

If there are more than 5 matches, restrict your output to the first 5 results.
If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','Airport','apple','ball']) = ['airplane','Airport']

Return all results in the order given in the dictionary.

The search should NOT be case sensitive,
but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'.

However, they should return as "Apple" and "airport" in their original cases.

Important note:
Any input that is NOT a letter should be treated as if it is not there.
For example, an input of "$%^" should be treated as "" and an input of "a*&1i" 
should be treated as "ai".
*/



// --------------------------------------
function autocomplete(input, dictionary){
  var inputClean = input.replace(/[^a-z]/gi, '').toLowerCase();
  var inputCleanLength = inputClean.length;
  return dictionary.filter(function(elem) {
    return elem.slice(0,inputCleanLength).toLowerCase() === inputClean;
  }).slice(0,5);
}

console.log(   autocomplete('ai', ['airplane','Airport','apple','ball'])   );
// ["airplane", "Airport"]



// --------------------------------------
// new RegExp
function autocomplete2(input, dictionary) {
  var pattern = new RegExp('^' + input.replace(/[^a-z]/gi, ''), 'i');
  return dictionary.filter(function(elem) {
    return pattern.test(elem);
  }).slice(0,5);
}
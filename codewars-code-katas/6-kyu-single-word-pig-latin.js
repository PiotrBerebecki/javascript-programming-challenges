console.clear();

/*
-----------------------------------------
6 kyu
Single Word Pig Latin
-----------------------------------------

If:
1) the word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

2) the word starts with a consonant -> move consonants from the beginning of the word
to the end of the word until the first vowel, then return it plus "ay"

3) the input string has no vowels -> return the original string plus "ay".

4) The result must be lowercase, regardless of the case of the input. If the input 
string has any non-alpha characters, the function must return None, null, Nothing
(depending on the language).

5) The function must also handle simple random strings and not just English words.

Example

pigLatin("tes3t5"), // -> null
pigLatin("eye") // -> "eyeway"
pigLatin("hmm"), // -> "hmmay"
pigLatin("map") // -> "apmay"
pigLatin("glove"), // -> "oveglay"
pigLatin("MmmBob"), // -> "obmmmbay"
*/



// --------------------------------------
// Using slice()
function pigLatin(str) {
  if (str.match(/[^a-zA-Z]/)) {
    return null;
  }
  str = str.toLowerCase();
  var vowels = new RegExp ('[aeiou]', 'gi'); // or var vowels = /[aeiou]/gi
  
  var firstVowelIndex = str.search(vowels);
  
  switch (firstVowelIndex) {
    case -1: return str + 'ay';
    case  0: return str + 'way';
    default: return str.slice(firstVowelIndex) + str.slice(0,firstVowelIndex) + 'ay';
  }
}

console.log(     pigLatin3("eye")      ); // eyeway



// --------------------------------------
// Using replace()
function pigLatin2(str) {
  if ( (/[^a-zA-Z]/).test(str) ) {
    return null;
  }
  str = str.toLowerCase();
  if ( (/^[aeiou]/g).test(str) ) {
    return str + 'way';
  } else {
    return str.replace(/([^aeiou]+)(.*)/, '$2$1ay');
  }
}



// --------------------------------------
// As above but using ternary operator
function pigLatin3(str) {
  if ( (/[^a-zA-Z]/).test(str) ) return null;
  str = str.toLowerCase();
  return (/^[aeiou]/g).test(str) ?
      str + 'way' :
      str.replace(/([^aeiou]+)(.*)/, '$2$1ay');
}
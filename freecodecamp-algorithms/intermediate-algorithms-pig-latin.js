console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Pig Latin
-----------------------------------------

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Example
translatePigLatin("cali") should return "alicay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("eye") should return "eyeway".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".

Here are some helpful terms:
Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/



// --------------------------------------
function translatePigLatin(str) {
  if ( (/^[aeiou]/g).test(str) ) {return str + 'way';} 
  else                           {return str.replace(/([^aeiou]+)(.*)/, '$2$1ay');}
}

console.log(  translatePigLatin("glove")  ); // ovegray



// --------------------------------------
function translatePigLatin2(str) {
  var vowels = new RegExp('[aeiou]', 'g'); // or var vowels = /[aeiou]/g
  var firstVowelIndex = str.search(vowels);
  
  switch (firstVowelIndex) {
    case -1: return str + 'ay';
    case  0: return str + 'way';
    default: return str.slice(firstVowelIndex) + str.slice(0,firstVowelIndex) + 'ay';
  }
}
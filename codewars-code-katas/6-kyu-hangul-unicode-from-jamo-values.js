/*
-----------------------------------------
6 kyu Hangŭl Unicode From Jamo Values
https://www.codewars.com/kata/hangul-unicode-from-jamo-values/
-----------------------------------------

Hangŭl (한글) is the name of the Korean alphabet, a phonetic alphabet and the primary
script used in both South and North Korea.

Hangŭl characters represent syllables; and each ‘character’ is made up of at least one
(initial) consonant letter and one (medial) vowel letter. There can be up to two more 
consonants represented in a final letter - the ‘badch’im’.

Each unicode Hangŭl character can be calculated using a formula and the “jamo” numbers 
that represent the individual letters: consonants (either single or double clusters) or vowels.

The decimal unicode character value is calculated by:

multiplying the value of the ‘initial’ letter's jamo by 588
multiplying the value of the ‘medial’ letter's jamo by 28
adding the two values together (along with the value of a ‘final’ letter's jamo, if 
there is one)
and finally, adding 44032 to this.
as an equation:

[ { ( initial ) × 588 } + { ( medial ) × 28 } + ( final ) ] + 44032

For example, the korean word “price” is 값 - this word has an initial ㄱ letter (0 jamo),
a medial letter ㅏ (0 jamo) and a final (ㅂ + ㅅ = ㅄ) consonant cluster letter ( 18 jamo ).
We can then calculate that the unicode for the character 값 would be: 
[ { ( 0 ) × 588 } + { ( 0 ) × 28 } + ( 18 ) ] + 44032 = 44050

Your task is to return a 3 syllable character string from an array of Hangŭl letters. 
Empty final letters will be represented in the array as an empty string “”. For example;

unicodeFromJamo( [ “ㅎ”,”ㅏ”,”ㄴ”,”ㄱ”,”ㅜ”,”ㄱ”,”ㅇ”,”ㅓ”,”” ] ); will return “한국어”

For your information the test cases will be in &#decimal; format as this displays the 
letters / characters in the codewars console. A preloaded library object of jamo values
is provided. The object is named jamoLookUp and contains “initial jamo”, “medial jamo” 
and “final jamo” objects. The keys for the jamo values are the decimal unicode values. 
Final strings are expected to be in the same format as the test case arrays passed 
to the function.

Examples: 
unicodeFromJamo(["&#12610;","&#12623;","","&#12596;","&#12623;","","&#12596;","&#12623;",""])
// "&#48148;&#45208;&#45208;"
*/



// --------------------------------------
function unicodeFromJamo(arr) {

  // Helper function calculating a full JAMO decimal
  function getJamoFull(initial, medial, final) {
    return ( ( ( initial ) * 588 ) + ( ( medial ) * 28 ) + ( (final || 0) ) ) + 44032;
  }

  // Helper function splitting array into chunks
  function splitArray(array, size) {
    if (array.length <= size) {return [array];}
    return [array.splice(0, size)].concat(splitArray(array, size));
  }

  // Helper function cleaning the unicode string
  function cleanUnicode(str) {
    return str.slice(2, -1);
  }

  // Helper function getting Hangul character from a three-element array
  function getHangulCharacter(arrChunk) {
    const ini = jamoLookUp['initial jamo'][cleanUnicode(arrChunk[0] || '')];
    const med = jamoLookUp['medial jamo'][cleanUnicode(arrChunk[1] || '')];
    const fin = jamoLookUp['final jamo'][cleanUnicode(arrChunk[2] || '')];  

    return `&#${getJamoFull(ini, med, fin)};`;
  }

  // Split the input array into arrays with 3 elements
  const newArr = splitArray(arr, 3);

  let res = '';
  // Compose the final string
  newArr.forEach(arrChunk => {
    res += getHangulCharacter(arrChunk);
  });

  return res;   
}
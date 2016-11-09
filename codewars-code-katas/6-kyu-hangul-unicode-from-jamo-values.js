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


 const jamoLookUp = {

  "initial jamo": {12622: 18,  12621: 17,  12620: 16,
                   12619: 15,  12618: 14,  12617: 13,  12616: 12,  12615: 11,  12614: 10,
                   12613: 9, 12611: 8,  12610: 7,  12609: 6,  12601: 5,  12600: 4,
                   12599: 3,  12596: 2,  12594: 1,  12593: 0 },

  "medial jamo":  {12643: 20,  12642: 19,  12641: 18,  12640: 17,  12639: 16,
                   12638: 15,  12637: 14,  12636: 13,  12635: 12,  12634: 11,  12633: 10,
                   12632: 9,  12631: 8,  12630: 7,  12629: 6,  12628: 5,  12627: 4,  12626: 3,
                   12625: 2,  12624: 1,  12623: 0 },

  "final jamo":  {12622: 27,  12621: 26,  12620: 25,  12619: 24,  12617: 23,
                  12616: 22,  12615: 21,  12614: 20,  12613: 19,  12612: 18,  12610: 17,  12609: 16,
                  12608: 15,  12607: 14,  12606: 13,  12605: 12,  12604: 11,  12603: 10,  12602: 9,
                  12601: 8,  12599: 7,  12598: 6,  12597: 5,  12596: 4,  12595: 3,  12594: 2,  12593: 1, 8203: 0 }
 };


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



// Test cases:
const examples = [["&#12615;","&#12632;","&#12615;"], ["&#12613;","&#12627;","&#12596;"], ["&#12613;","&#12627;","&#12596;"],  ["&#12599;","&#12624;","&#8203;"], ["&#12613;","&#12628;","&#8203;"], ["&#12615;","&#12643;","&#12601;"], ["&#12616;","&#12636;","&#12615;"], ["&#12622;","&#12623;","&#12596;"], ["&#12616;","&#12623;","&#8203;"], ["&#12613;","&#12628;"], ["&#12613;","&#12624;","&#12615;"], ["&#12610;","&#12627;","&#12596;"], ["&#12622;","&#12623;","&#12593;"], ["&#12613;","&#12643;","&#12610;"], ["&#12610;","&#12631;","&#12596;"], ["&#12593;","&#12636;","&#12593;"], ["&#12609;","&#12636;","&#12596;"], ["&#12615;","&#12640;","&#8203;"],["&#12616;","&#12623;","&#8203;"], ["&#12596;","&#12643;","&#12609;"], ["&#12622;","&#12631;","&#8203;"], ["&#12593;","&#12635;","&#8203;"], ["&#12610;","&#12636;","&#12596;"], ["&#12593;","&#12641;","&#12601;"], ["&#12615;","&#12627;","&#8203;"], ["&#12616;","&#12623;","&#12615;"], ["&#12615;","&#12643;","&#12596;"]];

// Run tests
for (let i = 0; i < examples.length; i++) {
  console.log(unicodeFromJamo(examples[i]));
}

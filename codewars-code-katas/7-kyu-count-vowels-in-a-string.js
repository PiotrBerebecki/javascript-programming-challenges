console.clear();

/*
-----------------------------------------
7 kyu
Count vowels in a string (aka Vowel Count)
-----------------------------------------

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/



// --------------------------------------
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(  getCount('abracadabra')  ); // 5
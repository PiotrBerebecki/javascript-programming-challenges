console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Spinal Tap Case
-----------------------------------------

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Examples:
spinalCase('This Is Spinal Tap') should return 'this-is-spinal-tap'.
spinalCase('thisIsSpinalTap') should return 'this-is-spinal-tap'.
spinalCase('The_Andy_Griffith_Show') should return 'the-andy-griffith-show'.
spinalCase('Teletubbies say Eh-oh') should return 'teletubbies-say-eh-oh'.
spinalCase('AllThe-small Things') should return 'all-the-small-things'.

Here are some helpful terms:
RegExp
String.replace()
*/



// --------------------------------------
function spinalCase(str) {
  strArr = str.split(/(?=[A-Z])|\s|_/);
  return strArr.map(function(word) {
    return word.toLowerCase();
  }).join('-');
}

console.log(  spinalCase('ThisIs one-line Spinal_Tap')  );



// --------------------------------------
// Same as above
function spinalCase2(str) {
  return str
    .split(/(?=[A-Z])|\s|_/)
    .map(word => word.toLowerCase())
    .join('-');
}
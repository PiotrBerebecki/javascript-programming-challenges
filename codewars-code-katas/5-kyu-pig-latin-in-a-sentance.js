console.clear();

/*
-----------------------------------------
5 kyu
Pig Latin in a sentance (aka Simple Pig Latin)
-----------------------------------------

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool');
  // -> igPay atinlay siay oolcay
  
pigIt('I think one-liners are awesome!');
  // -> Iay hinktay ne-linersoay reaay wesomeaay!
  
pigIt('Do I (often) think one-liners are "super" awesome?')
  // -> oDay Iay (ftenoay) hinktay ne-linersoay reaay "upersay" wesomeaay!
*/



// --------------------------------------
function pigIt(sentence) {
 return sentence
  .split(' ')
  .map(pigWord)
  .join(' ');
}

function pigWord(word) {
 return word.slice(1) + word[0] + 'ay';
}
// This does not work for question/ exclamation marks or other characters surrounding words.

console.log(     pigIt('Do I (often) think one-liners are "super" awesome!')      );
// oDay Iay often)(ay hinktay ne-linersoay reaay super""ay wesome!aay



// --------------------------------------
// Regex, this works for question/ exclamation marks and other characters surrounding words.
function pigIt2(str){
  return str.replace( /(\w)([\w-]*)\b/g, '$2$1ay' );
}

console.log(     pigIt2('Do I (often) think one-liners are "super" awesome!')      );
// oDay Iay (ftenoay) hinktay ne-linersoay reaay "upersay" wesomeaay!



// --------------------------------------
// Not as robust as above
function pigIt3(str){
  return str.replace( /([\w\S])([\w-]*)(!|\s|$)/g, '$2$1ay$3' );
}
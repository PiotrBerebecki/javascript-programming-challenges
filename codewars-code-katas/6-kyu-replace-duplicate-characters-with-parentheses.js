console.clear();

/*
-----------------------------------------
6 kyu
Replace duplicate characters with parentheses (aks Duplicate Encoder)

Replace each character in a string with '(' if that character appears only once
or with ')' if that character appears more than once.

Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
*/



// --------------------------------------
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(elem, i, arr) {
      return arr.indexOf(elem) === arr.lastIndexOf(elem) ? '(' : ')';
    })
    .join('');
}

console.log(  duplicateEncode('din')  ); // '((('



// --------------------------------------
// without using of lastIndexOf
function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(item, i, arr) {
      if (arr.slice(0,i).indexOf(elem) === -1 && arr.slice(i+1).indexOf(elem) === -1) {
        return '('
      } else {
        return ')' 
      }
    })
    .join('');
}
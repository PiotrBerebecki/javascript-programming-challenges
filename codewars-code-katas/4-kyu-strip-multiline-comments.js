console.clear();

/*
-----------------------------------------
4 kyu
Strip multiline comments
-----------------------------------------

Remove all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example: Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:
*/



// --------------------------------------
function stripComments(input, markers) {
  var patt = new RegExp(`\\s*[${markers.join('')}].+`, 'g');
  return input.replace(patt, '');
}

// console.log(  stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])  );
// apples, pears\ngrapes\nbananas

// console.log(  stripComments("a #b\nc\nd $e f g", ["#", "$"])  );
// a\nc\nd



// --------------------------------------
// string concatenation instead of string template literals
function stripComments2(input, markers) {
  var patt = new RegExp('\\s*[' + markers.join('') + '].+', 'g');
  return input.replace(patt, '');
}
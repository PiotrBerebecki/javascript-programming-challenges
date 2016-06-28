console.clear();

/*
-----------------------------------------
6 kyu
Replace you with your sister (aka Evil Autocorrect Prank)
-----------------------------------------

Replaces all instances of "you" or "u" (not case sensitive) 
with "your sister" (always lower case).
For the purposes of this kata, here's what you need to replace:

"youuuuu" with any number of u characters tacked onto the end
 
"u" at the beginning, middle, or end of a string, but NOT part of a word

"you" but NOT as part of another word like youtube or bayou

*/



// --------------------------------------
// regex
function autocorrect(input) {
  return input.replace(/\b(you+|u)\b/gi, 'your sister');
}
// \b is for word boundary

console.log(  autocorrect('I will meet you when I see u.')  );



// --------------------------------------
function autocorrect2(input) {
  return input.replace(/(^|\W)(you+|u)(?=\W|$)/gi, '$1your sister');
}
  
/*
\W matches any non-word character [^a-zA-Z0-9_]
JavaScript supports lookaheads but
like (?=…)  (positive) and (?!…)  (negative)
but lacks support for lookbehinds
like (?<=…) (positive) and (?<!…) (negative)
*/
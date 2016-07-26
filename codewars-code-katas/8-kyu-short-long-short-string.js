console.clear();

/*
-----------------------------------------
8 kyu
Short long short string
-----------------------------------------

Given 2 strings, a and b, return a string of the form short+long+short, 
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty (length0).

For example:

mergeStrings("1", "22") // returns "1221"
mergeStrings("22", "1") // returns "1221"

mergeStrings("1", "22") // returns "1221"
mergeStrings("22", "1") // returns "1221"
*/



// --------------------------------------
function mergeStrings(a, b){
  return a.length < b.length ? a+b+a : b+a+b;
}

console.log(  mergeStrings('1', '22')  );
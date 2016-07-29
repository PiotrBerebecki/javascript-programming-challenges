console.clear();

/*
-----------------------------------------
7 kyu
Check if string ends with a given string (aka String ends with?)
-----------------------------------------

Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/



// --------------------------------------
function solution(str, ending) {
  var patt = new RegExp(ending + '$');
  return patt.test(str);
}

// console.log(  solution2('abc', 'bc')  ); // true



// --------------------------------------
// In one line
function solution2(str, ending) {
  return (new RegExp(ending + '$')).test(str);
}
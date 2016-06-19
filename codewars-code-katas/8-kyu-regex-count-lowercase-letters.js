console.clear();

/*
----------------------------------------
8 kyu
Regex count lowercase letters
----------------------------------------

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/



// --------------------------------------
function countLowerCase(str) {
  return (str.match(/[a-z]/g) || []).length;
}
// We need || to set the default case if the argument passed is "" so that
// the function returns 0*. Otherwise you get TypeError: Cannot read property
// 'length' of null.

console.log(countLowerCase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
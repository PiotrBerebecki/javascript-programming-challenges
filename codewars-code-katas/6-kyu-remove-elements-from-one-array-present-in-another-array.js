console.clear();

/*
-----------------------------------------
6 kyu
Remove elements from one array present in another array (aka Array.diff)
-----------------------------------------

Rremove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/



// --------------------------------------
// This solution checks every element of a only against
// the relevant element in b.
function array_diff(a, b) {
  bCache = {};
  b.forEach(item => bCache[item] = true)
  return a.filter(el => !bCache[el])
}

console.log(  array_diff([1,2,2,2,3,4],[2,3])  ); // [1,4]



// --------------------------------------
// Solutions below are less efficient than the above.
// Below have O(ab) algorithms yet the the above is O(a + b)
// Solution below has to check every element in a against
// every element in b
function array_diff2(a, b) {
  return a.filter(function(el) {
    return !b.includes(el);
  })
}



// --------------------------------------
function array_diff3(a, b) {
  return a.filter(function(el) {
    return b.indexOf(el) === -1;
  });
}



// --------------------------------------
function array_diff4(a, b) {
  return a.filter(function(el) {
    return b.every(item => item !== el);
  });
}
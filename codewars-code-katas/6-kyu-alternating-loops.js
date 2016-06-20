console.clear();

/*
-----------------------------------------
6 kyu
Alternating Loops
-----------------------------------------

Write function combine() that combines arrays by alternatingly taking elements passed to it.
Arrays can have different lengths.

E.g.

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
*/



// --------------------------------------
function combine(...arrays) {
  let max = arrays.reduce((n, arr) => Math.max(n, arr.length), 0);
  let combinedArrays = [];
  for (let i = 0; i < max; i++) {
    for (let arr of arrays) {
      if (i in arr) {
        combinedArrays.push(arr[i]);
      }
    }
  }
  return combinedArrays;
}

console.log(   combine(['a', 'b', 'c'], [1, 2, 3])   );



// --------------------------------------
function combine2(array) {
  let args = Array.prototype.slice.call(arguments);
  let longestArray = args
    .map(x => x.length)
    .sort((a,b) => b-a)
    [0];
  let combinedArrays = [];
    for (let i = 0; i < longestArray; i++) {
      for (let j = 0; j < args.length; j++) {
        if (args[j][i]) {
          combinedArrays.push(args[j][i]);
        }
      }
    }
  return combinedArrays;
}
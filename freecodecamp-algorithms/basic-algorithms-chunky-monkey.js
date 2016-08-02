console.clear();

/*
-----------------------------------------
Basic Algorithms - Chunky monkey
-----------------------------------------

Write a function that splits an array (first argument) into groups of a given 
length (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)   // [['a', 'b'], ['c', 'd']]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)   // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)   // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)   // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)   // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)   // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
*/



// --------------------------------------
// recursion
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {return [arr];}
  return [arr.splice(0, size)].concat(chunkArrayInGroups(arr, size));
}

console.log(  JSON.stringify(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))  );
// [["a","b"],["c","d"]]

console.log(  JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))  );
// [[0,1],[2,3],[4,5]]



// --------------------------------------
// for loop
function chunkArrayInGroups2(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
console.clear();

/*
-----------------------------------------
7 kyu
Find unique values in arrays (aka Sorted Union)
-----------------------------------------

Write a function that takes two or more arrays and returns a new array
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the
final array should not be sorted in numerical order.

Example:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
should return [1, 2, 3, 5, 4, 6, 7, 8]
*/



// --------------------------------------
// foreach
function uniteUnique(...arrays) {
  var unique = [];  
  arrays.forEach(function(array) {
    array.forEach(function(el) {
      if (!unique.includes(el)) {
        unique.push(el);
      }
    })
  });
  return unique;
}
// You can use
// var arr = Array.prototype.slice.call(arguments)
// instead of spread operator

var list1 = [1,2,3]
var list2 = [1,4,3]
var list3 = [2,5]
console.log(    JSON.stringify(uniteUnique(list1, list2, list3))    ); // [1,2,3,4,5]



// --------------------------------------
// Same as above but using for loop
function uniteUnique2(...arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!unique.includes(arr[i][j])) {
        unique.push(arr[i][j]);
      }
    }
  }
  return unique;
}



// --------------------------------------
// Clever
function uniteUnique3a(...arrays) {
   let array = [].concat(...arrays);
   return array.filter((el, i) => !array.slice(0,i).includes(el));
}



// --------------------------------------
// Clever, similar to above
function uniteUnique3b(...arrays) {
   let array = [].concat(...arrays);
   return array.filter((el, i) => array.indexOf(el) == i);
}



// --------------------------------------
// while loop
function uniteUnique4() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  }); 
  return uniqueArray;
}
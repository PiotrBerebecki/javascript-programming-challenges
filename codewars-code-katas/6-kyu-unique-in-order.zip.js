console.clear();

/*
-----------------------------------------
6 kyu
Unique In Order
-----------------------------------------

Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next 
to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/



// --------------------------------------
function uniqueInOrder(iterable) {
  if (typeof iterable == 'string') {
    iterable = iterable.split('');
  }
  var result = [];
  var previousItem = undefined;
  var uniqueArray = iterable.map(function (item) {
    if (item !== previousItem) {
      result.push(item);
    }
    previousItem = item;
  });
  return result;
}

console.log(uniqueInOrder('AABBCC'));



// --------------------------------------
// for loop
function uniqueInOrder2(iterable) {
  var result = [];
  var previousItem;
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== previousItem) {
      result.push(previousItem = iterable[i]);
    }
  }
  return result;
}
// An assignment always returns the value of the assignment so
// return previousItem = 2; => will return 2;
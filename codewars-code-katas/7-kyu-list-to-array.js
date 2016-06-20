console.clear();

/*
-----------------------------------------
7 kyu
List to Array
-----------------------------------------

Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.
Here's an example of a list in JavaScript:
{value: 1, next: {value: 2, next: {value: 3, next: null}}}
In Python, lists will be represented by a preloaded LinkedList class with the members value and next. Here's an example:
LinkedList(1, LinkedList(2, LinkedList(3)))
Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:
[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.
*/



var list1 = {value: 1, next: 2, other: 3};
var list2 = {value: {value: 1, next: 2, other: 3}};
var list3 = {value: 1, next: {value: 2, next: 3, other: 4}};
var list4 = {value: 1, next: {value: 2, next: {value: 3, next: 4, other: 5}}};
var list5 = {value: 1, next: {value: 2, next: {value: 3, next: 5}}};
var list6 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};



// --------------------------------------
function listToArray(list) {
  var newArr = [];
  for (var prop in list) {
    if (typeof list[prop] === 'object') {
      return newArr.concat(listToArray1(list[prop]));
    }
    newArr.push(list[prop]);
  }
  return newArr;
}

console.log(   listToArray(list1)   );



// --------------------------------------
// this only works for the objects with null.
function listToArray2(list) {
  var array = [];
  for (var node = list; node; node = node.next) {
    array.push(node.value);
  }
  return array;
}

// The condition in the the for loop is evaluated before each loop iteration. 
// If this expression evaluates to true, statement is executed. 
// This conditional test is optional. If omitted, the condition always evaluates 
// to true. If the expression evaluates to false, execution skips to the first 
// expression following the for construct.



// --------------------------------------
// can be shortened to 
function listToArray3(list) {
  var array = [];
  for (var node = list; node; node = node.next)
  array.push(node.value);
  return array;
}
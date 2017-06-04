// http://www.codewars.com/kata/concatenating-functions/javascript
// Create the following pipe function
// console.log(  addOneArr.pipe(squareArr)([1, 2])  ) // [4, 9]

// lib
const addOne = n => n + 1;
const square = n => n * n;
const dbl = a => a * 2;
const sumThree = (a, b, c) => a + b + c;
const addOneArr = (arr) => arr.map(addOne);
const squareArr = (arr) => arr.map(square);

// ES6
Function.prototype.pipe = function(fn) {
  return (arg) => fn(this(arg));
}

// ES5 self
// Function.prototype.pipe2 = function(fn) {
//   const self = this;
//   return function(arg) {
//     return fn(self(arg));
//   }
// }

// ES5 bind
// Function.prototype.pipe3 = function(fn) {
//   return function(arg) {
//     return fn(this(arg));
//   }.bind(this)
// }

var arr1 = [1,2];
console.log(  addOneArr.pipe(squareArr)(arr1)  ) // [4, 9]
console.log(  addOneArr.pipe(squareArr).pipe(addOneArr)(arr1)  ) // [5, 10]


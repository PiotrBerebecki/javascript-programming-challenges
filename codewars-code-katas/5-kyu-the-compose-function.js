console.clear();

/*
-----------------------------------------
5 kyu
The compose function (aka Compose functions -T Combinator)
-----------------------------------------

Make a function called compose that accepts a value as a parameter, 
as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter 
being used as a parameter for all of the accepted function parameters in turn. 

Example:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11

If only a single parameter is passed in, return that parameter.
*/



// --------------------------------------
var doubleTheValue = function(val) {return val * 2;}
var addOneToTheValue = function(val) {return val + 1;}

function compose(val, ...fn) {
  fn.forEach(el => val = el(val));
  return val;
}

// console.log(  compose3(5, doubleTheValue)  ); // 10
console.log(  compose3(5, doubleTheValue, addOneToTheValue)  )// should === 11



// --------------------------------------
function compose2(value) {
  for (var i = 1 ; i < arguments.length ; i++) {
    value = arguments[i](value);
  }
  return value;
}



// --------------------------------------
function compose3(value, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), value)
}



// --------------------------------------
function compose4(value) {
  return [].slice.call(arguments, 1).reduce(function(acc, fn) {
    return fn(acc)
  }, value)
}

// [].slice.call() can be used instead of Array.prototype.slice.call()
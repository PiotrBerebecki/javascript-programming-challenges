console.clear();

/*
-----------------------------------------
7 kyu
Get key/value pairs as arrays
-----------------------------------------

Complete the keysAndValues function so that it takes in an object 
and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
*/



// --------------------------------------
function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map(el => obj[el])];
}

console.log(  JSON.stringify(keysAndValues2({a: 1, b: 2, c: 3}))  ); // [['a', 'b', 'c'], [1, 2, 3]]
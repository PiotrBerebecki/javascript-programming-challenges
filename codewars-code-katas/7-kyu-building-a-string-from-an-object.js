console.clear();

/*
-----------------------------------------
7 kyu
Building a string from an object
(aka Building Strings From a Hash)
-----------------------------------------

Complete the function so that it takes the object (JavaScript/CoffeeScript) or 
hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by 
a comma except for the last pair.

Example:

getString({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/



// --------------------------------------
function getString(obj) {
  return Object.keys(obj)
    .map((el) => el + ' = ' + obj[el])
    .join(','); // or .join(); as join uses comma by default
}

console.log(  getString2({a: 1, b: '2'})  ); // 'a = 1,b = 2'



// --------------------------------------
// for-in loop
function getString2(obj) {
  var array = [];
  for (var key in obj) {
    array.push(key + ' = ' + obj[key]);
  }
  return array.join();
}
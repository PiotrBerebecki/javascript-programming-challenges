console.clear();

/*
-----------------------------------------
8 kyu
Grasshopper - Debug sayHello
-----------------------------------------

Fix this function:
function (name) {
  return 'Hello, ' name
}
Example output:
Hello, Mr. Spock
*/



// --------------------------------------
function sayHello(name) {
  return 'Hello, ' + name;
}
// Template literals or template strings can be used instead of concatenation
// `Hello, ${name}` => 'Hello, ' + name
// Grave accent (`) surrounds template literals.

console.log(sayHello1('Mr. Spock'));



// --------------------------------------
// Arrow function
var sayHello2 = function sayHello2(name) {
  return 'Hello, ' + name;
};
// Parentheses are optional only when one parameter is present.
// So they could be omitted here.
console.clear();

/*
-----------------------------------------
5 kyu
Convert PascalCase string into snake_case
-----------------------------------------

Complete the function/method so that it takes CamelCase string 
and returns the string in snake_case notation. Lowercase characters 
can be numbers. If method gets number, it should return string.

Examples:

toUnderscore('TestController');
//  returns test_controller

toUnderscore('MoviesAndBooks');
// returns movies_and_books

toUnderscore('App7Test');
// returns app7_test

toUnderscore(1);
// returns "1"
*/



// --------------------------------------
function toUnderscore(string) {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
}

console.log(  toUnderscore('TestController')  ); // test_controller
// console.log(  toUnderscore('MoviesAndBooks')  ); // movies_and_books
// console.log(  toUnderscore('App7Test')  ); // app7_test
// console.log(  toUnderscore (1)  ); // '1'



// --------------------------------------
// regex
function toUnderscore2(string) {
  return string.toString().replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
}



// --------------------------------------
function toUnderscore3(string) {
  return string.toString().replace(/[A-Z]/g, (letter, ind) => (ind === 0 ? '' : '_') + letter.toLowerCase() );
}
console.clear();

/*
---------------------------------------------------------
4kyu
Remove delimiters and capitalise first letters
---------------------------------------------------------

Given 'this_is_some_text' as an input string, write a function that
returns 'ThisIsSomeText'.
*/



// ------------------------------------------------------
function capitaliseFirst(str) {
  return str.replace( /(?:_+|^)([a-z])/g, (m0, m1) => m1.toUpperCase() );
}

console.log( capitaliseFirst('new_awesome_function') ); // NewAwesomeFunction



// ------------------------------------------------------
// working but not in one step
function capitaliseFirst2(str) {
  var firstCapital = str.replace(/[a-z]+/g, x => x[0].toUpperCase() + x.slice(1));
  return firstCapital.replace(/_/g, '')
}
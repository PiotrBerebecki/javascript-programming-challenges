console.clear();

/*
-----------------------------------------
8 kyu
Grasshopper - Combine strings
-----------------------------------------

Create a function named combineNames(combine_names in python, ruby) that accepts 
one or more parameters (unknown number) and returns the full name.

Example:

combineNames('James', 'Stevens')  // 'James Stevens'
combineNames('James', 'Stevens', 'Jones)  // 'James Stevens Jones'
combineNames('James')  // 'James'
*/



// --------------------------------------
function combineNames(...names) {
  return names.join(' ');
}
// The rest parameter syntax allows to represent an indefinite number of arguments 
// as an array. Babel compiler has to be used to enable it on codepen.

console.log(   combineNames('Adam', 'Smith' , 'Jones')    );


// --------------------------------------
const combineNames2 = (...names) => names.join(' ');
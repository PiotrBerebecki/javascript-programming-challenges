  // console.clear();

/*
-----------------------------------------
7 kyu
Sort a list of names (aka Sort arrays - 1)
-----------------------------------------

sortme(['adam','john','wlad', 'antos']) // ['adam', 'antos', 'john', 'wlad']
Sort a list or names
*/



// --------------------------------------
function sortme(names) {
  return names.sort();
}

// console.log(  sortme(['adam','john','wlad', 'antos'])  ); // ['adam', 'antos', 'john', 'wlad']



// --------------------------------------
// Arrow function
const sortme2 = (names) => names.sort();

console.log(  sortme2(['adam','johny','wlad', 'antos'])  ); // ['adam', 'antos', 'johny', 'wlad']

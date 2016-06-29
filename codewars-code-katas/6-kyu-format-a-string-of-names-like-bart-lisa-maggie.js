console.clear();

/*
-----------------------------------------
6 kyu
Format a string of names like 'Bart, Lisa & Maggie'.
-----------------------------------------

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas
except for the last two names, which should be separated by an ampersand.

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
      returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
      returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
      returns 'Bart'

list([])
      returns ''
*/



// --------------------------------------
// Clever reduce function
function list(names){
  return names.reduce(function(prev, curr, i, arr){
    if (i === 0) {
      return curr.name;
    }
    else if (i === arr.length - 1) {
      return prev + ' & ' + curr.name;
    } 
    else {
      return prev + ', ' + curr.name;
    }
  }, '');
 }

console.log(   list( [{name: 'Bart'},
                      {name: 'Lisa'},
                      {name: 'Maggie'},
                      {name: 'Homer'},
                      {name: 'Marge'}] )   );
// Bart, Lisa, Maggie, Homer & Marge



// --------------------------------------
// Cumbersome
function list2(names) {
  var namesLength = names.length;
  if (namesLength === 0) {
    return '';
  } else if (namesLength === 1) {
    return names[0].name;
  }
  var output = '';
  for (var i = 0; i < namesLength-2; i++) {
    output += names[i].name + ', ';
  }
  return output + names[i].name + ' & ' + names[i+1].name;
}
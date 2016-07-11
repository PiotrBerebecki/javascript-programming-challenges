console.clear();

/*
-----------------------------------------
6 kyu
6 kyu Capitalise first letters in a string unless not desired
(aka Title Case)
-----------------------------------------

Convert a string into title case, given an optional list of exceptions (minor words).
The list of minor words will be given as a string with each word separated 
by a space. Your function should ignore the case of the minor words even if 
the case of the minor word string is changed. The first word should always be
capitalised.

Examples:

titleCase('') // ''
titleCase('a clash of KINGS', 'a an the of') // 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // 'The Wind in the Willows'
titleCase('the quick brown fox') // 'The Quick Brown Fox'
*/



// --------------------------------------
function titleCase(title, minorWords) {
  var firstCapital = title
    .split(' ')
    .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase());

  if (minorWords) {
    var exceptions = minorWords.split(' '); 
    for (var i = 1; i < firstCapital.length; i++) {
      exceptions.forEach(function(el) {
        if (firstCapital[i].toLowerCase() === el.toLowerCase()) {
          firstCapital[i] = firstCapital[i].toLowerCase();
        }
      });
    }
  }
  
  return firstCapital.join(' ');
}

// console.log(  titleCase('the way i like the BEST', 'Way The')  ); // The way I Like the Best
// console.log(  titleCase('')  ); // ''
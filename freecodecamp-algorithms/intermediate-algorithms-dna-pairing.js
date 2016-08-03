console.clear();

/*
-----------------------------------------
Intermediate Algorithms - DNA Pairing
-----------------------------------------

The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element 
to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [['G', 'C'], ['C','G'],['G', 'C']]

The character and its pair are paired up in an array, and all the arrays 
are grouped into one encapsulating array.

Here are some helpful methods:
Array.push()
String.split()
*/



// --------------------------------------
function pairElement(str) {
  return str
    .split('')
    .map(function(el) {
      switch (el) {
        case 'G': return ['G', 'C'];
        case 'C': return ['C', 'G'];
        case 'A': return ['A', 'T'];
        case 'T': return ['T', 'A'];
      }
  });
}

console.log(   JSON.stringify(pairElement('GCG'))   ); // [["G","C"],["C","G"],["G","C"]]



// --------------------------------------
function pairElement2(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}



// --------------------------------------
function pairElement3(str) {
  // Define a map object with all pair possibilities 
  var dnaMap = {T:'A', A:'T', G:'C', C:'G'};
  // Split str into a char Array
  strArr = str.split('');
  // Replace each Array item with a 2d Array using map
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = [ strArr[i], dnaMap[str[i]] ];
  }
 return strArr;
}
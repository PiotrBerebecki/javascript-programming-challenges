// console.clear();

/*
-----------------------------------------
Basic Algorithms  - Mutations
-----------------------------------------

Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.

mutation(['hello', 'hey']) // false
mutation(['hello', 'Hello']) // true
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) // true
mutation(['Mary', 'Army']) // true
mutation(['Mary', 'Aarmy']) // true
mutation(['Alien', 'line']) // true
mutation(['floor', 'for']) // true
mutation(['hello', 'neo']) // false
*/



// --------------------------------------
function mutation(arr) {
  var haystack = arr[0].toLowerCase();
  var needle   = arr[1].toLowerCase();
  
  for (let i = 0, needleLen = needle.length; i < needleLen; i++) {
    if ( !(haystack.includes(needle[i])) ) { return false; }
  }
  return true;
}

console.log(  mutation3(['Hello', 'hello'])  ); // true
// console.log(  mutation3(['hello', 'hey'])  ); // false



// --------------------------------------
function mutation2(arr) {
  var haystack = arr[0].toLowerCase();
  var needle   = arr[1].toLowerCase();
  
  for (let i = 0, needleLen = needle.length; i < needleLen; i++) {
    if (haystack.indexOf(needle[i]) < 0) {return false;}
  }
  return true;
}



// --------------------------------------
function mutation3(arr) {
  var temp = '';
  for (let i = 0; i < arr[1].length; i++) {
    temp += arr[0].toLowerCase().match(arr[1].toLowerCase()[i]);
  }
  return temp === arr[1].toLowerCase();
}

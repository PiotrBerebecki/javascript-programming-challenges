console.clear();

/*
-----------------------------------------
7 kyu
Sort letters in a string (aka Sort the Gift Code)
-----------------------------------------

Given a string of letters, sort them in alphabetical order.

Examples:

sortGiftCode( 'abcdef' ); //=> returns 'abcdef'

sortGiftCode( 'pqksuvy' ); //=> returns 'kpqsuvy'

sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' ); 
//=> returns 'abcdefghijklmnopqrstuvwxyz'
*/



// --------------------------------------
function sortGiftCode(str) {
  return str.split('').sort().join('');
}

console.log(  sortGiftCode('zyxwvutsrqponmlkjihgfedcba')  );



// --------------------------------------
// As above
const sortGiftCode2 = (str) => split('').sort().join('');
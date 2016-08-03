console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Missing Letters
-----------------------------------------

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter('abce') should return 'd'.
fearNotLetter('abcdefghjklmno') should return 'i'.
fearNotLetter('bcd') should return undefined.
fearNotLetter('yz') should return undefined.

Here are some helpful terms:
String.prototype.charCodeAt()
String.fromCharCode()
 */



// --------------------------------------
function fearNotLetter(str) {
  for (var i = 0, charCode; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if ( charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode-1);
    }
  }
  return undefined;
}

console.log(   fearNotLetter('cdef')   ); // undefined
console.log(   fearNotLetter('abce')   ); // d
console.log(   fearNotLetter('abcdefghjklmno')   ); // i
console.log(   fearNotLetter('abdef')   ); // c
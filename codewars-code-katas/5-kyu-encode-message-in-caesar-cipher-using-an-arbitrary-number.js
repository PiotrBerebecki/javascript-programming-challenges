console.clear();

/*
-----------------------------------------
5 kyu Encode message in Caesar Cipher using an arbitrary number
(aka Casesar Cipher Helper)
-----------------------------------------

Write a class that, when given a string, will return an uppercase string with each letter 
shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var shiftByOne = new CaesarCipher(1); // creates a CipherHelper with a shift of one

c.encode('abcd'); // returns 'BCDE'
c.encode('z'); // returns 'A'

c.decode('a'); // returns 'Z'

If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
*/



// --------------------------------------
function CaesarCipher(shift) { 
  this.encode = function(msg) {
    return msg.toUpperCase().replace(/[a-z]/gi, function(le) {
      return String.fromCharCode( le.charCodeAt(0) + shift <= 90 ? le.charCodeAt(0) + shift : 65 + (shift - 91 + le.charCodeAt(0)) );
    });
  };  
  
  this.decode = function(msg) {
    return msg.toUpperCase().replace(/[a-z]/gi, function(le) {
      return String.fromCharCode( le.charCodeAt(0) - shift >= 65 ? le.charCodeAt(0) - shift : 90 - (shift - le.charCodeAt(0) + 64) );
    });
  };
}

var shiftByOne = new CaesarCipher(1);
// var shiftByThree = new CaesarCipher(3);
// var shiftByFive = new CaesarCipher(5);
// var shiftByThirteen = new CaesarCipher(13);

console.log(  shiftByOne.encode('abcd')   ); // BCDE
// console.log(  shiftByOne.encode('z')   ); // A
// console.log(  shiftByThree.encode('y')   ); // B
// console.log(  shiftByFive.encode('z')   ); // E
// console.log(  shiftByFive.encode('Codewars')   ); // HTIJBFWX

// console.log(  shiftByThree.decode('d')   ); // A
// console.log(  shiftByThree.decode('b')   ); // Y
// console.log(  shiftByThree.decode('B')   ); // Y



// --------------------------------------
function CaesarCipher2(shift) {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.encode = function(msg) {
    return msg.replace(/[a-z]/gi, function(le) {
      return alpha[(alpha.indexOf(le.toUpperCase()) + shift) % 26];
    });
  };
  
  this.decode = function(msg) {
    return msg.replace(/[a-z]/gi, function(le) {
      return alpha[(alpha.indexOf(le.toUpperCase()) + 26 - shift) % 26];
    });
  };
}
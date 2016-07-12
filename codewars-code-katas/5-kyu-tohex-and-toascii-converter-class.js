console.clear();

/*
-----------------------------------------
5 kyu
toHex and toASCII converter class (aka ASCII hex converter)
-----------------------------------------

Write a module Converter that can take ASCII text and convert it to hexadecimal. 
The class should also be able to take hexadecimal and convert it to ASCII text.

Example

Converter.toHex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"

Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
=> "Look mom, no hands"
*/



// --------------------------------------
var Converter = {
  toHex: function(ascii) {
    return ascii.replace(/./g, char => char.charCodeAt(0).toString(16))
  },
  
  toAscii: function(hex) {
    return hex.replace(/../g, two => String.fromCharCode(parseInt(two, 16)));
  }
}

console.log(  Converter.toHex('Look mom, no hands')  ); // '4c6f6f6b206d6f6d2c206e6f2068616e6473'
// console.log(  Converter.toAscii('4c6f6f6b206d6f6d2c206e6f2068616e6473')  ); // 'Look mom, no hands'



// --------------------------------------
var Converter2 = {
  toHex: function(ascii) {
    return ascii.split('').map(el => el.charCodeAt(0).toString(16)).join('');
  },
  
  toAscii: function(hex) {
    return hex.match(/([a-zA-Z0-9]{2})/g).map(el => String.fromCharCode(parseInt(el, 16))).join('');
  }
}
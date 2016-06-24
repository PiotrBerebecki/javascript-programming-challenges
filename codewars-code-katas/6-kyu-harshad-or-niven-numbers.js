console.clear();

/*
-----------------------------------------
6 kyu
Harshad or Niven numbers
-----------------------------------------

Harshad numbers are positive numbers that can be
divided (without remainder) by the sum of their digits.

e.g.
27, because 2 + 7 = 9 and 27 equals 9 * 3

Generate the Harshad object ("static class") which has 3 functions.

isValid that checks if the number is a Harshad number or not
      // Harshad.isValid(1) returns true
    
getNext that returns the next Harshad number
      // Harshad.getNext(0) returns 1

getSerie that returns a serie of n Harshad number, optional start value not included 
      // Harshad.getSerie(3, 1000) returns [1002, 1008, 1010],
while // Harshad.getSerie(3) returns [1, 2, 3]
   
The passed parameters will be valid integers between 0 and 2000.
*/



// --------------------------------------
var Harshad = ( function() {
  'use strict';
  return {
  
    isValid: function(number) {
      var sumOfDigits = number.toString().split('').map(Number).reduce((a, b) => a + b);
      return (number / sumOfDigits) % 1 === 0;
    },
    
    getNext: function(number) {
      for (var i = number + 1; i <= 2000; i++) {
        if (this.isValid(i)) {
        return i;
        }
      }
    },

    getSerie: function(count, start) {
      var serie = [];
      for (var j = start + 1 || 1; serie.length <   count; j++) {
        if (this.isValid(j)) {
          serie.push(j);
        }
      }
      return serie;
    }

  };

} () );

console.log(  Harshad.isValid(1)  ); // true
console.log(  Harshad.getNext(0)  ); // 1
console.log(  Harshad.getSerie(4)  ); // [1, 2, 3, 4]
console.log(  Harshad.getSerie(4,1000)  ); // [1002, 1008, 1010, 1011]
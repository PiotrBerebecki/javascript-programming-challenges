console.clear();

/*
-----------------------------------------
4 kyu
Roman Numerals helper class
-----------------------------------------

Create a RomanNumerals helper that can convert a roman numeral 
to and from an integer value.

Examples:

RomanNumerals.toRoman(2016); // should return 'MMXVI'
RomanNumerals.fromRoman('MMXVI'); // should return 2016
*/



// --------------------------------------
var RomanNumerals = {
  fromRoman: function(input) {
    var romanNumerals = [
      ['CM', 900],
      ['M', 1000],
      ['CD', 400],
      ['D', 500],
      ['XC', 90],
      ['XC', 90],
      ['C', 100],
      ['XL', 40],
      ['L', 50],
      ['IX', 9],
      ['X', 10],
      ['IV', 4],
      ['V', 5],
      ['I', 1]
    ];

    var arabicNumber = 0;
    for (var i = 0; i < romanNumerals.length; i++) {
      var searched = romanNumerals[i][0];
      var pattern = new RegExp(`${searched}`, 'g');
      var found = input.match(pattern);
      if (found) {
        arabicNumber += romanNumerals[i][1] * found.length;
        input = input.slice(input.indexOf(searched) + searched.length);
      }
    }
    return arabicNumber;
  },

  toRoman: function(input) {
    var arabicNumerals = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];

      var romanNumber = '';
      for (var i = 0; i < arabicNumerals.length; i++) {
        while (input >= arabicNumerals[i][0]) {
          romanNumber += arabicNumerals[i][1];
          input -= arabicNumerals[i][0];
        }
      }
      return romanNumber;    
  }
}

console.log(RomanNumerals.toRoman(2016)); // MMXVI
console.log(RomanNumerals.fromRoman('MMXVI')); // 2016
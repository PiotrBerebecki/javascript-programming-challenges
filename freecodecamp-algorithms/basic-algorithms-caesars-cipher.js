console.clear();

/*
-----------------------------------------
Basic Algorithms - Casesars cipher
-----------------------------------------

Decode the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N','B' ↔ 'O' and so on.

rot13('SERR PBQR PNZC') // 'FREE CODE CAMP'
rot13('SERR CVMMN!') // 'FREE PIZZA!'
rot13('SERR YBIR?') // 'FREE LOVE?'
*/



// --------------------------------------
function rot13(str) {
  var asciiDiff; 
  return str.replace(/[a-z]/gi, function(letter) {
    if (letter === letter.toLowerCase()) {asciiDiff = 97;}
    else                                 {asciiDiff = 65;}
    return String.fromCharCode( (letter.charCodeAt(0) - asciiDiff + 13) % 26 + asciiDiff );
  });
}

// console.log(  rot13('abYZ')  ); // 'noLM'



// --------------------------------------
// Universal Caesar's Cipher. You can specify any key.
function rot13_2(str, key) {
  var asciiDiff;
  return str.replace(/[a-z]/gi, function(letter) {
    if (letter === letter.toLowerCase()) {asciiDiff = 97;}
    else                                 {asciiDiff = 65;}
    return String.fromCharCode( (letter.charCodeAt(0) - asciiDiff + key) % 26 + asciiDiff );
  });
}

// console.log(  rot13_2('abYZ', 14)  ); // 'opMN'



// --------------------------------------
function rot13_3(str) {
  var codedChar = str.split('');
  var decodedChar = [];
  var asciiChar = codedChar.map(function(char) {
    x = char.charCodeAt();
    if (x < 65 || x > 90) {
      decodedChar.push(char);
    } else if (x <= 77) {
      decodedChar.push(  String.fromCharCode(x + 13)  );
    } else if (x <= 90) {
      decodedChar.push(  String.fromCharCode(x - 13)  );
    }
  });
  return decodedChar.join('');
}



// --------------------------------------
// different formatting
function rot13_4(str) {
  var decodedChar = [];
  var asciiChar = str.split('')
    .map(function(char) {
      x = char.charCodeAt();
      if (x < 65 || x > 90) {
        decodedChar.push(char);
      } else if (x <= 77) {
        decodedChar.push(  String.fromCharCode(x + 13)  );
      } else if (x <= 90) {
        decodedChar.push(  String.fromCharCode(x - 13)  );
      }
  });
  return decodedChar.join('');
}



// --------------------------------------
function rot13_5(str) {
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var encodedArr = str.split('');
  var decodedArray = encodedArr.map(function(character) {
    if (alphabet.indexOf(character) === -1) {
      return character;
    } 
    if (alphabet.indexOf(character) - 13 < 0) {
      return alphabet[alphabet.indexOf(character) + 13];
    } else {
      return alphabet[alphabet.indexOf(character) - 13];
    }    
  });
 return decodedArray.join('');
}
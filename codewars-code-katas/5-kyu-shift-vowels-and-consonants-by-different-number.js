console.clear();

/*
-----------------------------------------
5 kyu
Shift vowels and consonants by different number (aka Tongues)
-----------------------------------------

 Replace each vowel in a string
 'a' 'i' 'y' 'e' 'o' 'u'
 with the vowel three advanced, cyclicly.
 
 Replace each consonant in a string
 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f'
 with the vowel three advanced, cyclicly.

 So for instance the phrase
 'One ring to rule them all.'
 translates to 
 'Ita dotf ni dyca nsaw ecc.'
 
 Note:
 - preserve case.
*/



// --------------------------------------
function tongues(code) {
  var alpha = 'aiyeoubkxznhdcwgpvjqtsrlmf';
  var repl =  'eouaiypvjqtsrlmfbkxznhdcwg';
  
  return code.replace(/[a-z]/gi, function(m) {
    var lower = m.toLowerCase();
    return lower === m ? repl[alpha.indexOf(m)] : repl[alpha.indexOf(lower)].toUpperCase();
  });
}

// console.log(  tongues('ab')  ); // 'ep'
// console.log(  tongues('One ring to rule them all.')  ); // 'Ita dotf ni dyca nsaw ecc.'
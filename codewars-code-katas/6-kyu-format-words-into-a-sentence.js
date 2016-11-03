/*
-----------------------------------------
6 kyu Format words into a sentence
-----------------------------------------

formatWords(['ninja', 'samurai', 'ronin'])
// should return 'ninja, samurai and ronin'

formatWords(['ninja', '', ''])
// should return 'ninja'

formatWords(['ninja'])
// should return 'ninja'

formatWords(['ninja', '', 'ronin'])
// should return 'ninja and ronin'

formatWords([])
// should return ''

formatWords()
// should return ''
*/



// --------------------------------------
function formatWords(arr) {
  if (!arr) { return ''; }
  
  const arrCleaned = arr.filter(item => item !== '');
  
  if (arrCleaned.length === 0) { return ''; }
  if (arrCleaned.length === 1) { return arrCleaned[0]; }
  
  return arrCleaned.slice(0,-1).join(', ') + ' and ' + arrCleaned.slice(-1);
}

console.log(formatWords(['one', 'two', ''])); // and and two
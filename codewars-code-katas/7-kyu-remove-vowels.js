console.clear();

/*
-----------------------------------------
7 kyu
Remove vowels (aks Disemvowel Trolls)
-----------------------------------------

Replace all vowels (aeiou) in a given string
For example, the string "This website is not for losers LOL!"
would become "Ths wbst s nt fr lsrs LL!".
*/



// --------------------------------------
// regex
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(  disemvowel('This website is not for losers LOL!')  );
// Ths wbst s nt fr lsrs LL!



// --------------------------------------
// one liner
const disemvowel2 = str => str.replace(/[aeiou]/gi, '')
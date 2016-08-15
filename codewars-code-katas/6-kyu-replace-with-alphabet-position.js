console.clear();

/*
-----------------------------------------
6 kyu
Replace With Alphabet Position
-----------------------------------------

Given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. 
a being 1, b being 2, etc. As an example:

alphabetPosition("The sunset sets at twelve o' clock.")
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
(As a string.)
*/



// --------------------------------------
function alphabetPosition(text) {
  return text
    .replace(/[^A-Za-z]/g, '')
    .replace(/./g, letter => (letter.toUpperCase().charCodeAt(0) - 64) + ' ')
    .trim();
}

// charCodeAt(0) is the same as charCodeAt()

console.log(  alphabetPosition("A!B a_b?")  ); // '1 2 1 2'



// --------------------------------------
function alphabetPosition2(text) {
  return text.match(/[a-zA-Z]/g).map( (el) => el.toUpperCase().charCodeAt(0) - 64 ).join(' ');
}
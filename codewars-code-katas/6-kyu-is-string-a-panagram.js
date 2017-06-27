// http://www.codewars.com/kata/detect-pangram/javascript

// A pangram is a sentence that contains every
// single letter of the alphabet at least once.
// For example, the sentence
// "The quick brown fox jumps over the lazy dog"
// is a pangram, because it uses the letters A-Z
// at least once (case is irrelevant).

// Given a string, return true or false

const isPangram = str => {
  const sanitisedStr = str.replace(/[^a-z]/gi, '').toLowerCase();
  const uniqueLetters = Array.from(new Set(sanitisedStr));
  const charCodeSum = uniqueLetters.reduce((sum, char) => {
    return sum + char.charCodeAt();
  }, 0);

  const charCodeSumInAlphabet = (97 + 122) * (122 - 97 + 1) / 2;
  return charCodeSum === charCodeSumInAlphabet;
};

const isPangram2 = str => {
  return (str.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
};

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true

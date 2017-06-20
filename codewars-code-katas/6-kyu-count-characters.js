// http://www.codewars.com/kata/count-characters-in-your-string/javascript
// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this 'aba' then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
  const qtts = {};
  for (let char of string) {
    qtts[char] = qtts[char] ? 1 + qtts[char] : 1;
  }
  return qtts;
}

console.log(count('aba')); // {a: 2, b: 1}

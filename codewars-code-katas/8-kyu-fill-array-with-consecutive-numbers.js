// http://www.codewars.com/kata/count-the-monkeys/train/javascript
// For example, if n = 10:
// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function monkeyCount(n) {
  return Array.from({length: n}, (val, idx) => idx + 1);
}

function monkeyCount2(n) {
  return Array.from(new Array(n), (_, idx) => idx + 1);
}

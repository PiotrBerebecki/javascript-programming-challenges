// http://www.codewars.com/kata/sort-the-odd/javascript
// You have an array of numbers.
// Your task is to sort ascending odd numbers but
//  even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.
//
// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortOddsOnly = arr => {
  const evens = [];
  const odds = arr.reduce((acc, cur, idx) => {
    if (cur % 2 === 1) {
      acc.push(cur);
      evens[idx] = undefined;
      return acc;
    }
    evens[idx] = cur;
    return acc;
  }, []);
  const oddsSorted = odds.sort((a, b) => a - b);

  return evens.map(num => {
    if (num === undefined) {
      return oddsSorted.shift();
    }
    return num;
  });
};

console.log(sortOddsOnly([1, 3, 5, 8, 0])); // [1, 3, 5, 8, 0]

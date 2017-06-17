// http://www.codewars.com/kata/build-tower/javascript
// Write the function that when executed
// towerBuilder(3);

// returns
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]

const towerBuilder = n => {
  return Array.from({ length: n }, (_, i) => {
    const spaces = ' '.repeat(n - i - 1);
    return spaces + '*'.repeat(2 * i + 1) + spaces;
  });
};

console.log(towerBuilder(3));

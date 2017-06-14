// write a function that can be executed as follows

// console.log(getCharCode('A')); // 65
// console.log(getCharCode('B')); // 66
// console.log(getCharCode('B')); // 66

// Function calls with the same argument should not invoke
// the underlying javascript method

function charCodes() {
  const lookup = {};

  return function(n) {
    if (typeof lookup[n] === 'number') {
      console.log('found', n, 'in lookup');
      return lookup[n];
    }

    console.log('added', n, 'to lookup');
    return (lookup[n] = n.charCodeAt(0));
  };
}

const getCharCode = charCodes();

console.log(getCharCode('A')); // 65
console.log(getCharCode('A')); // 65
console.log(getCharCode('B')); // 66
console.log(getCharCode('B')); // 66

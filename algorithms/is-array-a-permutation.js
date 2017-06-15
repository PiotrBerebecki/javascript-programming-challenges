// A permutation is a sequence containing each element from 1 to N once, and only once.
// [1,2,3] is permutation
// [1,2,4] is not permutation because 3 is missing
// Write a function that returns 1 if array in permuation
// and 0 if array is not a permutation

const isPermutation = arr => {
  const trackerObj = arr.reduce((obj, n) => {
    obj[n] = true;
    return obj;
  }, {});

  const arrLen = arr.length;

  for (let i = 1; i <= arrLen; i++) {
    if (!trackerObj[i]) {
      return 0;
    }
  }

  return 1;
};

console.log(isPermutation([1, 2, 3, 5])); // 4

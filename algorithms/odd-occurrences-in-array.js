// Given and array
// - only numbers
// - odd length
// - all numbers will occur 2 times, apart from one number
// Find this odd number
// findOdd([1,2,3,1,2,1]) // 3

const findOdd = arr => {
  const qtts = {};
  arr.forEach(num => {
    if (!qtts[num]) {
      qtts[num] = 1;
    } else {
      delete qtts[num];
    }
  });
  return parseInt(Object.keys(qtts)[0], 10);
};

const arr1 = [1, 2, 3, 2, 1];

console.log(findOdd(arr1)); // 3

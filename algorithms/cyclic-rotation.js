// Given and array and a number k
// - array has only numbers 0-100
// - k is a number 0-100
// Move the array k places forward
// cyclicRotation([1,2,3], 1) // [3,1,2]
// cyclicRotation([1,2,3], 2) // [2,3,1]

const cyclicRotation = (arr, k) => {
  const rotated = [];
  const len = arr.length;
  arr.forEach((num, i) => {
    rotated[(i + k) % len] = num;
  });
  return rotated;
};

const arr1 = [1, 2, 3];

console.log(cyclicRotation(arr1, 1));

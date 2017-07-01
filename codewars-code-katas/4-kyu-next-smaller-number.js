// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits/javascript

// Find next smaller positive number
// console.log(nextSmaller(21)); // 12
// console.log(nextSmaller(201)); // 120
// console.log(nextSmaller(101)); // -1
// console.log(nextSmaller(9)); // -1

// innefficient solution
const nextSmaller = num => {
  const getMinNumArray = n => n.toString().split('').sort((a, b) => a - b);

  const minNumArr = getMinNumArray(num);
  console.log(minNumArr);
  const minNum = Number(minNumArr.join(''));

  for (let nextNum = num - 1; nextNum >= minNum; nextNum--) {
    // console.log(nextNum, getMinNumArray(nextNum));
    const nextNumMinArray = getMinNumArray(nextNum);
    if (nextNumMinArray.length < minNumArr.length) {
      return -1;
    }
    if (getMinNumArray(nextNum).every((n, idx) => n === minNumArr[idx])) {
      return nextNum;
    }
  }

  return -1;
};

console.log(nextSmaller(21)); // 12
console.log(nextSmaller(201)); // 120
console.log(nextSmaller(101)); // -1
console.log(nextSmaller(1027)); // -1
console.log(nextSmaller(9)); // -1

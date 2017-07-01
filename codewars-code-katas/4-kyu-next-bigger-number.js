// http://www.codewars.com/kata/next-bigger-number-with-the-same-digits

// Find next bigger number
// console.log(nextBigger(12)); // 21
// console.log(nextBigger(120)); // 201
// console.log(nextBigger(9)); // -1

const nextBigger = num => {
  const getMaxNumArray = n => n.toString().split('').sort((a, b) => b - a);

  const maxNumArr = getMaxNumArray(num);
  const maxNum = Number(maxNumArr.join(''));

  for (let nextNum = num + 1; nextNum <= maxNum; nextNum++) {
    if (getMaxNumArray(nextNum).every((n, idx) => n === maxNumArr[idx])) {
      return nextNum;
    }
  }

  return -1;
};

console.log(nextBigger(12)); // 21
console.log(nextBigger(120)); // 201
console.log(nextBigger(9)); // -1

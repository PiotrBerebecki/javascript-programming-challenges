// http://www.codewars.com/kata/sum-of-intervals/javascript

// Write a function called sumIntervals that accepts
// an array of intervals, and returns
// the sum of all the interval lengths.
// Overlapping intervals should only be counted once.

// const int1 = [[1, 4], [7, 10], [3, 5]]; // 7
// const int2 = [[1, 2], [6, 10], [11, 15]]; // 9
// const int3 = [[1, 20], [16, 19]]; // 19
// console.log(sumIntervals(int1));

const sumIntervals = intervals => {
  const intervalsCopy = intervals.slice(0);
  intervalsCopy.sort((a, b) => a[0] - b[0]);

  const overlapped = intervalsCopy.slice(1).reduce((acc, cur) => {
    if (cur[0] <= acc[acc.length - 1][1]) {
      if (cur[1] > acc[acc.length - 1][1]) {
        acc[acc.length - 1][1] = cur[1];
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, intervalsCopy.slice(0, 1));

  return overlapped.reduce((acc, cur) => {
    return acc + cur[1] - cur[0];
  }, 0);
};

const int1 = [[1, 4], [7, 10], [3, 5]]; // 7
const int2 = [[1, 2], [6, 10], [11, 15]]; // 9
const int3 = [[1, 20], [16, 19]]; // 19
console.log(sumIntervals(int1));

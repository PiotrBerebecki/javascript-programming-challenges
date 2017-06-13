// https://codepen.io/PiotrBerebecki/pen/bReLWZ
// find the length of the longest chain of zeros in a string of ones and zeros
// the gap needs to be surrounded by ones on both ends

const binaryGap = s => {
  const regex = /(?:1)(0+)(?=1)/g;
  let match;
  let matches = [];
  
  while (match = regex.exec(s)) {
    matches.push(match[1]);
  }
  
  if (matches.length === 0) {
    return 0;
  }
  
  return matches.reduce((acc, group) => {
    return Math.max(acc, group.length);
  }, 0);
}

// const binaryGap = s => {
//   const regex = /(?:1)(0+)(?=1)/g;
//   let match;
//   let matches = [];
  
//   while (match = regex.exec(s)) {
//     matches.push(match[1]);
//   }
  
//   if (matches.length === 0) {
//     return 0;
//   }
  
//   return Math.max(...matches.map(el => el.length));
// }

const t0 = performance.now();
binaryGap('0100100010');
const t1 = performance.now();
console.log('Function takes', Math.round((t1-t0) * 1000)/1000, 'ms');

console.log(binaryGap('0100100010')); // 3

// the solution uses the idea of captering and non-capturing groups

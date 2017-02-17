console.clear();

/*
---------------------------------------------------------
7 kyu
Mumbling
http://www.codewars.com/kata/mumbling/javascript
---------------------------------------------------------

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/



// ------------------------------------------------------
console.time('fn')

function accum(s) {
  return s.toLowerCase()
          .split('')
          .map((char, idx) => `${char.toUpperCase()}${char.repeat(idx)}`)
          .join('-');
}

console.log(accum('abcd'));

console.timeEnd('fn');



// ------------------------------------------------------
let t1 = performance.now();

function accum2(s) {
  return s.toLowerCase()
          .split('')
          .map((char, idx) => `${char.toUpperCase()}${Array(idx+1).join(char)}`)
          .join('-');
}

let t2 = performance.now();
console.info(accum2('abcd'), 'Time', t2 - t1);

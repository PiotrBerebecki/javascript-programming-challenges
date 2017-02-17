console.clear();


/*
---------------------------------------------------------
7kyu
Triangular Treasure
http://www.codewars.com/kata/triangular-treasure/javascript
---------------------------------------------------------

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *

You need to return the nth triangular number. You should return 0 for out of range values:

  triangular(0)==0,
  triangular(1)==1,
  triangular(2)==3,
  triangular(3)==6,
  triangular(4)==10,
  triangular(-10)==0
*/



// ------------------------------------------------------
console.time('triangular')
function triangular(n) {
  return n > 0 ? (n * (n + 1)) / 2 : 0;
}
console.log(triangular(3))
console.timeEnd('triangular')




// ------------------------------------------------------
let t1 = performance.now();

function triangular2(n) {
  if (n === 0) {
    return 0;
  }
  return n + triangular2(n - 1);
}

let t2 = performance.now();
console.info('Result', triangular2(3), 'Time', t2 - t1);




// ------------------------------------------------------
t1 = performance.now();

function triangular3(n) {
  let res = 0;
  while (n > 0) {
    res += n;
    n--;
  }
  return res;
}

t2 = performance.now();

console.info('Result', triangular3(3), 'Time', t2 - t1);

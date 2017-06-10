// http://www.codewars.com/kata/invert-values/javascript
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([0, 1,-2,3,-4,5]) == [0,-1,2,-3,4,-5]
// invert([]) == []

const invert = arr => arr.map(n => -n || n);

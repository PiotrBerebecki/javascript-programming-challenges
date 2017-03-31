/*
http://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/javascript

Your task is to make two functions, max and min that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
Notes

You may consider that there will not be any empty arrays/vectors.
*/


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

const min2 = (list) => Math.min.apply(null, list);
const max2 = (list) => Math.max.apply(null, list);

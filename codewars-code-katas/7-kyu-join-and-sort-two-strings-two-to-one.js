/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

a = "ab"
b = "ad"
longest(a, b) -> "abd"

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


const longest = (s1, s2) => {
  return (s1 + s2)
    .split('')
    .sort()
    .filter((el,idx,arr) => idx === arr.lastIndexOf(el))
    .join('');
};


const longest2 = (s1, s2) => {
  return [...new Set(s1 + s2)]
    .sort()
    .join('');
};


const longest3 = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

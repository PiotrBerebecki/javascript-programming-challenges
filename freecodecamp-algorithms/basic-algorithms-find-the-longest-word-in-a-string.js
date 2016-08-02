console.clear();

/*
-----------------------------------------
Basic Algorithms - Find the longest word in a string
-----------------------------------------

findLongestWord('The quick brown fox jumped over the lazy dog') // 6.
findLongestWord('May the force be with you') // 5.
findLongestWord('Google do a barrel roll') // 6.
findLongestWord('What is the average airspeed velocity of an unladen swallow') // 8.
findLongestWord('What if we try a super-long word such as otorhinolaryngology') // 19.
*/



// --------------------------------------
// reduce
function findLongestWord(s) {
  return s.split(' ').reduce((prev, curr) => Math.max(prev, curr.length), 0);
}

console.log(  findLongestWord('The quick brown fox jumped over the lazy dog')  ); // 6



// --------------------------------------
// sort
function findLongestWord2(str) {
  return str.split(' ').sort((a,b) => b.length - a.length)[0].length;
}



// --------------------------------------
// recursion
function findLongestWord3(str) {
  str = str.split(' ');
  if (str.length == 1) {return str[0].length;}
  // If the first element's length is greater than the second element's (or equal) 
  // remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1,1);
    return findLongestWord3(str.join(' '));
  }
  // If the second element's length is greater thant the first element's start 
  // call the function past the first element 
  if (str[0].length <= str[1].length) {
    // from the first element to the last element.
    return findLongestWord3(str.slice(1).join(' '));
  }
}
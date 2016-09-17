console.clear();

/*
-----------------------------------------
7 kyu
Sort Numbers in Array
-----------------------------------------

Sorts the array of numbers in ascending order.
If the function passes in an empty array or null value 
then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/



// --------------------------------------
function solution(nums) {
  return (nums || []).sort((a, b) => a - b);
}

console.log(  JSON.stringify(solution([3,1,3,4,3,2]))  ); // [1,2,3,3,3,4]
console.log(  JSON.stringify(solution([]))  ); // []
console.log(  JSON.stringify(solution(null))  ); // []



// --------------------------------------
function solution2(nums) {
  return Array.isArray(nums) ? nums.sort((a, b) => a - b) : [];
}



// --------------------------------------
function solution3(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}
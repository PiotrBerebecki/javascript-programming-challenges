console.clear();

/*
-----------------------------------------
4 kyu
Find the most frequently occurring elements in arrays
-----------------------------------------

Input: A 5-day JSON weather forecast which consist of 5 arrays.
Each of the 5 arrays includes 8 numbers which represent 3-hourly 
temperature forecast for a given day.

Output: An array which includes the most frequent number (temperature) 
from each of the 5 arrays (days). In case there is a tie, return the value 
present later in a given array (day).

Example input:

var forecast_01 = {
  "temperature": [
    [15,17,19,21,21,21,20,16],
    [16,17,22,22,22,22,20,16],
    [12,17,19,20,20,20,20,18],
    [14,15,19,19,20,22,18,17],
    [15,17,24,24,24,20,20,20]
  ]
};

Example output:

getMostFrequent(forecast_01)  // should return [21,22,20,19,20]

Explanation of the example above:

The output is [21,22,20,19,20] because given 5 arrays,
[15,17,19,21,21,21,20,16] 21 is the most frequent in 1st array
[16,17,22,22,22,22,20,16] 22 is the most frequent in 2nd array
[12,17,19,20,20,20,20,18] 20 is the most frequent in 3rd array
[14,15,19,19,20,22,18,17] 19 is the most frequent in 4th array
[15,17,24,24,24,20,20,20] 24 and 20 appear 3 times each in 5th array 
so 20 is included in the output as the last 20 appears later than the last 24.
*/



var forecast_01 = {
  "temperature": [
    [15,17,19,21,21,21,20,16],
    [16,17,22,22,22,22,20,16],
    [12,17,19,20,20,20,20,18],
    [14,15,19,19,20,22,18,17],
    [15,17,24,24,24,20,20,20]
  ]
};



// --------------------------------------
function getMostFrequent(json) {
  var mostFrequent = [];
  for (var i = 0; i < json.temperature.length; i++) {
    mostFrequent.push( json.temperature[i].sort(function(a, b) {
      return json.temperature[i].filter(function(el) {return el === a;}).length
           - json.temperature[i].filter(function(el) {return el === b;}).length
    }).pop() );  // get only the last element in the array (the most frequent one)
  }
  return mostFrequent;
}

console.log(  JSON.stringify(getMostFrequent(forecast_01))  ); // should return [21,22,20,19,20]



// --------------------------------------
// How to sort an array so that the most frequent element is put to the end.
function getMostFrequent2(arr) {
  return arr.sort(function(a, b) { 
    return arr.filter(el => el === a).length - arr.filter(el => el === b).length;
  }); // add arr.pop() or arr.slice(-1) to return just the most frequent element
}

// console.log(  getMostFrequent2([3,4,3])  );

// The approach above relies on sorting the array based on the number of elements which are the same.
// If one element occurs more often than another one (the length of its array will be higher than
// the length of an array with another one),  then the difference will be less than 0.
// If sort(a,b), a - b < 0 then a is sorted to a lower index than b                => a,b
// If sort(a,b), a - b > 0 then b is sorted to a lower index than a                => b,a
// If sort(a,b), a - b = 0 then leave a and b unchanged with respect to each other => a,b 

// For example when an array [3,4,3] is tested,
// then when sort() is applied then the first pair tested is 3 and 4 (a and b),
// [3,3].length -  [4].length will return 1.
// Positive number means than order will be descending.

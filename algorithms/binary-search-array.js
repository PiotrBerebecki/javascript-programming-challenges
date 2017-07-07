// find index of an element in a sorted array
// return -1 if element is not found
// use binary search - O (log n) algorithm

const binarySearch = (arr, searched) => {
  let startIndex = 0;
  let stopIndex = arr.length - 1;
  let middleIndex = Math.floor((startIndex + stopIndex) / 2);

  while (arr[middleIndex] !== searched && startIndex < stopIndex) {
    if (searched < arr[middleIndex]) {
      stopIndex = middleIndex - 1;
    } else if (searched > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((startIndex + stopIndex) / 2);
  }

  return arr[middleIndex] === searched ? middleIndex : -1;
};

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr1, 5)); // 5
console.log(binarySearch(arr1, 3)); // 3
console.log(binarySearch(arr1, 4)); // 4
console.log(binarySearch(arr1, 11)); // -1
console.log(binarySearch(arr1, -2)); // -1

const arr2 = [0, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(binarySearch(arr2, 1)); // -1
console.log(binarySearch(arr2, 8)); // -1

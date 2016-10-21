// console.clear();

/*
-----------------------------------------
7 kyu Equalize the array!
-----------------------------------------

Input :: [10,20,25,0]
Output :: ["+0", "+10", "+15", "-10"]

Input :: []
Output :: []

Input :: [10,20,25,0]
Output :: ["+0", "+10", "+15", "-10"]
*/



// --------------------------------------
function equalize(array) {
  return array.map((num, ind, arr) => {
    return (String(num - arr[0])).replace(/^(\d)/, '+$1');
  });
}

console.log(  equalize([10,20,25,0])  ); // ["+0", "+10", "+15", "-10"]
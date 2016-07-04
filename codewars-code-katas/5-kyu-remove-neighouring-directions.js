console.clear();

/*
-----------------------------------------
5 kyu
Remove neighouring directions (aka Directions reduction)
-----------------------------------------

Remove opposite directions if they are next to each other
(even after other directions are removed).

Examples:
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// ["WEST"]

dirReduc(["NORTH", "SOUTH", "EAST", "WEST"])
// []

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])
// []

dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
// ["NORTH", "WEST", "SOUTH", "EAST"]
*/



// --------------------------------------
// recursive
function dirReduc(arr) {
  var directions = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "WEST": "EAST",
    "EAST": "WEST",
  }  
  
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === directions[arr[i+1]]) {
      arr.splice(i,2);
      return dirReduc(arr)
    }
  }  
  return arr  
}

console.log(  JSON.stringify(dirReduc(
  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
))   );
// ["WEST"]
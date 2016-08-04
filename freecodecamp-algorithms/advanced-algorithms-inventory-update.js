console.clear();

/*
-----------------------------------------
Advanced Algorithms - Inventory update
-----------------------------------------

Compare and update the inventory stored in a 2D array against 
a second 2D array of a fresh delivery. 

Update the current existing inventory item quantities (in arr1). 

If an item cannot be found, add the new item and quantity into the 
inventory array. 

The returned inventory array should be in alphabetical order by item.

Look through an array of new products, in the format: [quantity, name].

Return an array containing updated quantities for each newItem that 
already existed, and any new products.
*/



// --------------------------------------
function updateInventory(curInv, newInv) {
  var newAdded;
  newInv.forEach(function(newItem, newInd) {
    newAdded = false;
    curInv.forEach(function(curItem) {
      if (newItem[1] === curItem[1]) {
        curItem[0] += newItem[0];
        newAdded = true;
      }
    });
    if (newAdded === false) {curInv.push(newItem);}
  }); 
  return curInv.sort((a,b) => a[1] < b[1] ? -1 : 1);
}

var newItems = [
  [1, 'Phone'],
  [1, 'Bag'],
  [1, 'Protein'],
  [6, 'Shoe'],
  [1, 'USB drive'],
];

var curItems = [
  [2, 'Phone'],
  [2, 'Laptop'],
  [1, 'Protein'],
  [2, 'Wallet'],
  [3, 'Bag'], 
];

console.log(  JSON.stringify(updateInventory(curItems, newItems))  );
// [[4,"Bag"],[2,"Laptop"],[3,"Phone"],[2,"Protein"],[6,"Shoe"],[1,"USB drive"],[2,"Wallet"]]
console.clear();

/*
-----------------------------------------
5 kyu
How many cakes from available ingredients (aks Pete, the baker)
-----------------------------------------

How many cakes can be prepared based on the recipe and available ingredients.

Write a function cakes(), which takes the recipe (object) and the available
ingredients (also an object) and returns the maximum number of cakes Pete 
can bake (integer). For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).

Ingredients that are not present in the objects, can be considered as 0.

Examples:
cakes({flour: 500, sugar: 200, eggs: 1}, 
{flour: 1000, sugar: 400, eggs: 2, milk: 200})  // 2

cakes({flour: 500, sugar: 200, eggs: 1}, 
{flour: 1200, sugar: 1200, eggs: 5, milk: 200});   // 2

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
{sugar: 500, flour: 2000, milk: 2000});  // 0
*/



// --------------------------------------
// reduce
function cakes(recipe, available) {
  return ~~(Object.keys(recipe).reduce(function(val, ingred) {
    return Math.min(available[ingred] / recipe[ingred || 0], val)
  }, Infinity));
}
// Math.floor can be used instead of ~~
// Number.MAX_VALUE can be used instead of Infinity

console.log(   cakes(
  {flour: 600, sugar: 200, eggs: 1}, 
  {flour: 1000, sugar: 400, eggs: 2, milk: 200}
)   ); // 1



// --------------------------------------
// two loops
function cakes2(recipe, available) {
  return ~~(Object.keys(recipe)
    .map(ingred => (available[ingred] / recipe[ingred]) || 0)
    .sort((a,b) => a-b)[0])
}



// --------------------------------------
// same as above
function cakes3(recipe, available) {
  var recipeKeys = Object.keys(recipe);
  var cakes = recipeKeys.map(function(ingred) {
    return (available[ingred] / recipe[ingred]) || 0
  }); 
  return ~~((cakes.sort((a,b) => a-b))[0]);
}
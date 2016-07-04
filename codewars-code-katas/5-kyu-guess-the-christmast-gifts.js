console.clear();

/*
-----------------------------------------
5 kyu
Guess The Christmast Gifts
-----------------------------------------

You will be given a wishlist (array), containing all possible Christmas gifts items.
Each item is in the format:
{name: "toy car", size: "medium", clatters: "a bit", weight: "medium"}.

You also get a list of presents (array), you see under the christmas tree, 
which have the following format each: 
{size: "small", clatters: "no", weight: "light"}

Your task is to create a list of all possible presents you might get.

Rules

Possible values for size: "small", "medium", "large"
Possible values for clatters: "no", "a bit", "yes"
Possible values for weight: "light", "medium", "heavy"
The return value must be an array of the names of items from your wishlist,
e.g. ["Toy Car", "Card Game"]
Don't add any item more than once to the result
The order of names in the returned array doesn't matter
It's possible, that multiple items from your wish list have the same attribute 
values. If they match the attributes of one of the presents, add all of them.

Example

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
*/



// --------------------------------------
function guessGifts(wishlist, presents) {
  return wishlist.filter(function(wish) {
    return presents.some(function(present) {
      return Object.keys(present).every(function(key) {
        return present[key] === wish[key];
      })
    })
  }).map(wish => wish.name);
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(  JSON.stringify(guessGifts(wishlist, presents))  );
// ["Toy Car", "Mini Puzzle"]



// --------------------------------------
// same as above but without Object.keys()
function guessGifts2(wishlist, presents) {
  return wishlist.filter(function(wish) {
    return presents.some(function(pres) {
      return wish.size == pres.size && wish.clatters == pres.clatters && wish.weight == pres  .weight;
    })
  }).map(wish => wish.name);
}
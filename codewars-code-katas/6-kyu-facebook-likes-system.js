console.clear();

/*
-----------------------------------------
6 kyu
Facebook likes system (aka Who likes it?)
-----------------------------------------


Implement the "like" system from Facebook.
Function likes must take an input array.
This contains the names of people who like an item.
It must return the display text as shown in the examples:
  
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"]
// must be "Alex, Jacob and 2 others like this"

For more than 4 names, the number in and 2 others simply increases.
 */



// --------------------------------------
// Switch
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

console.log( likes([]) ); // no one likes this
console.log( likes(['Peter']) ); // Peter likes this
console.log( likes(['Jacob', 'Alex']) ); // Jacob and Alex like this
console.log( likes(['Max', 'John', 'Mark']) ); // Max, John and Mark like this
console.log( likes(['Alex', 'Jacob', 'Mark', 'Max']) ); // Alex, Jacob and 2 others like this



// --------------------------------------
// Template and replace
function likes2(names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}



// --------------------------------------
// Not very readable
function likes3(names) {
  var output = names.reduce(function(prev, curr, i, arr) {
    if (i === 0 && arr.length === 1) {
      return curr + ' likes this';
    }
    if (i === 0) {
      return curr;
    }
    if ( i === arr.length - 1 && arr.length < 4) {
      return prev + ' and ' + curr + ' like this';
    }
    if (i === 1) {
      return prev + ', ' + curr;
    }
    if (i >= 2) {
      return prev;
    }
  }, 'no one likes this')
  return names.length < 4 ? output : output + ' and ' + (names.length - 2) + ' others like this';
}
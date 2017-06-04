// http://www.codewars.com/kata/map-keys-of-an-object/train/javascript
// Write a function called mapKeys, which takes in a function and an object and returns a new object with the function applied to its keys.
// mapKeys(toLower, {A: 1, B: 2}); // {a: 1, b: 2}
// mapKeys(toUpper, {c: 1, d: 2}); // {C: 1, D: 2}


const mapKeys = (fn, obj) => {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[fn(key)] = obj[key];
    return newObj;
  }, {})
};

const mapKeys2 = (fn, obj) => {
  const newObj = {};
  for (const key in obj) {
    Reflect.set(newObj, fn(key), obj[key])
  }
  return newObj;
};


const toLower = str => str.toLowerCase();
const toUpper = str => str.toUpperCase();

console.log(mapKeys(toLower, {A: 1, B: 2})); // {a: 1, b: 2}
console.log(mapKeys(toUpper, {c: 1, d: 2})); // {C: 1, D: 2}

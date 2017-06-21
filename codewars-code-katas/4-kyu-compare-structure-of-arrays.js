// http://www.codewars.com/kata/nesting-structure-comparison/javascript
//
// Compore the structure of nexted arrays
//
// console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true
// console.log([[], [[]]].sameStructureAs([[], [[]]])); // true
// console.log([[], [[]]].sameStructureAs([[], [[[]]]])); // false
// console.log([[1], []].sameStructureAs([[], []])); // false
// console.log([1, 2, 'hi'].sameStructureAs([1, 2, [3, 4]])); // false

Array.prototype.sameStructureAs = function(other) {
  return (
    Array.isArray(other) &&
    this.every((el, idx) => {
      return (
        Array.isArray(el) === Array.isArray(other[idx]) &&
        (Array.isArray(el)
          ? el.length === other[idx].length && el.sameStructureAs(other[idx])
          : true)
      );
    })
  );
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true
console.log([[], [[]]].sameStructureAs([[], [[]]])); // true
console.log([[], [[]]].sameStructureAs([[], [[[]]]])); // false
console.log([[1], []].sameStructureAs([[], []])); // false
console.log([1, 2, 'hi'].sameStructureAs([1, 2, [3, 4]])); // false

console.clear();

/*
-----------------------------------------
6 kyu
Alternating Loops
-----------------------------------------

Write function combine() that combines arrays by alternatively taking elements passed to it.
Arrays can have different lengths.

E.g.

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
*/



// --------------------------------------
function combine() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var max = arrays.reduce(function (n, arr) {
    return Math.max(n, arr.length);
  }, 0);
  var combinedArrays = [];
  for (var i = 0; i < max; i++) {
    for (var _iterator = arrays, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var arr = _ref;

      if (i in arr) {
        combinedArrays.push(arr[i]);
      }
    }
  }
  return combinedArrays;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3]));



// --------------------------------------
function combine2(array) {
  var args = Array.prototype.slice.call(arguments);
  var longestArray = args.map(function (x) {
    return x.length;
  }).sort(function (a, b) {
    return b - a;
  })[0];
  var combinedArrays = [];
  for (var i = 0; i < longestArray; i++) {
    for (var j = 0; j < args.length; j++) {
      if (args[j][i]) {
        combinedArrays.push(args[j][i]);
      }
    }
  }
  return combinedArrays;
}
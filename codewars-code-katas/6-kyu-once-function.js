// http://www.codewars.com/kata/once/train/javascript
// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect

function once(fn) {
  return function() {
    let fnNew = fn;
    fn = null;
    if (fnNew) {
      return fnNew.apply(null, arguments);  
    }
  }
}

function once2(fn) {
  return (...args) => {
    let fnNew = fn;
    fn = null;
    if (fnNew) {
      return fnNew(...args);
    }
  }
}

function once3(fn) {
  let wasCalled = false;
  return (...args) => {
    if (wasCalled) { return; }
    wasCalled = true;
    return fn(...args)
  }
}

const logOnce = once(console.log)
console.log( logOnce("foo") ) // -> "foo"
console.log( logOnce("bar") ) // -> no effect

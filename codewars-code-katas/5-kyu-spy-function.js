// In testing, a spy function is one that keeps track
// of various metadata regarding its invocations.
// Some examples of properties that a spy might track include:
//
// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error
// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:
//
// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false
// Below is a specific example of how spyOn might work in the wild.
//
// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );
//
// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

function spyOn(fn) {
  let callCount = 0;
  const returnedValues = [];
  const usedArgs = [];

  function spy(...args) {
    callCount++;
    usedArgs.push(...args);

    const returnValue = fn.apply(this, args);
    returnedValues.push(returnValue);
    return returnValue;
  }

  spy.callCount = function() {
    return callCount;
  };

  spy.returned = function(val) {
    return returnedValues.some(returned => returned === val);
  };

  spy.wasCalledWith = function(arg) {
    return usedArgs.some(used => used === arg);
  };

  return spy;
}

function returns1() {
  return 1;
}
var spy = spyOn(returns1);

console.log(spy.callCount()); // 0
console.log(spy.returned()); // false
console.log(spy.wasCalledWith('hello')); // false

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount()); // 2
console.log(spy.returned(1)); // true
console.log(spy.wasCalledWith('hi')); // true
console.log(spy.wasCalledWith('bye')); // true

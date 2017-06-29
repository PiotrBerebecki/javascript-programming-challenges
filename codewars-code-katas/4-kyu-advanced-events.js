// https://www.codewars.com/kata/advanced-events/javascript
// Your task is to implement an Event constructor function for creating event objects
//
// var event = new Event();
// which comply to the following:
//
// an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers
// .subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them
// multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler
// an event object should have an .emit() method which must invoke all the handlers with the arguments provided
// .emit() should use its own invocation context as handers' invocation context
// the order of handlers invocation must match the order of subscription
// handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit call should not be affected
//
// subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)

// function l(arr) { arr.push('l'); }
// function o(arr) { arr.push('o'); }
//
// const e = new Event();
//
// let bucket = [];
//
// e.subscribe(l, o, l);
// e.emit(bucket);
// console.log(bucket); // ['l', 'o', 'l']
//
// e.unsubscribe(o, l);
// bucket = [];
// e.emit(bucket);
// console.log(bucket); // ['l']

function Event() {
  const subscribers = [];

  Event.prototype.subscribe = function(...args) {
    args.forEach(arg => {
      if (typeof arg === 'function') {
        subscribers.push(arg);
      }
    });
  };

  Event.prototype.unsubscribe = function(...args) {
    args.forEach(arg => {
      if (typeof arg === 'function') {
        const lastIndex = subscribers.lastIndexOf(arg);
        if (lastIndex >= 0) {
          subscribers.splice(lastIndex, 1);
        }
      }
    });
  };

  Event.prototype.emit = function(...args) {
    subscribers.slice().forEach(subscriber => {
      subscriber.apply(this, args);
    });
  };
}

function l(arr) {
  arr.push('l');
}
function o(arr) {
  arr.push('o');
}

const e = new Event();

let bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);
console.log(bucket); // ['l', 'o', 'l']

e.unsubscribe(o, l);
bucket = [];
e.emit(bucket);
console.log(bucket); // ['l']

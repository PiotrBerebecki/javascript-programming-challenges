function compose(...fns) {
  return function(result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
      // result = fns[i](result);
    }
    return result;
  }
}


const compose2 = (...fns) => fns.reduce((acc, fn) => num => acc(fn(num)));


const compose3 = function(...fns) {
  return fns.reduce(function(acc, fn) {
    return function(num) {
      return acc(fn(num));
    }
  });
}


var number = compose2(Math.abs, Math.ceil); // compose from right to left
console.log(  number(-2.5)  ); // 2

console.clear();

const debounce = (fn, delay) => {
  let timer;

  return function(...args) {
    clearTimeout(timer);

    timer = setTimeout(function() {
      fn(...args);
    }, delay);
  };
};

// const hello = (name, day) => {
//   console.log('My name is', name, 'Today is', day);
// };
// const handler = debounce(hello, 100);
// handler('Bob', 'Monday');
// handler('Bob', 'Tuesday');
// handler('Bob', 'Wednesday'); // only this call should invoke hello

async function seq([promise, ...promises]) {
  if (!promise) {
    return [];
  }
  return [await promise, ...(await seq(promises))];
}

async function seq2(promises) {
  if (promises.length === 0) {
    return [];
  }
  return [await promises[0], ...(await seq(promises.slice(1)))];
}

// let a = Promise.resolve('a');
// let b = Promise.resolve('b');
// let c = Promise.resolve('c');
// async function test() {
//   console.log(await seq([a, b, c])); // ['a', 'b', 'c']
//   console.log(await seq([a, c, b])); // ['a', 'c', 'b']
// }
// test();

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

const hello = (name, day) => {
  console.log('My name is', name, 'Today is', day);
};

const handler = debounce(hello, 100);
handler('Bob', 'Monday');
handler('Bob', 'Tuesday');
handler('Bob', 'Wednesday'); // only this call should invoke hello

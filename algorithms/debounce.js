// https://codepen.io/PiotrBerebecki/pen/BZzxGr
// write a debounce function that can be executed as follows:
// document.querySelector('button').addEventListener('click', debounce(log, 500));

document.querySelector('button').addEventListener('click', debounce3(log, 500));

function log(e) {
  console.log('clicked', this, e);
}


function debounce(fn, delay) {
  let timer;
  
  return function(...args) {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}


// manualy binding 'this' with a closure
function debounce2(fn, delay) {
  let timer;
  
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}


// manualy binding 'this' with .bind
function debounce3(fn, delay) {
  let timer;
  
  return function(...args) {
    clearTimeout(timer);
    
    timer = setTimeout(function() {
      fn.apply(this, args);
    }.bind(this), delay);
  }
}

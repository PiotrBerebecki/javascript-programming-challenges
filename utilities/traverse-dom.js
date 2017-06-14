// https://codepen.io/PiotrBerebecki/pen/BZzQvX?editors=1010

// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:
// a DOM element
// a callback function (that takes a DOM element as its argument)

// example dom nodes
// <div>
//   <h1>Title</h1>
//   <p>
//     <span>Hi</span>
//     <i>Hello</i> 
//   </p>
// </div>

const traverse = (el, cb) => {
  cb(el);
  Array.from(el.children).forEach(child => {
    traverse(child, cb);
  });
};

const log = el => {
  console.log('logging', el)
}

console.log(  traverse(document.querySelector('div'), log)  );

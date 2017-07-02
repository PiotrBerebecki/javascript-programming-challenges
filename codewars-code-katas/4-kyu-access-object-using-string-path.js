// https://www.codewars.com/kata/name-your-space/javascript

// const stuff = {};
//
// namespace(stuff, 'moreStuff.name', 'the stuff');
// // console.log(stuff);
// // results in {moreStuff: {name: 'the stuff'}}
// console.log(namespace(stuff, 'moreStuff.name')); // returns 'the stuff'
// console.log(namespace(stuff, 'otherStuff.id')); // returns undefined

const namespace = (root, path, value) => {
  const props = path.split('.');

  function getValueRecurs(obj, props) {
    if (obj === undefined) {
      return undefined;
    }
    if (props.length === 1) {
      return obj[props[0]];
    }
    return getValueRecurs(obj[props[0]], props.slice(1));
  }

  if (value === undefined) {
    return getValueRecurs(root, props);
  }

  props.reduce((acc, cur, idx) => {
    acc[cur] = idx === props.length - 1 ? value : {};
    return acc[cur];
  }, root);
};

const stuff = {};

namespace(stuff, 'moreStuff.name', 'the stuff');
console.log(stuff); // results in {moreStuff: {name: 'the stuff'}}
console.log(namespace(stuff, 'moreStuff.name')); // returns 'the stuff'
console.log(namespace(stuff, 'otherStuff.id')); // returns undefined

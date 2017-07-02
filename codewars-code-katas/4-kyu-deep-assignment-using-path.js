// var obj = {};
// var str = 'asdf[0][1][1].sss.ddd';
// var value = 2;
// console.log(deepAssignment(obj, str, value));
// obj.asdf[0][1][1].sss.ddd === 2;

// the function is not pure and test will check whether
// all props are kept saved on the object

const deepAssignment = (obj, keyPath, value) => {
  const props = keyPath
    .split(/(?:\.|\[|\])/)
    .filter(prop => prop !== '')
    .map(prop => (!isNaN(prop) ? Number(prop) : prop));

  (function addPropsRecur(object, props, value) {
    if (props.length <= 1) {
      object[props[0]] = value;
      return;
    }
    if (typeof props[1] === 'number') {
      object[props[0]] = [];
    } else {
      object[props[0]] = Object.assign({}, object[props[0]]);
    }
    addPropsRecur(object[props[0]], props.slice(1), value);
  })(obj, props, value);

  return obj;
};

var obj = {};
var str = 'asdf[0][1][1].sss.ddd';
var value = 2;
console.log(deepAssignment(obj, str, value));
// obj.asdf[0][1][1].sss.ddd === 2;

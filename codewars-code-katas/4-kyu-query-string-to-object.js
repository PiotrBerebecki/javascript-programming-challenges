// http://www.codewars.com/kata/objectify-a-url-query-string/javascript

// Convert a URL query string into a nested object.
// The query string will contain parameters that may
// or may not have embedded dots ('.'),
// and these dots will be used to break up
// the properties into the nested object.
//
// You will receive a string input that looks something like this:
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:
//
// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
// You can expect valid input. You won't see input like:
//   // This will NOT happen
//   foo=1&foo.bar=2
// All properties and values will be strings —
// and the values should be left as strings to pass the tests.
// Make sure you decode the URI components correctly

function convertQueryToMap(query) {
  const queries = query.split('&').map(query => {
    const [keys, value] = query.split('=');
    return {
      keys: keys.split('.'),
      value: value === undefined ? undefined : decodeURIComponent(value),
    };
  });

  function addKeys(obj, keys, value) {
    if (keys.length === 1) {
      obj[keys[0]] = value;
      return obj;
    }
    obj[keys[0]] = Object.assign({}, obj[keys[0]]);
    addKeys(obj[keys[0]], keys.slice(1), value);
  }

  const map = {};

  queries.forEach(query => {
    addKeys(map, query.keys, query.value);
  });

  return map;
}

console.log(
  convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith')
);

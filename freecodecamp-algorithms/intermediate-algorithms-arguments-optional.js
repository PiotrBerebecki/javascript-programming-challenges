console.clear();

/*
-----------------------------------------
Intermediate Algorithms -  Where art thou
-----------------------------------------

Write an algorithm that will take an array of objects for the first argument 
and an object for the second argument.

The algorith should return a new array with all the objects that match all 
the properties and values in the object passed as second argument.

Example:

var actors = [
  { first: 'Clint', last: 'Eastwood', city: 'LA' },
  { first: 'John', last: 'Wayne'},
  { first: 'John', last: 'Travolta', city: 'NY' }
]

var searched = { first: 'John', city: 'NY' }

whereAreYou(actors, searched)  // [{"first":"John","last":"Travolta","city":"NY"}]

Here are some helpful terms:

Global Object
Object.hasOwnProperty()
Object.keys()
*/



var actors = [
  { first: 'Clint', last: 'Eastwood', city: 'LA' },
  { first: 'John', last: 'Wayne'},
  { first: 'John', last: 'Travolta', city: 'NY' }
];

var searched = { first: 'John', city: 'NY' };



// --------------------------------------
function whereAreYou(collection, query) {
  return collection.filter(function(el) {
    return Object.keys(query).every(function(key) {
      return el.hasOwnProperty(key) && el[key] === query[key];
    });
  });
}

console.log(  JSON.stringify(whereAreYou4(actors, searched))  );

// To check whether an object has a property defined on itself 
// and not somewhere on its prototype chain, it is necessary to use 
// the hasOwnProperty method which all objects inherit from Object.prototype.


// --------------------------------------
// as above
function whereAreYou2(collection, query) {
  var queryKeys = Object.keys(query);
  
  return collection.filter(function(el) {
    return queryKeys.every(function(key) {
      return el.hasOwnProperty(key) && el[key] === query[key];
    });
  });
}



// --------------------------------------
// as above
function whereAreYou3(collection, query) {
  var queryKeys = Object.keys(query);

  return collection.filter(function(el) {
    return queryKeys.every(function(key) {
      if ( el.hasOwnProperty(key) && el[key] === query[key] ) {
        return true;
      }
    });
  });
}



// --------------------------------------
// for loop
function whereAreYou4(collection, query) {
  var queryKeys = Object.keys(query);

  return collection.filter(function(el) {
    for (var i = 0; i < queryKeys.length; i++) {
      if ( !el.hasOwnProperty(queryKeys[i]) || el[queryKeys[i]] !== query[queryKeys[i]] ) {
        return false;
      }
    }
    return true;   
  });
}



// --------------------------------------
// reduce
function whereAreYou5(collection, query) {
  var queryKeys = Object.keys(query);

  return collection.filter(function(el) {
    return queryKeys.reduce(function(res, key) {
      return el.hasOwnProperty(key) && el[key] === query[key];
    }, false);
  });
}
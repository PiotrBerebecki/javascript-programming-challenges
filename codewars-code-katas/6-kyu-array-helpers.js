console.clear();

/*
-----------------------------------------
6 kyu
Array Helpers
-----------------------------------------

This kata is designed to test your ability to extend the functionality of 
built-in ruby classes. In this case, we want you to extend the built-in 
Array class with the following methods: 
square(), cube(), average(), sum(), even() and odd().

Examples:

var numbers = [1, 2, 3, 4, 5];
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
*/



// --------------------------------------
Array.prototype.square  = function() {return this.map(el => el * el);};

Array.prototype.cube    = function() {return this.map(el => el * el * el);};

Array.prototype.average = function() {return this.sum() / this.length;};

Array.prototype.sum     = function() {return this.reduce((sum, curr) => sum + curr, 0);};

Array.prototype.even    = function() {return this.filter(el => el % 2 === 0);}; // or
Array.prototype.even    = function() {return this.filter(el => !(el % 2));};

Array.prototype.odd     = function() {return this.filter(el => el % 2 != 0);}; // or
Array.prototype.odd2     = function() {return this.filter(el => el % 2);};



var numbers = [1, 2, 3, 4, 5]
console.log(  numbers.square()  );  // [1, 4, 9, 16, 25]
console.log(  numbers.cube()  );    // [1, 8, 27, 64, 125]
console.log(  numbers.average()  ); // 3
console.log(  numbers.sum()  );     // 15
console.log(  numbers.even()  );    // [2, 4]
console.log(  numbers.odd()  );     // [1, 3, 5]



// --------------------------------------
Object.assign(Array.prototype, {
  square()  {return this.map(el => el * el);},
  cube()    {return this.map(el => el * el * el);},
  average() {return this.sum() / this.length;},
  sum()     {return this.reduce((sum, curr) => sum + curr, 0);},
  even()    {return this.filter(el => el % 2 === 0);},
  odd()     {return this.filter(el => el % 2 != 0);}
});

// The Object.assign() method is used to copy the values of all enumerable 
// own properties from one or more source objects to a target object.
// It will return the target object.

// Example:

// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }
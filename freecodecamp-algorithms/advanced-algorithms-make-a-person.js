console.clear();

/*
-----------------------------------------
Advanced Algorithms - Make a person
-----------------------------------------

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

TRICKY BIT:
Object.keys(bob).length should return 6 (not 7).

The methods that take an argument must accept only one argument and 
it has to be a string.

These methods must be the only available means of interacting with the object.

Here are some helpful terms:
Closures
Object Model
*/



// --------------------------------------
var Person = function(firstAndLast) {
  var fullName = firstAndLast; // instead of this.fullname = firstAndLast;
                               // so that object has only 6 keys
  this.getFirstName = function()     {return fullName.split(' ')[0];};
  this.getLastName  = function()     {return fullName.split(' ')[1];};
  this.getFullName  = function()     {return fullName;};
  this.setFirstName = function(name) {fullName = name + ' ' + fullName.split(' ')[1];};
  this.setLastName  = function(name) {fullName = fullName.split(' ')[0] + ' ' + name;};
  this.setFullName  = function(name) {fullName = name;};
};



// --------------------------------------
// alternative solution
var Person2 = function(firstAndLast) {
  nameArr = firstAndLast.split(' ');
  this.getFirstName = function()             {return nameArr[0];};
  this.getLastName  = function()             {return nameArr[1];};
  this.getFullName  = function()             {return nameArr.join(' ');};
  this.setFirstName = function(first)        {nameArr[0] = first;};
  this.setLastName  = function(last)         {nameArr[1] = last;};
  this.setFullName  = function(firstAndLast) {nameArr = firstAndLast.split(' ');};
};


var bob = new Person('Bob Ross');
console.log(  bob.getFirstName()  ) //should return "Bob".

console.log(  Object.keys(bob).length  ) //should return 6.
// console.log(  bob instanceof Person  ) // should return true.
// console.log(  bob.firstNameh  ) //should return undefined.
// console.log(  bob.lastNameh  ) //should return undefined.
// console.log(  bob.getLastName()  ) //should return "Ross".
// console.log(  bob.getFullName()  ) //should return "Bob Ross".

// bob.setFirstName("Haskell")
// console.log(  bob.getFullName()  ) //should return "Haskell Ross" after bob.setFirstName("Haskell").

// bob.setLastName("Curry")
// console.log(  bob.getFullName()  ) //should return "Haskell Curry" after bob.setLastName("Curry").

// bob.setFullName("Haskell Curry")
// console.log(  bob.getFullName()  )//should return "Haskell Curry" after bob.setFullName("Haskell Curry").

// bob.setFullName("Haskell Curry")
// console.log(  bob.getFirstName()  ) //should return "Haskell" after bob.setFullName("Haskell Curry").

// bob.setFullName("Haskell Curry")
// console.log(  bob.getLastName()  ); //should return "Curry" after bob.setFullName("Haskell Curry").
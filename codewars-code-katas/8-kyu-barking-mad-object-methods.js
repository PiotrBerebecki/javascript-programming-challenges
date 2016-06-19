console.clear();

/*
----------------------------------------
8 kyu
Barking mad - Object methods
----------------------------------------

Teach snoopy and scooby doo how to bark using object methods.
Using the existing code only snoopy can bark and not scooby doo.
Use method prototypes to enable all Dogs to bark.

function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
*/



// -------------------------------------
function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = function() {
  return "Woof";
};

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

console.log(snoopy.bark());
console.log(scoobydoo.bark());
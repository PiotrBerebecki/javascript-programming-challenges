console.clear();

/*
-----------------------------------------
8 kyu
Object Oriented Piracy
-----------------------------------------

Unfortunately for you, people weigh a lot this days, 
so how do you know if a ship if full of gold and not people?

You begin with writing a generic Ship class:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Every time your spies see a new ship enter the dock, they 
will create a new ship object:

var titanic = new Ship(15,10);
var prince = new Ship(40,10);

Now comes the tricky part: An average man will sink the ship 
by exactly 1.5 units. (Ship's draft goes up) That means 
the draft can show the estimated weight of the presumable 
booty aboard.

if it weighs more than 20 without people, it is worthy to 
board. Your system should have a method
isWorthIt

to decide that:

titanic.isWorthIt() //return false
prince.isWorthIt() //return true

This Kata teaches you the very basic of method creation.
*/  



// --------------------------------------
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function() {
  return this.draft - (this.crew*1.5) > 20 ? true : false;
}


var titanic = new Ship(15,10);
console.log(  titanic.isWorthIt()  ); //return false

var prince = new Ship(40,10);
console.log(  prince.isWorthIt()  ); //return true



// --------------------------------------
// without ternary operator
Ship.prototype.isWorthIt2 = function() {
  return this.draft - (this.crew*1.5) > 20;
}



// --------------------------------------
// or defined in one class function
function Ship3(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function(){return this.draft-(this.crew*1.5)>20};
}
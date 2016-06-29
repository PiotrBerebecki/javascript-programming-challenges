console.clear();

/*
-----------------------------------------
8 kyu
Ghost class of random color
-----------------------------------------

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of
white' or 'yellow' or 'purple' or 'red' when instantiated

ghost = new Ghost();
ghost.color //=> 'white' or 'yellow' or 'purple' or 'red'
*/



// --------------------------------------
var Ghost = function () {
  this.color = ['white','yellow','purple','red'][Math.floor(Math.random() * 4)];
}

var ghost = new Ghost();
console.log(  ghost.color  );  // random: 'white' or 'yellow' or 'purple' or 'red'



// --------------------------------------
var Ghost2 = function () {
  var colors = ['white','yellow','purple','red'];
  var colorIndex = Math.floor(Math.random() * colors.length);
  this.color = colors[colorIndex];
}



// --------------------------------------
// A bit convoluted
function Ghost3() {
  this.getRandomColor = function() {
    var colors = ['white','yellow','purple','red'];
    colorName = colors[Math.floor(Math.random() * 4   )  ];
  };
  this.getRandomColor();
  this.color = colorName;
}
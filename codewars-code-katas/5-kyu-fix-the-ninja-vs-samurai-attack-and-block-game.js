console.clear();

/*
-----------------------------------------
5 kyu
5 kyu Fix the Ninja vs Samurai Attack and Block game
(aka Ninja vs Samurai: Attack + Block)
-----------------------------------------


Something is wrong with our Warrior class. The attack method is not working as expected.

If properly set, it should correctly calculate the damage after an attack 
(if the attacker position is == to the block position of the defender,
no damage; otherwise, the defender gets either 10 damage if hit "high"
or 5 damage if it "low". If no block is set, the defender takes 5 extra damage 
to his health.

For some reason, the health value is not being properly set.

The following shows an example of this code being used:

ninja = new Warrior('ninja_01');
samurai = new Warrior('samurai_01');

samurai.block = 'l';
ninja.attack(samurai, 'h');
console.log(  samurai.health  ); // 90


Notice that health can't be below 0: once hit to 0 health, a warrior attribute 
deceased becomes true; if hit again, the zombie attribute becomes true too!

-- Fix the code below --

Position = {
  high: 'h',
  low: 'l'
}

Warrior = function(name){
  this.name = name;  
  this.health = 100;
}

Warrior.prototype = {
  attack: function(enemy, position){
    if (enemy.block != position){
      var damage = position == Position.high ? 10 : 5;
      // if enemy is not blocking at all then give more damage
      if (!enemy.block){
        damage += 5;
      }
      setHealth.call(enemy.health - damage);   
    }
  }
}

// private functions
function setHealth(value){
  this.health = Math.max(0, value);
  if (this.health == 0){
    this.deceased = true;
    this.zombie = false;
  }
  else if(this.deceased){
    this.zombie = true;
  }
}

*/



// --------------------------------------
Position = {
  high: 'h',
  low: 'l'
}

Warrior = function(name){
  this.name = name;  
  this.health = 100;
}

Warrior.prototype = {
  attack: function(enemy, position){
    if (enemy.block != position){
      var damage = position == Position.high ? 10 : 5;
      // if enemy is not blocking at all then give more damage
      if (!enemy.block){
        damage += 5;
      }
      setHealth.call(enemy, enemy.health - damage);   
    }
  }
}

// private functions
function setHealth(value){
  this.health = Math.max(0, value);
  if (this.health == 0){
    this.deceased = true;
    this.zombie = false;
  }
  else if(this.deceased){
    this.zombie = true;
  }
}


// ninja = new Warrior('ninja_01');
// samurai = new Warrior('samurai_01');

// samurai.block = 'l';
// ninja.attack(samurai, 'h');
// console.log(  samurai.health  ); // 90
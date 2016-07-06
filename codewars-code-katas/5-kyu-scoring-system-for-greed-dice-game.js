console.clear();

/*
-----------------------------------------
5 kyu
Scoring system for greed dice game (aks Greed is Good)
-----------------------------------------

Greed is a dice game played with five six-sided dice.

Your mission, should you choose to accept it, is to score a throw 
according to these rules. You will always be given an array with 
five six-sided dice values.

 Three 1's => 1000 points
 Three 2's =>  200 points
 Three 3's =>  300 points
 Three 4's =>  400 points
 Three 5's =>  500 points
 Three 6's =>  600 points
 
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. 
For example, a "5" can only count as part of a triplet 
(contributing to the 500 points) or as a single 50 points, 
but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450

score([1,1,1,2,5]) // 1050
score([4,4,4,3,3]) // 400
*/



// --------------------------------------
function score(dice) {
  var count = [0,0,0,0,0,0];
  var triple = [1000,200,300,400,500,600];
  var single = [100,0,0,0,50,0]
  dice.forEach(x => count[x-1]++);
  return count.reduce(function(score,curr,ind) {
    return score + (curr>=3 ? triple[ind] : 0) + single[ind] * (curr%3);
  }, 0)
}

console.log(  score([1,1,1,2,5])  ); // 1050



// --------------------------------------
// for loop instead of forEach
function score2(dice) {
  var count = [0,0,0,0,0,0];
  var triple = [1000,200,300,400,500,600];
  var single = [100,0,0,0,50,0]
  for (var i = 0; i < dice.length; i++) { count[dice[i]-1]++; };
  return count.reduce(function(score,curr,ind) {
    return score + (curr>=3 ? triple[ind] : 0) + single[ind] * (curr%3);
  }, 0)
}
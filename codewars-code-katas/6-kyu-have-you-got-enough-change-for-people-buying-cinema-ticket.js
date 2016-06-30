console.clear();

/*
-----------------------------------------
6 kyu
Have you got enough change for people buying cinema ticket (aks Vasya - Clerk)
-----------------------------------------

People are standing in a line to the cinema box office.
Each of them has a single 100, 50 or 25 dollars bill.
One ticket costs 25 dollars.

Can you sell a ticket to each person and give the change
if you initially have no money and sell the tickets 
strictly in the order people follow in the line?

Return YES, if your can sell a ticket to each person and give the change.
Otherwise return NO.

Example
tickets([25, 25, 50]) // => YES 
tickets([25, 100])    // => NO. Not enough money to give change to 100 dollars
*/



// --------------------------------------
function tickets(peopleInLine) {
  var cashRegister = {25:0, 50:0, 100:0};
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        cashRegister[25]++;
        break;

      case 50:
        cashRegister[25]--;
        cashRegister[50]++;
        break;

      case 100:
        cashRegister[50] ? cashRegister[50]-- : cashRegister[25] -= 2;
        cashRegister[25]--;
        break;        
    }

    if (cashRegister[25] < 0) {
      return 'NO';
    }
  }

  return 'YES' 
}

console.log(     tickets([25, 25, 50, 50])      ); // YES
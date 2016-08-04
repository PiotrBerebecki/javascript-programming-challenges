console.clear();

/*
-----------------------------------------
Advanced Algorithms - Exact change
-----------------------------------------

Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second 
argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string 'Insufficient Funds' if cash-in-drawer is less than 
the changeOwed due.

Return the string 'Closed' if cash-in-drawer is equal to the changeOwed due.

Otherwise, return changeOwed in coin and bills, sorted in highest to lowest order.
*/



// --------------------------------------
function checkCashRegister(price, cash, cid) {
  
  var denominations = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.10],
    ['QUARTER', 0.25],
    ['ONE', 1.00],
    ['FIVE', 5.00],
    ['TEN', 10.00],
    ['TWENTY', 20.00],
    ['ONE HUNDRED', 100.00]
  ];
    
  function roundToTwo(val) {return Math.round((val) * 100) / 100;}
    
  var changeOwed = cash - price; 
  console.log('---LOG---\n  changeOwed before ' + changeOwed);
  var changeArray = [], denomination, changeGiven;
      
  for (var i = denominations.length - 1; i >= 0; i--) {
    denomination = denominations[i][1];
    if (changeOwed >= denomination && cid[i][1] >= denomination) {
      changeGiven = 0;
      while (changeOwed >= denomination && cid[i][1] >= denomination) {
        cid[i][1]   = roundToTwo(cid[i][1] - denomination);
        changeOwed  = roundToTwo(changeOwed - denomination);
        changeGiven = roundToTwo(changeGiven + denomination);
      }
      changeArray.push([cid[i][0], changeGiven]); 
    }
  }
  
  console.log('  changeOwed after ' + changeOwed);
  console.log('  cid ' + cid + '\n---RESULT---\n');
  if (changeOwed > 0) {return 'Insufficient Funds';}
  return cid.every(el => el[1] === 0) ? 'Closed' : changeArray;
}

console.log(  JSON.stringify(checkCashRegister(0.04, 0.20, [['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.20]]))  );
// should return should return [['DIME',0.1],['NICKEL',0.05],['PENNY',0.01]].

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]))  )  // should return an array.

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))  )  // should return a string.

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))  )  // should return a string.

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]))  )  // should return [['QUARTER', 0.50]].

// console.log(  JSON.stringify(checkCashRegister(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]))  )  // should return [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15.00], ['ONE', 1.00], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04]].

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))  )  // should return 'Insufficient Funds'.

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1.00], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))  )  // should return 'Insufficient Funds'.

// console.log(  JSON.stringify(checkCashRegister(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))  )  // should return 'Closed'.
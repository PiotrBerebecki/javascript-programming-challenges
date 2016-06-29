console.clear();

/*
-----------------------------------------
8 kyu
Convert number into dollars and cents string
-----------------------------------------

Turn number into dolars and cents

e.g.
3 needs to become $3.00
3.1 needs to become $3.10
*/



// --------------------------------------
function formatMoney(amount) {
  return '$' + amount.toFixed(2);
}

console.log(  formatMoney(3)  ); // '$3.00'



// --------------------------------------
// template literals
function formatMoney2(amount) {
  return `$${amount.toFixed(2)}`;
}
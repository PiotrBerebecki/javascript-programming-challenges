console.clear();

/*
-----------------------------------------
7 kyu
The Coupon Code
-----------------------------------------

Your online store likes to give out coupons for special occasions.
Some customers try to cheat the system by entering invalid codes or 
using expired coupons.

Your mission:

Write a function called checkCoupon to verify that a coupon is valid 
and not expired. If the coupon is good, return true.
Otherwise, return false.

A coupon expires at the END of the expiration date.
All dates will be passed in as strings in this format: "June 15, 2014"

checkCoupon('123','123','September 5, 2014','October 1, 2014') // true
checkCoupon('123a','123','September 5, 2014','October 1, 2014') // false
*/



// --------------------------------------
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode &&
         new Date(currentDate) <= new Date(expirationDate);
}
// you can compare dates directly without converting to Epoch
// .getTime() returns the number of milliseconds since 1970/01/01
// Unix epoch date (Unix timestamp) is the number of seconds that
// have elapsed since January 1, 1970.

console.log(  checkCoupon('123','123','September 5, 2014','October 1, 2014')  ); // true



// --------------------------------------
function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode &&
         Date.parse(currentDate) <= Date.parse(expirationDate);
}



// --------------------------------------
function checkCoupon3(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode &&
         new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}
console.clear();

/*
-----------------------------------------
5 kyu
5 kyu Add metric units to distance (aka Metric Units - 1)
-----------------------------------------

Your task is to write a simple function that takes a number of meters, 
and outputs it using metric prefixes.

For this exercise we just want units bigger than a meter, 
from meters up to yottameters, excluding decameters and hectometers.

All values passed in will be positive integers. e.g.

meters(5);
// returns "5m"

meters(51500);
// returns "51.5km"

meters(5000000);
// returns "5Mm"
*/



// --------------------------------------
function meters(val) {
  var prefix = ['m', 'km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym'];
  var count = 0;
  while (val >= 1000) {
    val /= 1000;
    count++
  }
  return val + prefix[count];
}

console.log(  meters(1)  ); // 1m
// console.log(  meters(1000)  ); // 1km
// console.log(  meters(1000000)  ); // 1Mm
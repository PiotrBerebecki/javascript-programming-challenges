console.clear();

/*
-----------------------------------------
5 kyu
Calculate age in years
-----------------------------------------

Complete the following function that will return the difference in years (age)
for a birthdate, and optionally a "now" date.
Both arguments to the function are expected to be Date objects.
The returned difference can be either positive or negative.

getAge(new Date('2000/01/01')) === 16    // assuming today's date is 2016/08/01
getAge(new Date('1916/01/01'), new Date('2016/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2009/02/28') === 0

getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
*/



// --------------------------------------
function getAge(birthDate, nowDate) {
  nowDate = nowDate || new Date(); 
  var years = nowDate.getFullYear() - birthDate.getFullYear();
  if (nowDate.getMonth() <= birthDate.getMonth() && nowDate.getDate() < birthDate.getDate()) {
    years--;
  }
  return years;
}

console.log(  getAge(new Date('2000/01/01'))  ); // 16 (assuming it is 2016/08/01)
// console.log(  getAge(new Date('1916/01/01'), new Date('2016/01/01'))  ); // 100
// console.log(  getAge(new Date('2008/02/29'), new Date('2009/02/28'))  ); // 0

// getYear() returns the year - 1900
// This has been deprecated for a while now,
// it's best to use getFullYear()
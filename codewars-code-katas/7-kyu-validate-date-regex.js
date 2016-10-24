// console.clear();

/*
-----------------------------------------
7 kyu Validate date regex - Oh dear God! Is it bugged?
-----------------------------------------

Return true if the input follows this time format: "14-10-2016 01:12"
and false otherwise.
*/



// --------------------------------------
function validateDate(code){
 return /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(code);
}

console.log(  validateDate("31-12-2016 23:00")  );


// Additional validation of range of months, days, hours, minutes
// --------------------------------------
function validateDate2(code) {
  return /^(?:0[1-9]|1[0-9]|2[0-9]|3[01])-(?:(0[1-9]|1[0-2]))-[0-9]{4}\s(?:(0[0-9]|1[0-9]|2[0-3])):(?:[0-5][0-9])$/.test(code);
}
console.clear();

/*
-----------------------------------------
8 kyu
Convert boolean values to strings 'Yes' or 'No'.
-----------------------------------------

Complete a boolToWord function.

Given: a boolean value

Return: a 'Yes' string for true and a 'No' string for false
*/



// --------------------------------------
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

console.log(  boolToWord2(true)  );



// --------------------------------------
function boolToWord2(bool) {
  return ['No', 'Yes'][+bool];
}

// We could use Number(bool) as well.
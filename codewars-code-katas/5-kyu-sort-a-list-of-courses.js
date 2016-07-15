console.clear();

/*
-----------------------------------------
5 kyu
Sort a list of courses (aka Sort arrays - 3)
-----------------------------------------

The input is an array of course-ids that are formatted in the following way:

name-yymm

The return of the function shall first be sorted by yymm, 
then by the name (which varies in length).
*/



// --------------------------------------
function sortCourses(courses) {
  return courses.sort(function(a, b) {
    a = a.split('-');
    b = b.split('-');
    return a[1] < b[1] ? -1
      : a[1] > b[1] ? 1
      : a[0].localeCompare(b[0]);
  });
}

console.log(  sortCourses(['arts-1605', 'english-1501', 'sport-1502', 'sport-1502', ])  );
// ["english-1501", "sport-1502", "sport2-1502", "arts-1605"]

// localeCompare() compares two strings in the current locale
// var str1 = "ab";
// var str2 = "cd";
// var n = str1.localeCompare(str2);
// The result of n will be: -1  so str1 is sorted before str2



// --------------------------------------
// cumbersome
function sortCourses2(courses) {
  return courses
    .map(el => el.replace(/^([a-z]+)-(\d{4})$/, '$2-$1'))
    .sort()
    .map(el => el.replace(/^(\d{4})-([a-z]+)$/, '$2-$1'));
}
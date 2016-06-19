console.clear();

/*
-----------------------------------------
8 kyu
A Needle in the Haystack
-----------------------------------------

Can you find the needle in the haystack? Write a function findNeedle() that
takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string)
that says: "found the needle at position " plus the index it found the needle

So
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
should return
'found the needle at position 5'
"found the needle at position 5"
*/



//----------------------------------------
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

var haystack_1 = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
console.log(findNeedle2(haystack_1));



//----------------------------------------
// same as
const findNeedle2 = haystack => "found the needle at position " + haystack.indexOf("needle");
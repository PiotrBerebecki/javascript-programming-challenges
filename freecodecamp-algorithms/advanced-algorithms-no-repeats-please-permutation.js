console.clear();

/*
-----------------------------------------
Advanced Algorithms - No repeats please permutation
-----------------------------------------

Return the number of total permutations of the provided string 
that don't have repeated consecutive letters. Assume that all 
characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations 
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't 
have the same letter (in this case a) repeating.
*/

// console.log(permAlone('ab')); //  should return 2.
// console.log(permAlone('aaa')); //  should return 0.
// console.log(permAlone('aabb')); //  should return 8.
// console.log(permAlone('abcdefa')); //  should return 3600.
// console.log(permAlone('abfdefa')); //  should return 2640.
// console.log(permAlone('zzzzzzzz')); //  should return 0.



// --------------------------------------
function permAlone(str) {    
  var permutations = [];  // Generated permutations stored here
  var nextWord = [];      // Next word builds up in here     
  var chars = str.split('');
  // Generates permutations recursively
  function getPermutations(chars) { 
    if (chars.length === 0) {permutations.push(nextWord.join(''));}          
    for (var i = 0; i < chars.length; i++) {
      chars.push(chars.shift());  // Rotate the characters (first goes to end)
      nextWord.push(chars[0]);    // Add first char of chars to nextWord
      getPermutations(chars.slice(1));  // Recurse the chars without the first char
      nextWord.pop();             // Clear for nextWord (multiple pops)
    }
  }
  getPermutations(chars);
  return permutations.filter(el => !/(\w)\1+/.test(el)).length;
}

console.log(  permAlone('aab')  ); // 2
// console.log(  permAlone('abc')  ); // 6



//---------------------------------------------------------
function getPerms2(word, startIndex) { //assumes word is array of characters
  var perms = [];
  var newWord = '';
  if (startIndex === word.length) {
    return word.join('');
  } else {
    for (var i = startIndex; i < word.length; i++) {
      newWord = swap2(word.slice(0), startIndex, i);
      perms = perms.concat(getPerms2(newWord, startIndex + 1));
    }
  }
  return perms;
}

function swap2(w, s, t) {
  var temp = w[s];
  w[s] = w[t];
  w[t] = temp;
  return w;
}

function permAlone2(str) {
  return getPerms2(str.split(''), 0).filter(function(elem) {
    return elem.search(/(.)\1{1,}/g) === -1;
  }).length;
}



//---------------------------------------
function permAlone3(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;
  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;
  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }
  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  generate(arr.length);
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });
  return filtered.length;
}



//-----------------------------------------
function permAlone4(str) {
  // Split string into an array
  var arr = str.split('');
  var perms = [];
  // Declare helper function which will be used for swaping 2 array points at a time
  function swap(a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  function recurrsive(array, n) {
    n = n || array.length; // n is array length by default
    if (n === 1)
      perms.push(array.join(''));
    else {
      for (var i = 0; i < n; i++) {
        recurrsive(array, n-1);
        if (n % 2) swap(0, n-1);
        else swap(i, n-1);
      }
    }
  }
  recurrsive(arr);
  
  // Remove any repeats from the perms array
  perms = perms.filter(function(perm) {
    if (/\b(?:([a-z])(?!\1))+\b/.test(perm))
      return perm;
  }); 
  return perms.length; 
}



//----------------------------
function permAlone5(str) {
  // First create all the permutations
  var strArr = str.split('');
  var container = [];
  
  var breakdown = function(arr, prevStr) {
    arr.forEach(function(current, index, loopArr) {
      var newArr = loopArr.slice();
      var newStr = prevStr + current;
      newArr.splice(index,1);
      
      if (newArr.length > 0) {
        breakdown (newArr, newStr);
      } else {
        // Check with regex if the string has duplicate letters
        var re = /(.)\1+/g;
        if (!newStr.match(re)) {
          container.push(newStr);
        }
      }   
    });   
  } 
  
  breakdown(strArr, '');
  
  return container.length;
}
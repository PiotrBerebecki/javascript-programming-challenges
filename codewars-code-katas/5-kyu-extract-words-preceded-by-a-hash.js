console.clear();

/*
-----------------------------------------
5 kyu
Extract words preceded by a hash (aks #Hashtag)
-----------------------------------------

Extract words preceded by a hash into an array (without the hash)

Note:

    Pound signs alone do not count, for example:
    the string '#' would return an empty array.
    
    If a word is preceded by more than one hashtag,
    only the last hashtag counts (e.g. '##alot' would return ['alot'])
    
    Hashtags cannot be within the middle of a word
    (e.g. 'in#line hashtag' returns an empty array)
    
    Hashtags must precede alphabetical characters 
    (e.g. '#120398' or '#?' are invalid)
    
    '#blue#red#yellow#green' should return no matches

Example:
getHashtags('#Hello #great ##world, thi#s # is# sup##r top #1 ##game.');
// ['hello', 'great', 'world', 'game']
*/



// --------------------------------------
function getHashtags(post) {
  return (post
    .match(/(^|\s)#*#[a-z]+(?=[\s,\.]|$)/gi) || [])
    .map(el => el.replace(/\s?#+/g, ''))
}

console.log(  getHashtags('#Hello #great ##world, thi#s # is# sup##r top #1 ##game.')  );
// ['hello', 'great', 'world', 'game']
console.log(  getHashtags('#blue#red#yellow#green')  ); // []

// JS does not support lookbehinds so we are not able to exclude hashes
// from the match and therefore we need an another step (replace)
// to remove them.



// --------------------------------------
function getHashtags2(post) {
  return post
    .split(' ')
    .filter(el => el.match(/^#+[a-z]+([,\.]|$)/i))
    .map(el => el.replace(/[#,\.]/g, ''))
}
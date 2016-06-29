console.clear();

/*
-----------------------------------------
6 kyu
Decode the encoded song (aka Dubstep)
-----------------------------------------

Decode the song by removing all occurances of 'WUB'
that have been added between the words and
optionally the beginning and end of song.
e.g. 
'I AM X' was coded to 'WUBWUBIWUBAMWUBWUBX'
*/



// --------------------------------------
function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}
// trim() method removes whitespace from both sides of a string.

console.log(  songDecoder('WUBWUBIWUBAMWUBWUBX')  ); // 'I AM X'



// --------------------------------------
// Clever 
function songDecoder2(song) {
  return song.split('WUB').filter(Boolean).join(' ');
}



// --------------------------------------
// Cumbersome
function songDecoder3(song) {
  return song.replace(/(WUB)+/g, ' ').replace(/(^\s|\s$)/g, '');
}
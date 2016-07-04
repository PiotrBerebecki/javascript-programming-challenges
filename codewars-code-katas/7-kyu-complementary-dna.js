console.clear();

/*
-----------------------------------------
7 kyu
Complementary DNA
-----------------------------------------

In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You have function with one side of the DNA; 
you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all.

DNAStrand("ATTGC") // return "TAACG"
DNAStrand("AAAA")  // return "TTTT"
DNAStrand("GTAT") // return "CATA"
*/



// --------------------------------------
function DNAStrand(dna){
  var dnaPairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
  return dna.replace(/./g, sym => dnaPairs[sym]);
}

console.log(  DNAStrand("ATTGC")  ); // TAACG



// --------------------------------------
// one-liner
let dnaPairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
const DNAStrand2 = dna => dna.replace(/./g, sym => dnaPairs[sym])



// --------------------------------------
// switch
function DNAStrand3(dna){
  return dna
   .split('')
   .map(function(el) {
     switch(el) {
       case 'A': return 'T';
       case 'T': return 'A';
       case 'G': return 'C';
       case 'C': return 'G';
     }
   })
   .join('');
}
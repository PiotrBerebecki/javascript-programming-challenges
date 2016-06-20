console.clear();

/*
-----------------------------------------
8 kyu
DNA to RNA Conversion
-----------------------------------------

Deoxyribonucleic acid, DNA is the primary information storage molecule in 
biological systems. It is composed of four nucleic acid bases Guanine ('G'), 
Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains 
no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns "GCAU"
DNAtoRNA("TTTT") return "UUUU"
DNAtoRNA("GCAT") return "GCAU"
DNAtoRNA("GACCGCCGCC") return "GACCGCCGCC"
*/



// --------------------------------------
// replace
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('TTTT'));



// --------------------------------------
// split, join
function DNAtoRNA2(dna) {
  return dna.split('T').join('U');
}



// --------------------------------------
// split, map, join
function DNAtoRNA3(dna) {
  return dna.split('').map(function (c) {
    return c === 'T' ? 'U' : c;
  }).join('');
}
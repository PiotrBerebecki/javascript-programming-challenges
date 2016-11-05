console.clear();

// https://www.codewars.com/kata/decipher-this

function decipherWord(word) {
    const arr = word.match(/(?:\d+)|(?:[^\d])+/g); 
    const firstLetter = String.fromCharCode(+match[0]);

    if (!arr[1])             { return firstLetter; } 
    if (arr[1].length === 1) { return firstLetter + match[1]; }

    return firstLetter + arr[1].slice(-1) + arr[1].slice(1,-1) + arr[1].slice(0,1);
}

function decipherThis(sentence) {
    return sentence
      .split(' ')
      .map(decipherWord)
      .join(' ');
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
// 'Have a go at this and see how you do');
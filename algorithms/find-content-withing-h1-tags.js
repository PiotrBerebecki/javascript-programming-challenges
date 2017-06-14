// https://codepen.io/PiotrBerebecki/pen/yXaaVj?editors=0010
// Find content within h1 tags

function getContent(html) {
  const regex = /(?:<h1>)(.*?)(?=<\/h1>)/g
  const matches = [];
  let match;
  
  while (match = regex.exec(html)) {
    matches.push(match[1])
  }
  return matches;
}

const html1 = '<h1>Ti1</h1><p>P1</p><h1>Ti2</h1><p>p2</p>'

console.log(  getContent(html1)  ); // ["Ti1", "Ti2"]

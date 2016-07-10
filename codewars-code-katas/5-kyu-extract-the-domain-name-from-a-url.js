console.clear();

/*
-----------------------------------------
5 kyu
Extract the domain name from a URL
-----------------------------------------

Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string.

For example:

domainName('http://github.com/carbonfive/raygun') // 'github' 
domainName('http://www.zombie-bites.com') // 'zombie-bites'
domainName('https://www.cnet.com') // 'cnet'
domainName('www.google.com') // google
domainName('www.bbc.co.uk') // bbc
domainName('www.google.com') // google
domainName('nike.sport')

Keywords: regex
*/


// --------------------------------------
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/)[1]
}

console.log(  domainName('http://github.com/carbonfive/raygun')  ) // 'github'
// console.log(  domainName('http://www.zombie-bites.com')  ) // 'zombie-bites'
// console.log(  domainName('https://www.cnet.com')  ) // 'cnet'
// console.log(  domainName('www.google.com')  ) // 'google'
// console.log(  domainName('www.bbc.co.uk')  ) // 'bbc'
// console.log(  domainName('nike.sport')  ) // 'nike'



// --------------------------------------
// Using replace() method to show how capture and non capture groups work.
function domainName2(url) {
    return url.replace(/(?:http(?:s)?:\/\/)?(?:www\.)?([^\.]+)(?:\..+)/, '$1');
 // equivalent to:
 // return url.replace(/(?:http(?:s)?:\/\/)?(?:www\.)?([^\.]+)(?:\..+)/, (all, name) => name);
}
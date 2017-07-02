// http://www.codewars.com/kata/breadcrumb-generator/train/javascript
//
// Generate navigation links - breadcrumbs

// generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'

// Titles of active spans need to be shortened and cannot have hyphens
// Interim a tags need to include full path
//

const generateBC = (url, separator) => {
  // remove artifacts from url
  const idxOfArtifact = url.search(/(\?|#)/);
  if (idxOfArtifact > 0) {
    url = url.slice(0, idxOfArtifact);
  }

  // split url into parts
  const parts = url.split(/(?:^https?:\/\/|\/)/).filter(part => part !== '');
  // remove last one if index
  if (/^index/.test(parts[parts.length - 1])) {
    parts.pop();
  }

  const shortenLocation = location => {
    if (location.length > 30) {
      return location
        .split('-')
        .filter(word => !bannedWords.includes(word))
        .map(word => word[0])
        .join('');
    }
    return location;
  };

  const formatTitle = location => location.replace(/-/g, ' ').toUpperCase();

  const getActive = location =>
    `<span class="active">${formatTitle(shortenLocation(location))}</span>`;

  if (parts.length === 1) {
    return getActive('home');
  }

  // remove file extention in last one
  const idxFileExtension = parts[parts.length - 1].search(/\./);
  if (idxFileExtension > 0) {
    parts[parts.length - 1] = parts[parts.length - 1].slice(
      0,
      idxFileExtension
    );
  }

  // prettier-ignore
  const bannedWords = [
    'the', 'of', 'in', 'from', 'by', 'with', 'and', 'or', 'for', 'to', 'at', 'a'
  ];

  const getSubpage = (pathLocations, currentLocation) =>
    `<a href="/${pathLocations.join('/')}/">${formatTitle(
      shortenLocation(currentLocation)
    )}</a>`;

  const subPages = parts
    .slice(1, -1)
    .map((part, idx, arr) => getSubpage(arr.slice(0, idx + 1), part));
  const active = getActive(parts.slice(-1)[0]);

  return ['<a href="/">HOME</a>', ...subPages, active].join(separator);
};

// const u0 = 'mysite.com/pictures/italy/the-amazing-trip-to-italy-with.html';
// const u1 = 'mysite.com/pictures/italy/holidays.html';
// const u2 = 'mysite.com/pictures/italy/index.html';
// const u3 = 'https://www.linkedin.com/giacomosorbi';
// const u4 = 'www.agcpartners.co.uk/';
// const u5 = 'http://www.agcpartners.co.uk/';
// const u6 = 'https://www.agcpartners.co.uk/';
// const u7 = 'https://agcpartners.co.uk/index.fds';
// const u8 = 'http://jjaappii/gdgdg';
// const u9 = 'www.microsoft.com/important/confidential/docs/index.htm#top';
// const u10 =
//   'mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/good-example.asp';
// const u11 =
//   'http://www.twitter.de/uber-transmutation-or-the-surfer-pippi-or-immunity#top';
//
// console.log(generateBC(u0, ' : '));
// console.log(generateBC(u1, ' : '));
// console.log(generateBC(u2, ' : '));
// console.log(generateBC(u3, ' : '));
// console.log(generateBC(u4, ' : '));
// console.log(generateBC(u5, ' : '));
// console.log(generateBC(u6, ' : '));
// console.log(generateBC(u7, ' : '));
// console.log(generateBC(u8, ' : '));
// console.log(generateBC(u9, ' : '));
// console.log(generateBC(u10, ' : '));
// console.log(generateBC(u11, ' : '));

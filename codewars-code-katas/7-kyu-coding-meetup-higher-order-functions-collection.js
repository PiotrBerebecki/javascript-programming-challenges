// https://www.codewars.com/collections/coding-meetup-higher-order-functions-series

function countDevelopers1(list) {
  return list
    .reduce((accu, curr) => (curr.language === 'JavaScript' &&
                             curr.continent === 'Europe') ? accu + 1 : accu, 0);
}

function countDevelopers2(list) {
  return list
    .filter(person => person.language === 'JavaScript' && 
                      person.continent === 'Europe')
    .length;
}

function greetDevelopers(list) {
  return list
    .map(dev => 
      Object.assign({}, dev, {greeting: 
        `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`}
      )
    );
}

function isRubyComing(list) {
  return list.some(dev => dev.language === 'Ruby');
}

function getFirstPython(list) {
  const firstPython = list.find(dev => dev.language === 'Python');
  return firstPython ? `${firstPython.firstName}, ${firstPython.country}` : 'There will be no Python developers';
}

function countLanguages(list) {
  const langCount = {};
  list.forEach(dev => langCount[dev.language] = langCount[dev.language] ? langCount[dev.language]+1 : 1);
  return langCount;
}

function isSameLanguage(list) {
  return list.every(dev => dev.language === list[0].language);
}

function findSenior(list) {
  const listByAge = list.sort((a,b) => b.age - a.age);
  let cutOffIndex = listByAge.length;
  
  for (let i = 1; i < listByAge.length; i++) {
    if (listByAge[i].age < listByAge[0].age) { cutOffIndex = i; break; }
  }
  
  return listByAge.slice(0, cutOffIndex);
}
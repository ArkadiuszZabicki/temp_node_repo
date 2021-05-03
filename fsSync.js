const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);

//to add to the file we should use the following

writeFileSync('./content/result-sync.txt', 'New things added', {flag: 'a'});

const resultSync = readFileSync(__dirname + '/content' + '/result-sync.txt', 'utf8');

console.log(resultSync);

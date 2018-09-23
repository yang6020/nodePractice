const fs = require('fs');
const fileToString = fs.readFileSync(process.argv[2], 'utf8');

console.log(fileToString.split('\n').length - 1);

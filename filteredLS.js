const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], (err, list) => {
  if (err) console.log(err);
  else {
    console.log(list.filter(file => path.extname(file) === ext).join('\n'));
  }
});

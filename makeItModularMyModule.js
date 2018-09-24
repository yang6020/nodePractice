const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb) {
  fs.readdir(dir, (err, list) => {
    if (err) cb(err);
    else {
      filteredFiles = list.filter(file => path.extname(file) === '.' + ext);
      cb(null, filteredFiles);
    }
  });
};

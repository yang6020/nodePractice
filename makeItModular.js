const mymodule = require('./makeItModularMyModule');
const dir = process.argv[2];
const ext = process.argv[3];

const cb = (err, data) => {
  if (err) return console.log(err);
  else data.map(data => console.log(data));
};

mymodule(dir, ext, cb);

const http = require('http');
const bl = require('bl');
const result = [];
let count = 0;

returnResult = () => {
  for (let i = 2; i < process.argv.length; i++) {
    console.log(result[i]);
  }
};

let httpGet = index => {
  http.get(process.argv[index], res => {
    res.pipe(
      bl((err, data) => {
        if (err) console.log(err);
        result[index] = data.toString();
        count++;
        if (count === 3) {
          returnResult();
        }
      }),
    );
  });
};

for (let i = 2; i < process.argv.length; i++) {
  httpGet(i);
}

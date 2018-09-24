const http = require('http');
http
  .get(
    process.argv[2],
    (callback = response => {
      response.setEncoding('utf8').on('data', data => {
        console.log(data);
      });
    }),
  )
  .on('error', console.error);

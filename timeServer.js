var net = require('net');

function addZero(i) {
  return (i < 10 ? '0' : '') + i;
}

function now() {
  var d = new Date();
  return (
    d.getFullYear() +
    '-' +
    addZero(d.getMonth() + 1) +
    '-' +
    addZero(d.getDate()) +
    ' ' +
    addZero(d.getHours()) +
    ':' +
    addZero(d.getMinutes())
  );
}

var server = net.createServer(function(socket) {
  socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));

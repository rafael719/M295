const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function formatDate() {
  const date = new Date();
  return date.getFullYear() + '-' +
    zeroFill(date.getMonth() + 1) + '-' +
    zeroFill(date.getDate()) + ' ' +
    zeroFill(date.getHours()) + ':' +
    zeroFill(date.getMinutes());
}

const server = net.createServer(function(socket) {
  socket.end(formatDate() + '\n');
});

server.listen(process.argv[2]);

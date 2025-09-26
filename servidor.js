const http = require('http');
const express = require('express');
const app = express();

const serverHttp = http.createServer(app);
const io = require('socket.io')(serverHttp);

io.addListener('connection', (socket) => {
  console.log('Um usuário conectou!');
  socket.addListener('nova mensagem', (msg) => {
    io.emit('nova mensagem', msg);
  });
});

app.use(express.static('public'));

serverHttp.listen(3000);

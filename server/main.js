var io = require('socket.io')(3001);

// listen all events
io.on('connection', function(socket) {
  socket.on('action', function(msg){
    console.log('message recievd:', msg.type);
    socket.broadcast.emit('action', msg);
  });
});

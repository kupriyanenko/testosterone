var io = require('socket.io')(3001);

// listen all events
io.on('connection', function(socket) {
  socket.on('event', function(msg){
    console.log('message recievd:', msg.type);
    socket.broadcast.emit('event', msg);
  });
});

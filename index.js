const io = require('socket.io')(5000)

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('User joined', name => {
    io.emit('user-joined', { name });
  });

  socket.on('send-chat-message', (messageData) => {
    io.emit('chat-message', messageData);
  });

  socket.on('disconnect-user', (username) => {
    io.emit('user-disconnected', { name: username });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

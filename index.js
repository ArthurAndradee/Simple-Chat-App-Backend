const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 5000 });

server.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Arthur: ' + message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to the WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:5000');
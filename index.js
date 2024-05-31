import { Server } from 'ws';

const server = new Server({ port: 5000 });

server.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Hello, you sent -> ' + message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to the WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:5000');
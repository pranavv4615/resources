const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to server');

    // Send a message to the server
    ws.send('Hello, server!');
});

ws.on('message', (message) => {
    console.log('Received message:', message);
});

ws.on('close', () => {
    console.log('Disconnected from server');
});

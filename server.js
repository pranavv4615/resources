const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(8080, () => {
    console.log('Server listening on port 8080');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    // this is where you write code to intilize you database connnection, rest other startups
    console.log('Client connected');

    // Handle messages from client
    ws.on('message', (message) => {
        console.log('Received message:', message);

        // Echo the message back to the client
        ws.send(message);
    });

    // Handle disconnection
    ws.on('close', () => {
        // whatever database you have open, you want to close it, this is where you can write code to disconnect from database
        console.log('Client disconnected');
    });
});

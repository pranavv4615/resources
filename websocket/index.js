const express = require('express');
const app = express();


const http = require('http');
const server = http.createServer(app);
const path = require('path');

const WebSocket = require('ws');

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

const wss = new WebSocket.Server({ server });

function machineLearning(message) {
    if (message == "how are you") {
        return "i am good"
    } else if (message == "what is your name") {
        return "my name is chatgpt"
    } else {
        return "I didnt get you, please tell me something else"
    }
}

wss.on('connection', (ws) => {
    console.log('A client connected.');

    ws.on('message', (message) => { //how are you
        console.log(`Received: ${message}`);

        let chatResponse = machineLearning(message)
        ws.send(chatResponse)
        // wss.clients.forEach((client) => {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //         client.send(message);
        //     }
        // });
    });

    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});

server.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});

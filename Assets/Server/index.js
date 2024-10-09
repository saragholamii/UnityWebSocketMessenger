const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 },
    () => console.log("Server started on http://localhost:8080")
);

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
        ws.send(`Received message => ${message}`);
    });

    ws.send('Hello! Message From Server!!');
});

    
wss.on('listening', () => {
    console.log('Server listening on http://localhost:8080');
});

const socketio = require('socket.io')
const http = require('http');
const { randomUUID } = require('crypto');
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: "*", // replace with your client URL
      methods: ["GET", "POST"]
    }
})

let connections={}

io.on('connection', (socket) => {
    console.log('Socket.io connection')
    socket.id=randomUUID()
    connections[socket.id]=socket
    socket.on('voice', async (message) => {
        for(let key in connections){
            if(connections[key].id!==socket.id){
                var newData = message.split(";");
                newData[0] = "data:audio/ogg;";
                newData = newData[0] + newData[1];
                connections[key].emit('send',newData)
            }
        }
    });

    socket.on("disconnect",()=>{
        console.log('Socket.io disconnected')
    })
  
});

server.listen(3001, function() {
  console.log('Server is listening on http://localhost:3001');
});
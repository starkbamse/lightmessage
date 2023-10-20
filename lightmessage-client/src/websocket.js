import {io} from 'socket.io-client'

let socket;

export async function close_ws(){
    socket.disconnect();
}

export async function send(type,data){
    socket.emit(type, data);
}

export async function init(){
    socket = io('http://localhost:3001');
    
    socket.on('connect', () => {
        console.log("Socket.io connected")
    });
    
    socket.on('disconnect', () => {
        console.log('Socket.io disconnected');
    });
    
    socket.on('error', (error) => {
        console.log('Socket.io Error: ', error);
    });
}

export async function initListener(callback){
    socket = io('http://localhost:3001');
    
    socket.on('connect', () => {
        console.log("Socket.io connected")
    });
    
    socket.on('message', (data) => {
        callback(data)
    });
    
    socket.on('disconnect', () => {
        console.log('Socket.io disconnected');
    });
    
    socket.on('error', (error) => {
        console.log('Socket.io Error: ', error);
    });
}

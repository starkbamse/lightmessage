const socketio = require('socket.io')
const http = require('http');
const cors=require("cors")
const { randomUUID } = require('crypto');
const express = require('express')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true,limit:"1mb"}))
app.use(express.json({limit:"1mb"}))
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: "*", // replace with your client URL
      methods: ["GET", "POST"]
    }
})

let connections={}


app.post('/signup', async function(req, res) {
    try {
    let web3=new Web3()
    let recovered=await web3.eth.accounts.recover(req.body.msg,req.body.sig)
    if(recovered.toLowerCase()===req.body.address.toLowerCase()){
        let entropy=Date.now()+Math.random()+req.body.sig
        let session=sha256(entropy.toString())
        let data={
            address:req.body.address.toLowerCase(),
            session:session,
            expires:parseInt(Date.now()/1000)+3600,
        }
        await UserModel.collection.findOneAndUpdate({address:req.body.address.toLowerCase()},{$set:data},{upsert:true})
        return res.status(200).json(data)
    } else {
        return res.sendStatus(403);
    }
    } catch(err){
        console.log(err)
        return res.sendStatus(400);
    }
});
app.listen(3002,()=>{
    console.log("app listening")
})

io.on('connection', (socket) => {
    console.log('Socket.io connection')
    socket.id=randomUUID()
    connections[socket.id]=socket
    socket.on('voice', async (message) => {
        for(let key in connections){
            if(connections[key].id!==socket.id){
                connections[key].emit('send',message)
                
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
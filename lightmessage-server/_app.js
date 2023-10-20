const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors=require("cors")
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lightmessage';

mongoose.connect(mongoURI,{ useNewUrlParser: true }).then(()=>{
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
}).catch(function(err) {
    console.log(err)

});

const UserModel=require("./models/user")
const app = express();
app.use(cors())
app.use(express.urlencoded({extended:true,limit:"1mb"}))
app.use(express.json({limit:"1mb"}))

const { randomUUID, createHash } = require('crypto');
// This should be replaced with your game creation logic
app.post('/create-game', function(req, res) {
  res.status(200).send('Game created');
});
function sha256(content) {  
    return createHash('sha256').update(content).digest('hex')
}
  
app.post('/login', async function(req, res) {
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

app.listen(3000,()=>{
    console.log("app listening")
})


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let connected_peers={}


wss.on('connection', (ws) => {
    ws.id=randomUUID()
    connected_peers[ws.id]=ws

    ws.on('message', async (message) => {
        //Check if previously connected
        console.log(message)
        for(let key in connected_peers){
            if(connected_peers[key]!==ws){
                connected_peers[key].send(message)
                console.log("sent!")
            }
        }
        
        
        /*let data = {};
        
        
        try {
            data = JSON.parse(message);
            console.log(data)

        } catch (e) {
            console.log(e)
            ws.send(JSON.stringify({ error: 'Invalid JSON' }));
            ws.close();
            return;
        }*/
       
    });

    ws.on("close",()=>{

    })
});

server.listen(3001, function() {
  console.log('Server is listening on http://localhost:3001');
});
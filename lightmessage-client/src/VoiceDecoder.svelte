

<script>
import io from 'socket.io-client';
    import bufferToBlob from './Communications/Recorder/exporter';

const concat = (buffer1, buffer2) => {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);

  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);

  return tmp.buffer;
};


async function startListening(){
let socket = io('http://localhost:3001');
console.log("Started listener")
let chunks=[]
setInterval(async ()=>{
  if(chunks.length<=1) return;
  let chunk=chunks.shift()
  audioBufferChunk = await audioContext.decodeAudioData(chunk);
    source = audioContext.createBufferSource();
  source.buffer = audioBufferChunk;

  source.connect(audioContext.destination);
  source.start();
})
const audioContext = new AudioContext();
  let source = null;
let audioBufferChunk;
socket.on('send', async (data)=>{
  chunks.push(data)

});
};
</script>

<button on:click={startListening}>Start Listening</button>

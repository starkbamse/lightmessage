

<script>
import io from 'socket.io-client';
async function startListening(){

let socket = io('http://localhost:3001');
console.log("Started listener")
socket.on('send', (data)=>{
    let wavfile=new Blob([data],{type:"audio/webm;codecs=opus"});
    console.log(wavfile)

    const audioUrl = URL.createObjectURL(wavfile);
      const audio = new Audio(audioUrl);
      audio.play();


/*
    let blob = dataURLtoBlob(dataUrl); // decode
const blobUrl = URL.createObjectURL(blob);
let audio = new Audio(blobUrl);
audio.addEventListener('canplaythrough', (event) => {
audio.play();
});
  // instantiate with onDecode callback that fires when OggOpusFile data is decoded
  // @ts-ignore
  const decoder = new OpusStreamDecoder({onDecode});

  // Loop through your Opusdata callingdecode() multiple times. Pass a Uint8Array
  try {
    decoder.ready.then(() => {
        console.log("decoding")

        let result=decoder.decode(uint8)
        console.log(result)
});
    console.log(decoder)
  } catch(e) {
    console.log(e)
    decoder.ready.then(_ => decoder.free());
  }

  // free up the decoder's memory in WebAssembly (also resets decoder for reuse)
  //decoder.ready.then(_ => decoder.free());

  // after free() is called, you could reuse the decoder for another file
 // try { ... decoder.ready.then(_ => decoder.decode(UINT8_DATA_TO_DECODE) } ...


  function onDecode({left, right, samplesDecoded, sampleRate}) {
    console.log(`Decoded ${samplesDecoded} samples`);
    // play back the left/right audio, write to a file, etc
  }
*/
});
};
</script>

<button on:click={startListening}>Start Listening</button>

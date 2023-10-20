<script>
    import { get } from "svelte/store";
    import io from 'socket.io-client';
    import { init, send } from "./websocket";

    let mediaStream, mediaRecorder, chunks = [];

    async function startRecording() {
        await init()

        mediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.start();

        mediaRecorder.addEventListener('dataavailable', e => {

            var fileReader = new FileReader();
            fileReader.readAsDataURL(e.data);
            fileReader.onloadend = function () {
            var base64String = fileReader.result;
                send("voice", base64String);
                console.log("sent")
            };



        });

        setInterval(()=>{
            if(mediaRecorder.state==="inactive") return;
            mediaRecorder.requestData()
        },10000)
    }

    function stopRecording() {
        mediaRecorder.stop();
        //stop ws here
    }


    function blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}
function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
function base64ToArrayBuffer(base64) {
    let binary_string = window.atob(base64);
    let len = binary_string.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
    async function startListening(){

        let socket = io('http://localhost:3001');

        socket.on('send', (dataUrl)=>{
    let blob = dataURLtoBlob(dataUrl); // decode
    const blobUrl = URL.createObjectURL(blob);
    let audio = new Audio(blobUrl);
    audio.addEventListener('canplaythrough', (event) => {
        audio.play();
    });
});
    };

</script>
<button on:click={startListening}>Start Listening</button>
<button on:click={startRecording}>Start Recording</button>
<button on:click={stopRecording}>Stop Recording</button>
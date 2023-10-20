<script>
  import { get } from "svelte/store";
  import io from "socket.io-client";
  import { init, send } from "../../websocket";
  import { createRecord, setupRecordingWorkletNode } from "./audio_worklet";
    import { onMount } from "svelte";

async function startRecording(node) {

  node.port.postMessage({
      message: "UPDATE_RECORDING_STATE",
      setRecording: true,
    });
}
async function stopRecording() {

}

  async function setupRecorder() {
    const context = new AudioContext({sampleRate:8000});
    if (context.state === "suspended") {
      await context.resume();
    }
    // Get user's microphone and connect it to the AudioContext.
    const micStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    });

    const micSourceNode = new MediaStreamAudioSourceNode(context, {
      mediaStream: micStream,
    });
    
    console.log(context.sampleRate)

    const recordingProperties = {
      numberOfChannels: micSourceNode.channelCount,
      sampleRate: context.sampleRate,
      maxFrameCount: context.sampleRate * 300,
    };

    const recordingNode = await setupRecordingWorkletNode(
      recordingProperties,
      context
    );
    let recordingLength = 0;

    recordingNode.port.onmessage = async (event) => {
      if (event.data.message === "SHARE_RECORDING_BUFFER") {
        let buffer=await createRecord(
          context,
          recordingProperties,
          recordingLength,
          context.sampleRate,
          event.data.buffer
        );

        console.log(buffer)
        send("voice",buffer)
      }
      if (event.data.message === "UPDATE_RECORDING_LENGTH") {
        recordingLength = event.data.recordingLength;
      }
    };

    await micSourceNode.connect(recordingNode);
    console.log(recordingNode)
    startRecording(recordingNode)

    setInterval(() => {
      recordingNode.port.postMessage({
        message: "GET_STATE",
      });
    }, 1000);
  }


  onMount(async ()=>{
    await init();
  })
</script>

<button on:click={setupRecorder}>Start Recording</button>

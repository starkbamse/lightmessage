import bufferToBlob from "./exporter";
import createLinkFromAudioBuffer from "./exporter";

export async function setupRecordingWorkletNode(recordingProperties,context) {
    await context.audioWorklet.addModule('recording-processor.js');
  
    const WorkletRecordingNode = new AudioWorkletNode(
        context,
        'recording-processor',
        {
          processorOptions: recordingProperties,
        },
    );
  
    return WorkletRecordingNode;
  }
  

export async function createRecord(context,recordingProperties, recordingLength, sampleRate,
    dataBuffer) {
  const recordingBuffer = context.createBuffer(
      recordingProperties.numberOfChannels,
      recordingLength,
      sampleRate);

  for (let i = 0; i < recordingProperties.numberOfChannels; i++) {
    recordingBuffer.copyToChannel(dataBuffer[i], i, 0);
  }

  return bufferToBlob(recordingBuffer, true);
};
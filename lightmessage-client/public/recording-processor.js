// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RecordingProcessor extends AudioWorkletProcessor {
    constructor(options) {
      super();
  
      this.sampleRate = 0;
      this.maxRecordingFrames = 0;
      this.numberOfChannels = 0;
  
      if (options && options.processorOptions) {
        const {
          numberOfChannels,
          sampleRate,
          maxFrameCount,
        } = options.processorOptions;
  
        this.sampleRate = sampleRate;
        this.maxRecordingFrames = maxFrameCount;
        this.numberOfChannels = numberOfChannels;
      }
  
      this._recordingBuffer = new Array(this.numberOfChannels)
          .fill(new Float32Array(this.maxRecordingFrames));
  
      this.recordedFrames = 0;
      this.isRecording = false;
  
      // We will use a timer to gate our messages; this one will publish at 60hz
      this.framesSinceLastPublish = 0;
      this.publishInterval = this.sampleRate / 60;
  
      // We will keep a live sum for rendering the visualizer.
      this.sampleSum = 0;




      this.port.onmessage = async (event) => {
        if (event.data.message === 'UPDATE_RECORDING_STATE') {
          this.isRecording = event.data.setRecording;
        } 
      };
    }
  
    process(inputs, outputs, params) {
          for (let sample = 0; sample < inputs[0][0].length; sample++) {
            if(this.recordedFrames>=12800){
              this.port.postMessage({
                message: 'SHARE_RECORDING_BUFFER',
                buffer: this._recordingBuffer,
            });
            this._recordingBuffer = new Array(this.numberOfChannels).fill(new Float32Array(this.maxRecordingFrames));;
            this.recordedFrames = 0; 
            }

            const currentSample = inputs[0][0][sample];
  
            // Copy data to recording buffer.
            if (this.isRecording) {
              this._recordingBuffer[0][sample+this.recordedFrames] =
                  currentSample;
            }

          }
        
      
  
      const shouldPublish = this.framesSinceLastPublish >= this.publishInterval;
  
      // Validate that recording hasn't reached its limit.
      if (this.isRecording) {
          this.recordedFrames += 128;

          // Post a recording recording length update on the clock's schedule
          if (shouldPublish) {
            this.port.postMessage({
              message: 'UPDATE_RECORDING_LENGTH',
              recordingLength: this.recordedFrames,
            });
          }
      }
  
      // Handle message clock.
      // If we should publish, post message and reset clock.
      if (shouldPublish) {
        this.framesSinceLastPublish = 0;
        this.sampleSum = 0;
      } else {
        this.framesSinceLastPublish += 128;
      }
  
      return true;
    }
  }
  
  registerProcessor('recording-processor', RecordingProcessor);
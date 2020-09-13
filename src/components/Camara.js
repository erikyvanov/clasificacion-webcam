import React, { useEffect, useRef } from 'react';
import '../styles/Play.css';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

export const Camara = () => {
  const videoElement = useRef(null);

  useEffect(() => {
    usarCamara();
  }, []);

  const usarCamara = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    window.stream = stream;

    videoElement.current.srcObject = stream;

    const webcam = await tf.data.webcam(videoElement.current);

    const net = await mobilenet.load();

    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);
      console.log(result);

      // Dispose the tensor to release the memory.
      img.dispose();
      // Give some breathing room by waiting for the next animation frame to
      // fire.
      await tf.nextFrame();
    }
  };

  return <video autoPlay playsInline muted ref={videoElement} />;
};

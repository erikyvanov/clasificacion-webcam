import React, { useEffect, useRef, useState } from 'react';
import '../styles/Camara.css';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

import { SpinnerCargando } from './SpinnerCargando';

export const Camara = () => {
  const videoElement = useRef(null);

  const [prediction, setPrediction] = useState([]);
  const [loadingModel, setLoadingModel] = useState(true);

  useEffect(() => {
    usarCamara();
  }, []);

  const usarCamara = async () => {
    setLoadingModel(true);
    const net = await mobilenet.load();
    setLoadingModel(false);

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    videoElement.current.srcObject = stream;
    const webcam = await tf.data.webcam(videoElement.current);

    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);
      setPrediction(result);

      // Dispose the tensor to release the memory.
      img.dispose();
      // Give some breathing room by waiting for the next animation frame to
      // fire.
      await tf.nextFrame();
    }
  };

  const formatPrediction = (prediction) =>
    prediction.map((p, i) => (
      <h3 key={i}>
        {p.className}&nbsp;&nbsp;{Math.round(p.probability * 100)}%
      </h3>
    ));

  return (
    <div>
      {loadingModel ? (
        <SpinnerCargando />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <video autoPlay playsInline muted ref={videoElement} />
          {formatPrediction(prediction)}
        </div>
      )}
    </div>
  );
};

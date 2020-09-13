import React from 'react';
import { Navbar } from './components/Navbar';
import { Play } from './components/Play';

export const ClasificacionWebcam = () => {
  return (
    <div className="clasificacion-webcam">
      <h1>Clasificación Webcam</h1>
      <Navbar />
      <Play />
    </div>
  );
};

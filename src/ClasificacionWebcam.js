import React from 'react';
import { Navbar } from './components/Navbar';
import { Camara } from './components/Camara';

export const ClasificacionWebcam = () => {
  return (
    <div className="clasificacion-webcam">
      <h1 className="title">Clasificación Webcam</h1>
      <Navbar />
      <Camara />
    </div>
  );
};

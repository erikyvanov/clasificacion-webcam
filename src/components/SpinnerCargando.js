import React from 'react';
import '../styles/SpinnerCargando.css';

import { Spinner } from 'react-bootstrap';

export const SpinnerCargando = () => {
  return (
    <div className="spinner-cargando">
      <Spinner animation="border" variant="light" />
      <h3>Cargando modelo...</h3>
    </div>
  );
};

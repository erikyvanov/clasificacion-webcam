import React, { useState } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [page, setPage] = useState('play');
  return (
    <div className="navbar">
      <div
        className={(page === 'play' ? 'active' : 'no-active') + ' boton'}
        onClick={() => setPage('play')}
      >
        Play
      </div>

      <div
        className={(page === 'fit' ? 'active' : 'no-active') + ' boton'}
        onClick={() => setPage('fit')}
      >
        Entrenar
      </div>
    </div>
  );
};

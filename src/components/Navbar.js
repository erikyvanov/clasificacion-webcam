import React, { useState } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [page, setPage] = useState('play');
  return (
    <nav>
      <div
        className={(page === 'play' ? 'active' : '') + ' boton'}
        onClick={() => setPage('play')}
      >
        Play
      </div>

      <div
        className={(page === 'fit' ? 'active' : '') + ' boton'}
        onClick={() => setPage('fit')}
      >
        Entrenar
      </div>
    </nav>
  );
};

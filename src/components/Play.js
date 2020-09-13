import React from 'react';

export const Play = () => {
  return (
    <div>
      <video
        autoPlay
        playsInline
        muted
        id="webcam"
        width="224"
        height="224"
      ></video>
    </div>
  );
};

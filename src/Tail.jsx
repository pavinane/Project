import React from 'react';

const Color = () => (
  <div className="color">
    <h1>the toss is tail</h1>
    <Video />
  </div>
);
const Video = () => (
  <div className="video">
    <iframe
      title="dd"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/pcPi4jPAR2c"
      frameBorder="0"
      allowFullScreen
    />
  </div>
);
export default Color;

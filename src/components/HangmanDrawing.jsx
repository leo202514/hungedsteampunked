import React from 'react';

function HangmanDrawing({ mistakeCount }) {
  const imageIndex = Math.min(mistakeCount, 6);

  return (
    <div className="drawing-container">
      <img
        src={`/assets/gallows_${imageIndex}.png`}
        alt={`Gallows stage ${imageIndex}`}
        className="img-fluid"
      />
    </div>
  );
}

export default HangmanDrawing;

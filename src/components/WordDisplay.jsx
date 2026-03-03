import React from 'react';

function WordDisplay({ word, guessedLetters, reveal = false }) {
  return (
    <div className="d-flex gap-3 justify-content-center mb-5">
      {word.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: '5px solid #3d2b1f',
            minWidth: '50px',
            fontSize: '4rem',
            textAlign: 'center',
            fontFamily: "'Almendra', serif",
            fontWeight: 'bold',
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal
                  ? '#8b0000'
                  : 'inherit',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;

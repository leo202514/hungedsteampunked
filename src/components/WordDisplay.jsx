import React from 'react';

function WordDisplay({ word, guessedLetters, reveal = false }) {
  return (
    /* We use the word-container class here to tap into the responsive CSS */
    <div className="d-flex gap-3 justify-content-center mb-5 word-container">
      {word.split('').map((letter, index) => (
        <span key={index}>
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

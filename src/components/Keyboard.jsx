import React from 'react';
import { Button } from 'react-bootstrap';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* array.map() with unique keys */}
      {ALPHABET.map((letter) => (
        <Button
          key={letter}
          className="typewriter-key"
          onClick={() => addGuessedLetter(letter)}
          disabled={
            activeLetters.includes(letter) ||
            inactiveLetters.includes(letter) ||
            disabled
          }
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import Header from './components/Header';

// Steampunk word list
const WORDS = [
  'AUTOMATON',
  'DIRIGIBLE',
  'CLOCKWORK',
  'COGWHEEL',
  'ZEPPELIN',
  'TELEGRAPH',
  'LOCOMOTIVE',
  'IRONCLAD',
];

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  // Reset game state
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
    setGuessedLetters([]);
  };

  // Calculating win/loss based on guessedLetters
  const incorrectGuesses = guessedLetters.filter((l) => !word.includes(l));
  const isWinner = word.split('').every((l) => guessedLetters.includes(l));
  const isLoser = incorrectGuesses.length >= 6;

  // Modify state on user interaction
  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && !isWinner && !isLoser) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  };

  return (
    <Container fluid className="p-0">
      {/* Help trigger in Header */}
      <Header onHelpClick={() => setShowHelp(true)} />

      <Container className="mt-5">
        <Row className="align-items-start">
          <Col lg={6} className="d-flex justify-content-center">
            {/* Syncing gallows visual with incorrect guess count */}
            <HangmanDrawing mistakeCount={incorrectGuesses.length} />
          </Col>

          <Col lg={6} className="mt-5">
            <WordDisplay
              word={word}
              guessedLetters={guessedLetters}
              reveal={isLoser}
            />

            <div className="mt-5">
              <Keyboard
                activeLetters={guessedLetters.filter((l) => word.includes(l))}
                inactiveLetters={incorrectGuesses}
                addGuessedLetter={handleGuess}
                disabled={isWinner || isLoser}
              />
            </div>

            {/* Win/Loss feedback */}
            {(isWinner || isLoser) && (
              <div className="mt-5 text-center">
                <h2
                  style={{
                    color: isWinner ? '#2d5a27' : '#8b0000',
                    fontSize: '3.5rem',
                    fontFamily: 'Pirata One',
                  }}
                >
                  {isWinner
                    ? 'Victory Most Splendid!'
                    : `Trial Failed. The word was: ${word}`}
                </h2>
                <Button
                  className="scroll-button mt-3"
                  onClick={resetGame}
                  style={{ fontSize: '1.5rem' }}
                >
                  Commence New Trial
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Help Modal */}
      <Modal show={showHelp} onHide={() => setShowHelp(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Almendra', fontWeight: 'bold' }}>
            Instructional Manual
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: 'Almendra', fontSize: '1.2rem' }}>
          <p>1. A mechanical term has been selected from the archives.</p>
          <p>2. Use the typewriter keys to guess individual letters.</p>
          <p>
            3. Each incorrect guess assembles another part of the automaton.
          </p>
          <p>4. Prevent the full assembly (6 mistakes) to achieve victory!</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;

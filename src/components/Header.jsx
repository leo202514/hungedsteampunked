import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function Header({ onHelpClick }) {
  return (
    <Navbar className="scroll-header shadow-none">
      <Container className="d-flex justify-content-between align-items-center px-5">
        <Button onClick={onHelpClick} className="scroll-button">
          How to Play?
        </Button>

        <Navbar.Brand href="#home" className="m-0">
          Hunged
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
  return (
    <Navbar expand="sm" className="bg-light">
      <Container className="container-fluid">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/links">Links</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

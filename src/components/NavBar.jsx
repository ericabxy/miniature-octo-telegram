import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './About.jsx';

function NavBar (props) {
  // Content selection bar

  return (
    <Navbar expand="sm" className="bg-light">
      <Container className="container-fluid">
        <BrandLink to="">Eric Abides</BrandLink>
        <Nav className="me-auto">
          <NavLink to="about">About</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="canvas">Canvas</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="links">Links</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

function BrandLink (props) {
  return (
    <LinkContainer to={props.to}>
      <Navbar.Brand>{props.children}</Navbar.Brand>
    </LinkContainer>
  )
}

function NavLink (props) {
  return (
    <LinkContainer to={props.to}>
      <Nav.Link>{props.children}</Nav.Link>
    </LinkContainer>
  )
}

export default NavBar;

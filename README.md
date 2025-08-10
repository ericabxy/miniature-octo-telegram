# Miniature Octo Telegram

A poor [React App to GitHub Pages](https://github.com/gitname/react-gh-pages) tutorial was followed.

Vite was used instead of create-react-app. An older Vite was used to work with the older version of NPM installed on the development system.

    npm create vite@6.1.0 miniature-octo-telegram -- --template react

In addition to the tutorial instructions, a line needed to be modified in `package.json` to facilitate relative file linking.

    ...
    "scripts": {
      ...
      "build": "vite build --base=./",
      ...
    },
    ...

React Boostrap is needed for React components, as well as the React Bootstrap Router to work with the React router.

    npm install react-bootstrap bootstrap
    npm install react-router-bootstrap

A router allows the app to serve different content depending on the URL being served, so you can link to individual pages from the navbar rather than dynamically loading content onto the same components. To do this, BrowserRouter and NavBar components have to work together.

### The Router

    import React from "react";
    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import NavBar from "./NavBar.jsx";
    
    function App () {
      return (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </BrowserRouter>
      )
    }
    
    export default App;

### The Navbar

    import { LinkContainer } from "react-router-bootstrap";
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    
    function NavBar () {
      return (
        <Navbar>
          <Container>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      )
    }
    
    export default NavBar;

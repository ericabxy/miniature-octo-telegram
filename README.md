# Miniature Octo Telegram

A web application sandbox using React and Vite, deployed with Github Pages.

## Starting Over

To create a brand new Vite React app:

    npm create vite@latest my-brand-new-webapp -- --template react
    # if the dev environment has outdated libs an older version of Vite may be installed
    # npm create vite@6.1.0 my-brand-new-webapp -- --template react
    cd my-brand-new-webapp
    npm install
    npm run dev

## React Bootstrap

React Bootstrap provides useful components for a responsive application.

    npm install react-bootstrap bootstrap --save-dev

## Routing and Linkage

Use a router to switch pages or content when the user clicks a navigation link.

    npm install react-router-dom react-router-bootstrap --save-dev

### Basic Router Render Code

Import BrowserRouter, NavLink, Routes, Route, and Navigate from "react-router-dom" for the routing essentials.

    import {
        BrowserRouter,
        NavLink,
        Routes,
        Route,
        Navigate,
    } from 'react-router-dom';

Additionally, using Bootstrap's Navbar requires importing a link wrapper.

    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import { LinkContainer } from 'react-router-bootstrap';

Render code for the router:

    <BrowserRouter>
        <Routes>
            <Route path="" element={<h1>Home</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
        </Routes>
    </BrowserRouter>

Basic render code for the navigation bar:

    <Navbar>
        <Container>
            <Nav>
                <LinkContainer to="">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>

## Starting Over

To make a new GitHub-ready React app with Vite, the development environment needs Node, NPM, and Git.

    npm create vite@latest my-react-app -- --template react
    # If the development system has outdated libraries
    # an older version of Vite may be installed
    # npm create vite@6.1.0 my-react-app -- --template react

Try it out locally.

    cd my-react-app
    npm install
    npm run dev

Additional libraries are required.

    npm install react-router-dom react-router-bootstrap react-bootstrap bootstrap

Its possible to register dependencies so they are automatically installed without having to specify them.

    npm install react-router-dom react-router-bootstrap react-bootstrap bootstrap --save-dev

## Original Process

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

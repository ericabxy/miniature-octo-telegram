import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // App is a router to serve content from a navbar selector

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/miniature-octo-telegram/'}>
      <NavBar />
      <Content />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

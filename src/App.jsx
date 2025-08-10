import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Content />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import GameCanvas from "./GameCanvas.jsx";
import Contacts from "./Contacts.jsx";
import Links from "./Links.jsx";

function Content (props) {
  // Routes to serve main content

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="canvas" element={<GameCanvas />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="links" element={<Links />} />
    </Routes>
  )
}

export default Content;

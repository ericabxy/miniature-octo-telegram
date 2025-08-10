import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contacts from "./Contacts.jsx";
import Links from "./Links.jsx";

function Content (props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  )
}

export default Content;

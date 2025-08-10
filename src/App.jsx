import './App.css'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contacts from "./components/Contacts.jsx";
import Links from "./components/Links.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/contacts" element={<Contacts />}>
        </Route>
        <Route path="/links" element={<Links />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

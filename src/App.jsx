import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Bands from "./components/Bands";
import "./App.css";
import RealityLogo from "./assets/RRnoBackground.png"; // Import the logo

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          {/* Add the logo */}
          <div className="logo">
            <Link to="/">
              <img src={RealityLogo} alt="Reality Rock Logo" className="navbar-logo" />
            </Link>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>

          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <a href="https://3b1799-22.myshopify.com" onClick={toggleMenu}>Store</a>
            </li>
            <li>
              <Link to="/bands" onClick={toggleMenu}>Bands</Link>
            </li>
            <li>
              <a
                href="https://www.gofundme.com/f/alternative-christian-music-documentary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bands" element={<Bands />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 UsKidsRockumentary. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

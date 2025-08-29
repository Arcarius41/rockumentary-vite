import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import RealityLogo from "./assets/Reality_Rock_logo_white.jpg";
import PosterImg from "./assets/poster_uskidsV2.jpeg"; //poster image

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const openPoster = () => {
    setPosterOpen(true);
    setMenuActive(false); // Close menu when clicking Poster
  };
  const closePoster = () => setPosterOpen(false);

  return (
    <Router>
      <div className="app-container">
        <nav>
          <div className="logo">
            <Link to="/">
              {/* <img src={RealityLogo} alt="Reality Rock Logo" className="navbar-logo" /> */}
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
              <button className="poster-link" onClick={openPoster}>
                Poster
              </button>
            </li>
            <li>
              <a href="https://3b1799-22.myshopify.com" onClick={toggleMenu}>
                Store
              </a>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>
            <span className="footer-production">
              A{" "}
              <img
                src={RealityLogo}
                alt="Reality Rock Logo"
                className="footer-logo"
              />{" "}
              Production
            </span>
            &copy; 2025 UsKidsRockumentary. All rights reserved.
          </p>
        </footer>

        {/* Poster Modal */}
        {posterOpen && (
          <div className="poster-modal" onClick={closePoster}>
            <div className="poster-content" onClick={(e) => e.stopPropagation()}>
              <img src={PosterImg} alt="Poster" className="poster-image" />
              <button className="poster-close" onClick={closePoster}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

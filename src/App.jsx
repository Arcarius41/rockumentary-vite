import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Bands from "./components/Bands";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <div className="logo">My Logo</div>
          <ul className="nav-links">
            <li>
              <a href="https://www.uskidsrockumentary.com/">Home</a>
            </li>
            <li>
              <a href="https://www.uskidsrockumentary.com/about">About</a>
            </li>
            <li>
              <a
                href="https://3b1799-22.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Store
              </a>
            </li>
            <li>
              <a href="https://www.uskidsrockumentary.com/bands">Bands</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.gofundme.com/f/alternative-christian-music-documentary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-hand-holding-dollar"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/UsKidsAnAlternativeMusicRebellion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/uskidsrockumentary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
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
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

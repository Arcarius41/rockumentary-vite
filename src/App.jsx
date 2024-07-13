import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/bands">Bands</Link>
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
            <Route path="/store" element={<Store />} />
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

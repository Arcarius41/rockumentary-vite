import React from 'react';
import './Home.css';
import HeroImage from '../assets/UsKidsWebsiteBanner.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-text">A Reality Rock Production</div>
      <img src={HeroImage} alt="Us Kids Poster" className="hero-image" />
      <div className="social-icons">
        <span>Check It Out More:</span>
        <ul>
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
      </div>
    </div>
  );
}

export default Home;

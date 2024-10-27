import React, { useEffect } from 'react';
import './Home.css';
import UsKidsWebsiteBanner from '../assets/UsKidsWebsiteBanner.jpg';

function Home() {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <div className="home-container">
      <img src={UsKidsWebsiteBanner} alt="Us Kids Poster" className="hero-image" />
      
      <div className="social-icons-container">
        <span>Connect:</span>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/UsKidsAnAlternativeMusicRebellion" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/uskidsrockumentary/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/playlist/3WioijiRe5NGtTFXdtfQbQ?si=ejzjoW_0SMmRFf90PGljLg&pi=u-1keUEzYpRJSVd" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="video-player">
        <iframe
          src="https://www.youtube.com/embed/QBiivw6ZF-8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="instagram-gallery">
        <div className="instagram-container">
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DALbvfeJAOj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
        </div>
        <div className="instagram-container">
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DAcVRZgMqdd/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
        </div>
        <div className="instagram-container">
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DAqcckhJ09m/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
        </div>
      </div>
    </div>
  );
}

const instagramScript = document.createElement("script");
instagramScript.src = "https://www.instagram.com/embed.js";
instagramScript.async = true;
document.body.appendChild(instagramScript);

export default Home;

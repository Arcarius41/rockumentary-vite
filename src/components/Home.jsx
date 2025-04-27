import React, { useEffect } from "react";
import "./Home.css";
import UsKidsWebsiteBanner from "../assets/UsKidsWebsiteBanner.jpg";

function Home() {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <div className="home-container">
      <img
        src={UsKidsWebsiteBanner}
        alt="Us Kids Poster"
        className="hero-image"
      />

      <div className="social-icons-container">
        <span>Connect:</span>
        <ul className="social-icons">
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
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/playlist/3WioijiRe5NGtTFXdtfQbQ?si=ejzjoW_0SMmRFf90PGljLg&pi=u-1keUEzYpRJSVd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Film Synopsis Section */}
      <div className="home-inner-container">
        <section>
          <h2>Film Synopsis</h2>
          <p>
            "Us Kids: An Alternative Music Rebellion" is an engaging trip through
            the past and a resonant journey through the present with the beloved
            Southern California bands and artists who built an alternative music
            movement rooted in faith in the '80's and '90's.
          </p>
          <p>
            Music was in a state of flux, disco was being devoured by punk, new
            wave and hip-hop were emerging and all was not well within the
            confines of the church. The individuals of the "Us Kids" story were
            richly forged in the flames of struggle and emerged stronger to
            collectively help shape the Southern California music scene.
          </p>
          <p>
            Stories from the bands that are rich, emotionally fragile, laced with
            humor and vulnerability and heartbreak ring throughout this
            documentary film. The documentary is a tribute to the rebellious
            spirit that dared to challenge the norms of both mainstream and
            Christian culture. It’s a must-watch for music fans and anyone who
            appreciates the ability music has to bind people together for a
            lifetime.
          </p>
        </section>
      </div>

      {/* 
      =============================
      YouTube Video Embed (commented out)
      ============================= 
      */}
      {/*
      <div className="video-player">
        <iframe
          src="https://www.youtube.com/embed/QBiivw6ZF-8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      */}

      {/* 
      =============================
      Instagram Embed Gallery (commented out)
      ============================= 
      */}
      {/*
      <div className="instagram-gallery">
        <div className="instagram-container">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DALbvfeJAOj/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          ></blockquote>
        </div>
        <div className="instagram-container">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DAcVRZgMqdd/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          ></blockquote>
        </div>
        <div className="instagram-container">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DAqcckhJ09m/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>
      */}

      {/* Sign Up Section */}
      <div className="signup-container">
        <h2>Sign Up for Updates & News</h2>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

// Instagram script loader
const instagramScript = document.createElement("script");
instagramScript.src = "https://www.instagram.com/embed.js";
instagramScript.async = true;
document.body.appendChild(instagramScript);

export default Home;

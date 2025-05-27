import React, { useEffect } from "react";
import "./Home.css";
import UsKidsWebsiteBanner from "../assets/UsKidsWebsiteBanner.jpg";
import BrevoForm from "./BrevoForm"; // ✅ Corrected file name

function Home() {
  useEffect(() => {
    window.instgrm?.Embeds?.process();

    // Styling adjustments after Brevo loads
    const fixBrevoForm = () => {
      const button = document.querySelector("#sib-form button");
      const inputField = document.querySelector(
        "#sib-form input[type='email']"
      ); // ✅ Fixed this
      const label = document.querySelector("#sib-form label.entry__label");

      if (button) {
        button.style.float = "none";
        button.style.display = "inline-block";
        button.style.margin = "0 auto";
        button.style.textAlign = "center";
        button.style.width = "auto";
      }

      if (inputField) {
        inputField.style.backgroundColor = "#ffffff";
        inputField.style.color = "#000000";
        inputField.style.border = "1px solid #c0ccda";
        inputField.style.padding = "10px";
        inputField.style.borderRadius = "5px";
      }

      if (label) {
        label.style.color = "#ffffff";
      }
    };

    const fixTimer = setTimeout(fixBrevoForm, 1000);

    return () => clearTimeout(fixTimer);
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

      <div className="home-inner-container">
        <section>
          <h2>Film Synopsis</h2>
          <p>
            'Us Kids: An Alternative Music Rebellion' provides an engaging
            journey through the past of alternative music from Califonia.
            Beginning in Orange County and gradually branching out across the
            country (and around the wrorld) this film tells the story of
            musicians who were at the center of an alternative rock movement
            rooted in faith during the '80s and 90s.
          </p>
          <p>
            Music was in a state of flux, disco was being devoured by punk, new
            wave and hip-hop were emerging and all was not well within the
            confines of the church. The individuals of the "Us Kids" story were
            richly forged in the flames of struggle and emerged stronger to
            collectively help shape the Southern California music scene.
          </p>
          <p>
            Stories from the bands that are rich, emotionally fragile, laced
            with humor and vulnerability and heartbreak ring throughout this
            documentary film. The documentary is a tribute to the rebellious
            spirit that dared to challenge the norms of both mainstream and
            Christian culture. It’s a must-watch for music fans and anyone who
            appreciates the ability music has to bind people together for a
            lifetime.
          </p>
        </section>
      </div>

      <div className="signup-container">
        <h2>Sign Up for Updates & News</h2>
        <BrevoForm />
      </div>
    </div>
  );
}

export default Home;

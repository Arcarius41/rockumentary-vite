import React, { useEffect } from "react";
import "./Home.css";
import UsKidsWebsiteBanner from "../assets/UsKidsWebsiteBanner.jpg";
import UsKids1 from "../assets/DMC.jpg";
import UsKids2 from "../assets/Mortal.jpg";
import UsKids3 from "../assets/Prayer_Chain.jpg";

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
          {
            <li>
              <a
                href="https://youtube.com/@uskids-alternativemusicmovie?si=a4Q0aiEScp6jEfIA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          }
          <li>
            <a
              href="https://open.spotify.com/playlist/3WioijiRe5NGtTFXdtfQbQ?si=ejzjoW_0SMmRFf90PGljLg&pi=u-1keUEzYpRJSVd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@us_kids?_r=1&_t=ZT-91GSBTvWQWs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="quote-block">
        <p>
          “I remember that time in Southern California very fondly, and a lot of
          good music was being made. It was just a really great kind of
          collaborative scene.”
          <span>— Steve Taylor (vocalist, lyricist, producer)</span>
        </p>
        <p>
          “This music was a huge part of my musical upbringing. It was very
          exciting! There was just an explosion of bands during that time. I
          would go see these shows all the time.”
          <span>
            — Jeff Schroeder (former lead guitarist for Smashing Pumpkins)
          </span>
        </p>
      </div>
      <div className="home-inner-container">
        <section>
          <h2>Film Synopsis</h2>
          <p>
            ‘Us Kids: An Alternative Music Rebellion' provides an engaging
            journey through the past of alternative music from California.
            Beginning in Orange County and gradually branching out across the
            country (and around the world) this film tells the story of
            musicians who were at the center of an alternative rock movement
            rooted in faith during the '80s and 90s.
          </p>
          <img
            src={UsKids1}
            alt="Us Kids band promo"
            className="synopsis-image"
          />
          <p>
            The musicians and artists of the 'Us Kids' story were raised in a
            landscape filled with struggles and challenges around every corner.
            It was these experiences that collectively helped shape the Southern
            (and Northern) California music scene as we know it today.
          </p>
          <img
            src={UsKids2}
            alt="Southern California concert scene"
            className="synopsis-image"
          />
          <p>
            You'll hear story after story filled with personal triumphs,
            heartache and humor as they recall in vivid detail the recording
            sessions, concert tours and behind-the-scenes adventures that only
            rock and roll can provide. This unique documentary film pays tribute
            to the rebellious spirit of the music that dared to challenge the
            norms of both the church and mainstream culture.
          </p>
          <img
            src={UsKids3}
            alt="Vintage stage photo"
            className="synopsis-image"
          />
          <p>
            'Us Kids' is a "must see" for music fans everywhere, and for anyone
            who appreciates the ability of music to bind people together for a
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

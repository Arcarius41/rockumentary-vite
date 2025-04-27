import React from 'react';
import './About.css';
import ToddAndJohn from '../assets/Todd&John.jpg'; // Ensure this path is correct

function About() {
  return (
    <div className="about-container">
      {/* Image and caption */}
      <div className="image-container">
        <img
          src={ToddAndJohn}
          alt="Todd Zeller & John Smeby Making It Happen"
          className="about-image"
        />
        <p className="image-caption">Todd Zeller & John Smeby Making It Happen</p>
      </div>

      {/* New content structure */}
      <section>
        <h2>The Us Kids Film Team</h2>
        <p>
          Our team is composed of music lovers, filmmakers, and creatives
          dedicated to capturing these unique stories. We believe that music
          has the power to change lives, and the stories behind the music are
          just as important as the songs. Join us on this journey as we shine a
          spotlight on the voices that have defined a genre, impacted faith,
          and inspired change.
        </p>
        <ul className="film-credits">
          <li>
            <strong>Directed and Produced by</strong>
            <p>John Smeby and Todd Zeller</p>
          </li>
          <li>
            <strong>Executive Producers</strong>
            <p>Jason Dean, Adel Meisenheimer, and John Smeby</p>
          </li>
          <li>
            <strong>Soundtrack Produced by</strong>
            <p>Jason Dean</p>
          </li>
          <li>
            <strong>Film Score Created by</strong>
            <p>The Choir</p>
          </li>
        </ul>
      </section>

      {/* <section>
        <h2>Us Kids Film Synopsis</h2>
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
      </section> */}
    </div>
  );
}

export default About;

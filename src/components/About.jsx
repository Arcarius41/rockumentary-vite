import React from 'react';
import './About.css';
import ToddAndJohn from '../assets/Todd&John.jpg'; // Adjust this path to where you store the image

function About() {
  return (
    <div className="about-container">
      {/* Image and caption moved to the top */}
      <div className="image-container">
        <img src={ToddAndJohn} alt="Todd Zeller & John Smeby Making It Happen" className="about-image" />
        <p className="image-caption">Todd Zeller & John Smeby Making It Happen</p>
      </div>

      <p>
        Us Kids Rockumentary is a passionate project aimed at telling the untold stories of the alternative Christian music scene. Our mission is to highlight the incredible journeys of bands and artists who have shaped the movement, bringing hope, rebellion, and a new voice to a generation.
      </p>
      <p>
        The documentary dives deep into the history of these groundbreaking musicians, their struggles, triumphs, and the message behind the music. It’s a tribute to the rebellious spirit that dared to challenge the norms of both mainstream and Christian culture.
      </p>
      <p>
        Our team is composed of music lovers, filmmakers, and creatives dedicated to capturing these unique stories. We believe that music has the power to change lives, and the stories behind the music are just as important.
      </p>
      <p>
        Join us on this journey as we shine a spotlight on the voices that have defined a genre, impacted faith, and inspired change.
      </p>
    </div>
  );
}

export default About;

import React from 'react';
import './Bands.css';

function Bands() {
  return (
    <div className="bands-container">
      <h1>Bands Featured in the Documentary</h1>
      <div className="band-list">
        <div className="band-item">
          <h2>The Alt Sound</h2>
          <p>
            Known for their groundbreaking fusion of alternative rock and spiritual themes, The Alt Sound has been a driving force in the scene for over a decade. Their unique sound and honest lyrics have resonated with audiences around the world.
          </p>
        </div>
        <div className="band-item">
          <h2>Rebel Hearts</h2>
          <p>
            With a message of love and rebellion, Rebel Hearts brought a fresh sound to Christian alternative music. Their high-energy performances and bold lyrics made them a standout in the genre.
          </p>
        </div>
        <div className="band-item">
          <h2>Faith Noise</h2>
          <p>
            Faith Noise blends post-punk and hardcore sounds with messages of hope and faith. Their music has challenged traditional religious ideas while staying true to their spiritual roots.
          </p>
        </div>
        <div className="band-item">
          <h2>Light in the Dark</h2>
          <p>
            This band brings a raw, emotional intensity to the stage, with songs that deal with inner struggles, faith, and redemption. Their haunting melodies and powerful lyrics have made them a fan favorite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bands;

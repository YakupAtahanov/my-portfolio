import profileImg from '../Assets/ProfilePic.jpg';
import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="dot-background" />

      <div className="hero-section">
        <div className="hero-text">
          <h1>I am Yakup Atahanov</h1>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Yakup Atahanov" />
        </div>
      </div>

      <div className="page-indicator">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}

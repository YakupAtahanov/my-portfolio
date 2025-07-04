import React from 'react';
import './HomePage.css';
import profileImg from '../Assets/ProfilePic.jpg';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="dot-background" />
      
      <div className="hero-content">
        <img src={profileImg} alt="Yakup Atahanov" className="profile-image" />
        <h1 className="hero-text">I am Yakup Atahanov</h1>
      </div>

      <div className="page-indicator">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}
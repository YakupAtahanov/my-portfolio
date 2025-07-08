import profileImg from '../Assets/ProfilePic.jpg';
import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';

const slides = [
  <>
    <h1>I am Yakup Atahanov</h1>
    <p>A software engineer passionate about creative design and solutions.</p>
  </>,
  <>
    <h1>Skills & Tools</h1>
    <p>React, Flutter, Firebase, C++, Git, REST APIs, Node.js</p>
  </>,
  <>
    <h1>Currently Building</h1>
    <p>Working on CardEX (a smart card manager) and a multilingual AI assistant.</p>
  </>,
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(timerRef.current);
  }, []);

  const startAutoScroll = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div className="homepage-container">

      <div className="hero-section">
        <div className="hero-text-wrapper">
          {slides.map((content, i) => (
            <div key={i} className={`hero-text ${i === index ? 'active' : ''}`}>
              {content}
            </div>
          ))}
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Yakup Atahanov" />
        </div>
      </div>

      <div className="page-indicator">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => {
              setIndex(i); 
              startAutoScroll();
            }}
          />
        ))}
      </div>
    </div>
  );
}
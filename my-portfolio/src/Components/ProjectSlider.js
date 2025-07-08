import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectSlider.css';

export default function ProjectSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const changeSlide = (newIndex) => {
    if (animating || newIndex === index) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
    }, 400); // Match duration with CSS
  };

  useEffect(() => {
    const auto = setTimeout(() => {
      changeSlide((index + 1) % projects.length);
    }, 7000);
    return () => clearTimeout(auto);
  }, [index]);

  return (
    <div className="project-slider">
      <div className={`slider-content ${animating ? 'fade-out' : 'fade-in'}`}>
        <ProjectCard project={projects[index]} />
      </div>

      <div className="slider-dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { title, description, tech, mediaType, mediaSrc, github, liveDemo } = project;

  return (
    <div className="project-card">
      {/* Left Text Section */}
      <div className="project-text">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="tech-stack">
          {tech.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
          {liveDemo && <a href={liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
        </div>
      </div>

      {/* Right Media Section */}
      <div className="project-media">
        {mediaType === 'video' ? (
          <video src={mediaSrc} autoPlay loop muted playsInline />
        ) : (
          <img src={mediaSrc} alt={title} />
        )}
      </div>
    </div>
  );
}

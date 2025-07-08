import React from 'react';
import { projects } from '../Data/projectData';
import ProjectSlider from '../Components/ProjectSlider';

export default function PortfolioPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>My Projects</h1>
      <ProjectSlider projects={projects} />
    </div>
  );
}

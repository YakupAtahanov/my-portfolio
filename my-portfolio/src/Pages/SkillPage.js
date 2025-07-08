import React from 'react';
import SkillChart from '../Components/SkillChart.js';
import './SkillPage.css';
import { skillCategories } from '../Data/skillsData';

export default function SkillsPage() {
  const renderSection = (title, skills) => (
    <section>
      <h2>{title}</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillChart key={skill.label} label={skill.label} value={skill.value} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="skills-container">
      {renderSection('Programming Skills', skillCategories.programming)}
      {renderSection('Frameworks', skillCategories.frameworks)}
      {renderSection('Soft Skills', skillCategories.softSkills)}
    </div>
  );
}

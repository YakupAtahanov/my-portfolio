import React from 'react';
import SkillChart from '../Components/SkillChart.js';
import './SkillPage.css';

export default function SkillsPage() {
  const programmingSkills = [
    { label: 'C++', value: 55 },
    { label: 'JavaScript', value: 80 },
    { label: 'Python', value: 99 },
    { label: 'Java', value: 92 },
    { label: 'C#', value: 83 },
    { label: 'Typescript', value: 80 },
  ];

  const frameworks = [
    { label: 'React', value: 82 },
    { label: 'Flutter', value: 88 },
    { label: 'Node.js', value: 60 },
    { label: 'Django', value: 62 },
    { label: 'Tenserflow', value: 72 },
  ];

  const softSkills = [
    { label: 'Problem Solving', value: 95 },
    { label: 'Communication', value: 90 },
    { label: 'Time Management', value: 75 },
  ];

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
      {renderSection('Programming Skills', programmingSkills)}
      {renderSection('Frameworks', frameworks)}
      {renderSection('Soft Skills', softSkills)}
    </div>
  );
}

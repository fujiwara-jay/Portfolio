import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 80 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'Node.js', level: 50 },
    { name: 'SQL/Databases', level: 75 },
    { name: 'Git/GitHub', level: 65 },
  ];

  const softSkills = [
    'Willingness to learn',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          <div className="skills-technical">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-soft">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-item" key={index}>
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="tools-section">
              <h4>Tools & Technologies</h4>
              <div className="tools-grid">
                <div className="tool-item">VS Code</div>
                <div className="tool-item">MySQL Workbench</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Capstone Project: Web-Based Rental Unit Space Finder',
      description: 'Designed and implemented features for property listing, search, and booking.',
      technologies: ['React', 'CSS', 'SQL', 'JavaScript'],
      github: 'https://github.com/fujiwara-jay',
      demo: 'https://mayspaceunitfinder.vercel.app/unitfinder',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A collection of my recent work showcasing practical application of skills</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-secondary">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="github-section">
          <h3>More on GitHub</h3>
          <p>Check out my GitHub profile for additional projects and code samples</p>
          <a href="https://github.com/fujiwara-jay" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fab fa-github"></i> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
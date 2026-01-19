import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-subtitle">IT Student | OJT Portfolio</h4>
            <h1 className="hero-title">Hi, I'm <span className="highlight">Julian Jr, Gazzingan</span></h1>
            <h2 className="hero-role">With Background From My School in Web Developer</h2>
            <p className="hero-description">
              Information Technology student have background and pursuing in web development, 
              currently seeking an On-the-Job Training opportunity to apply 
              and expand my skills in real-world projects.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="code-snippet">
                <pre>{`// My Developer Journey
const developer = {
  name: "Julian Jr. Gazzingan",
  role: "IT Student",
  skills: ["React", "JavaScript", "CSS", "SQL"],
  goal: "Contribute to innovative projects"
};`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
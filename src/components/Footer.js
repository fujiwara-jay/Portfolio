import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const resumePath = "https://drive.google.com/file/d/11fcZHU3KR4jTBHzbi-bELn5oAYG1jKY7/view?usp=sharing";

   const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">IT Intern Portfolio</span>
            <p>IT Student OJT Portfolio</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><button className="footer-link-btn" onClick={() => handleScrollTo('home')}>Home</button></li>
              <li><button className="footer-link-btn" onClick={() => handleScrollTo('about')}>About</button></li>
              <li><button className="footer-link-btn" onClick={() => handleScrollTo('skills')}>Skills</button></li>
              <li><button className="footer-link-btn" onClick={() => handleScrollTo('projects')}>Projects</button></li>
              <li><button className="footer-link-btn" onClick={() => handleScrollTo('contact')}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-resume">
            <h4>My Resume</h4>
            <p>View or download my professional resume</p>
            <a 
              href={resumePath}
              className="resume-button"
              target="_blank" 
              rel="noopener noreferrer"
              download="GAZZINGAN_JULIAN_JR_RESUME.pdf"
            >
              View Resume
            </a>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a 
                href="https://github.com/fujiwara-jay" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.facebook.com/jayrfujiwara/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Julian Jr. Gazzingan - IT Student Portfolio. All rights reserved.</p>
          <p>This portfolio is created for On-the-Job Training applications.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
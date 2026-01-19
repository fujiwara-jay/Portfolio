import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">DevPortfolio</span>
            <p>IT Student OJT Portfolio</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/fujiwara-jay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/jayrfujiwara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-instagram"></i>
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
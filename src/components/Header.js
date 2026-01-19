import React, { useState } from 'react';
const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Student IT Intern</span>
          </div>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
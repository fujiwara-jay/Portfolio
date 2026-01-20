import React from 'react';

const About = () => {
  // Choose ONE option for your resume path:

  // OPTION 1: Google Drive link (using your file ID from previous message)
  const resumePath = "https://drive.google.com/file/d/11fcZHU3KR4jTBHzbi-bELn5oAYG1jKY7/view?usp=sharing";
  
  // OPTION 2: If your file is in public/assets/pdf/ folder
  // const resumePath = "/assets/pdf/GAZZINGAN_JULIAN_JR_RESUME.pdf";
  
  // OPTION 3: If your file is directly in public/ folder
  // const resumePath = "/GAZZINGAN_JULIAN_JR_RESUME.pdf";

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>IT Student Passionate About Technology</h3>
            <p>
              I am a 4th-year Information Technology student at Pateros Technological College, 
              with a strong passion for web development and other IT skills. Throughout my academic 
              journey, I've gained foundational knowledge in Information Technology principles, 
              and I've complemented this with practical skills through personal projects
            </p>
            <p>
              As an Information Technology (IT) student, I'm looking for an On-the-Job Training (OJT) 
              opportunity to apply my academic knowledge in an internship and gain 
              practical skills. I'm dedicated to continuous learning and eager to 
              pick up useful skills in a fast-paced environment that will contribute 
              to the company and lay the foundation for my future career.
            </p>
            
            <div className="about-actions">
              <a 
                href={resumePath}
                className="btn btn-primary"
                target="_blank" 
                rel="noopener noreferrer"
                download="GAZZINGAN_JULIAN_JR_RESUME.pdf"
              >
                <i className="fas fa-file-download"></i> View/Download Resume
              </a>
            </div>
            
            <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <h5>Bachelor of Science in Information Technology</h5>
                <p className="institution">Pateros Technological College</p>
                <p className="duration">2022 - Present (Expected Graduation: July 2026)</p>
                <p className="gpa">Current GPA: Ongoing</p>
              </div>
            </div>
            
            <div className="availability">
              <h4>OJT Availability</h4>
              <p>Available for On-the-Job Training starting January 2026</p>
              <p>Duration: 600 hours (Flexible schedule)</p>
              <p>Preference: On-site in Taguig or Makati Area</p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-header">
                <h4>Student Profile</h4>
              </div>
              <div className="profile-info">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">Julian Jr. Gazzingan</span>
                </div>
                <div className="info-item">
                  <span className="label">Course:</span>
                  <span className="value">BS Information Technology</span>
                </div>
                <div className="info-item">
                  <span className="label">Year Level:</span>
                  <span className="value">4th Year</span>
                </div>
                <div className="info-item">
                  <span className="label">School:</span>
                  <span className="value">Pateros Technological College</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">gazzinganjayr@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="label">Phone:</span>
                  <span className="value">0995-197-4630</span>
                </div>
                <div className="info-item resume-download">
                  <span className="label">Resume:</span>
                  <a 
                    href={resumePath}
                    className="resume-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="GAZZINGAN_JULIAN_JR_RESUME.pdf"
                  >
                    <i className="fas fa-download"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
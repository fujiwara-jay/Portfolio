import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // UPDATED IMPORT

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // EmailJS configuration - UPDATE THESE WITH YOUR ACTUAL VALUES
    const serviceID = 'service_u72gekl';
    const templateID = 'template_zgx3itf';
    const userID = 'nAWh26Kn6JOzRug6s';
    
    // For now, simulate success (remove this when you have actual EmailJS credentials)
    setTimeout(() => {
      console.log('Email would be sent with:', { serviceID, templateID, userID });
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          success: false,
          message: '',
        });
      }, 5000);
    }, 1500);
    
    /*
    // Uncomment this when you have actual EmailJS credentials:
    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus({
            success: false,
            message: '',
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus({
          success: false,
          message: 'There was an error sending your message. Please try again later or email me directly.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    */
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Interested in offering an OJT opportunity? Feel free to contact me!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm actively seeking On-the-Job Training opportunities in web development, or related IT fields.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:gazzinganjayr@gmail.com">gazzinganjayr@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+639951974630">0995-197-4630</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Taguig and Makati Area, Available for OJT</p>
                </div>
              </div>
            </div>
            
            <div className="availability-status">
              <div className="status-indicator available"></div>
              <p>Available for OJT starting January 2026</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            
            {submitStatus.message && (
              <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              <div className="form-note">
                <small>
                  Note: Form simulation active. To enable real email sending, sign up for EmailJS and update the Contact.js file.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
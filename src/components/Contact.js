import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID
    
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
          message: 'There was an error sending your message. Please try again later.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
                  <p>gazzinganjayr@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>0995-197-4630</p>
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
            </div> {/* Added missing closing div for contact-details */}
            
            <div className="availability-status">
              <div className="status-indicator available"></div>
              <p>Available for OJT starting June 2024</p>
            </div>
          </div> {/* Added missing closing div for contact-info */}
          
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
            </form>
          </div>
        </div> {/* Added missing closing div for contact-content */}
      </div>
    </section>
  );
};

export default Contact;
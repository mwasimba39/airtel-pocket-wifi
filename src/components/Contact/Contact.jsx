import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '', // New field
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare form data for Netlify
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      alert('Thank you! We will contact you soon.');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch(error => {
      alert('Error submitting form. Please try again or contact us directly.');
      console.error(error);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {/* Netlify Form Requirements */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            {/* Customer Information Fields */}
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Erick Yusuph"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+255 XXX XXX XXX"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>
            
            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          
          <div className="contact-info">
            <h3>Direct Contact</h3>
            <p>
              <strong>Email:</strong> 
              <a href="mailto:erickyusuphmyete@gmail.com">erickyusuphmyete@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> 
              <a href="tel:+255655750791">+255 655 750 791</a>
            </p>
            <p>
              <strong>Address:</strong> 
              Mbeya, Tanzania
            </p>
            <p>
              <strong>Business Hours:</strong> 
              8:00 AM - 5:00 PM, Monday - Saturday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
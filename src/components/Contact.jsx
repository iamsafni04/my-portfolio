import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import SocialIcon from './SocialIcon';
import './Contact.css';

export default function Contact() {
  const { contact, personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setSubmitted(true);
    // Reset after some time
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', budget: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-layout">
          
          <div className="contact-info reveal">
            <span className="section-tagline">Connect</span>
            <h2 className="section-title contact-heading">Let's Work Together</h2>
            <p className="contact-desc">
              Have a proposal or a question? Get in touch, I would love to hear from you. Let's make something amazing.
            </p>

            <div className="contact-details">
              <a href={`mailto:${contact.email}`} className="contact-detail-item">
                <div className="contact-icon-box">
                  <Icons.Mail size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Email Me</span>
                  <span className="detail-value">{contact.email}</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Icons.MapPin size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{contact.address}</span>
                </div>
              </div>
            </div>

            <div className="contact-social-grid">
              {personalInfo.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-social-link"
                >
                  <SocialIcon name={social.name} size={20} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container reveal">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon-box">
                  <Icons.Check size={32} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <div className="select-wrapper">
                    <select 
                      id="budget" 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select project budget</option>
                      {contact.budgets.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <Icons.ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Tell me about your project, goals, and timeline..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message <Icons.Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

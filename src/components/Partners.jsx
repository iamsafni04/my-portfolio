import React from 'react';
import { portfolioData } from '../config/portfolioData';
import './Partners.css';

export default function Partners() {
  const { partners } = portfolioData;

  if (!partners || partners.length === 0) return null;

  return (
    <section id="partners" className="partners-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tagline">Trusted By</span>
          <h2 className="section-title">Worked Partners</h2>
        </div>

        <div className="partners-grid">
          {partners.map((partner, idx) => (
            <div key={idx} className="partner-card reveal">
              <div className="partner-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="partner-logo"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="partner-fallback-text" style={{ display: 'none' }}>
                  {partner.name}
                </span>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

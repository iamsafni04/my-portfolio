import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-layout">
          <span className="footer-copy">
            © {currentYear} SAFNEE. All rights reserved.
          </span>
          <span className="footer-credits">
            Designed in Framer. Developed with React.  Less Friction, More Creation
          </span>
        </div>
      </div>
    </footer>
  );
}

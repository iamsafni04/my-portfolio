import React from 'react';
import { portfolioData } from '../config/portfolioData';
import './Tools.css';

// Custom inline SVG icons for premium look
const toolIcons = {
  Framer: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M5 2h14v6.8H12.2L5 2zm0 6.8h7.2L19 15.6H5V8.8zm7.2 6.8H19V22L12.2 15.6z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2C9.24 2 7 4.24 7 7c0 1.58.74 2.99 1.9 3.9C7.74 11.8 7 13.21 7 14.75c0 2.75 2.24 5 5 5s5-2.25 5-5c0-1.54-.74-2.95-1.9-3.85C16.26 9.99 17 8.58 17 7c0-2.76-2.24-5-5-5zm-2.5 5c0-1.38 1.12-2.5 2.5-2.5S14.5 5.62 14.5 7s-1.12 2.5-2.5 2.5S9.5 8.38 9.5 7zm2.5 10.25c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M21.36 11.02h-7.16l4.28-9.02a.75.75 0 00-1.12-.92l-14.7 11.2a.75.75 0 00.45 1.34h7.16l-4.28 9.02a.75.75 0 001.12.92l14.7-11.2a.75.75 0 00-.45-1.33z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.896 17.518L15.348 3.513c-.097-.378-.6-.445-.783-.1l-2.617 4.97-5.068-9.45c-.21-.39-.775-.353-.923.07L2.148 18.067C2.015 18.448 2.298 18.8 2.7 18.8h16.2c.4 0 .683-.35.55-.733L18.896 17.518z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M24 22.525H0L12 1.475l12 21.05z" />
    </svg>
  ),
  Cloudflare: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M19.389 10.02c-.172-.02-.345-.02-.52-.02C18.257 5.86 14.654 3 10.389 3c-3.15 0-5.96 1.55-7.66 3.93C1.199 7.66 0 9.24 0 11.02c0 2.76 2.24 5 5 5h14c2.21 0 4-1.79 4-4 0-1.93-1.37-3.53-3.611-3.98z" />
    </svg>
  ),
  Antigravity: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
    </svg>
  ),
  CloudCodex: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
};

export default function Tools() {
  const { tools } = portfolioData;

  return (
    <section id="tools" className="tools-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tagline">Stack</span>
          <h2 className="section-title">Premium Tools</h2>
        </div>

        <div className="tools-grid">
          {tools.map((tool, idx) => (
            <div key={idx} className="tool-card reveal">
              <div className="tool-icon-wrapper">
                {toolIcons[tool.iconName] || (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )}
              </div>
              <div className="tool-details">
                <h3 className="tool-name">{tool.name}</h3>
                <span className="tool-category">{tool.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

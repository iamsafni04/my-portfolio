import React from 'react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import SocialIcon from './SocialIcon';
import './Hero.css';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-layout reveal">
          <div className="hero-content">
            <div className="badge-wrapper">
              <span className="badge badge-accent-lime">
                <span className="pulse-dot"></span>
                Available for freelance contracts
              </span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-main">{personalInfo.title}</span>
            </h1>

            <p className="hero-bio">{personalInfo.bio}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Let's Work Together
                <Icons.ArrowUpRight size={18} />
              </a>
              {personalInfo.videoTutorialUrl && (
                <a 
                  href={personalInfo.videoTutorialUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary play-btn"
                >
                  <Icons.Play size={16} fill="currentColor" />
                  Video Tutorial
                </a>
              )}
            </div>

            <div className="social-links">
              {personalInfo.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn"
                  title={social.name}
                >
                  <SocialIcon name={social.name} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-stats-panel">
            <div className="stats-grid">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

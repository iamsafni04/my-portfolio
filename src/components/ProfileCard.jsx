import React from 'react';
import { Flame } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import SocialIcon from './SocialIcon';
import './ProfileCard.css';

export default function ProfileCard() {
  const { personalInfo } = portfolioData;

  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src={personalInfo.avatar} 
          alt={personalInfo.name} 
          className="profile-avatar"
        />
        
        {/* Dash lines decorations matching reference image */}
        <div className="dash-circle-top"></div>
        <div className="dash-circle-bottom"></div>
      </div>

      <h2 className="profile-name">{personalInfo.name}</h2>
      
      <div className="profile-badge-fire">
        <Flame size={20} className="fire-icon" />
      </div>

      <p className="profile-bio-summary">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      <div className="profile-socials">
        {personalInfo.socials.map((social, idx) => (
          <a 
            key={idx} 
            href={social.url} 
            target="_blank" 
            rel="noreferrer" 
            className="profile-social-btn"
            title={social.name}
          >
            <SocialIcon name={social.name} size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}

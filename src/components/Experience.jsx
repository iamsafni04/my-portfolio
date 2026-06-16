import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-header reveal">
            <span className="section-tagline">Timeline</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="experience-intro">
              A timeline of my academic journey at the University of Moratuwa, along with freelance and independent full-stack web and mobile projects.
            </p>
          </div>

          <div className="experience-timeline">
            {experience.map((item, idx) => (
              <div key={idx} className="timeline-item reveal">
                <div className="timeline-dot-container">
                  <div className="timeline-dot">
                    <Briefcase size={14} className="briefcase-icon" />
                  </div>
                  {idx < experience.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content-card">
                  <div className="card-header">
                    <div className="company-info">
                      <h3 className="job-company">{item.company}</h3>
                      <span className="job-title">{item.role}</span>
                    </div>
                    <span className="badge badge-accent-orange date-badge">
                      {item.period}
                    </span>
                  </div>
                  <p className="job-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

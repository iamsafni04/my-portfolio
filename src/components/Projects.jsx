import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tagline">Portfolio</span>
          <h2 className="section-title">Recent Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className="project-card reveal">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="project-image-wrapper"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-hover-overlay">
                  <span className="project-view-btn">
                    Visit Website <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
              
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <h3 className="project-title">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                
                <p className="project-description">{project.description}</p>

                {project.apkUrl && (
                  <div className="project-actions">
                    <a 
                      href={project.apkUrl} 
                      download 
                      className="btn-download-apk"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Flutter APK
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

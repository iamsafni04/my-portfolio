import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import './Blog.css';

export default function Blog() {
  const { blog } = portfolioData;

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="blog-layout-header reveal">
          <div className="blog-header-left">
            <span className="section-tagline">Thoughts</span>
            <h2 className="section-title">Design Thoughts</h2>
          </div>
          <a href="#" className="btn-secondary view-all-blogs">
            View All Articles <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="blog-list">
          {blog.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              className="blog-row-card reveal"
            >
              <div className="blog-card-meta">
                <span className="blog-date">{post.date}</span>
                <span className="meta-separator">•</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              
              <div className="blog-card-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
              </div>

              <div className="blog-card-arrow">
                <div className="blog-arrow-circle">
                  <ArrowUpRight size={20} className="blog-arrow-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

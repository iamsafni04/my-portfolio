import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';
import './ServiceCards.css';

export default function ServiceCards() {
  const { promoCards } = portfolioData;

  return (
    <section className="service-cards-section">
      <div className="container">
        <div className="service-cards-grid reveal">
          {promoCards.map((card, idx) => (
            <a 
              key={idx} 
              href={card.link} 
              className={`service-card card-${card.type}`}
            >
              <div className="card-header-icon">
                <ArrowUpRight size={24} className="arrow-icon" />
              </div>
              <div className="card-body">
                <span className="card-subtitle">{card.subtitle}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Home, Folder, Briefcase, Wrench, Edit3 } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: <Home size={16} />, label: 'Home' },
    { id: 'projects', icon: <Folder size={16} />, label: 'Projects' },
    { id: 'experience', icon: <Briefcase size={16} />, label: 'Experience' },
    { id: 'tools', icon: <Wrench size={16} />, label: 'Tools' },
    { id: 'blog', icon: <Edit3 size={16} />, label: 'Thoughts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy logic
      const sections = ['home', 'projects', 'experience', 'tools', 'blog'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo">
          SAFNEE<span className="logo-dot">.</span>
        </a>

        <nav className="header-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header-nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.icon}
              <span className="header-nav-tooltip">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="contact-badge-btn">
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

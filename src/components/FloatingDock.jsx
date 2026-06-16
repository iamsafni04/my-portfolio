import React, { useState, useEffect } from 'react';
import { Home, Folder, Briefcase, Wrench, Edit3 } from 'lucide-react';
import './FloatingDock.css';

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: <Home size={18} />, label: 'Home' },
    { id: 'projects', icon: <Folder size={18} />, label: 'Projects' },
    { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
    { id: 'tools', icon: <Wrench size={18} />, label: 'Tools' },
    { id: 'blog', icon: <Edit3 size={18} />, label: 'Thoughts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="floating-dock-wrapper">
      <nav className="floating-dock">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.icon}
            <span className="dock-tooltip">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

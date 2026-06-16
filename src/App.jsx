import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  // Trigger IntersectionObserver scroll reveal for class ".reveal"
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <Header />
      <div className="portfolio-split-layout container">
        <aside className="portfolio-left-pane">
          <ProfileCard />
        </aside>
        <div className="portfolio-right-pane">
          <Hero />
          <Partners />
          <Projects />
          <Experience />
          <Tools />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
      <FloatingDock />
    </div>
  );
}

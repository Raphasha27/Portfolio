import { useRef, useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';
import DigitalCard from './components/DigitalCard';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring, useInView, useTransform } from 'framer-motion';

const RevealSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <CustomCursor />
      <div className="noise-overlay" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)', transformOrigin: '0%', zIndex: 100 }}
      />

      <nav className={`glass navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-content">
          <div className="logo"><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>KR<span className="dot">.</span></a></div>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Arsenal</a>
            <a href="#achievements">Milestones</a>
            <a href="#collaborations">Teamwork</a>
            <a href="#contact" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Contact</a>
          </div>

          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <motion.div 
          className="mobile-nav"
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'all' } : { opacity: 0, y: -20, pointerEvents: 'none' }}
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Arsenal</a>
          <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Milestones</a>
          <a href="#collaborations" onClick={() => setIsMenuOpen(false)}>Teamwork</a>
          <a href="#contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </motion.div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>
        <RevealSection id="about"><About /></RevealSection>
        <RevealSection id="projects"><Projects /></RevealSection>
        <RevealSection id="skills"><Skills /></RevealSection>
        <RevealSection id="achievements"><Achievements /></RevealSection>
        
        <section id="philosophy" className="philosophy-section">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
           >
              <h2>Engineering <span className="gradient-text">Philosophy</span></h2>
              <blockquote>
                "As a Co-founder of Kid of Dynamics, I believe complexity is a challenge to be conquered, not an obstacle to be avoided. My goal is to distill the most intricate data into intuitive, impactful experiences through intelligent systems."
              </blockquote>
           </motion.div>
        </section>

        <RevealSection id="collaborations"><Collaborations /></RevealSection>
        <RevealSection id="contact"><Contact /></RevealSection>
      </main>

      <DigitalCard />

      <footer style={{ padding: '60px 24px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Koketso Raphasha. Built with React, Three.js & Passion.</p>
      </footer>

      <style>{`
        .portfolio-app {
          position: relative;
        }
        .navbar {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1400px;
          z-index: 50;
          padding: 12px 32px;
          border-radius: 100px;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .dot { color: var(--primary); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nav-links a {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: 0.2s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-links a:hover {
          color: var(--text-main);
        }
        main {
          overflow-x: hidden;
        }
        .philosophy-section {
          text-align: center;
          padding: 100px 24px;
        }
        .philosophy-section h2 {
          font-size: 3rem;
          margin-bottom: 24px;
        }
        .philosophy-section blockquote {
          font-size: 1.6rem;
          color: var(--text-muted);
          font-style: italic;
          maxWidth: 900px;
          margin: 0 auto;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        @media (max-width: 768px) {
          .philosophy-section { padding: 100px 20px 60px; }
          .philosophy-section h2 { font-size: 2rem; }
          .philosophy-section blockquote { font-size: 1.2rem; }
        }
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .navbar { 
            padding: 10px 16px; 
            border-radius: 16px;
            width: 95%;
            top: 12px;
          }
          .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            z-index: 101;
          }
          .hamburger {
            width: 20px;
            height: 15px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .hamburger span {
            display: block;
            width: 100%;
            height: 2px;
            background: var(--text-main);
            transition: 0.3s;
            border-radius: 2px;
          }
          .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

          .mobile-nav {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(5, 5, 5, 0.98);
            backdrop-filter: blur(12px);
            padding: 32px 16px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            border-radius: 20px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--glass-shadow);
          }
          .mobile-nav a {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-main);
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }
        }
        @media (min-width: 1025px) {
          .mobile-menu-toggle, .mobile-nav { display: none; }
        }
      `}</style>
    </div>
  );
}

export default App;

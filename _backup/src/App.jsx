import { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)', transformOrigin: '0%', zIndex: 100 }}
      />

      <nav className="glass navbar">
        <div className="nav-content">
          <div className="logo">KR<span className="dot">.</span></div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Arsenal</a>
            <a href="#about">Philosophy</a>
            <a href="#contact" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <section id="about" style={{ textAlign: 'center' }}>
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
           >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Engineering <span className="gradient-text">Philosophy</span></h2>
              <blockquote style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                "Complexity is a challenge to be conquered, not an obstacle to be avoided. My goal is to distill the most intricate data into intuitive, impactful experiences."
              </blockquote>
           </motion.div>
        </section>
        <Contact />
      </main>

      <footer style={{ padding: '40px 24px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
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
          width: 90%;
          max-width: 1200px;
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
          gap: 32px;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: 0.2s;
        }
        .nav-links a:hover {
          color: var(--text-main);
        }
        main {
          overflow-x: hidden;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .navbar { padding: 12px 24px; }
        }
      `}</style>
    </div>
  );
}

export default App;

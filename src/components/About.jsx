import { motion } from 'framer-motion';
import { Terminal, Download, User, Code } from 'lucide-react';

export default function About() {
  const codeSnippet = `const Engineer = {
  name: 'Koketso Raphasha',
  role: 'Co-founder @ Kid of Dynamics',
  passion: 'Artificial Intelligence',
  mission: () => 'Bridging data and intuition',
  status: 'Building the future...'
};

console.log('Hello World! 🚀');`;

  return (
    <section id="about">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
             <User className="text-primary" size={28} />
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>About <span className="gradient-text">Me</span></h2>
          </div>
          
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }} className="about-p">
            I am a Software Developer and AI Specialist driven by the intersection of complex architectural design and human-centric intelligence. As the <strong>Co-founder of Kid of Dynamics</strong>, I specialize in engineering systems that don't just process data, but provide meaningful insights.
          </p>
          
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }} className="about-p">
            Currently completing my Bachelor of IT at Richfield, I've spent my journey mastering the art of high-performance logic in C++, distributed systems in Go, and the boundless potential of Machine Learning.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" className="btn-primary">
              Download CV <Download size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-code"
        >
          <div className="terminal-window glass">
            <div className="terminal-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">bash — 80x24</div>
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="line-number">1</span>
                <pre style={{ margin: 0 }}>{codeSnippet}</pre>
              </div>
              <motion.div 
                className="cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              ></motion.div>
            </div>
          </div>
          
          {/* Moving Tech Element */}
          <div className="tech-banner">
             <motion.div 
                className="tech-marquee"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             >
                {Array(10).fill('HELLO WORLD • 01010101 • INTELIGENCE • DYNAMICS • SCALE • ').map((text, i) => (
                    <span key={i} style={{ whiteSpace: 'nowrap', marginRight: '40px', color: 'rgba(255,255,255,0.1)', fontWeight: 900, fontSize: '1.5rem' }}>
                        {text}
                    </span>
                ))}
             </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .terminal-window {
          border-radius: 12px;
          overflow: hidden;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          position: relative;
          z-index: 2;
        }
        .terminal-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--glass-border);
        }
        .dots { display: flex; gap: 8px; }
        .dot { width: 12px; height: 12px; border-radius: 50%; opacity: 0.8; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        .terminal-title { color: var(--text-muted); font-size: 0.75rem; font-weight: 500; }
        .terminal-body {
          padding: 24px;
          color: #a0c0ff;
          position: relative;
        }
        .line-number { color: rgba(255,255,255,0.2); margin-right: 20px; user-select: none; }
        .cursor { width: 10px; height: 18px; background: var(--primary); display: inline-block; vertical-align: middle; margin-left: 4px; }
        
        .tech-banner {
          position: absolute;
          width: 200%;
          left: -50%;
          bottom: -40px;
          overflow: hidden;
          pointer-events: none;
          transform: rotate(-2deg);
          z-index: 1;
        }
        .tech-marquee {
          display: flex;
        }

        .about-p {
          font-size: 1.1rem;
        }

        @media (max-width: 968px) {
          .about-grid { grid-template-columns: 1fr; gap: 24px; text-align: center; }
          .about-text { order: 2; width: 100%; }
          .about-code { order: 1; width: 100%; }
          .tech-banner { display: none; }
          .terminal-window { font-size: 0.7rem; width: 100%; max-width: 100%; overflow-x: hidden; }
          .terminal-body { padding: 12px; overflow-x: auto; }
          .about-text div:first-child { justify-content: center; gap: 8px; margin-bottom: 16px; }
          .about-text .btn-primary, .about-text .btn-secondary { width: 100%; justify-content: center; padding: 10px 16px; font-size: 0.9rem; }
          .about-text div:last-child { flex-direction: column; width: 100%; gap: 12px; }
          .about-p { font-size: 0.95rem; line-height: 1.5; margin-bottom: 16px; }
        }
        @media (max-width: 480px) {
          .terminal-window { font-size: 0.6rem; }
          .about-text h2 { font-size: 1.6rem !important; }
          .about-p { font-size: 0.85rem; }
          section#about { padding: 20px 16px; }
        }
      `}</style>
    </section>
  );
}

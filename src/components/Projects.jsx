import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Shield, Cloud, Brain, Database, Cpu } from 'lucide-react';

const projects = [
  {
    title: "FlowSentinel",
    description: "Enterprise-grade distributed rate-limiting platform using Redis Lua and OpenTelemetry for observability.",
    icon: <Database className="text-primary" />,
    tech: ["Redis", "Lua", "Go", "OpenTelemetry"],
    github: "https://github.com/Raphasha27/FlowSentinel"
  },
  {
    title: "AI Job Market Intelligence",
    description: "Real-time analytics platform for resume matching and talent-data bridging using advanced ML models.",
    icon: <Brain className="text-secondary" />,
    tech: ["Python", "FastAPI", "React", "PyTorch"],
    github: "https://github.com/Raphasha27/AI-Job-Market"
  },
  {
    title: "Sovereign AI Nexus",
    description: "A decentralized AI computing ecosystem designed for high-performance distributed workloads.",
    icon: <Cpu className="text-accent" />,
    tech: ["Web3", "Python", "AI", "Distributed Systems"],
    github: "https://github.com/Raphasha27/Sovereign-AI"
  },
  {
    title: "CyberShield Modern",
    description: "SOC dashboard featuring an AI Sentinel for proactive threat analysis and intelligent alerting.",
    icon: <Shield className="text-accent" />,
    tech: ["Next.js", "AI", "TailwindCSS", "Node.js"],
    github: "https://github.com/Raphasha27/CyberShield"
  },
  {
    title: "NoShowIQ",
    description: "Healthcare ML platform for predicting patient no-shows with deep analytical insights.",
    icon: <Database className="text-primary" />,
    tech: ["Python", "Scikit-Learn", "FastAPI", "React"],
    github: "https://github.com/Raphasha27/NoShowIQ"
  },
  {
    title: "Aura Weather AI",
    description: "Climate insight tool with a premium glassmorphic UI providing hyper-local forecasts.",
    icon: <Cloud className="text-primary" />,
    tech: ["React", "Three.js", "OpenWeather", "AI"],
    github: "https://github.com/Raphasha27/AuraWeather"
  },
  {
    title: "SeatLock",
    description: "High-performance reservation engine written in C++ for extreme concurrency and low latency.",
    icon: <Code2 className="text-secondary" />,
    tech: ["C++", "Lock-free", "Asio", "Concurrency"],
    github: "https://github.com/Raphasha27/SeatLock"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
          Featured <span className="gradient-text">Masterpieces</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          A showcase of intelligent systems, high-performance engines, and security platforms.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="project-icon-wrapper">
              {project.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              {project.description}
            </p>
            <div className="project-tech-tags">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                <Github size={18} /> Code
              </a>
              <a href="#" className="link-icon">
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }
        .project-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .project-icon-wrapper {
          margin-bottom: 24px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          width: fit-content;
        }
        .project-icon-wrapper svg {
          width: 32px;
          height: 32px;
        }
        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-accent { color: var(--accent); }
        
        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: auto;
          padding-bottom: 24px;
        }
        .tech-tag {
          font-size: 0.8rem;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          color: var(--text-muted);
          border: 1px solid var(--glass-border);
        }
        .project-links {
          display: flex;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid var(--glass-border);
        }
        .link-icon {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          transition: var(--transition-fast);
        }
        .link-icon:hover {
          color: var(--primary);
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

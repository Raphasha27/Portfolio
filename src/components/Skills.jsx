import { motion } from 'framer-motion';
import { Layers, Globe, Cpu, ShieldCheck, Terminal, Server } from 'lucide-react';

const skillGroups = [
  {
    category: "Frontend Artistry",
    icon: <Globe size={24} />,
    skills: ["React", "Next.js", "Three.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    category: "AI & Intelligence",
    icon: <Cpu size={24} />,
    skills: ["PyTorch", "TensorFlow", "FastAPI", "OpenCV", "LLM Fine-tuning"]
  },
  {
    category: "Core Engineering",
    icon: <Terminal size={24} />,
    skills: [".NET / C#", "Python", "C++", "C", "Go"]
  },
  {
    category: "Cyber Security",
    icon: <ShieldCheck size={24} />,
    skills: ["Threat Analysis", "SOC Dashboarding", "Penetration Testing", "Security Automation"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Server size={24} />,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions"]
  },
  {
    category: "Observability",
    icon: <Layers size={24} />,
    skills: ["Grafana", "Prometheus", "OpenTelemetry", "ELK Stack"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
          Technical <span className="gradient-text">Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          My specialized toolkit for building the next generation of intelligent systems.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div className="skill-icon-box">{group.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{group.category}</h3>
            </div>
            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-dot"></div>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr; }
          h2 { font-size: 2rem !important; }
        }
        .skill-category {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--glass-border);
        }
        .skill-icon-box {
          color: var(--primary);
        }
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 1rem;
          transition: transform 0.2s;
        }
        .skill-item:hover {
          color: var(--text-main);
          transform: translateX(5px);
        }
        .skill-dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}

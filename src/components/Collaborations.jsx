import { motion } from 'framer-motion';
import { Users, Handshake, Github, MessageSquare, Lightbulb } from 'lucide-react';

const collaborations = [
  {
    title: "Startup Leadership",
    role: "Kid of Dynamics Team",
    description: "Leading a diverse team of developers to build scalable AI systems. Emphasizing clear communication, agile methodology, and shared technical vision.",
    icon: <Users size={32} />,
    tags: ["Leadership", "Agile", "Vision"]
  },
  {
    title: "Open Source Engagement",
    role: "GitHub Community",
    description: "Actively contributing to and collaborating on open-source projects. Believing in the power of shared knowledge and community-driven innovation.",
    icon: <Github size={32} />,
    tags: ["GitHub", "Shared Knowledge", "OSS"]
  },
  {
    title: "Strategic Partnerships",
    role: "CAPACITI & Fire4s",
    description: "Working within the Fire4s group to solve complex business problems through collective intelligence and collaborative coding sprints.",
    icon: <Handshake size={32} />,
    tags: ["Teamwork", "Problem Solving", "Sprints"]
  },
  {
    title: "Technical Mentorship",
    role: "Peer Collaborations",
    description: "Guiding fellow developers through code reviews and architecture discussions to ensure high-quality standards across all collaborative efforts.",
    icon: <MessageSquare size={32} />,
    tags: ["Code Review", "Mentorship", "Quality"]
  }
];

export default function Collaborations() {
  return (
    <section id="collaborations">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
          Teamwork & <span className="gradient-text">Collaborations</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Great systems aren't built in isolation. I thrive in collaborative environments that push the boundaries of collective intelligence.
        </p>
      </motion.div>

      <div className="collab-grid">
        {collaborations.map((collab, index) => (
          <motion.div
            key={index}
            className="glass collab-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="collab-icon-box">
              {collab.icon}
            </div>
            <h3>{collab.title}</h3>
            <h4>{collab.role}</h4>
            <p>{collab.description}</p>
            <div className="collab-tags">
              {collab.tags.map((tag, i) => (
                <span key={i} className="collab-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="glass philosophy-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginTop: '80px', padding: '40px', textAlign: 'center' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Lightbulb size={40} color="var(--accent)" />
        </div>
        <h3>Collaboration Philosophy</h3>
        <p style={{ maxWidth: '600px', margin: '16px auto', color: 'var(--text-muted)' }}>
          "The strength of the team is each individual member. The strength of each member is the team. I prioritize synergy over ego to deliver exceptional results."
        </p>
      </motion.div>

      <style>{`
        .collab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        @media (max-width: 600px) {
          .collab-grid { grid-template-columns: 1fr; gap: 16px; }
          .collab-card { padding: 24px 16px; }
          .philosophy-footer { padding: 24px 16px; margin-top: 40px; }
          h2 { font-size: 1.8rem !important; }
        }
        .collab-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .collab-icon-box {
          color: var(--secondary);
          margin-bottom: 24px;
        }
        .collab-card h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }
        .collab-card h4 {
          font-size: 0.9rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .collab-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }
        .collab-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: auto;
        }
        .collab-tag {
          font-size: 0.75rem;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
        }
        .philosophy-footer h3 {
          font-size: 1.8rem;
          margin-bottom: 8px;
        }
      `}</style>
    </section>
  );
}

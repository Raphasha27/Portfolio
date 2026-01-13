import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap, Briefcase, Star } from 'lucide-react';

const achievements = [
  {
    title: "Co-founder & Lead Developer",
    organization: "Kid of Dynamics",
    description: "Spearheading the development of intelligent automation systems and AI-driven solutions for modern enterprises.",
    icon: <Briefcase size={28} />,
    year: "2024 - Present"
  },
  {
    title: "Bachelor of Information Technology",
    organization: "Richfield Graduate Institute of Technology",
    description: "Class of 2025. Focused on Software Engineering and Artificial Intelligence specialization.",
    icon: <GraduationCap size={28} />,
    year: "In Progress"
  },
  {
    title: "Google Professional Certificates",
    organization: "Coursera",
    description: "Certified in Data Analytics and Advance Machine Learning, validating expertise in complex data processing.",
    icon: <Award size={28} />,
    year: "2023"
  },
  {
    title: "YES4Youth Program Participant",
    organization: "YES (Youth Employment Service)",
    description: "Selected for intensive workplace experience and professional development program.",
    icon: <Star size={28} />,
    year: "2024"
  },
  {
    title: "Fire4s Group Core Member",
    organization: "CAPACITI",
    description: "Collaborated on high-impact technology projects within the Fire4s group, focusing on agile development.",
    icon: <Trophy size={28} />,
    year: "2024"
  }
];

export default function Achievements() {
  return (
    <section id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
          Milestones & <span className="gradient-text">Achievements</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          A timeline of professional growth, academic excellence, and strategic leadership.
        </p>
      </motion.div>

      <div className="achievements-timeline">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="achievement-icon-wrapper glass">
              {item.icon}
            </div>
            <div className="achievement-details">
              <span className="achievement-year">{item.year}</span>
              <h3>{item.title}</h3>
              <h4 className="gradient-text">{item.organization}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .achievements-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        .achievement-card {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          padding: 32px;
          border-radius: 20px;
          transition: 0.3s;
        }
        .achievement-card:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .achievement-icon-wrapper {
          padding: 20px;
          border-radius: 16px;
          color: var(--primary);
          flex-shrink: 0;
        }
        .achievement-details h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }
        .achievement-details h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 12px;
          opacity: 0.9;
        }
        .achievement-year {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .achievement-details p {
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          h2 { font-size: 2rem !important; }
        }
        @media (max-width: 600px) {
          .achievement-card {
            flex-direction: column;
            gap: 20px;
            padding: 24px;
            text-align: center;
          }
          .achievement-icon-wrapper { align-self: center; }
          h2 { font-size: 1.8rem !important; }
        }
      `}</style>
    </section>
  );
}

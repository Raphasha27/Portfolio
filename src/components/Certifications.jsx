import { motion } from 'framer-motion';
import { Icon } from './Icons';

const certifications = [
  {
    title: "Software Engineering",
    issuer: "Richfield Graduate Institute",
    date: "2024",
    type: "Degree",
    icon: "graduationcap",
    bg: "radial-gradient(ellipse at 20% 50%, rgba(0,48,135,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,255,156,0.08) 0%, transparent 50%), linear-gradient(135deg, #0a1628, #0d1f3c)",
    accent: "#003087",
    watermark: "RG"
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "2024",
    type: "Certification",
    icon: "brain",
    bg: "radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0,255,200,0.06) 0%, transparent 50%), linear-gradient(135deg, #0a0a1a, #1a0a2e)",
    accent: "#7850FF",
    watermark: "DL"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    type: "Certification",
    icon: "cloud",
    bg: "radial-gradient(ellipse at 30% 30%, rgba(255,153,0,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(0,100,200,0.1) 0%, transparent 50%), linear-gradient(135deg, #0a1a1a, #0d2b1a)",
    accent: "#FF9900",
    watermark: "AWS"
  },
  {
    title: "AI & Professional Development",
    issuer: "Coursera",
    date: "2024",
    type: "Continuous Learning",
    icon: "coursera",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(0,86,210,0.2) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(0,200,255,0.06) 0%, transparent 50%), linear-gradient(135deg, #0a0d1a, #0d1a2e)",
    accent: "#0056D2",
    watermark: "C"
  },
  {
    title: "Google Hustle Academy",
    issuer: "Google",
    date: "2024",
    type: "Continuous Learning",
    icon: "zap",
    bg: "radial-gradient(ellipse at 50% 20%, rgba(66,133,244,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(52,168,83,0.08) 0%, transparent 50%), linear-gradient(135deg, #0a1a0a, #0d2b0d)",
    accent: "#4285F4",
    watermark: "G"
  },
  {
    title: "AI Practitioner (Intern)",
    issuer: "CAPACITI",
    date: "2024",
    type: "Experience",
    icon: "cpu",
    bg: "radial-gradient(ellipse at 60% 20%, rgba(0,200,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(0,255,100,0.06) 0%, transparent 50%), linear-gradient(135deg, #0a1414, #0d1f1f)",
    accent: "#00C8FF",
    watermark: "CT"
  },
  {
    title: "Full Stack Development",
    issuer: "ALX Africa",
    date: "2023",
    type: "Certification",
    icon: "code",
    bg: "radial-gradient(ellipse at 40% 30%, rgba(255,40,80,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(0,255,200,0.06) 0%, transparent 50%), linear-gradient(135deg, #1a0a0a, #2e0d0d)",
    accent: "#FF2850",
    watermark: "ALX"
  }
];

const themedPatterns = [
  "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.015) 20px, rgba(255,255,255,0.015) 21px)",
  "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.01) 30px, rgba(255,255,255,0.01) 31px)",
  "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.02) 0%, transparent 50%)",
  "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.015) 0%, transparent 40%)"
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">04.</span>
            <div className="h-px bg-white/20 w-12 sm:w-24" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Education & <span className="text-blue-400">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
          >
            A strong foundation in Software Engineering and continuous upskilling across modern Web and AI ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              style={{ background: cert.bg }}
            >
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: themedPatterns[index % themedPatterns.length] }} />

              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-[0.04] pointer-events-none border-[4px]" style={{ borderColor: cert.accent }} />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-[0.03] pointer-events-none border-[4px]" style={{ borderColor: cert.accent }} />

              <div className="absolute top-4 right-4 text-6xl font-bold opacity-[0.04] pointer-events-none select-none" style={{ color: cert.accent }}>
                {cert.watermark}
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.accent}22 0%, transparent 70%)` }}
              />

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${cert.accent}15`, borderColor: `${cert.accent}30`, borderWidth: 1, color: cert.accent }}
                  >
                    <Icon name={cert.icon} size={24} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border bg-white/5"
                        style={{ color: cert.accent, borderColor: `${cert.accent}40` }}
                      >
                        {cert.type}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: cert.accent }}>
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm" style={{ color: `${cert.accent}CC` }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px w-full opacity-20" style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }} />

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1 h-[2px] rounded-full opacity-30" style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }} />
                  <span className="text-[8px] font-mono uppercase tracking-widest opacity-40" style={{ color: cert.accent }}>
                    Verified Credential
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

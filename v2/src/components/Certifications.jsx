import { motion } from 'framer-motion';
import { Icon } from './Icons';

const certifications = [
  {
    title: "Data Analytics",
    issuer: "Google / Coursera",
    date: "2024",
    type: "Certification",
    icon: "graduationcap",
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 20% 50%, rgba(0,48,135,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,255,156,0.08) 0%, transparent 50%), linear-gradient(135deg, #0a1628, #0d1f3c)",
    accent: "#4285F4",
    watermark: "GA"
  },
  {
    title: "UX Design",
    issuer: "Google / Coursera",
    date: "2024",
    type: "Certification",
    icon: "code",
    imgUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.2) 0%, transparent 60%), linear-gradient(135deg, #0a0a1a, #1a0a2e)",
    accent: "#7850FF",
    watermark: "UX"
  },
  {
    title: "AI Engineering",
    issuer: "IBM",
    date: "2024",
    type: "Certification",
    icon: "brain",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 30% 30%, rgba(255,153,0,0.15) 0%, transparent 50%), linear-gradient(135deg, #0a1a1a, #0d2b1a)",
    accent: "#054ADA",
    watermark: "IBM"
  },
  {
    title: "Professional Development",
    issuer: "YES4Youth / CapaCiTi",
    date: "2025",
    type: "Experience",
    icon: "activity",
    imgUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(0,86,210,0.2) 0%, transparent 50%), linear-gradient(135deg, #0a0d1a, #0d1a2e)",
    accent: "#00C8FF",
    watermark: "PD"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Michigan",
    date: "2023",
    type: "Certification",
    icon: "code",
    imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 50% 20%, rgba(66,133,244,0.2) 0%, transparent 50%), linear-gradient(135deg, #0a1a0a, #0d2b0d)",
    accent: "#3776AB",
    watermark: "PY"
  },
  {
    title: "Machine Learning",
    issuer: "DeepLearning.AI",
    date: "2024",
    type: "Certification",
    icon: "brain",
    imgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 60% 20%, rgba(0,200,255,0.15) 0%, transparent 50%), linear-gradient(135deg, #0a1414, #0d1f1f)",
    accent: "#FF2850",
    watermark: "ML"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    type: "Certification",
    icon: "cloud",
    imgUrl: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 30% 30%, rgba(255,153,0,0.15) 0%, transparent 50%), linear-gradient(135deg, #0a1a1a, #0d2b1a)",
    accent: "#FF9900",
    watermark: "AWS"
  },
  {
    title: "Software Engineering",
    issuer: "Richfield Graduate Institute",
    date: "2024",
    type: "Degree",
    icon: "graduationcap",
    imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80&fit=crop",
    bg: "radial-gradient(ellipse at 20% 50%, rgba(0,48,135,0.3) 0%, transparent 60%), linear-gradient(135deg, #0a1628, #0d1f3c)",
    accent: "#003087",
    watermark: "RG"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] flex flex-col"
              style={{ background: cert.bg }}
            >
              {/* Real thumbnail image */}
              {cert.imgUrl && (
                <div className="relative w-full h-36 overflow-hidden shrink-0">
                  <img
                    src={cert.imgUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.style.display='none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border bg-black/40 backdrop-blur-sm"
                      style={{ color: cert.accent, borderColor: `${cert.accent}50` }}
                    >
                      {cert.type}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.accent}18 0%, transparent 70%)` }}
              />

              <div className="relative z-10 p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${cert.accent}15`, borderColor: `${cert.accent}30`, borderWidth: 1, color: cert.accent }}
                  >
                    <Icon name={cert.icon} size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white leading-tight truncate">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] mt-0.5 truncate" style={{ color: `${cert.accent}CC` }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-50" style={{ color: cert.accent }}>
                    ✓ Verified · {cert.date}
                  </span>
                  <div className="text-xl font-bold opacity-[0.06] select-none" style={{ color: cert.accent }}>
                    {cert.watermark}
                  </div>
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

import { motion } from 'framer-motion';
import { Icon } from './Icons';

const vercelProjects = [
  {
    title: "AI Business Engine",
    subtitle: "Zero-Capital AI Businesses",
    desc: "5 playbooks for SA entrepreneurs. Pricing calculator, income stack, and live trial.",
    url: "https://web-gamma-nine-c2cqi2h058.vercel.app",
    icon: "zap",
    color: "from-yellow-500/20 to-emerald-500/20",
    tech: ["Next.js", "React", "Vercel"],
    image: "/proj-ai-business.png"
  },
  {
    title: "Mzansi AgriAI",
    subtitle: "AI Advisory for Farmers",
    desc: "Crop advisor, weather alerts, pest detection, and market prices for SA small-scale farmers.",
    url: "https://mzansi-agriai-demo.vercel.app",
    icon: "globe",
    color: "from-green-500/20 to-emerald-500/20",
    tech: ["HTML", "CSS", "JS", "Vercel"],
    image: "/proj-agri-ai.png"
  },
  {
    title: "EskomSense AI",
    subtitle: "Load Shedding Predictor",
    desc: "ML-powered load shedding prediction, battery optimizer, and area selector for SA homes.",
    url: "https://eskomsense-ai-demo.vercel.app",
    icon: "zap",
    color: "from-yellow-500/20 to-orange-500/20",
    tech: ["HTML", "CSS", "JS", "Vercel"],
    image: "/proj-eskom-full.png"
  },
  {
    title: "NoShowIQ",
    subtitle: "Healthcare No-Show Prediction",
    desc: "Fullstack app predicting patient appointment no-shows using ML models.",
    url: "https://noshowiq.vercel.app",
    icon: "brain",
    color: "from-purple-500/20 to-pink-500/20",
    tech: ["Next.js", "Python", "FastAPI", "Vercel"],
    image: "/proj-noshowiq.png"
  },
  {
    title: "Sumbandila",
    subtitle: "Identity Verification Platform",
    desc: "Digital identity verification system with document authentication, biometric validation, and secure API integration for enterprise clients.",
    url: "https://landing-five-orcin-61.vercel.app",
    icon: "shield",
    color: "from-[#00FF9C]/20 to-cyan-500/20",
    tech: ["Next.js", "Tailwind", "API Integration", "Vercel"],
    image: "/proj-sumbandila.png"
  },
  {
    title: "Kirov Dynamics",
    subtitle: "Portfolio Hub",
    desc: "This portfolio. Systems architecture, AI engineering, and full-stack development showcase.",
    url: "https://koketso-raphasha.vercel.app",
    icon: "cpu",
    color: "from-[#00FF9C]/20 to-emerald-500/20",
    tech: ["React", "Vite", "Framer", "Vercel"],
    image: "/proj-kirov.png"
  }
];

const VercelDeployments = () => {
  return (
    <div id="services" className="space-y-8 sm:space-y-16 py-6 sm:py-12">
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">Live</span>
          <div className="h-px bg-white/20 w-12 sm:w-24" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Deployed <span className="text-[#00FF9C]">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
        >
          Live demos deployed on Vercel — click any card to visit the live project instantly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative max-w-7xl mx-auto">
        {vercelProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, zIndex: 10 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#0a161d] border border-white/10 rounded-[24px] overflow-hidden flex flex-col hover:border-[#00FF9C]/30 transition-all duration-500 shadow-2xl relative"
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

            {/* Project Image Preview */}
            <div className="relative w-full h-44 overflow-hidden shrink-0 bg-[#05080c]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a161d] via-transparent to-transparent" />
              {/* Live badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                <span className="text-[9px] font-bold text-[#00FF9C] uppercase tracking-wider">Live</span>
              </div>
            </div>

            <div className="relative z-10 p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center justify-center text-[#00FF9C] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon name={project.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-[#00FF9C] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[9px] font-mono text-[#00FF9C]/70 uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-white/55 leading-relaxed flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[8px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50 uppercase font-bold tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full py-2.5 rounded-xl bg-[#00FF9C]/10 border border-[#00FF9C]/25 text-[#00FF9C] text-xs font-bold text-center hover:bg-[#00FF9C]/20 hover:border-[#00FF9C]/50 transition-all flex items-center justify-center gap-2"
              >
                <Icon name="externallink" size={14} />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VercelDeployments;


const vercelProjects = [
  {
    title: "AI Business Engine",
    subtitle: "Zero-Capital AI Businesses",
    desc: "5 playbooks for SA entrepreneurs. Pricing calculator, income stack, and live trial.",
    url: "https://web-gamma-nine-c2cqi2h058.vercel.app",
    icon: "zap",
    color: "from-yellow-500/20 to-emerald-500/20",
    tech: ["Next.js", "React", "Vercel"]
  },
  {
    title: "Mzansi AgriAI",
    subtitle: "AI Advisory for Farmers",
    desc: "Crop advisor, weather alerts, pest detection, and market prices for SA small-scale farmers.",
    url: "https://mzansi-agriai-demo.vercel.app",
    icon: "globe",
    color: "from-green-500/20 to-emerald-500/20",
    tech: ["HTML", "CSS", "JS", "Vercel"]
  },
  {
    title: "EskomSense AI",
    subtitle: "Load Shedding Predictor",
    desc: "ML-powered load shedding prediction, battery optimizer, and area selector for SA homes.",
    url: "https://eskomsense-ai-demo.vercel.app",
    icon: "zap",
    color: "from-yellow-500/20 to-orange-500/20",
    tech: ["HTML", "CSS", "JS", "Vercel"]
  },
  {
    title: "NoShowIQ",
    subtitle: "Healthcare No-Show Prediction",
    desc: "Fullstack app predicting patient appointment no-shows using ML models.",
    url: "https://noshowiq.vercel.app",
    icon: "brain",
    color: "from-purple-500/20 to-pink-500/20",
    tech: ["Next.js", "Python", "FastAPI", "Vercel"]
  },
  {
    title: "Sumbandila",
    subtitle: "Identity Verification Platform",
    desc: "Digital identity verification system with document authentication, biometric validation, and secure API integration for enterprise clients.",
    url: "https://landing-five-orcin-61.vercel.app",
    icon: "shield",
    color: "from-[#00FF9C]/20 to-cyan-500/20",
    tech: ["Next.js", "Tailwind", "API Integration", "Vercel"]
  },
  {
    title: "Kirov Dynamics",
    subtitle: "Portfolio Hub",
    desc: "This portfolio. Systems architecture, AI engineering, and full-stack development showcase.",
    url: "https://koketso-raphasha.vercel.app",
    icon: "cpu",
    color: "from-[#00FF9C]/20 to-emerald-500/20",
    tech: ["React", "Vite", "Framer", "Vercel"]
  }
];

const VercelDeployments = () => {
  return (
    <div id="services" className="space-y-8 sm:space-y-16 py-6 sm:py-12">
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">Live</span>
          <div className="h-px bg-white/20 w-12 sm:w-24" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Deployed <span className="text-[#00FF9C]">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
        >
          Live demos deployed on Vercel. Scan the QR code with your phone to test any project instantly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative max-w-7xl mx-auto">
        {vercelProjects.map((project, i) => {
          const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(project.url)}&bgcolor=0A0A0A&color=00FFCC&margin=8`;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5, zIndex: 10 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#0a161d] border border-white/10 rounded-[24px] overflow-hidden flex flex-col hover:border-[#00FF9C]/30 transition-all duration-500 shadow-2xl relative"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center justify-center text-[#00FF9C] group-hover:scale-110 transition-transform duration-300">
                  <Icon name={project.icon} size={28} />
                </div>

                <h3 className="font-bold text-xl text-white group-hover:text-[#00FF9C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] font-mono text-[#00FF9C] uppercase tracking-widest -mt-2">
                  {project.subtitle}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[8px] px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-white/60 uppercase font-bold tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-3 bg-[#0A0A0A] rounded-2xl border border-[#00FF9C]/30 hover:border-[#00FF9C]/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,156,0.2)] mt-2"
                >
                  <img
                    src={qrUrl}
                    alt={`QR code for ${project.title}`}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg"
                  />
                </a>

                <span className="text-[9px] font-mono text-white/30 break-all px-2 -mt-1">
                  {project.url}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default VercelDeployments;

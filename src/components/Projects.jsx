import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Icon } from './Icons';
import { getTechInfo, PRIORITY_TECHS } from '../config/technologies';

const projects = [
  {
    title: "AI Business Engine",
    tagline: "Zero-Capital AI Businesses",
    desc: "5 playbooks for SA entrepreneurs. Pricing calculator, income stack, and live trial.",
    tech: ["nextjs", "react", "vercel"],
    icon: "zap",
    role: "Business Architect",
    color: "from-yellow-500/20 to-[#00FF9C]/20",
    featured: true,
    latest: true,
    link: "https://github.com/Raphasha27/AI-Business-Engine",
    liveUrl: "https://web-gamma-nine-c2cqi2h058.vercel.app",
    status: "live"
  },
  {
    title: "Mzansi AgriAI",
    tagline: "AI Advisory for Farmers",
    desc: "Crop advisor, weather alerts, pest detection, and market prices for SA small-scale farmers.",
    tech: ["html", "css", "javascript", "vercel"],
    icon: "globe",
    role: "AgriTech Dev",
    color: "from-green-500/20 to-emerald-500/20",
    featured: true,
    link: "https://github.com/Raphasha27/Mzansi-AgriAI",
    liveUrl: "https://mzansi-agriai-demo.vercel.app",
    status: "live"
  },
  {
    title: "EskomSense AI",
    tagline: "Load Shedding Predictor",
    desc: "ML-powered load shedding prediction, battery optimizer, and area selector for SA homes.",
    tech: ["html", "css", "javascript", "vercel"],
    icon: "zap",
    role: "Energy AI Lead",
    color: "from-yellow-500/20 to-orange-500/20",
    featured: true,
    link: "https://github.com/Raphasha27/EskomSense-AI",
    liveUrl: "https://eskomsense-ai-demo.vercel.app",
    status: "live"
  },
  {
    title: "NoShowIQ",
    tagline: "Healthcare No-Show Prediction",
    desc: "Fullstack app predicting patient appointment no-shows using ML models.",
    tech: ["nextjs", "python", "fastapi", "vercel"],
    icon: "brain",
    role: "ML Specialist",
    color: "from-emerald-400/20 to-cyan-500/20",
    featured: true,
    link: "https://github.com/Raphasha27/NoShowIQ",
    liveUrl: "https://noshowiq.vercel.app",
    status: "live"
  },
  {
    title: "Sumbandila",
    tagline: "Identity Verification System",
    desc: "Enterprise-grade digital identity verification platform with document authentication, biometric validation, and secure API infrastructure for government and financial institutions.",
    tech: ["nextjs", "tailwindcss", "api-integration", "security"],
    icon: "shield",
    role: "Full Stack Dev",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://github.com/Raphasha27/Sumbandila-App",
    liveUrl: "https://landing-five-orcin-61.vercel.app",
    status: "live"
  },
  {
    title: "Kirov Dynamics",
    tagline: "Portfolio Hub",
    desc: "This portfolio. Systems architecture, AI engineering, and full-stack development showcase.",
    tech: ["react", "vite", "framer", "vercel"],
    icon: "code",
    role: "Full Stack Dev",
    color: "from-purple-500/20 to-pink-500/20",
    featured: true,
    link: "https://github.com/Raphasha27/Portfolio",
    liveUrl: "https://koketso-raphasha.vercel.app",
    status: "live"
  },
  {
    title: "DevForge AI",
    tagline: "Autonomous Workflow Engine",
    desc: "AI-powered development workflow engine with automated scaffolding, static analysis, and self-healing infrastructure orchestration.",
    tech: ["python", "fastapi", "docker", "react"],
    icon: "globe",
    role: "AI Systems Dev",
    color: "from-[#00FF9C]/20 to-emerald-400/20",
    bgImage: "project-os.png",
    link: "https://github.com/Raphasha27/devforge-ai"
  },
  {
    title: "AI Job Market Intelligence",
    tagline: "RAG Analytics · 10K+ Jobs",
    desc: "Premium analytics platform utilizing RAG and Vector Embeddings for real-time market trends, salary insights, and intelligent candidate matching.",
    tech: ["python", "fastapi", "react", "docker"],
    icon: "zap",
    role: "Software Engineer",
    color: "from-emerald-500/20 to-teal-500/20",
    bgImage: "project-finance.png",
    link: "https://github.com/Raphasha27/ai-job-market-intelligence"
  },
  {
    title: "CyberShield Modern",
    tagline: "SOC Dashboard · Score 93",
    desc: "Next-gen SOC dashboard handling thousands of security events per second via WebSockets and WebGL visualizations.",
    tech: ["angular", "javascript", "nginx", "shield"],
    icon: "shield",
    role: "SOC Engineer",
    color: "from-[#00FF9C]/20 to-cyan-500/20",
    link: "https://github.com/Raphasha27/cybershield_soc"
  },
  {
    title: "SupportHive-C",
    tagline: "Background Monitoring · C Engine",
    desc: "High-performance background monitoring engine built in C for real-time repository health and CI/CD status enforcement.",
    tech: ["c", "linux", "github", "terminal"],
    icon: "terminal",
    role: "Systems Architect",
    color: "from-yellow-500/20 to-emerald-500/20",
    link: "https://github.com/Raphasha27/Github-Harden/tree/main/SupportHive-C"
  },
  {
    title: "Kirov Connect",
    tagline: "Civic Platform · Smart City",
    desc: "AI-powered public services platform revitalizing citizen engagement with smart workflows and autonomous case routing.",
    tech: ["vercel", "typescript", "bot", "azure"],
    icon: "building",
    role: "Civic Tech lead",
    color: "from-orange-500/20 to-[#00FF9C]/20",
    link: "https://github.com/Raphasha27/Fire4s_Project1_Week1"
  },
  {
    title: "RepoPulse",
    tagline: "Real-time Metrics",
    desc: "Satellite-view dashboard for tracking repository pulses, contribution heatmaps, and automated security patches.",
    tech: ["go", "grafana", "prometheus", "activity"],
    icon: "signal",
    role: "Observability Eng",
    color: "from-emerald-500/20 to-cyan-500/20",
    link: "https://github.com/Raphasha27/Github-Harden"
  },
  {
    title: "Autonomous Dev Factory",
    tagline: "Multi-Agent Pipeline · CI/CD",
    desc: "Autonomous development factory with multi-agent orchestration, continuous integration pipelines, and self-healing deployment infrastructure.",
    tech: ["python", "docker", "github", "fastapi"],
    icon: "ticket",
    role: "Platform Engineer",
    color: "from-red-500/20 to-[#00FF9C]/20",
    bgImage: "project-logistics.png",
    link: "https://github.com/Raphasha27/autonomous-dev-factory-v7"
  },
  {
    title: "Gauteng Transport Dashboard",
    tagline: "Geospatial · ML Analytics",
    desc: "Interactive geospatial dashboard analyzing Gauteng public transport data with predictive ML models for route optimization and delay forecasting.",
    tech: ["python", "streamlit", "docker", "fastapi"],
    icon: "graduationCap",
    role: "Data Engineer",
    color: "from-emerald-500/20 to-cyan-500/20",
    bgImage: "project-edutech.png",
    link: "https://github.com/Raphasha27/gauteng-transport-dashboard"
  },
  {
    title: "EskomSense AI",
    tagline: "Energy · Load Shedding Predictor",
    desc: "ML-powered load shedding prediction engine using historical Eskom data, weather patterns, and grid telemetry. Optimizes backup battery and generator scheduling for homes and businesses across SA.",
    tech: ["python", "pytorch", "docker", "react"],
    icon: "zap",
    role: "Energy AI Lead",
    color: "from-yellow-500/20 to-orange-500/20",
    link: "https://github.com/Raphasha27/EskomSense-AI"
  },
  {
    title: "Townships Market AI",
    tagline: "Economy · SMME Marketplace",
    desc: "AI-powered digital marketplace connecting township SMMEs to local customers. Smart inventory management, intelligent delivery routing, and multilingual support for Zulu, Xhosa, and English.",
    tech: ["react", "python", "fastapi", "typescript"],
    icon: "building",
    role: "Platform Architect",
    color: "from-emerald-500/20 to-[#00FF9C]/20",
    link: "https://github.com/Raphasha27/Townships-Market-AI"
  },
  {
    title: "SA Language AI",
    tagline: "NLP · Zulu · Xhosa · Afrikaans",
    desc: "Open-source NLP toolkit for South Africa's official languages. Fine-tuned transformer models for translation, speech-to-text, text-to-speech, and chatbot capabilities in isiZulu, isiXhosa, Afrikaans, Sesotho, and English.",
    tech: ["python", "pytorch", "docker", "fastapi"],
    icon: "globe",
    role: "NLP Engineer",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://github.com/Raphasha27/SA-Language-AI"
  },
  {
    title: "WaterWatch SA",
    tagline: "Infrastructure · Leak Detection",
    desc: "IoT sensor network coupled with AI anomaly detection for real-time water leak identification and pipe failure prediction in South African municipalities. Dashboard for municipal engineers with alerting and reporting.",
    tech: ["python", "docker", "react", "grafana"],
    icon: "signal",
    role: "IoT Systems Eng",
    color: "from-cyan-500/20 to-blue-500/20",
    link: "https://github.com/Raphasha27/WaterWatch-SA"
  },
  {
    title: "Mzansi AgriAI",
    tagline: "Agriculture · AI Advisory",
    desc: "AI-powered advisory platform for small-scale South African farmers. Crop yield prediction, weather alerting, pest detection, and real-time market pricing — delivered via USSD and mobile-first web app.",
    tech: ["python", "streamlit", "docker", "react"],
    icon: "globe",
    role: "AgriTech Dev",
    color: "from-green-500/20 to-emerald-500/20",
    link: "https://github.com/Raphasha27/Mzansi-AgriAI"
  },
  {
    title: "YouthCode ZA",
    tagline: "Education · Offline-First Coding",
    desc: "Offline-first coding education platform delivering interactive programming lessons to underserved SA youth. AI mentor chatbot, progress tracking, and certificate pathways — no internet required after initial sync.",
    tech: ["react", "python", "fastapi", "docker"],
    icon: "graduationCap",
    role: "EdTech Architect",
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://github.com/Raphasha27/YouthCode-ZA"
  },
  {
    title: "AI Business Engine",
    tagline: "Business · Zero-Capital",
    desc: "5 ready-to-launch AI-powered businesses requiring zero capital. Complete playbooks with free tools, pricing models, income calculator, and 30-day launch plans. Content studio, automation agency, digital products, SMME consulting, training workshops.",
    tech: ["python", "docker", "fastapi", "react"],
    icon: "zap",
    role: "Business Architect",
    color: "from-yellow-500/20 to-[#00FF9C]/20",
    link: "https://github.com/Raphasha27/AI-Business-Engine"
  },
  {
    title: "Titanic ML (Kaggle)",
    tagline: "78.5% Public LB · Ensemble",
    desc: "End-to-end ML pipeline scoring 78.5% on Kaggle Titanic. KNN imputation, interaction features, tuned GradientBoosting/XGBoost across 7 model versions.",
    tech: ["python", "kaggle", "jupyter", "postgres"],
    icon: "brain",
    role: "Data Scientist",
    color: "from-[#00FF9C]/20 to-blue-500/20",
    link: "https://github.com/Raphasha27/Raphasha27/tree/main/projects/titanic-ml"
  },
  {
    title: "ETL Pipeline Suite",
    tagline: "3 Pipelines · Production Grade",
    desc: "Three production data pipelines: CSV→PostgreSQL ETL with validation, PySpark distributed processing, and REST API extraction with auto-pagination.",
    tech: ["python", "postgres", "docker", "streamlit"],
    icon: "database",
    role: "Data Engineer",
    color: "from-emerald-500/20 to-purple-500/20",
    link: "https://github.com/Raphasha27/data-engineering-kaggle"
  }
];


const TiltCard = ({ children, className, id }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <motion.div
      id={id}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const bannerTechs = PRIORITY_TECHS.map(techKey => {
    const techInfo = getTechInfo(techKey);
    return { name: techInfo.name, id: techInfo.icon };
  });
  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <section className="space-y-8 sm:space-y-12">
      <div id="projects" className="glass p-5 sm:p-8 lg:p-10 flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl sm:rounded-3xl" aria-label="Projects section">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-16 gap-4 relative z-10">
          <div className="space-y-2 sm:space-y-4 max-w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none break-words">
              Project <span className="text-[#00FF9C]">Inventory</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">System Registry: 18 Active Nodes</div>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 w-fit mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
              <span className="text-[10px] font-bold text-[#00FF9C] uppercase tracking-widest">Sync: Verified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10">
          {projects.map((p, i) => (
            <TiltCard 
              key={i} id={`project-${i}`} className="glass p-5 border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group relative overflow-hidden rounded-2xl flex flex-col h-full"
            >

              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/40 to-transparent pointer-events-none" />
              
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${p.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 bg-[#0a161d] border-[#00FF9C]/40 text-[#00FF9C] shadow-[0_0_20px_rgba(0,255,156,0.15)] group-hover:scale-110 transition-transform duration-500">
                    <Icon name={p.icon} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-white truncate group-hover:text-blue-400 transition-colors">{p.title}</h3>
                      {p.status === 'live' && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/30 shrink-0">
                          <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[7px] text-green-400 font-bold uppercase tracking-wider">Live</span>
                        </span>
                      )}
                    </div>
                    <div className="text-[8px] uppercase font-bold tracking-wider text-blue-400/80 truncate">{p.tagline}</div>
                  </div>
                  <div className="text-[7px] px-2 py-0.5 rounded-sm border uppercase font-bold bg-[#00FF9C]/10 border-[#00FF9C]/30 text-[#00FF9C] hidden sm:block shrink-0">
                    {p.role}
                  </div>
                </div>
              
                <p className="text-[11px] text-white/90 font-medium mb-3 line-clamp-3 leading-relaxed flex-1">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.slice(0, 4).map((t, j) => {
                    const techInfo = getTechInfo(t);
                    return (
                      <span key={j} className="text-[7px] px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-white/80 flex items-center gap-1 uppercase font-bold tracking-wider">
                        <Icon name={techInfo.icon} size={10} />
                        {techInfo.name}
                      </span>
                    );
                  })}
                </div>
              
                <div className="flex gap-2 mt-auto pt-2 border-t border-white/5">
                  {p.liveUrl && (
                    <a 
                      href={p.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-500/50 text-green-400 font-bold text-[10px] uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                    >
                      <Icon name="globe" size={12} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={p.link || "https://github.com/Raphasha27"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${p.liveUrl ? 'flex-none px-2' : 'flex-1'} flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF9C]/30 text-white/70 hover:text-[#00FF9C] font-bold text-[10px] uppercase tracking-wider transition-all`}
                  >
                    <Icon name="github" size={12} />
                    {!p.liveUrl && <span>View Code</span>}
                  </a>
                  <button 
                    onClick={() => {
                      const url = `${window.location.origin}${window.location.pathname}#project-${i}`;
                      navigator.clipboard.writeText(url);
                    }}
                    className="flex-none w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 text-white/40 hover:text-blue-400 transition-all"
                    title="Copy Link"
                  >
                    <Icon name="share" size={14} />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* GitHub Contributions */}
      <div className="glass p-5 sm:p-8 lg:p-10 flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 relative z-10">
          <div className="space-y-2 max-w-full">
            <h2 className="text-xl sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.4em] uppercase font-mono text-white leading-none break-words flex items-center gap-3">
              <Icon name="github" size={24} />
              GitHub <span className="text-[#00FF9C]">Activity</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mt-2">Live Contribution Matrix</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
            <span className="text-[10px] font-bold text-[#00FF9C] uppercase tracking-widest">Live</span>
          </div>
        </div>

        <div className="relative z-10 w-full overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 pb-4">
          <div className="min-w-max p-4 bg-[#05080c]/80 rounded-xl border border-white/5">
            <GitHubCalendar 
              username="Raphasha27" 
              colorScheme="dark"
              theme={{
                dark: ['#0d1117', '#004d2e', '#00804d', '#00b36b', '#00FF9C'],
              }}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </div>

      {/* Scrolling Tech Marquee — Moved from Hero */}
      <div className="py-8 glass border-t border-b border-white/5 bg-black/20 backdrop-blur-md overflow-hidden rounded-3xl">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap"
        >
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity">
                <Icon name={tech.id} size={28} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/90 transition-colors font-mono">
                {tech.name}
              </span>
              <div className="w-1 h-1 rounded-full bg-[#00FF9C]/30 ml-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

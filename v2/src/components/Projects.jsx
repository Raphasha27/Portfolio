import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Icon } from './Icons';

const projects = [
  {
    title: "Sovereign-AI-Nexus",
    tagline: "Global Agentic Infra",
    desc: "Decentralized multi-agent infrastructure for autonomous professional branding and automated repository hardening. The flagship of the Kirov ecosystem.",
    tech: ["python", "langchain", "postgresql", "docker"],
    icon: "globe",
    role: "Agentic Infra Dev",
    color: "from-[#00FF9C]/20 to-emerald-400/20",
    bgImage: "project-os.png",
    featured: true,
    latest: true,
    link: "https://github.com/Raphasha27/Sovereign-AI-Nexus-v2"
  },
  {
    title: "FlowSentinel",
    tagline: "Traffic Governance · 2.4M Req/s",
    desc: "Enterprise traffic governance engine with distributed rate-limiting, sub-millisecond overhead, and Fail-Open resilience.",
    tech: ["csharp", "redis", "activity", "docker"],
    icon: "zap",
    role: "Traffic Architect",
    color: "from-emerald-500/20 to-teal-500/20",
    bgImage: "project-finance.png",
    link: "https://github.com/Raphasha27/FlowSentinel"
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
    title: "NoShowIQ",
    tagline: "Healthcare AI · No-Show Prediction",
    desc: "AI-driven healthcare platform predicting appointment no-shows using ML models, reducing clinic inefficiency at scale.",
    tech: ["python", "pytorch", "zap", "react"],
    icon: "brain",
    role: "ML Specialist",
    color: "from-emerald-400/20 to-cyan-500/20",
    link: "https://github.com/Raphasha27/NoShowIQ"
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
    title: "SeatLock",
    tagline: "Reservations · Zero Downtime",
    desc: "High-reliability seat reservation system with zero-downtime performance guarantees, built for enterprise event management.",
    tech: ["csharp", "node", "redis", "docker"],
    icon: "ticket",
    role: "Backend specialist",
    color: "from-red-500/20 to-[#00FF9C]/20",
    bgImage: "project-logistics.png",
    link: "https://github.com/Raphasha27/SeatLock"
  },
  {
    title: "EduStream-Pro-ICT",
    tagline: "EdTech · AI Curriculum Engine",
    desc: "AI-augmented educational platform deploying adaptive curriculum delivery for ICT learners across distributed environments.",
    tech: ["react", "python", "fastapi", "aws"],
    icon: "graduationCap",
    role: "EdTech AI Dev",
    color: "from-emerald-500/20 to-cyan-500/20",
    bgImage: "project-edutech.png",
    link: "https://github.com/Raphasha27/EduStream-Pro-ICT"
  }
];



const bannerTechs = [
  { name: "React",           id: "react"        },
  { name: "C",               id: "c"            },
  { name: "C++",             id: "cplusplus"    },
  { name: "Python",          id: "python"       },
  { name: "Java",            id: "java"         },
  { name: "Go",              id: "go"           },
  { name: "Rust",            id: "rust"         },
  { name: "Swift",           id: "swift"        },
  { name: "Node.js",         id: "node"         },
  { name: "FastAPI",         id: "fastapi"      },
  { name: "Expo",            id: "expo"         },
  { name: "Android Studio",  id: "androidstudio"},
  { name: "Streamlit",       id: "streamlit"    },
  { name: "Kaggle",          id: "kaggle"       },
  { name: "Jupyter",         id: "jupyter"      },
  { name: "R",               id: "r"            },
  { name: "PostgreSQL",      id: "postgres"     },
  { name: "TypeScript",      id: "typescript"   },
  { name: "Next.js",         id: "nextjs"       },
  { name: "Docker",          id: "docker"       },
  { name: "MongoDB",         id: "mongodb"      },
  { name: "Tailwind CSS",    id: "tailwindcss"  },
  { name: "GitHub Actions",  id: "githubactions" },
  { name: "LangChain",       id: "langchain"    },
  { name: "Redis",           id: "redis"        },
  { name: "Framer Motion",   id: "framer"       },
  { name: "TensorFlow",      id: "tensorflow"   },
  { name: "PyTorch",         id: "pytorch"      },
  { name: "Kubernetes",      id: "kubernetes"   },
  { name: "Linux",           id: "linux"        },
  { name: "Kali Linux",      id: "kalilinux"    },
  { name: "Wireshark",       id: "wireshark"    },
  { name: "Vite",            id: "vite"         },
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
  const [copied, setCopied] = useState(false);
  const doubled = [...bannerTechs, ...bannerTechs];

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      <div id="projects" className="glass p-5 sm:p-8 lg:p-10 flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-16 gap-4 relative z-10">
          <div className="space-y-2 sm:space-y-4 max-w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none break-words">
              Project <span className="text-[#00FF9C]">Inventory</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">System Registry: 9 Active Nodes</div>
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

              {/* Refined Visibility Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/60 to-transparent pointer-events-none" />
              
              {/* Highlight Glow Effect */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${p.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10 flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl border flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 shrink-0 bg-[#0a161d] border-[#00FF9C]/40 text-[#00FF9C] shadow-[0_0_20px_rgba(0,255,156,0.15)]"
                  >
                    <div className="relative z-10">
                      <Icon name={p.icon} size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white transition-colors drop-shadow-lg group-hover:text-blue-400">{p.title}</h3>
                    <div className="text-[8px] uppercase font-bold tracking-wider text-blue-400/80">{p.tagline}</div>
                  </div>
                </div>
                <div className="text-[7px] px-2 py-0.5 rounded-sm border uppercase font-bold bg-[#00FF9C]/10 border-[#00FF9C]/30 text-[#00FF9C] shadow-[0_0_10px_rgba(0,255,156,0.1)] hidden sm:block">
                  {p.role}
                </div>
              </div>
              
              <p className="relative z-10 text-[11px] text-white/90 font-medium mb-6 line-clamp-3 leading-relaxed group-hover:text-white transition-colors drop-shadow-md flex-1">
                {p.desc}
              </p>
              
              <div className="relative z-10 flex justify-between items-center mt-auto">
                <div className="flex gap-2">
                  {p.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="text-[7px] px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-white/80 group-hover:border-white/30 transition-colors flex items-center gap-1.5 uppercase font-bold tracking-wider">
                      <Icon name={t.toLowerCase()} size={10} />
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      const url = `${window.location.origin}${window.location.pathname}#project-${i}`;
                      navigator.clipboard.writeText(url);
                    }}
                    className="text-white/40 hover:text-blue-400 transition-colors"
                    title="Copy Link"
                  >
                    <Icon name="share" size={14} />
                  </button>
                  <a href={p.link || "https://github.com/Raphasha27"} target="_blank" className="text-[#00FF9C] hover:text-white transition-colors">
                    <Icon name="externallink" size={14} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
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
              <div className="w-1 h-1 rounded-full bg-blue-500/30 ml-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

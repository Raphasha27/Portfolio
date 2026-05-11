import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import experienceBg from '../assets/experience-bg.png';
import heroBg from '../assets/hero-bg.png';

const projects = [
  {
    title: "Sovereign-AI-Nexus",
    tagline: "Global Agentic Infra",
    desc: "Decentralized multi-agent infrastructure for autonomous professional branding and automated repository hardening. The flagship of the Kirov ecosystem.",
    tech: ["python", "LangChain", "database", "docker"],
    icon: "globe",
    role: "Agentic Infra Dev",
    color: "from-blue-600/20 to-cyan-400/20",
    bgImage: "project-os.png",
    featured: true,
    latest: true
  },
  {
    title: "FlowSentinel",
    tagline: "Traffic Governance · 2.4M Req/s",
    desc: "Enterprise traffic governance engine with distributed rate-limiting, sub-millisecond overhead, and Fail-Open resilience.",
    tech: ["C#", "redis", "activity", "docker"],
    icon: "zap",
    role: "Traffic Architect",
    color: "from-blue-500/20 to-green-500/20",
    bgImage: "project-finance.png"
  },
  {
    title: "CyberShield Modern",
    tagline: "SOC Dashboard · Score 93",
    desc: "Next-gen SOC dashboard handling thousands of security events per second via WebSockets and WebGL visualizations.",
    tech: ["angular", "D3.js", "signal", "shield"],
    icon: "shield",
    role: "SOC Engineer",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "NoShowIQ",
    tagline: "Healthcare AI · No-Show Prediction",
    desc: "AI-driven healthcare platform predicting appointment no-shows using ML models, reducing clinic inefficiency at scale.",
    tech: ["python", "PyTorch", "zap", "react"],
    icon: "brain",
    role: "ML Specialist",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "SupportHive-C",
    tagline: "Background Monitoring · C Engine",
    desc: "High-performance background monitoring engine built in C for real-time repository health and CI/CD status enforcement.",
    tech: ["C", "pthreads", "github", "terminal"],
    icon: "terminal",
    role: "Systems Architect",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Kirov Connect",
    tagline: "Civic Platform · Smart City",
    desc: "AI-powered public services platform revitalizing citizen engagement with smart workflows and autonomous case routing.",
    tech: ["vercel", "TypeScript", "bot", "azure"],
    icon: "building",
    role: "Civic Tech lead",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "RepoPulse",
    tagline: "Real-time Metrics",
    desc: "Satellite-view dashboard for tracking repository pulses, contribution heatmaps, and automated security patches.",
    tech: ["Go", "signal", "postgres", "activity"],
    icon: "signal",
    role: "Observability Eng",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "SeatLock",
    tagline: "Reservations · Zero Downtime",
    desc: "High-reliability seat reservation system with zero-downtime performance guarantees, built for enterprise event management.",
    tech: ["C#", "node", "redis", "docker"],
    icon: "ticket",
    role: "Backend specialist",
    color: "from-red-500/20 to-purple-500/20",
    bgImage: "project-logistics.png"
  },
  {
    title: "EduStream-Pro-ICT",
    tagline: "EdTech · AI Curriculum Engine",
    desc: "AI-augmented educational platform deploying adaptive curriculum delivery for ICT learners across distributed environments.",
    tech: ["react", "python", "brain", "aws"],
    icon: "graduationCap",
    role: "EdTech AI Dev",
    color: "from-blue-500/20 to-indigo-500/20",
    bgImage: "project-edutech.png"
  }
];

import projectEdutech from '../assets/project-edutech.png';
import projectOs from '../assets/project-os.png';
import projectFinance from '../assets/project-finance.png';
import projectLogistics from '../assets/project-logistics.png';

const assetMap = {
  "project-edutech.png": projectEdutech,
  "project-os.png": projectOs,
  "project-finance.png": projectFinance,
  "project-logistics.png": projectLogistics,
};

const Projects = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div id="projects" className="glass p-10 h-full flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-3xl">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-transparent pointer-events-none"></div>
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="flex justify-between items-center mb-16 relative z-10">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.8em] uppercase font-mono text-white leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Project <span className="text-green-400">Inventory</span>
          </h2>
          <div className="text-[#00e5a0] text-[10px] font-mono uppercase tracking-[0.5em] font-black opacity-60">System Registry: 9 Active Nodes</div>
        </div>
        <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-[11px] font-bold text-green-400 uppercase tracking-[0.3em]">Status: Online</span>
        </div>
      </div>

      <div className="flex-1 space-y-3 relative z-10">
        {projects.map((p, i) => (
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={i} id={`project-${i}`} className="glass p-4 border-white/5 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,229,160,0.15)] transition-all duration-300 group relative overflow-hidden rounded-xl"
            style={{ perspective: 1000 }}
          >
            {/* Real Color Background Overlay with Visibility Filter */}
            <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-[0.7] transition-opacity duration-500 pointer-events-none">
              <img 
                src={p.bgImage ? assetMap[p.bgImage] : (i % 2 === 0 ? experienceBg : heroBg)} 
                alt="" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-[0.4] contrast-125" 
              />
            </div>
            {/* Refined Visibility Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/40 to-transparent pointer-events-none" />
            
            {/* Highlight Glow Effect */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${p.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}></div>
            
            <div className="relative z-10 flex justify-between items-start mb-2">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-16 rounded-full border flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 shrink-0 bg-[#0a161d]"
                  style={{ 
                    borderColor: 'rgba(0, 229, 160, 0.4)', 
                    boxShadow: '0 0 20px rgba(0, 229, 160, 0.15), inset 0 0 10px rgba(0, 229, 160, 0.1)' 
                  }}
                >
                  <div className="relative z-10 text-green-400">
                    <Icon name={p.icon} size={24} />
                  </div>
                  {/* Outer Corner Accents */}
                  <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t border-l border-green-400 opacity-80 group-hover:scale-110 transition-transform"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b border-r border-green-400 opacity-80 group-hover:scale-110 transition-transform"></div>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-white group-hover:text-green-400 transition-colors drop-shadow-lg">{p.title}</h3>
                  <div className="text-[7px] text-green-400/80 uppercase font-bold tracking-wider">{p.tagline}</div>
                </div>
              </div>
              <div className="text-[6px] px-1.5 py-0.5 rounded-sm bg-green-500/10 border border-green-500/30 text-green-400 uppercase font-bold whitespace-nowrap shadow-[0_0_10px_rgba(0,229,160,0.1)] group-hover:bg-green-500/20 transition-colors">
                {p.role}
              </div>
            </div>
            
            <p className="relative z-10 text-[10px] text-white/90 font-medium mb-3 line-clamp-2 leading-relaxed group-hover:text-white transition-colors transform-gpu drop-shadow-md">
              {p.desc}
            </p>
            
            <div className="relative z-10 flex justify-between items-center transform-gpu">
              <div className="flex gap-1.5">
                {p.tech.slice(0, 4).map((t, j) => (
                  <span key={j} className="text-[6px] px-1.5 py-0.5 rounded-sm bg-white/10 border border-white/20 text-white/90 group-hover:border-white/40 transition-colors flex items-center gap-1">
                    <Icon name={t.toLowerCase()} size={8} className="opacity-90 group-hover:opacity-100" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    const url = `${window.location.origin}${window.location.pathname}#project-${i}`;
                    navigator.clipboard.writeText(url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-text-dim hover:text-green-400 transition-colors drop-shadow-none hover:drop-shadow-[0_0_5px_rgba(0,229,160,0.5)]"
                  title="Copy Link"
                >
                  <Icon name={copied ? "check" : "share"} size={12} />
                </button>
                <a href="https://github.com/Raphasha27" target="_blank" className="text-green-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(0,229,160,0.2)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  <Icon name="externalLink" size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

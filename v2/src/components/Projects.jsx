import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const projects = [
  {
    title: "Sovereign-AI-Nexus",
    tagline: "Global Agentic Infra",
    desc: "Decentralized multi-agent infrastructure for autonomous professional branding and automated repository hardening. The flagship of the Kirov ecosystem.",
    tech: ["Python", "LangChain", "Vector DB", "Docker"],
    icon: "globe",
    role: "Agentic Infra Dev",
    color: "from-blue-600/20 to-cyan-400/20",
    featured: true,
    latest: true
  },
  {
    title: "FlowSentinel",
    tagline: "Traffic Governance · 2.4M Req/s",
    desc: "Enterprise traffic governance engine with distributed rate-limiting, sub-millisecond overhead, and Fail-Open resilience.",
    tech: [".NET 8", "Redis Lua", "OpenTelemetry", "Docker"],
    icon: "zap",
    role: "Traffic Architect",
    color: "from-blue-500/20 to-green-500/20"
  },
  {
    title: "CyberShield Modern",
    tagline: "SOC Dashboard · Score 93",
    desc: "Next-gen SOC dashboard handling thousands of security events per second via WebSockets and WebGL visualizations.",
    tech: ["Angular", "D3.js", "WebSockets", "CyberSec"],
    icon: "shield",
    role: "SOC Engineer",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "NoShowIQ",
    tagline: "Healthcare AI · No-Show Prediction",
    desc: "AI-driven healthcare platform predicting appointment no-shows using ML models, reducing clinic inefficiency at scale.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    icon: "brain",
    role: "ML Specialist",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "SupportHive-C",
    tagline: "Background Monitoring · C Engine",
    desc: "High-performance background monitoring engine built in C for real-time repository health and CI/CD status enforcement.",
    tech: ["C", "pthreads", "Git API", "Linux"],
    icon: "cpu",
    role: "Systems Architect",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Kirov Connect",
    tagline: "Civic Platform · Smart City",
    desc: "AI-powered public services platform revitalizing citizen engagement with smart workflows and autonomous case routing.",
    tech: ["Next.js", "TypeScript", "AI Automation", "Azure"],
    icon: "building",
    role: "Civic Tech lead",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "RepoPulse",
    tagline: "Real-time Metrics",
    desc: "Satellite-view dashboard for tracking repository pulses, contribution heatmaps, and automated security patches.",
    tech: ["Go", "gRPC", "PostgreSQL", "Grafana"],
    icon: "signal",
    role: "Observability Eng",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "SeatLock",
    tagline: "Reservations · Zero Downtime",
    desc: "High-reliability seat reservation system with zero-downtime performance guarantees, built for enterprise event management.",
    tech: ["C#", ".NET 8", "Redis", "Docker"],
    icon: "ticket",
    role: "Backend specialist",
    color: "from-red-500/20 to-purple-500/20"
  },
  {
    title: "EduStream-Pro-ICT",
    tagline: "EdTech · AI Curriculum Engine",
    desc: "AI-augmented educational platform deploying adaptive curriculum delivery for ICT learners across distributed environments.",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    icon: "graduationCap",
    role: "EdTech AI Dev",
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

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
    <div id="projects" className="glass p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Project <span className="text-green-400">Inventory</span></h2>
        <div className="text-[8px] text-green-400 font-bold uppercase tracking-[0.2em]">9 Active Deployments</div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scroll">
        {projects.map((p, i) => (
          <div key={i} id={`project-${i}`} className="glass p-4 border-white/5 hover:border-green-500/30 transition-all group relative overflow-hidden">
            {/* Subtle Background Overlay */}
            <div className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity pointer-events-none">
              <img 
                src={i % 2 === 0 ? "/src/assets/experience-bg.png" : "/src/assets/hero-bg.png"} 
                alt="" 
                className="w-full h-full object-cover grayscale" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-bg/20 to-bg/90 pointer-events-none" />
            
            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${p.color} blur-2xl opacity-20 group-hover:opacity-40 transition-all`}></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="text-green-400 group-hover:scale-110 transition-transform">
                  <Icon name={p.icon} size={20} />
                </div>
                <h3 className="text-[12px] font-bold">{p.title}</h3>
              </div>
              <div className="text-[6px] px-1 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 uppercase font-bold">
                {p.role}
              </div>
            </div>
            
            <p className="text-[9px] text-text-dim mb-3 line-clamp-2 leading-tight">
              {p.desc}
            </p>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                {p.tech.slice(0, 3).map((t, j) => (
                  <span key={j} className="text-[6px] px-1 py-0.5 rounded bg-white/5 border border-white/10 text-text-dim">{t}</span>
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
                  className="text-text-dim hover:text-green-400 transition-colors"
                  title="Copy Link"
                >
                  <Icon name={copied ? "check" : "share"} size={12} />
                </button>
                <a href="https://github.com/Raphasha27" target="_blank" className="text-green-400 hover:text-white transition-colors">
                  <Icon name="externalLink" size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

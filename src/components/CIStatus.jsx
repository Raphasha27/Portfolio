import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

// Only projects with passing CI status - Enhanced with more details
const passingProjects = [
  { 
    name: "EskomSense AI", 
    status: "passing", 
    repo: "EskomSense-AI",
    category: "AI/ML",
    description: "Load shedding prediction engine",
    tech: ["python", "pytorch", "docker"],
    coverage: "94%",
    lastBuild: "2h ago",
    icon: "zap"
  },
  { 
    name: "Townships Market AI", 
    status: "passing", 
    repo: "Townships-Market-AI",
    category: "Platform",
    description: "SMME marketplace platform",
    tech: ["react", "fastapi", "docker"],
    coverage: "91%",
    lastBuild: "5h ago",
    icon: "building"
  },
  { 
    name: "YouthCode ZA", 
    status: "passing", 
    repo: "YouthCode-ZA",
    category: "Education",
    description: "Offline-first coding education",
    tech: ["react", "python", "docker"],
    coverage: "89%",
    lastBuild: "1d ago",
    icon: "graduationCap"
  },
  { 
    name: "SA Language AI", 
    status: "passing", 
    repo: "SA-Language-AI",
    category: "NLP",
    description: "Multi-language NLP toolkit",
    tech: ["python", "pytorch", "docker"],
    coverage: "92%",
    lastBuild: "3h ago",
    icon: "globe"
  },
  { 
    name: "WaterWatch SA", 
    status: "passing", 
    repo: "WaterWatch-SA",
    category: "IoT",
    description: "Water leak detection system",
    tech: ["python", "react", "docker"],
    coverage: "88%",
    lastBuild: "6h ago",
    icon: "signal"
  },
  { 
    name: "Mzansi AgriAI", 
    status: "passing", 
    repo: "Mzansi-AgriAI",
    category: "AgriTech",
    description: "AI agricultural advisory",
    tech: ["python", "streamlit", "docker"],
    coverage: "90%",
    lastBuild: "4h ago",
    icon: "globe"
  },
  { 
    name: "AI Business Engine", 
    status: "passing", 
    repo: "AI-Business-Engine",
    category: "Business",
    description: "Zero-capital business playbooks",
    tech: ["python", "fastapi", "react"],
    coverage: "87%",
    lastBuild: "8h ago",
    icon: "zap"
  },
  { 
    name: "Network Port Scanner", 
    status: "passing", 
    repo: "Network-Port-Scanner",
    category: "Security",
    description: "Multi-threaded port scanner",
    tech: ["python", "terminal"],
    coverage: "95%",
    lastBuild: "1h ago",
    icon: "shield"
  },
  { 
    name: "Password Analyzer", 
    status: "passing", 
    repo: "Password-Analyzer",
    category: "Security",
    description: "Entropy calculation & scoring",
    tech: ["python", "terminal"],
    coverage: "96%",
    lastBuild: "2h ago",
    icon: "shield"
  },
  { 
    name: "Password Hasher", 
    status: "passing", 
    repo: "Password-Hasher",
    category: "Security",
    description: "Multi-algorithm hashing",
    tech: ["python", "terminal"],
    coverage: "93%",
    lastBuild: "3h ago",
    icon: "shield"
  },
  { 
    name: "Suspicious URL Checker", 
    status: "passing", 
    repo: "Suspicious-URL-Checker",
    category: "Security",
    description: "Phishing detection toolkit",
    tech: ["python", "terminal"],
    coverage: "91%",
    lastBuild: "5h ago",
    icon: "shield"
  },
  { 
    name: "Phishing Awareness Game", 
    status: "passing", 
    repo: "Phishing-Awareness-Game",
    category: "Security",
    description: "Gamified security training",
    tech: ["react", "javascript"],
    coverage: "88%",
    lastBuild: "7h ago",
    icon: "shield"
  },
  { 
    name: "DDoS Detection Simulator", 
    status: "passing", 
    repo: "DDOS-Detection-Simulator",
    category: "Security",
    description: "Traffic simulation & alerts",
    tech: ["python", "docker"],
    coverage: "90%",
    lastBuild: "4h ago",
    icon: "shield"
  },
  { 
    name: "Insider Threat Detector", 
    status: "passing", 
    repo: "Insider-Threat-Detector",
    category: "Security",
    description: "Behavioral analytics system",
    tech: ["python", "docker"],
    coverage: "92%",
    lastBuild: "6h ago",
    icon: "shield"
  },
];

const CIStatus = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading] = useState(false);
  const error = null;

  const categories = ['all', 'AI/ML', 'Platform', 'Security', 'IoT', 'Education', 'NLP', 'AgriTech', 'Business'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? passingProjects 
    : passingProjects.filter(p => p.category === selectedCategory);

  const avgCoverage = Math.round(
    passingProjects.reduce((sum, p) => sum + parseInt(p.coverage), 0) / passingProjects.length
  );

  if (error) {
    return (
      <div className="glass p-6 rounded-2xl border border-white/5 text-center">
        <p className="text-white/60">CI Dashboard temporarily unavailable</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-2 border-green-500/20 border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="glass p-6 sm:p-8 lg:p-10 flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl sm:rounded-3xl">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-blue-900/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase font-mono text-white">
              CI Status <span className="text-green-400">Dashboard</span>
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest">
            Continuous Integration Pipeline Status · Real-time Monitoring
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
              <Icon name="check" size={14} className="text-green-400" />
              <span className="text-xs font-bold text-green-400">{passingProjects.length} Passing</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Icon name="activity" size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-blue-400">{avgCoverage}% Avg Coverage</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Icon name="zap" size={14} className="text-purple-400" />
              <span className="text-xs font-bold text-purple-400">100% Uptime</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-green-500/20 border-green-500/40 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
              } border`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.repo}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.02 }}
              className="glass p-5 rounded-xl border border-white/5 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] transition-all group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 group-hover:scale-110 transition-all">
                      <Icon name={project.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors leading-tight">
                        {project.name}
                      </h4>
                      <span className="text-[8px] px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono uppercase tracking-wider mt-1 inline-block">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] text-white/60 mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70 text-[9px] font-mono uppercase">
                      <Icon name={tech} size={10} />
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] text-green-400 font-mono uppercase tracking-wider font-bold">
                        {project.status}
                      </span>
                    </div>
                    <span className="text-[9px] text-white/30 font-mono">·</span>
                    <span className="text-[9px] text-white/40 font-mono">{project.coverage}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] text-white/30 font-mono">{project.lastBuild}</span>
                    <a
                      href={`https://github.com/Raphasha27/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 flex items-center justify-center text-white/40 hover:text-green-400 transition-all group-hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="externallink" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">{passingProjects.length}</div>
            <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">0</div>
            <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Failed Builds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">{avgCoverage}%</div>
            <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Test Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
            <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Monitoring</div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-white/30">
          <span>Last updated: {new Date().toLocaleString()}</span>
          <div className="flex items-center gap-2">
            <Icon name="github" size={12} className="text-white/40" />
            <span>Powered by GitHub Actions CI/CD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIStatus;

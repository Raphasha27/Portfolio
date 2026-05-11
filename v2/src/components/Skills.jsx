import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: "FRONT END",
    id: "frontend",
    iconName: "palette",
    neonColor: "#00e5a0",
    skills: [
      { name: "React & Vite", pct: 95 },
      { name: "Tailwind CSS", pct: 92 },
      { name: "Next.js", pct: 88 },
      { name: "Framer Motion", pct: 90 }
    ]
  },
  {
    title: "BACK END",
    id: "backend",
    iconName: "gear",
    neonColor: "#00e5a0",
    skills: [
      { name: "Node.js & Express", pct: 90 },
      { name: "Python & FastAPI", pct: 92 },
      { name: "LangChain (AI)", pct: 85 },
      { name: "RESTful APIs", pct: 94 }
    ]
  },
  {
    title: "DATABASE",
    id: "database",
    iconName: "cabinet",
    neonColor: "#00e5a0",
    skills: [
      { name: "PostgreSQL", pct: 94 },
      { name: "MongoDB", pct: 88 },
      { name: "Redis", pct: 85 },
      { name: "Vector DBs", pct: 82 }
    ]
  },
  {
    title: "INFRASTRUCTURE",
    id: "infrastructure",
    iconName: "zap",
    neonColor: "#00e5a0",
    skills: [
      { name: "Vercel & Netlify", pct: 96 },
      { name: "Docker & Linux", pct: 85 },
      { name: "GitHub Actions", pct: 90 },
      { name: "Nginx & Server", pct: 82 }
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="p-10 h-full flex flex-col bg-[#050d12] relative overflow-hidden border border-white/5 rounded-3xl">
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* Header with Title and Status */}
      <div className="flex justify-between items-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter">
          Tech <span className="text-green-400">Arsenals</span>
        </h2>
        <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-[11px] font-bold text-green-400 uppercase tracking-[0.3em]">Operational: 100%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 flex-1 items-start relative z-10">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-12 group">
            {/* Header: Icon Container + Group Title */}
            <div className="flex items-center gap-8">
              <div 
                className="w-20 h-20 rounded-3xl border flex items-center justify-center relative transition-all duration-500 group-hover:scale-110"
                style={{ 
                  borderColor: `rgba(0, 229, 160, 0.3)`, 
                  boxShadow: `0 0 30px rgba(0, 229, 160, 0.1), inset 0 0 15px rgba(0, 229, 160, 0.05)` 
                }}
              >
                {/* Neon Icon */}
                <div className="relative z-10">
                   <Icon name={group.iconName} size={42} />
                </div>
                
                {/* High-Fidelity Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-green-400"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-green-400"></div>
              </div>
              
              <h3 className="text-3xl font-bold tracking-[0.4em] uppercase font-mono text-white/95 leading-none">{group.title}</h3>
            </div>

            {/* Skill Bars */}
            <div className="space-y-10">
              {group.skills.map((s, j) => (
                <div key={j} className="space-y-4">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[15px] font-bold text-white/90 font-mono tracking-wide uppercase">{s.name}</span>
                    <span className="text-[15px] font-bold font-mono text-green-400">{s.pct}%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full relative overflow-hidden border border-white/5 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 + j * 0.1 }}
                      className="h-full relative z-10 rounded-full bg-gradient-to-r from-green-600 to-green-400"
                      style={{ 
                        boxShadow: `0 0 20px rgba(0, 229, 160, 0.5)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arsenal Footer */}
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10 opacity-40 hover:opacity-100 transition-opacity duration-1000">
        {["react", "python", "typescript", "node", "nextjs", "tailwindcss", "postgres", "mongodb"].map((id, i) => (
          <div key={i} className="w-8 h-8 hover:scale-125 transition-all duration-500 cursor-pointer">
            <Icon name={id} size={28} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

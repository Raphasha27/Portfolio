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
      <div className="flex justify-between items-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter">
          Tech <span className="text-green-400">Arsenals</span>
        </h2>
        <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em]">Operational: 100%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 flex-1 items-start relative z-10">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-10 group">
            {/* Header with Neon Outlined Icon + 3D Emoji */}
            <div className="flex items-center gap-6">
              <div 
                className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110"
                style={{ 
                  borderColor: `${group.neonColor}80`, 
                  boxShadow: `0 0 20px ${group.neonColor}30, inset 0 0 10px ${group.neonColor}20` 
                }}
              >
                {/* 3D Emoji Icon */}
                <div className="relative z-10">
                   <Icon name={group.iconName} size={38} />
                </div>
                
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: group.neonColor }}></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: group.neonColor }}></div>
              </div>
              
              <h3 className="text-2xl font-bold tracking-[0.2em] uppercase font-mono text-white/90">{group.title}</h3>
            </div>

            {/* Skill Bars with Glow */}
            <div className="space-y-8 pl-2">
              {group.skills.map((s, j) => (
                <div key={j} className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[14px] font-bold text-white font-mono tracking-tight uppercase drop-shadow-md">{s.name}</span>
                    <span className="text-[14px] font-bold font-mono drop-shadow-lg" style={{ color: group.neonColor }}>{s.pct}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full relative border border-white/5 overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 + j * 0.1 }}
                      className="h-full relative z-10 rounded-full"
                      style={{ 
                        backgroundColor: group.neonColor,
                        boxShadow: `0 0 20px ${group.neonColor}cc`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mini Arsenal Footer */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-1000">
        {["react", "python", "typescript", "node", "nextjs", "tailwindcss", "postgres", "mongodb"].map((id, i) => (
          <div key={i} className="w-6 h-6 hover:scale-125 transition-all duration-500 cursor-pointer">
            <Icon name={id} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

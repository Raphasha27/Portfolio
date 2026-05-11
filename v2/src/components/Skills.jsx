import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: "FRONT END",
    id: "frontend",
    desc: "Crafting immersive user interfaces",
    iconName: "palette",
    neonColor: "#00e5a0",
    skills: [
      { name: "React & Vite", pct: 95, icon: "react" },
      { name: "Tailwind CSS", pct: 92, icon: "tailwindcss" },
      { name: "Next.js", pct: 88, icon: "nextjs" },
      { name: "Framer Motion", pct: 90, icon: "framer" }
    ]
  },
  {
    title: "BACK END",
    id: "backend",
    desc: "Architecting scalable logic & APIs",
    iconName: "gear",
    neonColor: "#00e5a0",
    skills: [
      { name: "Node.js & Express", pct: 90, icon: "node" },
      { name: "Python & FastAPI", pct: 92, icon: "python" },
      { name: "LangChain (AI)", pct: 85, icon: "langchain" },
      { name: "RESTful APIs", pct: 94, icon: "code" }
    ]
  },
  {
    title: "DATABASE",
    id: "database",
    desc: "Storing & managing data",
    iconName: "cabinet",
    neonColor: "#00e5a0",
    skills: [
      { name: "PostgreSQL", pct: 94, icon: "postgres" },
      { name: "MongoDB", pct: 88, icon: "mongodb" },
      { name: "Redis", pct: 85, icon: "redis" },
      { name: "Vector DBs", pct: 82, icon: "database" }
    ]
  },
  {
    title: "INFRASTRUCTURE",
    id: "infrastructure",
    desc: "Deploying resilient ecosystems",
    iconName: "zap",
    neonColor: "#00e5a0",
    skills: [
      { name: "Vercel & Netlify", pct: 96, icon: "vercel" },
      { name: "Docker & Linux", pct: 85, icon: "docker" },
      { name: "GitHub Actions", pct: 90, icon: "github" },
      { name: "Nginx & Server", pct: 82, icon: "cloud" }
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
        {skillGroups.map((group, i) => {
          return (
            <div key={i} className="space-y-12 group">
              {/* Header: Icon Container + Group Title */}
              <div className="flex items-center gap-8">
                <div 
                  className="w-20 h-24 rounded-full border flex items-center justify-center relative transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    borderColor: 'rgba(0, 229, 160, 0.4)', 
                    boxShadow: '0 0 30px rgba(0, 229, 160, 0.15), inset 0 0 15px rgba(0, 229, 160, 0.1)' 
                  }}
                >
                  <div className="relative z-10">
                    <Icon name={group.iconName} size={42} />
                  </div>
                  {/* Outer Corner Accents */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-green-400 opacity-80"></div>
                  <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-green-400 opacity-80"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-[0.8em] uppercase font-mono text-white leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{group.title}</h3>
                  <div className="text-[#00e5a0] text-[10px] font-mono uppercase tracking-[0.5em] font-black">{group.desc}</div>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-10">
                {group.skills.map((s, j) => {
                  return (
                    <div key={j} className="space-y-4">
                      <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 flex items-center justify-center opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                            <Icon name={s.icon} size={22} />
                          </div>
                          <span className="text-[15px] font-bold text-white/90 font-mono tracking-wide uppercase">{s.name}</span>
                        </div>
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
                            boxShadow: '0 0 20px rgba(0, 229, 160, 0.5)'
                          }}
                        >
                          {/* Glowing Flare Tip */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-300 blur-md opacity-60 rounded-full" />
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white blur-[2px] opacity-80 rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Values Divider Bar (Image 2 Style) */}
      <div className="mt-24 py-8 border-t border-b border-white/5 flex justify-center items-center gap-16 relative z-10">
        {[
          { id: "scale", label: "ETHICAL AI" },
          { id: "shield", label: "SECURE ARCH" },
          { id: "bookopen", label: "SYSTEM LOGIC" }
        ].map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-4 group cursor-help">
              <div className="text-green-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,229,160,0.5)] transition-all duration-500">
                <Icon name={item.id} size={32} />
              </div>
              <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase group-hover:text-green-400 transition-colors">{item.label}</span>
            </div>
            {i < 2 && <div className="h-12 w-[1px] bg-white/5" />}
          </React.Fragment>
        ))}
      </div>

      {/* Arsenal Footer */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-20 hover:opacity-100 transition-opacity duration-1000">
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

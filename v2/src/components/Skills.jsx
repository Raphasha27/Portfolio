import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: "Front End",
    iconName: "layout",
    skills: [
      { name: "React & Vite", pct: 95 },
      { name: "Tailwind CSS", pct: 92 },
      { name: "Next.js", pct: 88 },
      { name: "Framer Motion", pct: 90 }
    ],
    color: "bg-blue-400"
  },
  {
    title: "Back End",
    iconName: "zap",
    skills: [
      { name: "Node.js & Express", pct: 90 },
      { name: "Python & FastAPI", pct: 92 },
      { name: "LangChain (AI)", pct: 85 },
      { name: "RESTful APIs", pct: 94 }
    ],
    color: "bg-green-500"
  },
  {
    title: "Database",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", pct: 94 },
      { name: "MongoDB", pct: 88 },
      { name: "Redis", pct: 85 },
      { name: "Vector DBs", pct: 82 }
    ],
    color: "bg-indigo-500"
  },
  {
    title: "Infrastructure",
    iconName: "rocket",
    skills: [
      { name: "Vercel & Netlify", pct: 96 },
      { name: "Docker & Linux", pct: 85 },
      { name: "GitHub Actions", pct: 90 },
      { name: "Nginx & Server", pct: 82 }
    ],
    color: "bg-orange-500"
  },
  {
    title: "AI Tools & IDEs",
    iconName: "bot",
    skills: [
      { name: "VS Code & Antigravity", pct: 98 },
      { name: "ChatGPT & Gemini", pct: 95 },
      { name: "Conex & AI Agents", pct: 92 },
      { name: "Terminal & Git", pct: 94 }
    ],
    color: "bg-purple-500"
  }
];

const Skills = () => {
  return (
    <div id="skills" className="glass p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold">Tech <span className="text-green-400">Arsenals</span></h2>
        <div className="text-[10px] text-green-400 font-bold uppercase tracking-[0.4em] bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
          Operational: 100%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-y-auto pr-4 custom-scroll mb-8">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-4 border-b border-white/10 pb-2">
              <div className="flex items-center justify-center">
                <Icon name={group.iconName} size={28} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-dim">{group.title}</h3>
            </div>
            <div className="space-y-5">
              {group.skills.map((s, j) => (
                <div key={j} className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-white/80">{s.name}</span>
                    <span className="text-green-400 font-mono">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + j * 0.05 }}
                      className={`h-full ${group.color} shadow-[0_0_10px_rgba(0,229,160,0.15)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Infrastructure / Real Emoji Arsenal */}
      <div className="pt-6 border-t border-white/10">
        <div className="text-[9px] font-bold text-text-dim uppercase tracking-[0.3em] mb-6 text-center">Core Systems & Ecosystem</div>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 items-center px-4">
          {[
            { name: "React", id: "react" },
            { name: "Python", id: "python" },
            { name: "TypeScript", id: "typescript" },
            { name: "Node.js", id: "node" },
            { name: "Next.js", id: "nextjs" },
            { name: "Tailwind", id: "tailwindcss" },
            { name: "Postgres", id: "postgres" },
            { name: "MongoDB", id: "mongodb" },
            { name: "Docker", id: "docker" },
            { name: "Vercel", id: "vercel" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl glass flex items-center justify-center p-2 lg:p-2.5 group-hover:scale-125 transition-all duration-300 border border-white/5 shadow-2xl group-hover:border-green-500/50" title={item.name}>
                <Icon name={item.id} size={32} />
              </div>
              <span className="text-[7px] text-text-dim font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

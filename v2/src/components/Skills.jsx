import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skills = [
  {
    cat: "UI/UX & Design",
    icon: "layout",
    tags: ["Figma", "High-Fidelity", "Prototyping", "Aesthetics"],
    pct: 95,
    color: "bg-pink-500"
  },
  {
    cat: "Mobile Development",
    icon: "androidStudio",
    tags: ["Android Studio", "React Native", "Flutter", "iOS/Android"],
    pct: 90,
    color: "bg-blue-400"
  },
  {
    cat: "Systems Programming",
    icon: "terminal",
    tags: ["C", "Go", "Rust", "Memory Management"],
    pct: 88,
    color: "bg-blue-600"
  },
  {
    cat: "Python & AI/ML",
    icon: "cpu",
    tags: ["Python", "FastAPI", "TensorFlow", "LangChain"],
    pct: 92,
    color: "bg-green-500"
  },
  {
    cat: "Databases & Ecosystem",
    icon: "database",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Vector DB"],
    pct: 94,
    color: "bg-indigo-500"
  },
  {
    cat: "Cloud & Deployment",
    icon: "cloud",
    tags: ["Vercel", "Netlify", "GitHub Actions", "Docker"],
    pct: 88,
    color: "bg-orange-500"
  }
];

const Skills = () => {
  return (
    <div id="skills" className="glass p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Tech <span className="text-green-400">Arsenals</span></h2>
        <div className="text-[8px] text-green-400 font-bold uppercase tracking-[0.2em]">Deployment Ready</div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scroll mb-6">
        {skills.map((s, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="text-green-400">
                  <Icon name={s.icon} size={14} />
                </div>
                <span className="text-[10px] font-bold">{s.cat}</span>
              </div>
              <span className="text-[10px] text-green-400 font-mono">{s.pct}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full ${s.color} shadow-[0_0_8px_rgba(0,229,160,0.2)]`} 
                style={{ width: `${s.pct}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap gap-1">
              {s.tags.slice(0, 4).map((tag, j) => (
                <span key={j} className="text-[7px] px-1 py-0.5 rounded bg-white/5 border border-white/10 text-text-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Real Logos / Tech Stack Icons Row */}
      <div className="pt-4 border-t border-white/5">
        <div className="text-[8px] font-bold text-text-dim uppercase tracking-widest mb-3 text-center">Core Infrastructure</div>
        <div className="flex justify-center gap-4 items-center opacity-60 hover:opacity-100 transition-opacity">
          {["postgresql", "mongodb", "redis", "androidStudio", "vercel"].map((icon, i) => (
            <div key={i} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/80 hover:text-green-400 hover:scale-110 transition-all border border-white/5 shadow-lg" title={icon}>
              <Icon name={icon} size={18} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

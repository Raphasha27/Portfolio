import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: 'LANGUAGES', id: 'languages', desc: 'Core Dev Engine', iconName: 'code', color: '#00FF9C',
    skills: [
      { name: 'Python',     pct: 95, icon: 'python'   },
      { name: 'C & C++',    pct: 85, icon: 'terminal' },
      { name: 'Java',       pct: 88, icon: 'gear'     },
      { name: 'Go / Golang',pct: 82, icon: 'signal'   },
    ]
  },
  {
    title: 'FRONT END', id: 'frontend', desc: 'Immersive UI/UX', iconName: 'palette', color: '#3b82f6',
    skills: [
      { name: 'React & Vite',    pct: 95, icon: 'react'       },
      { name: 'Tailwind CSS',    pct: 92, icon: 'tailwindcss'  },
      { name: 'Next.js',         pct: 88, icon: 'nextjs'       },
      { name: 'Framer Motion',   pct: 90, icon: 'framer'       },
    ]
  },
  {
    title: 'BACK END', id: 'backend', desc: 'Scalable Logic', iconName: 'gear', color: '#06b6d4',
    skills: [
      { name: 'Node & Express',  pct: 90, icon: 'node'     },
      { name: 'Python & FastAPI',pct: 92, icon: 'python'   },
      { name: 'LangChain (AI)',  pct: 85, icon: 'langchain'},
      { name: 'RESTful APIs',    pct: 94, icon: 'code'     },
    ]
  },
  {
    title: 'DATABASE', id: 'database', desc: 'Data Persistence', iconName: 'cabinet', color: '#a855f7',
    skills: [
      { name: 'PostgreSQL', pct: 94, icon: 'postgres'  },
      { name: 'MongoDB',    pct: 88, icon: 'mongodb'   },
      { name: 'Redis',      pct: 85, icon: 'redis'     },
      { name: 'Vector DBs', pct: 82, icon: 'database'  },
    ]
  },
  {
    title: 'DATA & AI', id: 'analytics', desc: 'Insight Engineering', iconName: 'activity', color: '#f59e0b',
    skills: [
      { name: 'Pandas / NumPy',  pct: 93, icon: 'python'  },
      { name: 'SQL & Databases', pct: 91, icon: 'postgres' },
      { name: 'R & Statistics',  pct: 78, icon: 'code'     },
      { name: 'Jupyter',         pct: 88, icon: 'code'     },
    ]
  },
  {
    title: 'CYBERSECURITY', id: 'cybersecurity', desc: 'Defense Architecture', iconName: 'shield', color: '#ef4444',
    skills: [
      { name: 'Python & Bash',    pct: 88, icon: 'terminal' },
      { name: 'C / C++ Exploit',  pct: 80, icon: 'terminal' },
      { name: 'Web Security',     pct: 85, icon: 'code'     },
      { name: 'Go & Rust (Cloud)',pct: 75, icon: 'signal'   },
    ]
  },
];

/* ── Circular progress ring ── */
const Ring = ({ pct, color, size = 56, stroke = 5 }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ * (1 - pct / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        style={{ filter: `drop-shadow(0 0 6px ${color}88)` }}
      />
    </svg>
  );
};

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <div id="skills" className="relative py-6 sm:py-10 overflow-hidden">
      {/* ── Dev Background Layer ── */}
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,156,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,156,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      {/* Radial glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#00FF9C]/5 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/3 blur-[100px] pointer-events-none" />
      {/* Floating code symbols */}
      {[
        { text: '</>',    top: '8%',  left: '2%',  color: '#00FF9C', delay: '0s',   size: '11px' },
        { text: '{}',     top: '18%', left: '92%', color: '#3b82f6', delay: '1.2s', size: '13px' },
        { text: '()',     top: '72%', left: '4%',  color: '#a855f7', delay: '0.6s', size: '10px' },
        { text: '=>',     top: '85%', left: '88%', color: '#06b6d4', delay: '1.8s', size: '12px' },
        { text: '&&',     top: '40%', left: '96%', color: '#00FF9C', delay: '2.4s', size: '10px' },
        { text: '/* */',  top: '55%', left: '1%',  color: '#f59e0b', delay: '0.9s', size: '9px'  },
        { text: '[ ]',    top: '30%', left: '94%', color: '#ef4444', delay: '3s',   size: '10px' },
      ].map((sym, i) => (
        <div key={i} className="absolute font-mono font-bold pointer-events-none select-none"
          style={{
            top: sym.top, left: sym.left, color: sym.color,
            fontSize: sym.size, opacity: 0.15,
            animation: `pulse 3s ease-in-out ${sym.delay} infinite`
          }}>
          {sym.text}
        </div>
      ))}
      {/* Horizontal scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,156,0.5) 2px, rgba(0,255,156,0.5) 3px)',
          backgroundSize: '100% 6px'
        }} />
      {/* Corner bracket decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FF9C]/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/20 pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 sm:mb-12 border-b border-white/5 pb-4 sm:pb-6 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase">
            Tech <span className="text-[#00FF9C]">Arsenals</span>
          </h2>
          <p className="text-[9px] sm:text-[10px] text-white/40 font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-1 sm:mt-2">
            Core Technical Proficiency
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
            <span className="text-[9px] font-bold text-[#00FF9C] uppercase tracking-widest">Operational: 100%</span>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setActiveGroup(activeGroup === i ? null : i)}
            className="glass p-5 rounded-2xl border border-white/5 relative group cursor-pointer transition-all duration-500 overflow-hidden"
            style={{ borderColor: activeGroup === i ? `${group.color}40` : undefined,
                     boxShadow: activeGroup === i ? `0 0 25px ${group.color}18` : undefined }}
          >
            {/* BG Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 blur-[50px] opacity-10 pointer-events-none transition-all duration-500 group-hover:opacity-20"
              style={{ background: group.color }} />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ color: group.color }}>
                <Icon name={group.iconName} size={22} />
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">{group.title}</h3>
                <div className="text-[8px] font-mono uppercase tracking-widest mt-0.5" style={{ color: `${group.color}80` }}>{group.desc}</div>
              </div>
              <div className="ml-auto text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                {group.skills.length} skills
              </div>
            </div>

            {/* Skill Rings Grid */}
            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((s, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <Ring pct={s.pct} color={group.color} size={48} stroke={4} />
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold font-mono" style={{ color: group.color }}>
                      {s.pct}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white/70 uppercase tracking-wide leading-tight">{s.name}</div>
                    <div className="w-full h-[2px] mt-1 rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: group.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 + j * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-current transition-colors" style={{ color: group.color }} />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-current transition-colors" style={{ color: group.color }} />
          </motion.div>
        ))}
      </div>

      {/* Values Footer */}
      <div className="relative z-10 mt-8 sm:mt-12 glass rounded-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-16 p-4 sm:p-6 overflow-x-auto scrollbar-hide justify-start sm:justify-center">
          {[
            { id: 'scale',     label: 'ETHICAL AI'     },
            { id: 'shield',    label: 'SECURE ARCH'    },
            { id: 'bookopen',  label: 'SYSTEM LOGIC'   },
            { id: 'refreshcw', label: 'ADAPTIVE CI/CD' },
            { id: 'target',    label: 'PRECISION OPS'  },
            { id: 'check',     label: 'QUALITY CORE'   },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 group cursor-help relative z-10 shrink-0">
              <div className="text-[#00FF9C]/30 group-hover:text-[#00FF9C] group-hover:scale-110 transition-all duration-500">
                <Icon name={item.id} size={20} />
              </div>
              <span className="text-[7px] sm:text-[8px] font-mono text-white/20 tracking-[0.3em] sm:tracking-[0.4em] uppercase group-hover:text-[#00FF9C] transition-colors whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

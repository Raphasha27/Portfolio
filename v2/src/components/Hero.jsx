import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const stats = [
  { label: 'Reliability', val: 100, suffix: '%', icon: 'thumbsup' },
  { label: 'Global Clients', val: 50, suffix: '+', icon: 'heart' },
  { label: 'Core Projects', val: 12, suffix: '+', icon: 'star' },
];

const techStack = [
  { name: "React", id: "react", color: "from-blue-400 to-blue-600" },
  { name: "Python", id: "python", color: "from-yellow-400 to-blue-500" },
  { name: "Node.js", id: "node", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", id: "postgres", color: "from-blue-700 to-blue-900" },
  { name: "TypeScript", id: "typescript", color: "from-blue-500 to-blue-700" }
];

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}</span>;
};

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#050d12]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
                <span className="h-[1px] w-12 bg-white/10"></span>
                <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">Protocol 2.2.0</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
                KOKETSO <br />
                <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,229,160,0.3)]">RAPHASHA</span>
              </h1>
              <div className="flex items-center gap-4 text-xl lg:text-2xl font-mono text-white/60">
                <span className="text-green-400">&gt;</span>
                <span className="tracking-tight">Autonomous Solutions Architect & AI Engineer</span>
              </div>
            </div>

            <p className="text-text-dim text-lg leading-relaxed max-w-xl font-light">
              Designing high-performance <span className="text-white font-medium">digital ecosystems</span> that 
              bridge the gap between <span className="text-green-400 font-medium">human intuition</span> and 
              <span className="text-white font-medium">autonomous intelligence</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-green-500 text-black font-bold rounded-2xl hover:bg-green-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,229,160,0.3)]">
                DEPLOY PROJECTS
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/10 hover:border-green-500/50 text-white font-bold rounded-2xl transition-all backdrop-blur-sm">
                INITIALIZE CONTACT
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-3 rounded-2xl border border-white/5 group hover:border-green-500/30 transition-all">
                   <div className="text-green-400 mb-1 flex items-center gap-2">
                     <Icon name={stat.icon} size={16} />
                     <span className="text-xl font-bold"><CountUp to={stat.val} />{stat.suffix}</span>
                   </div>
                   <div className="text-[9px] text-text-dim uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-8 rounded-[40px] border border-green-500/20 shadow-[0_0_80px_rgba(0,229,160,0.1)] relative overflow-hidden">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-green-400 tracking-[0.2em] uppercase">Tech Stack Overview</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="p-4 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-3 hover:bg-white/10 transition-colors group">
                    <div className="flex justify-between items-start">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                         <Icon name={tech.id} size={24} />
                       </div>
                       <span className="text-[10px] font-mono text-green-400/60 uppercase">Stable</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-bold">{tech.name}</div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${tech.color}`} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <span>Kernel: Hybrid-OS-V2</span>
                <span>Latency: 0.04ms</span>
              </div>
            </div>

            {/* Floating Accents */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 p-4 glass rounded-2xl border border-green-500/30 z-20"
            >
              <Icon name="rocket" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

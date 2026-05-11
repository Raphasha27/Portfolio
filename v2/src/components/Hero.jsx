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
    <div id="home" className="relative min-h-screen pt-12 flex items-center overflow-hidden bg-[#050d12]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT COLUMN: Identity & Core Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[9px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
                <span className="h-[1px] w-8 bg-white/10"></span>
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase">Protocol 2.2.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
                KOKETSO <br />
                <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,229,160,0.3)]">RAPHASHA</span>
              </h1>
              <div className="flex items-center gap-4 text-lg lg:text-xl font-mono text-white/60">
                <span className="text-green-400">&gt;</span>
                <span className="tracking-tight">Autonomous Solutions Architect & AI Engineer</span>
              </div>
            </div>

            <p className="text-text-dim text-base leading-relaxed max-w-lg font-light">
              Engineering <span className="text-white font-medium">autonomous ecosystems</span> that 
              bridge the gap between <span className="text-green-400 font-medium">human intuition</span> and 
              <span className="text-white font-medium">machine intelligence</span>. Optimized for scale and performance.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-3 bg-green-500 text-black text-sm font-bold rounded-xl hover:bg-green-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,160,0.3)]">
                DEPLOY PROJECTS
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-green-500/50 text-white text-sm font-bold rounded-xl transition-all backdrop-blur-sm">
                INITIALIZE CONTACT
              </a>
            </div>

            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-2.5 rounded-xl border border-white/5 group hover:border-green-500/30 transition-all">
                   <div className="text-green-400 mb-0.5 flex items-center gap-2">
                     <div className="w-6 h-8 rounded-full border border-green-500/20 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                        <Icon name={stat.icon} size={12} />
                     </div>
                     <span className="text-lg font-bold tracking-tight"><CountUp to={stat.val} />{stat.suffix}</span>
                   </div>
                   <div className="text-[8px] text-text-dim uppercase tracking-[0.2em] font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Technical Cockpit Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-6 rounded-[32px] border border-green-500/20 shadow-[0_0_80px_rgba(0,229,160,0.1)] relative overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_80px_rgba(0,229,160,0.8)]" />
                  <span className="text-[9px] font-mono text-green-400 uppercase tracking-[0.3em] font-black">ENVIRONMENT_MANIFEST</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/10" />)}
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2 hover:bg-white/10 transition-colors group relative overflow-hidden">
                    <div className="flex justify-between items-start">
                       <div className="w-8 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                         <Icon name={tech.id} size={18} />
                       </div>
                       <span className="text-[8px] font-mono text-green-400/60 uppercase tracking-widest">Live</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-widest font-mono">{tech.name}</div>
                      <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
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
                
                {/* Dashboard Utility Card */}
                <div className="p-3 rounded-2xl bg-green-500/5 border border-green-500/10 flex flex-col justify-center gap-1 group">
                   <div className="text-[8px] font-mono text-green-400 uppercase tracking-widest mb-1">System Load</div>
                   <div className="flex items-end gap-1">
                      {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: i * 0.1 }}
                          className="w-1 bg-green-500/40 rounded-t-sm"
                        />
                      ))}
                   </div>
                </div>
              </div>

              {/* System Console Ticker */}
              <div className="mt-6 p-3 bg-black/40 rounded-xl font-mono text-[9px] text-green-400/50 space-y-1 overflow-hidden h-16">
                 <div className="animate-pulse">&gt; Initializing neural_kernel_v2... DONE</div>
                 <div>&gt; Syncing multi-agent_nodes [009/009]... DONE</div>
                 <div className="text-white/20">&gt; Memory usage: 14.2GB / 64GB</div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/30 uppercase tracking-widest">
                <span>Kernel: Hybrid-OS-V2</span>
                <span>Uptime: 99.98%</span>
              </div>
            </div>

            {/* Floating Status Card */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 glass rounded-xl border border-green-500/30 z-20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                 <Icon name="activity" size={16} />
                 <div className="text-[8px] font-mono font-bold text-green-400 tracking-tighter">LATENCY: 0.02ms</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

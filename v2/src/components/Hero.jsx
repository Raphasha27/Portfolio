import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import koketsoSuit from '../assets/koketso_suit.png';
import koketsoHoodie from '../assets/koketso_hoodie.png';
import koketsoVR from '../assets/koketso_vr.png';

const bannerTechs = [
  { name: "React",           id: "react"        },
  { name: "Python",          id: "python"       },
  { name: "Node.js",         id: "node"         },
  { name: "TypeScript",      id: "typescript"   },
  { name: "PostgreSQL",      id: "postgres"     },
  { name: "Docker",          id: "docker"       },
  { name: "Go",              id: "go"           },
  { name: "Rust",            id: "rust"         },
  { name: "Swift",           id: "swift"        },
  { name: "FastAPI",         id: "fastapi"      },
  { name: "LangChain",       id: "langchain"    },
  { name: "Kubernetes",      id: "kubernetes"   },
  { name: "Linux",           id: "linux"        },
  { name: "Vite",            id: "vite"         },
];

const TerminalStrip = () => {
  const [line, setLine] = useState("> INITIALIZING TEST_SUITE_V2...");
  useEffect(() => {
    const cmds = [
      "EXEC: verify_encryption_layer()",
      "STATUS: 10.4.0.1 -> RESPONDING",
      "FIX: rebalancing_load... SUCCESS",
      "RUN: optimize_kernel_runtime()",
      "LOG: agent_sync_complete",
    ];
    const interval = setInterval(() => {
      setLine(`> ${cmds[Math.floor(Math.random() * cmds.length)]}`);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={line}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.3 }}
        className="font-mono text-[9px] text-blue-400/80"
      >
        {line}
      </motion.span>
    </AnimatePresence>
  );
};

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Hero = () => {
  const doubled = [...bannerTechs, ...bannerTechs];
  const [activeProfile, setActiveProfile] = useState(0);
  const profiles = [
    { src: koketsoSuit, label: 'Executive Mode', badge: 'Business', color: 'bg-white text-black' },
    { src: koketsoHoodie, label: 'Developer Mode', badge: 'Engineering', color: 'bg-[#00ffcc] text-black' },
    { src: koketsoVR, label: 'Cyber Mode', badge: 'Virtual Reality', color: 'bg-[#ff00ff] text-white' }
  ];

  // Auto-slide profiles
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProfile((prev) => (prev + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [profiles.length]);

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050d12]">
      {/* Scanline + glow bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 pt-28 sm:pt-32 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Identity & Mission ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-5 order-2 lg:order-1"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 text-[#00FF9C] text-[9px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-normal md:tracking-tight text-white leading-[1.1] break-words">
                  INFORMATION TECHNOLOGY<br />
                  <span className="text-[#00FF9C] drop-shadow-[0_0_30px_rgba(0,255,156,0.3)]">
                    GRADUATE
                  </span>
                </h1>
                <p className="text-cyan-400/60 font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black pl-1">
                  Software Engineering · Richfield Alumni · AI Intern
                </p>
              </div>
            </div>

            <p className="text-text-dim text-xs sm:text-[13px] leading-relaxed max-w-lg">
              IT Graduate from <span className="text-white font-bold">Richfield Graduate Institute</span> majoring in <span className="text-blue-400 font-bold">Software Engineering</span>.
              Hands-on experience as an <span className="text-white font-bold">AI Intern at CAPACITI</span>.
              Member of YES4Youth (2025-2026). Co-Founder of <span className="text-blue-400 font-bold">Kirov Dynamics Technology</span>.
            </p>

              <div className="flex flex-wrap gap-4 pt-1">
                <a href="#projects" className="px-5 sm:px-6 py-3 bg-[#00FF9C] text-[#050d12] font-bold rounded-xl hover:bg-[#00e089] transition-all active:scale-95 shadow-[0_0_20px_rgba(0,255,156,0.4)] text-xs sm:text-sm">
                  VIEW REPOS
                </a>
                <a href="https://portfolio-iota-eight-90.vercel.app/" target="_blank" className="px-5 sm:px-6 py-3 bg-[#0d1117] border border-[#00FF9C] text-white font-bold rounded-xl hover:bg-[#00FF9C]/5 transition-all active:scale-95 text-xs sm:text-sm flex items-center gap-2">
                  PORTFOLIO <span className="bg-[#00FF9C] text-[#050d12] px-2 py-0.5 rounded-md text-[10px] uppercase font-black">LIVE</span>
                </a>
              </div>

            {/* Neon Stats Grid — 2 cols on mobile, 4 on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 border-t border-white/5">
              {[
                { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'     },
                { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap'},
                { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'          },
                { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'       },
              ].map((s, i) => (
                <div key={i} className="glass p-2.5 sm:p-3 rounded-xl border border-white/5 flex flex-col items-center text-center gap-1 group hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-blue-400 transition-all group-hover:scale-110 opacity-70">
                    <Icon name={s.icon} size={14} />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white leading-none">
                    <CountUp to={s.val} />{s.suffix}
                  </div>
                  <div className="text-[7px] font-mono text-white/40 uppercase tracking-[0.15em]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Profile Cutout & Interactive Showcase ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end"
          >
            {/* Interactive Profile Switcher */}
            <div className="relative group w-full max-w-[280px] lg:max-w-[320px]">
              {/* Dynamic decorative ring based on active profile */}
              <motion.div 
                animate={{ borderColor: activeProfile === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(0,255,204,0.3)' }}
                className="absolute inset-0 rounded-full border-[4px] blur-sm transition-colors duration-500" 
              />
              
              <div className="rounded-full border-[4px] border-[#0a0a0a] shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden aspect-square w-full ring-2 ring-[#00ffcc]/10 z-10 cursor-pointer"
                   onClick={() => setActiveProfile((prev) => (prev === 0 ? 1 : 0))}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProfile}
                    src={profiles[activeProfile].src}
                    alt={`Koketso Raphasha - ${profiles[activeProfile].label}`}
                    initial={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </AnimatePresence>
                
                {/* Mode Overlay Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="activity" size={12} className={activeProfile === 0 ? 'text-white' : 'text-[#00ffcc]'} />
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">{profiles[activeProfile].label}</span>
                </div>
              </div>
              
              {/* Manual Toggles */}
              <div className="flex justify-center gap-2 mt-4 absolute -bottom-8 left-0 right-0 z-20">
                {profiles.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProfile(idx)}
                    className={`w-10 h-1.5 rounded-full transition-all duration-300 ${activeProfile === idx ? 'bg-[#00ffcc] shadow-[0_0_10px_rgba(0,255,204,0.5)]' : 'bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Switch to profile ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 lg:text-right w-full max-w-[280px] lg:max-w-[320px]">
                <div className="text-lg sm:text-2xl font-bold text-white tracking-wide">Koketso Raphasha</div>
                <div className="text-[10px] sm:text-xs font-mono text-[#00ffcc] uppercase tracking-[0.2em] font-bold mt-1 flex items-center justify-center lg:justify-end gap-2">
                  Autonomous AI Engineer
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]"></span>
                  </span>
                </div>
            </div>

            {/* Scrolling Tech Marquee */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 glass rounded-2xl border border-blue-500/30 overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:ml-auto shadow-[0_0_30px_rgba(59,130,246,0.05)] relative"
            >
              <div className="py-3 sm:py-4 flex overflow-hidden">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6 sm:gap-8 items-center px-4"
                >
                  {doubled.map((tech, i) => (
                    <div key={i} className="shrink-0 group">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <Icon name={tech.id} size={36} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;


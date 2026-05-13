import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import profileImg from '../assets/koketso_no_wall.png';

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
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}</span>;
};

const Hero = () => {
  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050d12]">
      {/* Scanline + glow bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 pt-24 pb-10 max-w-7xl mx-auto">
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
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-normal md:tracking-tight text-white leading-[1.1] break-words">
                  INFORMATION TECHNOLOGY<br />
                  <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
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

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" className="px-5 sm:px-6 py-3 bg-blue-600 text-bg font-bold rounded-xl hover:bg-blue-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-xs sm:text-sm">
                VIEW REPOS
              </a>
              <a href="#contact" className="px-5 sm:px-6 py-3 glass border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all active:scale-95 hover:border-cyan-500/30 text-xs sm:text-sm">
                INITIALIZE CONTACT
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

          {/* ── RIGHT: Profile Cutout ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Profile card */}
            <div className="rounded-[32px] border border-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.12)] relative overflow-hidden aspect-[4/5] w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] mx-auto lg:ml-auto">
              <img
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 py-4 sm:py-8">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="text-lg sm:text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">Koketso Raphasha</div>
                  <div className="text-[8px] sm:text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] font-bold">System Operator · AI Engineer</div>
                  <div className="text-[7px] sm:text-[9px] text-white/50 font-mono">Pretoria, ZA · UTC+2</div>
                </div>
              </div>
            </div>

            {/* Scrolling Tech Marquee */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 glass rounded-2xl border border-blue-500/30 overflow-hidden w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] mx-auto lg:ml-auto shadow-[0_0_30px_rgba(59,130,246,0.05)] relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a161d] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a161d] to-transparent z-10 pointer-events-none" />
              <div className="py-3 sm:py-4 flex overflow-hidden">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6 sm:gap-8 items-center px-4"
                >
                  {doubled.map((tech, i) => (
                    <div key={i} className="shrink-0">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 opacity-80">
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import profileImg from '../assets/koketso_no_wall.png';

const stats = [
  { label: 'Reliability',    val: 100, suffix: '%', icon: 'thumbsup' },
  { label: 'Global Clients', val: 50,  suffix: '+', icon: 'heart'    },
  { label: 'Core Projects',  val: 12,  suffix: '+', icon: 'star'     },
];

// All tech stacks for the scrolling banner
const bannerTechs = [
  { name: "React",           id: "react"      },
  { name: "C",              id: "c"          },
  { name: "C++",            id: "cplusplus"  },
  { name: "Python",          id: "python"     },
  { name: "Java",            id: "java"       },
  { name: "Go",              id: "go"         },
  { name: "Node.js",         id: "node"       },
  { name: "FastAPI",         id: "fastapi"    },
  { name: "PostgreSQL",      id: "postgres"   },
  { name: "TypeScript",      id: "typescript" },
  { name: "Next.js",         id: "nextjs"     },
  { name: "Docker",          id: "docker"     },
  { name: "MongoDB",         id: "mongodb"    },
  { name: "Tailwind CSS",    id: "tailwindcss"},
  { name: "GitHub Actions",  id: "githubactions"},
  { name: "LangChain",       id: "langchain"  },
  { name: "Redis",           id: "redis"      },
  { name: "Framer Motion",   id: "framer"     },
  { name: "TensorFlow",     id: "tensorflow" },
  { name: "PyTorch",        id: "pytorch"    },
  { name: "Kubernetes",     id: "kubernetes" },
  { name: "Linux",          id: "linux"      },
  { name: "Vite",            id: "vite"       },
];

// Rolling terminal lines for the overlay strip
const TerminalStrip = () => {
  const [line, setLine] = useState("> INITIALIZING TEST_SUITE_V2...");
  useEffect(() => {
    const cmds = [
      "EXEC: verify_encryption_layer()",
      "STATUS: 10.4.0.1 -> RESPONDING",
      "FIX: rebalancing_load... SUCCESS",
      "RUN: optimize_kernel_runtime()",
      "LOG: agent_sync_complete",
      "TEST: api_endpoint_latency < 0.01ms",
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

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <>
      {words[index].substring(0, subIndex)}
      <span className={`opacity-${blink ? "100" : "0"} transition-opacity duration-75`}>|</span>
    </>
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
  // Double the array for seamless loop
  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <div id="home" className="relative min-h-screen pt-12 flex flex-col justify-center overflow-hidden bg-[#050d12]">
      {/* Scanline + glow bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

          {/* ── LEFT: Identity & Mission ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
                <div className="flex gap-1.5">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-1 h-1 rounded-full bg-blue-500/20" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.85]">
                  KIROV<br />
                  <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <Typewriter words={["MOBILE APP DEV", "FULL STACK", "AI ENGINEER", "WEB DEV", "DYNAMICS"]} />
                  </span>
                </h1>
                <p className="text-cyan-400/60 font-mono text-[10px] tracking-[0.5em] uppercase font-black pl-1">
                  Autonomous Systems • Agentic Infra • Full Stack Mastery
                </p>
              </div>
            </div>

            <p className="text-text-dim text-lg leading-relaxed max-w-xl">
              Specializing in the development of <span className="text-white font-bold">High-Frequency Agentic Systems</span> and 
              <span className="text-blue-400 font-bold"> Decentralized Infrastructure</span>. 
              Engineering autonomous solutions for the next generation of digital twins.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-8 py-4 bg-blue-600 text-bg font-bold rounded-2xl hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                VIEW REPOS
              </a>
              <a href="#contact" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all hover:border-cyan-500/30">
                INITIALIZE CONTACT
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              {stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold text-white">
                    <CountUp to={s.val} />{s.suffix}
                  </div>
                  <div className="text-[9px] font-mono text-cyan-400/40 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Profile Cutout ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Profile card — clean minimal */}
            <div className="rounded-[32px] border border-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.12)] relative overflow-hidden aspect-[4/5] max-w-[360px] ml-auto">
              {/* Full-bleed photo */}
              <img
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover object-top"
              />

              {/* Dark gradient overlay at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/20 to-transparent" />

              {/* Bottom overlay: identity only */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">Koketso Raphasha</div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.4em] font-bold">System Operator · AI Engineer</div>
                  <div className="text-[9px] text-white/50 font-mono">Pretoria, ZA · UTC+2</div>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 px-6 py-4 glass rounded-2xl border border-blue-500/30 flex items-center justify-between gap-4 max-w-[360px] ml-auto shadow-[0_0_30px_rgba(59,130,246,0.05)]"
            >
              {[
                { name: "React", id: "react" },
                { name: "Python", id: "python" },
                { name: "Node.js", id: "node" },
                { name: "TypeScript", id: "typescript" },
                { name: "PostgreSQL", id: "postgres" },
                { name: "Docker", id: "docker" }
              ].map((tech, i) => (
                <div key={i} className="group relative">
                  <div className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon name={tech.id} size={32} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-900/80 text-white text-[9px] px-2 py-1 rounded font-bold uppercase tracking-wider pointer-events-none whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Tech Marquee */}
      <div className="mt-12 py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap"
        >
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <Icon name={tech.id} size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors font-mono whitespace-nowrap">
                {tech.name}
              </span>
              <div className="w-1 h-1 rounded-full bg-blue-500/30 ml-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

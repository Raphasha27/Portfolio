import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import koketsoSuit from '../assets/koketso_transparent.png';

/* ── Typewriter cycling through roles ── */
const ROLES = ['AI ENGINEER', 'SYSTEMS ARCHITECT', 'CO-FOUNDER', 'FULL STACK DEV'];
const Typewriter = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <span className="text-[#00FF9C] drop-shadow-[0_0_30px_rgba(0,255,156,0.4)]">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[0.9em] bg-[#00FF9C] ml-1 align-middle rounded-sm"
      />
    </span>
  );
};

/* ── Animated stat counter ── */
const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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

/* ── Scrolling mini-terminal strip ── */
const TerminalStrip = () => {
  const [line, setLine] = useState('> INITIALIZING TEST_SUITE_V2...');
  useEffect(() => {
    const cmds = [
      'EXEC: verify_encryption_layer()',
      'STATUS: 10.4.0.1 -> RESPONDING',
      'FIX: rebalancing_load... SUCCESS',
      'RUN: optimize_kernel_runtime()',
      'LOG: agent_sync_complete',
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
      >{line}</motion.span>
    </AnimatePresence>
  );
};

const socialLinks = [
  { name: 'GitHub',   icon: 'github',   link: 'https://github.com/raphasha27',             color: 'hover:text-white' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/koketso-raphasha',  color: 'hover:text-blue-400' },
  { name: 'WhatsApp', icon: 'whatsapp', link: 'https://wa.me/27781172470',                 color: 'hover:text-green-400' },
  { name: 'Email',    icon: 'mail',     link: 'mailto:raphashakoketso99@gmail.com',         color: 'hover:text-red-400' },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',             color: 'hover:text-sky-400' },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',              color: 'hover:text-blue-300' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

const Hero = () => (
  <div id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
    <ParticleCanvas />
      {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      {/* Building/skyline decorative silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-10 z-0">
        <svg viewBox="0 0 1440 180" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 180V120L60 100L120 130L180 80L240 110L300 60L360 90L420 50L480 100L540 70L600 120L660 90L720 40L780 80L840 60L900 110L960 50L1020 90L1080 70L1140 120L1200 80L1260 100L1320 60L1380 110L1440 90V180H0Z" fill="url(#buildingGrad)" />
          <rect x="60" y="100" width="8" height="20" fill="#00FF9C" opacity="0.3" /><rect x="80" y="100" width="8" height="15" fill="#00FF9C" opacity="0.2" /><rect x="140" y="80" width="10" height="40" fill="#00FF9C" opacity="0.15" /><rect x="160" y="80" width="8" height="25" fill="#00FF9C" opacity="0.3" />
          <rect x="260" y="60" width="12" height="60" fill="#00FF9C" opacity="0.2" /><rect x="280" y="60" width="8" height="40" fill="#00FF9C" opacity="0.15" /><rect x="320" y="90" width="10" height="30" fill="#00FF9C" opacity="0.25" /><rect x="340" y="90" width="8" height="20" fill="#00FF9C" opacity="0.15" />
          <rect x="430" y="50" width="14" height="70" fill="#00FF9C" opacity="0.2" /><rect x="450" y="50" width="10" height="45" fill="#00FF9C" opacity="0.3" /><rect x="500" y="70" width="8" height="50" fill="#00FF9C" opacity="0.15" /><rect x="520" y="70" width="10" height="30" fill="#00FF9C" opacity="0.2" />
          <rect x="680" y="40" width="16" height="80" fill="#00FF9C" opacity="0.25" /><rect x="700" y="40" width="12" height="55" fill="#00FF9C" opacity="0.15" /><rect x="750" y="80" width="10" height="40" fill="#00FF9C" opacity="0.2" /><rect x="770" y="80" width="8" height="25" fill="#00FF9C" opacity="0.3" />
          <rect x="850" y="60" width="14" height="60" fill="#00FF9C" opacity="0.15" /><rect x="870" y="60" width="10" height="40" fill="#00FF9C" opacity="0.2" /><rect x="970" y="50" width="12" height="70" fill="#00FF9C" opacity="0.25" /><rect x="990" y="50" width="8" height="50" fill="#00FF9C" opacity="0.15" />
          <rect x="1150" y="120" width="10" height="20" fill="#00FF9C" opacity="0.2" /><rect x="1170" y="120" width="8" height="15" fill="#00FF9C" opacity="0.15" /><rect x="1240" y="80" width="14" height="40" fill="#00FF9C" opacity="0.2" /><rect x="1260" y="80" width="10" height="30" fill="#00FF9C" opacity="0.3" />
          <rect x="1340" y="60" width="12" height="60" fill="#00FF9C" opacity="0.15" /><rect x="1360" y="60" width="8" height="40" fill="#00FF9C" opacity="0.25" />
          <defs><linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FF9C" stopOpacity="0" /><stop offset="100%" stopColor="#00FF9C" stopOpacity="0.15" /></linearGradient></defs>
        </svg>
      </div>
    {/* Ambient glow */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00FF9C]/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 pt-28 sm:pt-32 pb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-5 order-2 lg:order-1"
        >
          {/* Status badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 text-[#00FF9C] text-[9px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold tracking-[0.3em] uppercase">
              Johannesburg, SA
            </span>
          </div>

          {/* Heading + typewriter */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] break-words">
              SYSTEMS ARCHITECT &amp;<br />
              <Typewriter />
            </h1>
            <p className="text-cyan-400/60 font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black pl-1">
              Sovereign Infrastructure · Autonomous AI · Tech Co-founder
            </p>
          </div>

          <p className="text-text-dim text-xs sm:text-[13px] leading-relaxed max-w-lg">
            I am <span className="text-white font-bold">Koketso Raphasha</span>, a{' '}
            <span className="text-blue-400 font-bold">Systems Architect</span>, AI Engineer, and Co-founder of
            Kirov Dynamics Technology based in Johannesburg, South Africa. Building self-healing, scalable, and
            highly efficient systems that bridge the gap between ambitious technical strategy and production-ready deployments.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="px-5 sm:px-6 py-3 bg-[#00FF9C] text-[#050d12] font-bold rounded-xl hover:bg-[#00e089] transition-all active:scale-95 shadow-[0_0_20px_rgba(0,255,156,0.4)] text-xs sm:text-sm hover:shadow-[0_0_35px_rgba(0,255,156,0.6)]"
            >
              VIEW REPOS
            </a>
            <a
              href="/Koketso_Raphasha_CV.pdf"
              download
              className="px-5 sm:px-6 py-3 bg-[#0d1117] border border-[#00FF9C]/40 text-white font-bold rounded-xl hover:bg-[#00FF9C]/5 transition-all active:scale-95 text-xs sm:text-sm flex items-center gap-2 hover:border-[#00FF9C]"
            >
              <Icon name="download" size={16} /> DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-600/30 transition-all active:scale-95 text-xs sm:text-sm flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> HIRE ME
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/5">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mr-1">Connect</span>
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 ${s.color} transition-all border border-white/5 hover:border-current`}
              >
                <Icon name={s.icon} size={18} />
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 border-t border-white/5">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass p-2.5 sm:p-3 rounded-xl border border-white/5 flex flex-col items-center text-center gap-1 group hover:border-[#00FF9C]/30 hover:shadow-[0_0_15px_rgba(0,255,156,0.08)] transition-all duration-300"
              >
                <div className="text-[#00FF9C]/60 transition-all group-hover:scale-110 group-hover:text-[#00FF9C]">
                  <Icon name={s.icon} size={14} />
                </div>
                <div className="text-base sm:text-lg font-bold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[7px] font-mono text-white/40 uppercase tracking-[0.15em]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile with tech-themed circular frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex flex-col items-center"
        >
          {/* The image already has the glowing ring and tech aesthetic built-in */}
          <div className="relative w-full max-w-[320px] lg:max-w-[380px]">
            <img 
              src="/profile-enhanced.jpg" 
              alt="Koketso Raphasha - AI Engineer" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Name + title */}
          <div className="text-center w-full max-w-[280px] lg:max-w-[320px] mt-6">
            <div className="text-lg sm:text-2xl font-bold text-white tracking-wide">Koketso Raphasha</div>
            <div className="text-[10px] sm:text-xs font-mono text-[#00ffcc] uppercase tracking-[0.2em] font-bold mt-1 flex items-center justify-center gap-2">
              Autonomous AI Engineer
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]" />
              </span>
            </div>
          </div>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]" />
              </span>
            </div>
          </div>

          {/* Live terminal strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-5 glass rounded-2xl border border-blue-500/20 overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto px-4 py-3 flex items-center gap-2"
          >
            <span className="text-[#00FF9C] shrink-0 text-[10px] font-mono">sys://</span>
            <TerminalStrip />
          </motion.div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

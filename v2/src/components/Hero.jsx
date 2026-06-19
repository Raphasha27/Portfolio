import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
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
      } else { setPaused(true); }
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
    <span style={{ color: '#FF6B2B' }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[0.9em] ml-1 align-middle rounded-sm"
        style={{ background: '#FF6B2B' }}
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
        className="font-mono text-[9px]"
        style={{ color: 'rgba(255,107,43,0.8)' }}
      >{line}</motion.span>
    </AnimatePresence>
  );
};

const socialLinks = [
  { name: 'GitHub',   icon: 'github',   link: 'https://github.com/raphasha27',            hoverColor: '#ffffff' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/koketso-raphasha', hoverColor: '#60a5fa' },
  { name: 'WhatsApp', icon: 'whatsapp', link: 'https://wa.me/27781172470',                hoverColor: '#4ade80' },
  { name: 'Email',    icon: 'mail',     link: 'mailto:raphashakoketso99@gmail.com',        hoverColor: '#f87171' },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',            hoverColor: '#38bdf8' },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',             hoverColor: '#93c5fd' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

/* ── Decorative chevron arrow ── */
const Chevron = ({ size = 40, opacity = 0.5, style = {} }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 40 48" fill="none" style={{ opacity, ...style }}>
    <polyline points="8,4 32,24 8,44" stroke="#FF6B2B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hero = () => (
  <div
    id="home"
    className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #0e0a06 0%, #130d07 40%, #160e08 70%, #0a0604 100%)' }}
  >
    {/* Warm ambient glow top-right */}
    <div className="absolute top-0 right-0 pointer-events-none"
      style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle at 70% 30%, rgba(255,80,20,0.12) 0%, transparent 65%)',
      }} />
    {/* Warm ambient glow bottom-left */}
    <div className="absolute bottom-0 left-0 pointer-events-none"
      style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle at 30% 70%, rgba(255,60,10,0.07) 0%, transparent 65%)',
      }} />

    {/* Subtle grid */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,107,43,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

    <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 pt-28 sm:pt-32 pb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">

        {/* ── LEFT: Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-5 order-2 lg:order-1"
        >
          {/* Status badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase flex items-center gap-2"
              style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.35)', color: '#FF6B2B' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#FF6B2B' }} />
              Open to Opportunities
            </span>
            <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}>
              Johannesburg, SA
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] break-words">
              SYSTEMS ARCHITECT &amp;<br />
              <Typewriter />
            </h1>
            <p className="font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black pl-1"
              style={{ color: 'rgba(255,107,43,0.5)' }}>
              Sovereign Infrastructure · Autonomous AI · Tech Co-founder
            </p>
          </div>

          <p className="text-xs sm:text-[13px] leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            I am <span className="text-white font-bold">Koketso Raphasha</span>, a{' '}
            <span className="font-bold" style={{ color: '#FF6B2B' }}>Systems Architect</span>, AI Engineer, and Co-founder of
            Kirov Dynamics Technology based in Johannesburg, South Africa. Building self-healing, scalable, and
            highly efficient systems that bridge the gap between ambitious technical strategy and production-ready deployments.
          </p>

          {/* CTA buttons */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-1 w-full">
            <a href="#projects"
              className="flex items-center justify-center px-1 sm:px-6 py-2.5 sm:py-3 font-bold rounded-xl transition-all active:scale-95 text-[10px] sm:text-sm text-center whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #FF6B2B, #e85a1e)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(255,107,43,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 35px rgba(255,107,43,0.65)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,43,0.4)'}
            >
              VIEW REPOS
            </a>
            <a href="/Koketso_Raphasha_CV.pdf" download
              className="flex items-center justify-center gap-1 px-1 sm:px-6 py-2.5 sm:py-3 font-bold rounded-xl transition-all active:scale-95 text-[10px] sm:text-sm whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,107,43,0.35)',
                color: 'rgba(255,255,255,0.85)',
              }}>
              <Icon name="download" size={14} className="hidden sm:block" /> CV
            </a>
            <a href="#contact"
              className="flex items-center justify-center gap-1.5 px-1 sm:px-6 py-2.5 sm:py-3 font-bold rounded-xl transition-all active:scale-95 text-[10px] sm:text-sm whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
              }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ background: '#FF6B2B' }} /> HIRE ME
            </a>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-6 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 pt-3 w-full"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="hidden sm:inline-block text-[8px] font-bold uppercase tracking-[0.2em] mr-1"
              style={{ color: 'rgba(255,255,255,0.25)' }}>Connect</span>
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-full aspect-square sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.4)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.borderColor = s.hoverColor; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <Icon name={s.icon} size={16} />
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-2.5 sm:p-3 rounded-xl flex flex-col items-center text-center gap-1 group transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,43,0.4)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,43,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: 'rgba(255,107,43,0.6)' }} className="transition-all group-hover:scale-110">
                  <Icon name={s.icon} size={14} />
                </div>
                <div className="text-base sm:text-lg font-bold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[7px] font-mono uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Profile — Grafik-style clean oval ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex flex-col items-center"
        >
          {/* Outer decorative chevrons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            <Chevron size={26} opacity={0.55} style={{ transform: 'rotate(180deg)' }} />
            <Chevron size={18} opacity={0.25} style={{ transform: 'rotate(180deg)' }} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            <Chevron size={26} opacity={0.55} />
            <Chevron size={18} opacity={0.25} />
          </div>

          {/* Profile picture wrapper */}
          <div className="relative flex items-end justify-center"
            style={{ width: '320px', height: '400px' }}>

            {/* Corner brackets */}
            <div className="absolute top-2 left-6 w-6 h-6 z-20" style={{ borderTop: '2px solid rgba(255,107,43,0.55)', borderLeft: '2px solid rgba(255,107,43,0.55)' }} />
            <div className="absolute top-2 right-6 w-6 h-6 z-20" style={{ borderTop: '2px solid rgba(255,107,43,0.55)', borderRight: '2px solid rgba(255,107,43,0.55)' }} />
            <div className="absolute bottom-2 left-6 w-6 h-6 z-20" style={{ borderBottom: '2px solid rgba(255,107,43,0.55)', borderLeft: '2px solid rgba(255,107,43,0.55)' }} />
            <div className="absolute bottom-2 right-6 w-6 h-6 z-20" style={{ borderBottom: '2px solid rgba(255,107,43,0.55)', borderRight: '2px solid rgba(255,107,43,0.55)' }} />

            {/* ★ THICK ORANGE-RED RING — behind person, NOT clipping ★ */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-0"
              style={{
                bottom: '80px',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                border: '10px solid transparent',
                background:
                  'linear-gradient(#0e0a06, #0e0a06) padding-box, ' +
                  'linear-gradient(160deg, #ff6a00 0%, #e63c00 45%, #a01800 100%) border-box',
                boxShadow:
                  '0 0 40px rgba(255,80,0,0.45), 0 0 80px rgba(220,50,0,0.2), inset 0 0 0 1px rgba(255,100,20,0.1)',
              }}
            />

            {/* ★ TRANSPARENT PERSON — in front of ring ★ */}
            <img
              src={koketsoSuit}
              alt="Koketso Raphasha - AI Engineer"
              className="relative z-10"
              style={{
                width: '88%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.7))',
                marginBottom: '0px',
              }}
            />
          </div>

          {/* Name + title */}
          <div className="text-center w-full max-w-[320px] mt-2">
            <div className="text-lg sm:text-2xl font-bold text-white tracking-wide">Koketso Raphasha</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold mt-1 flex items-center justify-center gap-2"
              style={{ color: '#FF6B2B' }}>
              Autonomous AI Engineer
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#FF6B2B' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#FF6B2B' }} />
              </span>
            </div>
          </div>

          {/* Live terminal strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-4 rounded-2xl overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto px-4 py-3 flex items-center gap-2"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,107,43,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="shrink-0 text-[10px] font-mono font-bold" style={{ color: '#FF6B2B' }}>sys://</span>
            <TerminalStrip />
          </motion.div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

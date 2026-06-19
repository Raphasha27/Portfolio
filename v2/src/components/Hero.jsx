import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import koketsoSuit from '../assets/koketso_suit.png';

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
  { name: 'GitHub',   icon: 'github',   link: 'https://github.com/raphasha27',            color: 'hover:text-white' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/koketso-raphasha', color: 'hover:text-blue-400' },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',            color: 'hover:text-sky-400' },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',             color: 'hover:text-blue-300' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

/* ── BLUE halo ring (behind portrait) ── */
const BlueHalo = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
    {/* Outermost ambient glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: '115%',
        height: '115%',
        background: 'radial-gradient(circle, rgba(0,150,255,0.13) 0%, transparent 70%)',
        filter: 'blur(18px)',
      }}
    />
    {/* Mid diffuse glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: '102%',
        height: '102%',
        background: 'radial-gradient(circle, rgba(0,180,255,0.22) 30%, transparent 72%)',
        filter: 'blur(10px)',
      }}
    />
    {/* Main thick ring */}
    <div
      className="absolute rounded-full"
      style={{
        width: '94%',
        height: '94%',
        border: '10px solid transparent',
        background:
          'linear-gradient(#050d12, #050d12) padding-box, ' +
          'linear-gradient(135deg, #0088ff 0%, #00d4ff 40%, #0055ff 75%, #00aaff 100%) border-box',
        boxShadow:
          '0 0 0 2px rgba(0,180,255,0.15),' +
          '0 0 30px rgba(0,150,255,0.6),' +
          '0 0 60px rgba(0,100,255,0.35),' +
          '0 0 100px rgba(0,50,255,0.18),' +
          'inset 0 0 20px rgba(0,200,255,0.08)',
      }}
    />
    {/* Inner highlight arc (top) */}
    <div
      className="absolute rounded-full"
      style={{
        width: '94%',
        height: '94%',
        border: '2px solid transparent',
        background:
          'linear-gradient(transparent, transparent) padding-box, ' +
          'linear-gradient(140deg, rgba(100,220,255,0.8) 0%, transparent 45%, transparent 55%, rgba(0,150,255,0.4) 100%) border-box',
        borderRadius: '50%',
      }}
    />
  </div>
);

const Hero = () => (
  <div id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-transparent">
    <ParticleCanvas />

    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

    {/* Skyline silhouette */}
    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none opacity-10 z-0">
      <svg viewBox="0 0 1440 180" fill="none" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 180V120L60 100L120 130L180 80L240 110L300 60L360 90L420 50L480 100L540 70L600 120L660 90L720 40L780 80L840 60L900 110L960 50L1020 90L1080 70L1140 120L1200 80L1260 100L1320 60L1380 110L1440 90V180H0Z" fill="url(#buildingGrad)" />
        <defs><linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FF9C" stopOpacity="0" /><stop offset="100%" stopColor="#00FF9C" stopOpacity="0.15" /></linearGradient></defs>
      </svg>
    </div>

    {/* Ambient glow orbs */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00FF9C]/5 blur-[100px] rounded-full pointer-events-none" />

    {/* Main Content Container - highly compacted padding for mobile */}
    <div className="w-full px-3 sm:px-6 lg:px-12 relative z-10 pt-16 sm:pt-32 pb-4 sm:pb-10 max-w-7xl mx-auto flex-1 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-3 sm:gap-12 items-center w-full">

        {/* ── RIGHT: Portrait (order-1 on mobile = shows first) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative order-1 lg:order-2 flex flex-col items-center"
        >
          {/* Portrait frame wrapper - EVEN SMALLER ON MOBILE (110px vs 340px desktop) */}
          <div className="relative w-[110px] h-[110px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] flex items-center justify-center p-2 sm:p-6">

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-t-2 border-l-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute top-0 right-0 w-3 h-3 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-t-2 border-r-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-b-2 border-l-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-b-2 border-r-2 border-[#00FF9C]/70 z-20" />

            {/* ★ Blue halo ring ★ */}
            <BlueHalo />

            {/* Green circle frame + photo */}
            <div
              className="relative w-full h-full rounded-full flex items-end justify-center overflow-hidden"
              style={{
                zIndex: 10,
                background: 'radial-gradient(circle, rgba(0,255,204,0.2) 0%, rgba(0,50,50,0.4) 100%)',
                backdropFilter: 'blur(4px)',
                border: '2px solid #00ffcc',
                boxShadow: '0 0 25px rgba(0,255,204,0.4), inset 0 0 25px rgba(0,255,204,0.1)',
              }}
            >
              <img
                src={koketsoSuit}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover scale-[1.35] translate-y-[8%] relative z-10"
              />
            </div>
          </div>

          {/* Name + title below portrait (Tighter margins) */}
          <div className="text-center w-full max-w-[280px] mt-1.5 sm:mt-6">
            <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white tracking-wide leading-none">Koketso Raphasha</div>
            <div className="text-[7px] sm:text-[10px] lg:text-xs font-mono text-[#00ffcc] uppercase tracking-[0.2em] font-bold mt-0.5 flex items-center justify-center gap-1.5">
              Autonomous AI Engineer
              <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
                <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-[#00ffcc]" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── LEFT: Text content (order-2 on mobile = shows second) ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-1.5 sm:space-y-4 order-2 lg:order-1 flex flex-col justify-center"
        >
          {/* Status badges - Tighter on mobile */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 text-[#00FF9C] text-[7px] sm:text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#00FF9C] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[7px] sm:text-[9px] font-bold tracking-[0.2em] uppercase">
              Johannesburg, SA
            </span>
          </div>

          {/* Heading - Smaller on mobile */}
          <div className="space-y-0 sm:space-y-1">
            <h1 className="hidden sm:block text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              SYSTEMS ARCHITECT &<br />
              <Typewriter />
            </h1>
            <h1 className="sm:hidden text-lg font-bold tracking-tight text-white leading-[1.1]">
              Systems Architect<br />
              <span className="text-[#00FF9C] text-sm">& AI Engineer</span>
            </h1>
          </div>

          {/* Description - Hidden completely on very small screens, or kept 1 line */}
          <p className="text-text-dim text-[10px] sm:text-[13px] leading-tight sm:leading-relaxed max-w-lg hidden sm:block">
            I am <span className="text-white font-bold">Koketso Raphasha</span>, a{' '}
            <span className="text-blue-400 font-bold">Systems Architect</span>, AI Engineer, and Co-founder of
            Kirov Dynamics. Building self-healing, scalable, and highly efficient systems.
          </p>

          {/* CTA Buttons - Ultra compact row on mobile */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-1.5 sm:gap-3 pt-0.5 w-full">
            <a
              href="#projects"
              className="flex-1 sm:flex-none flex items-center justify-center px-2 py-1.5 sm:px-5 sm:py-3 bg-[#00FF9C] text-[#050d12] font-bold rounded-md sm:rounded-lg hover:bg-[#00e089] transition-all active:scale-95 text-[8px] sm:text-sm whitespace-nowrap"
            >
              VIEW REPOS
            </a>
            <a
              href="/Koketso_Raphasha_CV.pdf"
              download
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-2 py-1.5 sm:px-5 sm:py-3 bg-[#0d1117] border border-[#00FF9C]/40 text-white font-bold rounded-md sm:rounded-lg hover:bg-[#00FF9C]/5 transition-all active:scale-95 text-[8px] sm:text-sm whitespace-nowrap"
            >
              <Icon name="download" size={10} /> DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-2 py-1.5 sm:px-5 sm:py-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-md sm:rounded-lg hover:bg-blue-600/30 transition-all active:scale-95 text-[8px] sm:text-sm whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse shrink-0" /> HIRE ME
            </a>
          </div>

          {/* WhatsApp + Socials Row - Full width on mobile to spread out */}
          <div className="flex items-center justify-between sm:justify-start w-full gap-2 pt-1.5 pb-1">
            <a
              href="https://wa.me/27781172470"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg border border-[#00FF9C]/25 bg-[#00FF9C]/5 hover:bg-[#00FF9C]/10 transition-all active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF9C] shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div>
                <div className="text-[8px] sm:text-[9px] font-mono text-[#00FF9C]/60 uppercase tracking-wider">WhatsApp</div>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-none">078 117 2470</div>
              </div>
            </a>

            <div className="flex items-center gap-1.5">
              <span className="text-[7px] font-bold text-white/30 uppercase tracking-[0.2em] hidden sm:inline mr-1">Connect</span>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 sm:w-9 sm:h-9 glass rounded-lg flex items-center justify-center text-white/50 ${s.color} transition-all border border-white/5 hover:border-current`}
                >
                  <Icon name={s.icon} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats — 4 columns on all screens, highly compact on mobile */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-0.5 border-t border-white/5 w-full">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="glass p-1 sm:p-3 rounded-md sm:rounded-lg border border-white/5 flex flex-col items-center justify-center text-center gap-0.5"
              >
                <div className="text-[#00FF9C]/60 hidden sm:block">
                  <Icon name={s.icon} size={12} />
                </div>
                <div className="text-xs sm:text-lg font-bold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[5px] sm:text-[7px] font-mono text-white/50 uppercase tracking-wider leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  </div>
);

export default Hero;


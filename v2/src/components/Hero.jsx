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
  { name: 'WhatsApp', icon: 'whatsapp', link: 'https://wa.me/27781172470',                color: 'hover:text-green-400' },
  { name: 'Email',    icon: 'mail',     link: 'mailto:raphashakoketso99@gmail.com',        color: 'hover:text-red-400' },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',            color: 'hover:text-sky-400' },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',             color: 'hover:text-blue-300' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

/* ── Orange halo ring (behind portrait) ── */
const OrangeHalo = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
    {/* Outermost ambient glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: '115%',
        height: '115%',
        background: 'radial-gradient(circle, rgba(255,100,0,0.13) 0%, transparent 70%)',
        filter: 'blur(18px)',
      }}
    />
    {/* Mid diffuse glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: '102%',
        height: '102%',
        background: 'radial-gradient(circle, rgba(255,120,0,0.22) 30%, transparent 72%)',
        filter: 'blur(10px)',
      }}
    />
    {/* Main thick ring */}
    <div
      className="absolute rounded-full"
      style={{
        width: '94%',
        height: '94%',
        border: '12px solid transparent',
        background:
          'linear-gradient(#050d12, #050d12) padding-box, ' +
          'linear-gradient(135deg, #ff8c00 0%, #ff4500 40%, #cc2200 75%, #ff6600 100%) border-box',
        boxShadow:
          '0 0 0 2px rgba(255,90,0,0.15),' +
          '0 0 30px rgba(255,80,0,0.6),' +
          '0 0 60px rgba(255,60,0,0.35),' +
          '0 0 100px rgba(220,40,0,0.18),' +
          'inset 0 0 20px rgba(255,100,0,0.08)',
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
          'linear-gradient(140deg, rgba(255,200,80,0.8) 0%, transparent 45%, transparent 55%, rgba(255,100,0,0.4) 100%) border-box',
        borderRadius: '50%',
      }}
    />
  </div>
);

const Hero = () => (
  <div id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
    <ParticleCanvas />

    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

    {/* Skyline silhouette */}
    <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-10 z-0">
      <svg viewBox="0 0 1440 180" fill="none" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 180V120L60 100L120 130L180 80L240 110L300 60L360 90L420 50L480 100L540 70L600 120L660 90L720 40L780 80L840 60L900 110L960 50L1020 90L1080 70L1140 120L1200 80L1260 100L1320 60L1380 110L1440 90V180H0Z" fill="url(#buildingGrad)" />
        <rect x="60" y="100" width="8" height="20" fill="#00FF9C" opacity="0.3" /><rect x="80" y="100" width="8" height="15" fill="#00FF9C" opacity="0.2" /><rect x="140" y="80" width="10" height="40" fill="#00FF9C" opacity="0.15" /><rect x="160" y="80" width="8" height="25" fill="#00FF9C" opacity="0.3" />
        <rect x="260" y="60" width="12" height="60" fill="#00FF9C" opacity="0.2" /><rect x="280" y="60" width="8" height="40" fill="#00FF9C" opacity="0.15" /><rect x="320" y="90" width="10" height="30" fill="#00FF9C" opacity="0.25" /><rect x="340" y="90" width="8" height="20" fill="#00FF9C" opacity="0.15" />
        <rect x="430" y="50" width="14" height="70" fill="#00FF9C" opacity="0.2" /><rect x="450" y="50" width="10" height="45" fill="#00FF9C" opacity="0.3" /><rect x="500" y="70" width="8" height="50" fill="#00FF9C" opacity="0.15" /><rect x="520" y="70" width="10" height="30" fill="#00FF9C" opacity="0.2" />
        <rect x="680" y="40" width="16" height="80" fill="#00FF9C" opacity="0.25" /><rect x="700" y="40" width="12" height="55" fill="#00FF9C" opacity="0.15" /><rect x="750" y="80" width="10" height="40" fill="#00FF9C" opacity="0.2" /><rect x="770" y="80" width="8" height="25" fill="#00FF9C" opacity="0.3" />
        <rect x="850" y="60" width="14" height="60" fill="#00FF9C" opacity="0.15" /><rect x="870" y="60" width="10" height="40" fill="#00FF9C" opacity="0.2" /><rect x="970" y="50" width="12" height="70" fill="#00FF9C" opacity="0.25" /><rect x="990" y="50" width="8" height="50" fill="#00FF9C" opacity="0.15" />
        <defs><linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00FF9C" stopOpacity="0" /><stop offset="100%" stopColor="#00FF9C" stopOpacity="0.15" /></linearGradient></defs>
      </svg>
    </div>

    {/* Ambient glow orbs */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00FF9C]/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-32 pb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 items-center">

        {/* ── RIGHT: Portrait (order-1 on mobile = shows first) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex flex-col items-center"
        >
          {/* Portrait frame wrapper */}
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] flex items-center justify-center p-6">

            {/* Corner brackets (green) */}
            <div className="absolute top-0 left-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-t-2 border-l-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute top-0 right-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-t-2 border-r-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute bottom-0 left-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-b-2 border-l-2 border-[#00FF9C]/70 z-20" />
            <div className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-b-2 border-r-2 border-[#00FF9C]/70 z-20" />

            {/* ★ Orange halo ring — sits behind portrait, in front of nothing ★ */}
            <OrangeHalo />

            {/* Green circle frame + photo — sits above orange halo */}
            <div
              className="relative w-full h-full rounded-full flex items-end justify-center overflow-hidden"
              style={{
                zIndex: 10,
                background: '#050d12',
                border: '3px solid #00ffcc',
                boxShadow:
                  '0 0 35px rgba(0,255,204,0.55), inset 0 0 35px rgba(0,255,204,0.15)',
              }}
            >
              <img
                src={koketsoSuit}
                alt="Koketso Raphasha - AI Engineer"
                className="w-[85%] h-auto object-cover relative z-10 translate-y-[5%] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Name + title below portrait */}
          <div className="text-center w-full max-w-[280px] lg:max-w-[320px] mt-3 lg:mt-6">
            <div className="text-base sm:text-xl lg:text-2xl font-bold text-white tracking-wide">Koketso Raphasha</div>
            <div className="text-[9px] sm:text-[10px] lg:text-xs font-mono text-[#00ffcc] uppercase tracking-[0.2em] font-bold mt-1 flex items-center justify-center gap-2">
              Autonomous AI Engineer
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]" />
              </span>
            </div>
          </div>

          {/* Live terminal strip — hidden on mobile to save space */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hidden sm:flex mt-5 glass rounded-2xl border border-blue-500/20 overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto px-4 py-3 items-center gap-2"
          >
            <span className="text-[#00FF9C] shrink-0 text-[10px] font-mono">sys://</span>
            <TerminalStrip />
          </motion.div>
        </motion.div>

        {/* ── LEFT: Text content (order-2 on mobile = shows second) ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 order-2 lg:order-1"
        >
          {/* Status badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 text-[#00FF9C] text-[9px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold tracking-[0.3em] uppercase">
              Johannesburg, SA
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            {/* Desktop heading */}
            <h1 className="hidden sm:block text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] break-words">
              SYSTEMS ARCHITECT &<br />
              <Typewriter />
            </h1>
            {/* Mobile heading — simpler, fits screen */}
            <h1 className="sm:hidden text-2xl font-bold tracking-tight text-white leading-[1.15]">
              Systems Architect<br />
              <span className="text-[#00FF9C]">& AI Engineer</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-text-dim text-xs sm:text-[13px] leading-relaxed max-w-lg">
            {/* Mobile: shorter 2-line version */}
            <span className="sm:hidden">
              Building scalable infrastructure, AI systems, and production-ready solutions that bridge technical strategy with real-world deployment.
            </span>
            {/* Desktop: full version */}
            <span className="hidden sm:inline">
              I am <span className="text-white font-bold">Koketso Raphasha</span>, a{' '}
              <span className="text-blue-400 font-bold">Systems Architect</span>, AI Engineer, and Co-founder of
              Kirov Dynamics Technology based in Johannesburg, South Africa. Building self-healing, scalable, and
              highly efficient systems that bridge the gap between ambitious technical strategy and production-ready deployments.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-1 w-full">
            <a
              href="#projects"
              className="flex items-center justify-center px-5 py-3 bg-[#00FF9C] text-[#050d12] font-bold rounded-xl hover:bg-[#00e089] transition-all active:scale-95 shadow-[0_0_20px_rgba(0,255,156,0.4)] text-[11px] sm:text-sm hover:shadow-[0_0_35px_rgba(0,255,156,0.6)]"
            >
              VIEW REPOS
            </a>
            <a
              href="/Koketso_Raphasha_CV.pdf"
              download
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0d1117] border border-[#00FF9C]/40 text-white font-bold rounded-xl hover:bg-[#00FF9C]/5 transition-all active:scale-95 text-[11px] sm:text-sm hover:border-[#00FF9C]"
            >
              <Icon name="download" size={14} /> DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-600/30 transition-all active:scale-95 text-[11px] sm:text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" /> HIRE ME
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/27781172470"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#00FF9C]/25 bg-[#00FF9C]/5 hover:bg-[#00FF9C]/10 hover:border-[#00FF9C]/50 transition-all active:scale-95 w-fit group"
          >
            {/* WhatsApp icon SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#00FF9C] group-hover:scale-110 transition-transform shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div>
              <div className="text-[9px] font-mono text-[#00FF9C]/60 uppercase tracking-[0.15em]">WhatsApp</div>
              <div className="text-[11px] sm:text-xs font-bold text-white">078 117 2470</div>
            </div>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-white/5 w-full">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mr-1 hidden sm:inline">Connect</span>
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
                <Icon name={s.icon} size={16} />
              </motion.a>
            ))}
          </div>

          {/* Stats — 2×2 on mobile, 4 columns on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/5">
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

      </div>
    </div>
  </div>
);

export default Hero;

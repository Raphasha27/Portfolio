import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import koketsoSuit from '../assets/profile_new.png';

/* ─────────────────────────────────────────────
   Typewriter — cycles through roles
───────────────────────────────────────────── */
const ROLES = ['SYSTEMS |', 'AI ENGINEER |', 'CO-FOUNDER |', 'FULL STACK DEV |'];

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
        setRoleIdx(i => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <span className="text-[#00FF9C]" style={{ textShadow: '0 0 30px rgba(0,255,156,0.35)' }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[0.85em] bg-[#00FF9C] ml-1 align-middle rounded-sm"
      />
    </span>
  );
};

/* ─────────────────────────────────────────────
   Animated count-up
───────────────────────────────────────────── */
const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = to / (duration * 60);
    const timer = setInterval(() => {
      n += step;
      if (n >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(n));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const SOCIALS = [
  { name: 'GitHub',   icon: 'github',   link: 'https://github.com/raphasha27',            color: 'hover:text-white'      },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/koketso-raphasha', color: 'hover:text-blue-400'   },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',            color: 'hover:text-sky-400'    },
  { name: 'WhatsApp', icon: 'whatsapp', link: 'https://wa.me/27781172470',                 color: 'hover:text-green-400'  },
  { name: 'YouTube',  icon: 'youtube',  link: 'https://youtube.com/@raphasha27',           color: 'hover:text-red-500'    },
  { name: 'Email',    icon: 'mail',     link: 'mailto:k.raphasha@kirovdynamics.com',       color: 'hover:text-blue-300'   },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',             color: 'hover:text-cyan-400'   },
];

const STATS = [
  { label: 'YEARS EXP.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'CERTIFICATIONS',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'TECH ECOSYSTEMS', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'DELIVERY',        val: 100, suffix: '%', icon: 'shield'        },
];

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   Tech Arsenal data
───────────────────────────────────────────── */
const ROW1_TECH = [
  'react', 'python', 'typescript', 'docker', 'kubernetes',
  'nextjs', 'fastapi', 'postgresql', 'redis', 'mongodb',
  'aws', 'azure', 'github', 'linux', 'tensorflow',
];

const ROW2_TECH = [
  'pytorch', 'langchain', 'go', 'rust', 'nginx',
  'rabbitmq', 'grafana', 'prometheus', 'githubactions',
  'figma', 'flutter', 'csharp', 'java', 'vite', 'tailwindcss',
];

/* Single pill with logo + label */
const TechPill = ({ name }) => (
  <div
    className="flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0"
    style={{
      background: 'rgba(5,13,18,0.9)',
      border: '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(6px)',
    }}
  >
    <Icon name={name} size={16} />
    <span
      className="text-[10px] font-semibold text-white/60 capitalize whitespace-nowrap"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </span>
  </div>
);

const Hero = () => (
  <div
    id="home"
    className="relative min-h-[100dvh] flex flex-col overflow-x-hidden bg-transparent"
  >
    <ParticleCanvas />

    {/* Subtle right-side glow */}
    <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(0,255,156,0.04) 0%, transparent 65%)' }}
    />

    {/* ── Main content ── */}
    <div className="w-full px-5 sm:px-8 lg:px-16 max-w-screen-xl mx-auto flex-1 flex flex-col justify-center relative z-10"
      style={{ paddingTop: 'var(--nav-h)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center w-full py-8 lg:py-0">

        {/* ══════════════ LEFT ══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col gap-5 order-2 lg:order-1"
        >
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold tracking-tight text-white leading-[1.08] uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SYSTEMS ARCHITECT &amp;<br />
              <Typewriter />
            </h1>

            {/* Sub-tagline */}
            <p className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.28em] uppercase text-cyan-400/80 mt-1">
              SOVEREIGN INFRASTRUCTURE &nbsp;·&nbsp; AUTONOMOUS AI &nbsp;·&nbsp; TECH CO-FOUNDER
            </p>
          </div>

          {/* Description */}
          <p className="text-[#8a9bac] text-[13px] sm:text-sm leading-relaxed max-w-[480px]">
            I am <span className="text-white font-semibold">Koketso Raphasha</span>, a{' '}
            <span className="text-blue-400 font-semibold">Systems Architect</span>, AI Engineer, and
            Co-founder of Kirov Dynamics Technology based in Johannesburg, South Africa. Building
            self-healing, scalable, and highly efficient systems that bridge the gap between
            ambitious technical strategy and production-ready deployments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* VIEW REPOS */}
            <a
              href="#projects"
              className="flex items-center justify-center px-7 py-3 bg-[#00FF9C] text-[#030d08] text-[13px] font-black rounded-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
              style={{ boxShadow: '0 0 18px rgba(0,255,156,0.18)' }}
            >
              VIEW REPOS
            </a>

            {/* DOWNLOAD CV */}
            <a
              href="/Koketso_Raphasha_CV.pdf"
              download
              className="flex items-center justify-center gap-2 px-7 py-3 bg-[#050d12] border border-[#00FF9C]/25 text-white text-[13px] font-bold rounded-lg hover:border-[#00FF9C]/50 hover:bg-[#071510] active:scale-95 transition-all whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-blue-400">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              DOWNLOAD CV
            </a>

            {/* HIRE ME */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-7 py-3 bg-[#020814] border border-blue-500/12 text-blue-500 text-[13px] font-bold rounded-lg hover:border-blue-500/30 hover:bg-[#03101f] active:scale-95 transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" style={{ boxShadow: '0 0 7px rgba(59,130,246,0.9)' }} />
              HIRE ME
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">CONNECT</span>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className={`w-8 h-8 flex items-center justify-center rounded text-white/40 ${s.color} transition-colors`}
                >
                  <Icon name={s.icon} size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 py-5 px-3 rounded-2xl text-center"
                style={{ background: 'rgba(2,8,16,0.85)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="text-blue-500/80">
                  <Icon name={s.icon} size={18} />
                </div>
                <div
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[7.5px] font-bold text-white/30 uppercase tracking-widest leading-none">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════ RIGHT — Portrait ══════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative order-1 lg:order-2 flex flex-col justify-center lg:justify-end items-center lg:items-end mt-10 lg:mt-20"
        >
          {/* Subtle green glow behind image */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(0,255,156,0.08) 0%, transparent 70%)' }}
          />

          {/* Frame — matches screenshot exactly */}
          <div className="relative" style={{ maxWidth: '380px', width: '100%' }}>

            {/* Outer ambient glow */}
            <div className="absolute -inset-4 rounded-2xl pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(0,255,156,0.07) 0%, transparent 70%)',
            }} />

            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-visible"
              style={{
                background: 'linear-gradient(145deg, #071a14 0%, #050d12 60%, #071520 100%)',
                border: '1.5px solid rgba(0,255,156,0.55)',
                boxShadow: [
                  '0 0 0 1px rgba(0,255,156,0.08)',
                  '0 0 25px rgba(0,255,156,0.12)',
                  '0 0 60px rgba(0,255,156,0.05)',
                  'inset 0 0 40px rgba(0,255,156,0.03)',
                ].join(', '),
              }}
            >
              {/* Corner accent lines — top-left */}
              <div className="absolute top-0 left-0 pointer-events-none z-10" style={{ width: 28, height: 28 }}>
                <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 2, background: '#00FF9C' }} />
                <div style={{ position: 'absolute', top: -1, left: -1, width: 2, height: 14, background: '#00FF9C' }} />
              </div>
              {/* Corner accent lines — top-right */}
              <div className="absolute top-0 right-0 pointer-events-none z-10" style={{ width: 28, height: 28 }}>
                <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 2, background: '#00FF9C' }} />
                <div style={{ position: 'absolute', top: -1, right: -1, width: 2, height: 14, background: '#00FF9C' }} />
              </div>
              {/* Corner accent lines — bottom-left */}
              <div className="absolute bottom-0 left-0 pointer-events-none z-10" style={{ width: 28, height: 28 }}>
                <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 2, background: '#00FF9C' }} />
                <div style={{ position: 'absolute', bottom: -1, left: -1, width: 2, height: 14, background: '#00FF9C' }} />
              </div>
              {/* Corner accent lines — bottom-right */}
              <div className="absolute bottom-0 right-0 pointer-events-none z-10" style={{ width: 28, height: 28 }}>
                <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 2, background: '#00FF9C' }} />
                <div style={{ position: 'absolute', bottom: -1, right: -1, width: 2, height: 14, background: '#00FF9C' }} />
              </div>

              {/* Photo — fills card, no padding */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={koketsoSuit}
                  alt="Koketso Raphasha"
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>

            {/* Verification badge — solid green circle, top-right corner */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                top: '-15px',
                right: '-15px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00FF9C, #00C97A)',
                border: '2.5px solid #050d12',
                boxShadow: '0 0 0 1.5px #00FF9C, 0 0 16px rgba(0,255,156,0.5)',
                zIndex: 30,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.2" style={{ width: '16px', height: '16px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* ── Tech Stack Marquee ── */}
          <div className="mt-8 w-full" style={{ maxWidth: '420px' }}>
            {/* Label */}
            <div className="flex items-center gap-2 mb-2.5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/30 shrink-0">TECH ARSENAL</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Row 1 — scrolls right-to-left */}
            <div className="overflow-hidden relative">
              <div className="flex gap-3 hero-marquee-row1" style={{ width: 'max-content' }}>
                {[...ROW1_TECH, ...ROW1_TECH].map((t, i) => (
                  <TechPill key={i} name={t} />
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right-to-left (slightly slower) */}
            <div className="overflow-hidden relative mt-2">
              <div className="flex gap-3 hero-marquee-row2" style={{ width: 'max-content' }}>
                {[...ROW2_TECH, ...ROW2_TECH].map((t, i) => (
                  <TechPill key={i} name={t} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import koketsoSuit from '../assets/koketso_samsung_profile.jpg';

/* ── Typewriter cycling through roles ── */
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

const socialLinks = [
  { name: 'GitHub',   icon: 'github',   link: 'https://github.com/raphasha27',            color: 'hover:text-white' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/koketso-raphasha', color: 'hover:text-blue-400' },
  { name: 'Twitter',  icon: 'twitter',  link: 'https://twitter.com/raphasha27',            color: 'hover:text-sky-400' },
  { name: 'WhatsApp', icon: 'whatsapp', link: 'https://wa.me/27781172470',                 color: 'hover:text-green-400' },
  { name: 'YouTube',  icon: 'youtube',  link: 'https://youtube.com/@raphasha27',           color: 'hover:text-red-500' },
  { name: 'Email',    icon: 'mail',     link: 'mailto:k.raphasha@kirovdynamics.com',       color: 'hover:text-blue-300' },
  { name: 'Kaggle',   icon: 'kaggle',   link: 'https://kaggle.com/Raphasha27',             color: 'hover:text-blue-300' },
];

const STATS = [
  { label: 'YEARS EXP.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'CERTIFICATIONS',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'TECH ECOSYSTEMS', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'DELIVERY',        val: 100, suffix: '%', icon: 'shield'        },
];

const Hero = () => (
  <div id="home" className="relative min-h-[100dvh] flex flex-col overflow-x-hidden bg-transparent">
    <ParticleCanvas />

    {/* Ambient glow orbs */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#00FF9C]/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

    {/* Main Content Container */}
    <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 mt-20 lg:mt-0 lg:my-auto pb-8 lg:pb-0 max-w-7xl mx-auto flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 sm:gap-12 items-center w-full">

        {/* ── LEFT: Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-2 lg:order-1 flex flex-col justify-center mt-8 lg:mt-0"
        >
          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] uppercase">
              SYSTEMS ARCHITECT &<br />
              <Typewriter />
            </h1>
            <div className="text-[10px] sm:text-xs font-mono text-[#00FF9C] uppercase tracking-[0.2em] font-bold">
              SOVEREIGN INFRASTRUCTURE • AUTONOMOUS AI • TECH CO-FOUNDER
            </div>
          </div>

          {/* Description */}
          <p className="text-[#a0abb8] text-sm sm:text-base leading-relaxed max-w-2xl">
            I am <span className="text-white font-bold">Koketso Raphasha</span>, a{' '}
            <span className="text-blue-400 font-bold">Systems Architect</span>, AI Engineer, and Co-founder of
            Kirov Dynamics Technology based in Johannesburg, South Africa. Building self-healing, scalable, and highly efficient systems that bridge the gap between ambitious technical strategy and production-ready deployments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="flex items-center justify-center px-6 py-3 bg-[#00FF9C] text-[#050d12] font-bold rounded-lg hover:bg-[#00e089] transition-all active:scale-95 text-sm whitespace-nowrap shadow-[0_0_15px_rgba(0,255,156,0.3)]"
            >
              VIEW REPOS
            </a>
            <a
              href="/Koketso_Raphasha_CV.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#00FF9C]/40 text-white font-bold rounded-lg hover:bg-[#00FF9C]/10 transition-all active:scale-95 text-sm whitespace-nowrap"
            >
              <Icon name="download" size={16} /> DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0a192f] border border-blue-500/20 text-white font-bold rounded-lg hover:bg-[#0a192f]/80 hover:border-blue-500/40 transition-all active:scale-95 text-sm whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" /> HIRE ME
            </a>
          </div>

          {/* Socials Row */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CONNECT</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded flex items-center justify-center text-gray-400 ${s.color} transition-colors`}
                  title={s.name}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 w-full">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-[#050d12]/50 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-[#00FF9C]/20 transition-colors"
              >
                <div className="text-blue-400">
                  <Icon name={s.icon} size={18} />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* ── RIGHT: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end w-full"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
            {/* The Green Outline Frame */}
            <div className="relative w-full rounded-2xl border border-[#00FF9C] shadow-[0_0_30px_rgba(0,255,156,0.1)]">
              
              {/* Photo */}
              <div className="relative w-full overflow-hidden rounded-2xl">
                <img
                  src={koketsoSuit}
                  alt="Koketso Raphasha"
                  className="w-full h-auto object-cover relative z-10 block"
                />
              </div>
              
              {/* Verification Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00FF9C]/20 border border-[#00FF9C] flex items-center justify-center z-30 shadow-[0_0_15px_rgba(0,255,156,0.2)] backdrop-blur-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00FF9C" strokeWidth="3" className="w-4 h-4 sm:w-5 sm:h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

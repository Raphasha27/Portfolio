import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import { PRIORITY_TECHS, getTechInfo } from '../config/technologies';
import profileImg from '/profile_tie.png';

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
  { name: 'GitHub',    icon: 'github',     link: 'https://github.com/Raphasha27',                    color: 'hover:text-white' },
  { name: 'LinkedIn',  icon: 'linkedin',   link: 'https://linkedin.com/in/koketso-raphasha',         color: 'hover:text-blue-400' },
  { name: 'Facebook',  icon: 'facebook',   link: 'https://www.facebook.com/kirovdynamicstechnology',  color: 'hover:text-blue-500' },
  { name: 'Twitter',   icon: 'twitter',    link: 'https://twitter.com/raphasha27',                    color: 'hover:text-sky-400' },
  { name: 'Kaggle',    icon: 'kaggle',     link: 'https://kaggle.com/Raphasha27',                     color: 'hover:text-blue-300' },
  { name: 'WhatsApp',  icon: 'whatsapp',   link: 'https://wa.me/27781172470',                         color: 'hover:text-green-400' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

// Generate tech arsenal from standardized config
const techArsenal = PRIORITY_TECHS.map(techKey => {
  const techInfo = getTechInfo(techKey);
  return {
    name: techInfo.name,
    icon: techInfo.icon
  };
});

const slideTexts = [
  'Building sovereign AI infrastructure',
  'Self-healing scalable systems',
  'Bridging data & human intuition',
  'Autonomous agentic frameworks',
];

const SlidingText = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slideTexts.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-7 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="text-[10px] sm:text-xs text-white/50 font-mono leading-tight"
        >
          {slideTexts[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="relative lg:min-h-screen flex flex-col bg-transparent">
    <div className="absolute top-0 -right-20 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="w-full px-2 sm:px-6 lg:px-12 relative z-10 mx-auto pt-[calc(var(--nav-h)+0.15rem)] sm:pt-[calc(var(--nav-h)+1.5rem)] lg:flex-1 lg:flex lg:flex-col lg:justify-between pb-0.5 sm:pb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0.5 sm:gap-8 lg:gap-12 w-full h-full">

        {/* Profile Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center shrink-0 lg:order-2"
        >
          <div className="relative w-[380px] h-[380px] sm:w-[360px] sm:h-[360px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]">
            <div className="hidden sm:block absolute rounded-full border border-[#00FF9C]/10 animate-pulse pointer-events-none"
              style={{ inset: '-24px', boxShadow: '0 0 40px 4px rgba(0,255,156,0.08), inset 0 0 30px rgba(0,255,156,0.03)' }} />
            <div className="hidden sm:block absolute rounded-full border border-cyan-400/20 pointer-events-none"
              style={{ inset: '-12px', animation: 'spin 18s linear infinite reverse', boxShadow: '0 0 20px 2px rgba(0,220,255,0.1)' }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF9C] via-blue-500 to-purple-600 p-[2px] sm:p-[3px] animate-spin-slow shadow-[0_0_20px_rgba(0,255,156,0.3)] sm:shadow-[0_0_50px_rgba(0,255,156,0.4)]">
              <div className="w-full h-full rounded-full bg-[#000814]" />
            </div>
            <div className="absolute inset-[3px] sm:inset-[4px] rounded-full shadow-[inset_0_0_10px_rgba(0,255,156,0.15)] sm:shadow-[inset_0_0_30px_rgba(0,255,156,0.2)] overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="Koketso Raphasha - Software Engineer & Co-Founder"
                className="w-full h-full object-cover object-top bg-black"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="text-center mt-1 sm:mt-4">
            <h2 className="text-[11px] sm:text-lg lg:text-xl font-bold text-white">Koketso Raphasha</h2>
            <p className="text-[9px] sm:text-sm text-[#00FF9C] font-medium">Software Engineer</p>
          </div>

          <div className="mt-0.5 sm:mt-1 text-center max-w-[200px] sm:max-w-[240px] lg:hidden">
            <SlidingText />
          </div>

          <div className="flex flex-col gap-1 w-full items-center mt-1 lg:hidden">
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
              <a href="#projects" className="px-3 py-1 bg-[#00FF9C] text-[#000814] font-semibold rounded hover:bg-[#00e089] transition-all active:scale-[0.97] text-[9px]">
                View Projects →
              </a>
              <a href="/Koketso_Raphasha_CV.pdf" download className="px-3 py-1 border border-white/20 text-white/80 font-medium rounded hover:bg-white/5 transition-all active:scale-[0.97] text-[9px] flex items-center gap-1">
                <Icon name="download" size={9} /> CV
              </a>
              <a href="#contact" className="px-3 py-1 border border-blue-500/30 text-blue-400 font-medium rounded hover:bg-blue-600/20 transition-all active:scale-[0.97] text-[9px]">
                Hire Me
              </a>
              <a href="mailto:raphashakoketso69@gmail.com" className="px-3 py-1 border border-red-500/30 text-red-400 font-medium rounded hover:bg-red-600/20 transition-all active:scale-[0.97] text-[9px] flex items-center gap-1">
                <Icon name="mail" size={9} /> Email
              </a>
              <a href="https://github.com/Raphasha27" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-white/30 text-white/80 font-medium rounded hover:bg-white/10 transition-all active:scale-[0.97] text-[9px] flex items-center gap-1">
                <Icon name="github" size={9} /> GitHub
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-3 gap-y-1.5 flex-wrap w-full max-w-[320px] lg:hidden">
              {socialLinks.map((s, i) => (
                <a 
                  key={i} 
                  href={s.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-8 h-8 flex items-center justify-center text-white/50 ${s.color} transition-all rounded border border-white/10 hover:border-current bg-white/5`}
                  aria-label={`Visit my ${s.name} profile`}
                  title={`Connect with me on ${s.name}`}
                >
                  <Icon name={s.icon} size={14} />
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col min-w-0 gap-0.5 sm:gap-4 lg:pr-6 xl:pr-8 lg:order-1 pt-0 sm:pt-2 justify-between w-full text-center sm:text-left"
        >
          <div className="w-full flex flex-col gap-0.5 sm:gap-2">
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 flex-wrap w-full">
              <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-[7px] sm:text-[10px] font-medium flex items-center gap-1">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                Open
              </span>
              <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[7px] sm:text-[10px] font-medium">
                Joburg, SA
              </span>
            </div>

            <h1 className="text-sm sm:text-4xl lg:text-[40px] xl:text-[56px] font-bold text-white leading-tight w-full break-words">
              Software Engineer<span className="text-[#00FF9C]"> & Co-Founder</span>
            </h1>

            <div className="hidden lg:block my-2">
              <SlidingText />
            </div>

            <p className="text-[10px] sm:text-base lg:text-lg text-white/60 leading-snug sm:leading-relaxed w-full">
              Designing and building scalable, self-healing systems powered by modern AI and clean architecture. Passionate about sovereign infrastructure, autonomous agents, and high-throughput distributed systems.
            </p>

            <p className="text-[9px] sm:text-base text-white/40 w-full leading-tight">📍 Johannesburg, South Africa — Open to remote & worldwide opportunities. Let's build the future together.</p>

            <div className="hidden lg:flex flex-col gap-1 sm:gap-3 w-full items-center mt-1 sm:mt-3">
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 w-full">
                <a href="#projects" className="px-3 py-1 sm:px-6 sm:py-3 bg-[#00FF9C] text-[#000814] font-semibold rounded sm:rounded-lg hover:bg-[#00e089] hover:shadow-[0_0_20px_rgba(0,255,156,0.4)] transition-all active:scale-[0.97] text-[9px] sm:text-base">
                  View Projects →
                </a>
                <a href="/Koketso_Raphasha_CV.pdf" download className="px-3 py-1 sm:px-6 sm:py-3 border border-white/20 text-white/80 font-medium rounded sm:rounded-lg hover:bg-white/5 hover:border-white/40 hover:text-white transition-all active:scale-[0.97] text-[9px] sm:text-base flex items-center gap-1 sm:gap-2">
                  <Icon name="download" size={9} /> CV
                </a>
              <a href="#contact" className="px-3 py-1 sm:px-6 sm:py-3 border border-blue-500/30 text-blue-400 font-medium rounded sm:rounded-lg hover:bg-blue-600/20 hover:border-blue-400/50 transition-all active:scale-[0.97] text-[9px] sm:text-base">
                Hire Me
              </a>
              <a href="mailto:raphashakoketso69@gmail.com" className="px-3 py-1 sm:px-6 sm:py-3 border border-red-500/30 text-red-400 font-medium rounded sm:rounded-lg hover:bg-red-600/20 hover:border-red-400/50 transition-all active:scale-[0.97] text-[9px] sm:text-base flex items-center gap-1 sm:gap-2">
                <Icon name="mail" size={9} /> Email
              </a>
              <a href="https://github.com/Raphasha27" target="_blank" rel="noopener noreferrer" className="px-3 py-1 sm:px-6 sm:py-3 border border-white/30 text-white/80 font-medium rounded sm:rounded-lg hover:bg-white/10 hover:border-white/50 hover:text-white transition-all active:scale-[0.97] text-[9px] sm:text-base flex items-center gap-1 sm:gap-2">
                <Icon name="github" size={9} /> GitHub
              </a>
            </div>
              <div className="hidden lg:flex items-center justify-center gap-x-3 gap-y-1.5 flex-wrap w-full max-w-[320px]">
                {socialLinks.map((s, i) => (
                  <a 
                    key={i} 
                    href={s.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white/50 ${s.color} transition-all rounded sm:rounded-lg border border-white/10 hover:border-current bg-white/5`}
                    aria-label={`Visit my ${s.name} profile`}
                    title={`Connect with me on ${s.name}`}
                  >
                    <Icon name={s.icon} size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Arsenal */}
          <div className="pt-1 sm:pt-6 mt-0.5 sm:mt-4 w-full border-t border-white/10">
            <div className="flex items-center gap-1 sm:gap-4 mb-0.5 sm:mb-3">
              <span className="text-[6px] sm:text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold shrink-0">Arsenal</span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <div className="overflow-hidden rounded sm:rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-1 sm:gap-4 whitespace-nowrap py-0.5 sm:py-3 px-1 sm:px-4"
              >
                {[...techArsenal, ...techArsenal].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-0.5 sm:gap-2 px-1 sm:px-4 py-0.5 sm:py-1.5 text-[7px] sm:text-sm font-mono border border-white/10 rounded sm:rounded-lg text-white/60 shrink-0 bg-white/[0.03] hover:text-[#00FF9C] hover:border-[#00FF9C]/30 hover:bg-[#00FF9C]/5 transition-colors"
                  >
                    <Icon name={tech.icon} size={6} className="sm:w-3.5 sm:h-3.5" />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

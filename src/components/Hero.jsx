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
  { name: 'Streamlit', icon: 'streamlit',  link: 'https://share.streamlit.io/user/raphasha27',        color: 'hover:text-red-400' },
  { name: 'WhatsApp',  icon: 'whatsapp',   link: 'https://wa.me/27781172470',                         color: 'hover:text-green-400' },
  { name: 'Email',     icon: 'mail',       link: 'mailto:raphashakoketso69@gmail.com',                color: 'hover:text-red-400' },
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
    <div className="h-5 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-xs text-white/50 font-mono"
        >
          {slideTexts[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="relative min-h-screen flex flex-col bg-transparent">
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10 mx-auto pt-[var(--nav-h)] flex-1 flex flex-col justify-start lg:justify-center lg:pt-24 lg:pb-24 lg:pb-32">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full">

        {/* Profile Column — first in HTML so it shows first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center shrink-0 w-full max-w-[320px] sm:max-w-[360px] lg:w-auto lg:order-2"
        >
          <div className="relative w-[300px] h-[300px] xs:w-[320px] xs:h-[320px] sm:w-[340px] sm:h-[340px] lg:w-[360px] lg:h-[360px] lg:-translate-x-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF9C] via-blue-500 to-purple-600 p-[2px] animate-spin-slow shadow-[0_0_30px_rgba(0,255,156,0.3)]">
              <div className="w-full h-full rounded-full bg-[#000000]" />
            </div>
            <div className="absolute inset-[3px] rounded-full shadow-[inset_0_0_20px_rgba(0,255,156,0.15)] overflow-hidden">
              <img
                src={profileImg}
                alt="Koketso Raphasha - Software Engineer & Co-Founder"
                className="w-full h-full object-contain scale-100"
                style={{ objectPosition: 'center bottom' }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="text-center mt-3 sm:mt-4">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">Koketso Raphasha</h2>
            <p className="text-xs sm:text-sm text-[#00FF9C] font-medium mt-0.5">Software Engineer</p>
          </div>

          <div className="mt-1 text-center max-w-[240px]">
            <SlidingText />
          </div>

          {/* Social links - always visible */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 flex-wrap justify-center">
            {socialLinks.map((s, i) => (
              <a 
                key={i} 
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/40 ${s.color} transition-all rounded-lg border border-white/10 hover:border-current bg-white/5`}
                aria-label={`Visit my ${s.name} profile`}
                title={`Connect with me on ${s.name}`}
              >
                <Icon name={s.icon} size={14} />
              </a>
            ))}
          </div>

          {/* Tech Arsenal */}
          <div className="mt-2 sm:mt-3 w-full max-w-[280px] sm:max-w-[320px]">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 uppercase tracking-[0.15em] font-bold">Tech Arsenal</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/5 bg-white/[0.02]">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-1.5 sm:gap-2 whitespace-nowrap py-1.5 px-2"
              >
                {[...techArsenal, ...techArsenal].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[9px] font-mono border border-white/10 rounded text-white/40 shrink-0 bg-white/[0.03]"
                  >
                    <Icon name={tech.icon} size={10} />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Column — second in HTML, but first visually on desktop via lg:order-1 */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-3 sm:gap-4 w-full lg:flex-1 lg:pr-8 lg:order-1"
        >
          <div>
            <div className="flex items-center gap-2 flex-wrap w-full">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-[10px] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                Open to Opportunities
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium">
                Johannesburg, SA
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight w-full">
              Software Engineer<span className="text-[#00FF9C]"> & Co-Founder</span>
            </h1>

            <div className="hidden lg:block my-2">
              <SlidingText />
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed w-full">
              Designing and building scalable, self-healing systems powered by modern AI and clean architecture. Passionate about sovereign infrastructure, autonomous agents, and high-throughput distributed systems that push the boundaries of what software can do. Currently engineering the next generation of agentic platforms — where infrastructure thinks, adapts, and heals itself without human intervention.
            </p>

            <p className="text-sm sm:text-base text-white/40 w-full">📍 Johannesburg, South Africa — Open to remote & worldwide opportunities. Let's build the future together.</p>

            {/* QR Code - mobile only */}
            <div className="sm:hidden flex flex-col items-center gap-2 py-3">
              <div className="relative p-2 rounded-xl border border-white/10 bg-white/5">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent('https://portfolio-iota-eight-90.vercel.app')}`}
                  alt="Portfolio QR"
                  className="w-20 h-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#00FF9C]/20 pointer-events-none" />
              </div>
              <span className="text-[8px] text-white/30 font-mono uppercase tracking-[0.15em]">Scan for desktop view</span>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 w-full">
              <a href="#projects" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#00FF9C] text-[#000000] font-semibold rounded-lg hover:bg-[#00e089] hover:shadow-[0_0_20px_rgba(0,255,156,0.4)] transition-all active:scale-[0.97] text-sm sm:text-base">
                View Projects →
              </a>
              <a href="/Koketso_Raphasha_CV.pdf" download className="px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 text-white/80 font-medium rounded-lg hover:bg-white/5 hover:border-white/40 hover:text-white transition-all active:scale-[0.97] text-sm sm:text-base flex items-center gap-2">
                <Icon name="download" size={14} /> CV
              </a>
              <a href="#contact" className="px-5 sm:px-6 py-2.5 sm:py-3 border border-blue-500/30 text-blue-400 font-medium rounded-lg hover:bg-blue-600/20 hover:border-blue-400/50 transition-all active:scale-[0.97] text-sm sm:text-base">
                Hire Me
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-white/10 mt-2 w-full">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white/5 p-2 rounded-lg flex flex-col items-center text-center gap-1">
                <div className="text-[#00FF9C]/50">
                  <Icon name={s.icon} size={14} />
                </div>
                <div className="text-sm sm:text-base font-semibold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[8px] text-white/30 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

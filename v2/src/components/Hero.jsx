import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import heroBg from '../assets/hero_bg_sa_flag_lower_1778236334988.png';
import profileImg from '../assets/koketso_transparent.png';
import { Icon } from './Icons';

const CountUp = ({ to }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        count.set(to);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const techStackLogos = [
  { name: 'Python', id: 'python' },
  { name: 'TensorFlow', id: 'tensorflow' },
  { name: 'PyTorch', id: 'pytorch' },
  { name: 'Google Cloud', id: 'google' },
  { name: 'Linux', id: 'linux' },
  { name: 'GitHub', id: 'github' }
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ["DIGITAL SOLUTIONS", "MOBILE ECOSYSTEMS", "AUTONOMOUS SYSTEMS", "PREMIUM INTERFACES"];
  const [phraseIdx, setPhrasesIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[phraseIdx];
      if (!isDeleting) {
        setTypedText(current.substring(0, typedText.length + 1));
        if (typedText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(current.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setPhrasesIdx((phraseIdx + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  return (
    <div id="home" className="relative overflow-hidden min-h-screen bg-[#050d12]">
      {/* Cinematic Background with SA Flag Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="Johannesburg backdrop" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d12] via-[#050d12]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Content & Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-text-dim uppercase tracking-widest shadow-xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Software Developer
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] uppercase">
              I BUILD <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent glow-text-sm inline-block min-h-[1.1em]">
                {typedText}
              </span>
            </h1>

            <p className="text-text-dim text-lg max-w-lg leading-relaxed">
              Software Developer passionate about building <span className="text-green-400 font-bold">clean</span>, 
              <span className="text-cyan-400 font-bold ml-1">scalable</span> and <span className="text-white font-bold ml-1">intelligent</span> solutions.
            </p>

            {/* Cinematic Quote Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="border-l-4 border-green-500 bg-green-500/5 p-6 rounded-r-2xl max-w-md italic text-sm text-text-dim/80 relative group"
            >
              "Autonomous systems ensure that code remains clean and successful, ready to push to production."
            </motion.div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-green-400 hover:bg-green-300 text-[#050d12] font-bold rounded-xl transition-all flex items-center gap-2 text-md shadow-lg shadow-green-500/20 group">
                View My Work <Icon name="arrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-8 py-4 bg-transparent border border-green-500/30 hover:bg-green-500/5 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-md group">
                Professional Background <Icon name="user" size={18} className="text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Contact & Stats Organizer */}
            <div className="space-y-6 pt-4">
              {/* Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Email', val: 'raphashakoketso9@gmail.com', icon: 'mail', href: 'mailto:raphashakoketso9@gmail.com' },
                  { label: 'Phone', val: '0781172470', icon: 'phone', href: 'tel:0781172470' },
                  { label: 'GitHub', val: 'raphasha27', icon: 'github', href: 'https://github.com/raphasha27' },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" className="glass p-3 flex items-center gap-3 hover:bg-white/5 transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} size={14} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[7px] font-bold text-text-dim uppercase tracking-widest leading-none mb-1">{item.label}</div>
                      <div className="text-[9px] font-bold truncate text-white/90">{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Projects', val: 1.2, suffix: 'k+', icon: 'thumbsUp' },
                  { label: 'Happy Users', val: 12.5, suffix: 'k+', icon: 'heart' },
                  { label: 'Avg. Rating', val: 4.9, suffix: '', icon: 'star' },
                ].map((stat, i) => (
                  <div key={i} className="glass p-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 shrink-0">
                      <Icon name={stat.icon} size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white leading-none">
                        <CountUp to={stat.val} />{stat.suffix}
                      </div>
                      <div className="text-[8px] text-text-dim font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Profile & Status */}
          <div className="relative flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[440px]"
            >
              {/* Smartphone Frame Container */}
              <div className="relative z-10 rounded-[48px] p-2 border border-white/10 bg-[#0a161d] shadow-[0_0_80px_rgba(0,229,160,0.1)] overflow-hidden aspect-[9/16]">
                <div className="absolute top-0 left-0 w-full h-12 flex justify-center items-center z-20 pointer-events-none">
                  <div className="text-[10px] font-mono text-white/20">09:39 AM</div>
                </div>
                <img 
                  src={profileImg} 
                  alt="Koketso Raphasha" 
                  className="w-full h-full object-cover grayscale brightness-110 contrast-105" 
                />
                {/* Glow Border Overlay */}
                <div className="absolute inset-0 rounded-[42px] border-2 border-green-500/20 pointer-events-none" />
              </div>

              {/* Floating Cards (Aligned exactly like mockup) */}
              <div className="absolute top-1/4 -right-8 z-20 space-y-3 hidden md:block">
                {[
                  { title: 'Clean Code', sub: 'Maintainable & Scalable', icon: 'code' },
                  { title: 'Performance', sub: 'Optimized & Fast', icon: 'rocket' },
                  { title: 'Autonomous OS', sub: 'Reliable & Intelligent', icon: 'shield' },
                ].map((card, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                    className="glass px-5 py-3 rounded-xl flex items-center gap-4 border border-white/5 shadow-xl min-w-[200px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                      <Icon name={card.icon} size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">{card.title}</div>
                      <div className="text-[7px] text-text-dim font-bold uppercase tracking-wider">{card.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TECH STACK FOOTER (Bottom Right Organization) */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:block">
        <div className="glass px-8 py-4 flex items-center gap-10">
          <div className="text-[8px] font-bold text-green-400 uppercase tracking-[0.4em] opacity-60">Tech Stack</div>
          <div className="flex gap-6 items-center">
            {techStackLogos.map((tech, i) => (
              <div key={i} className="group relative">
                <div className="w-8 h-8 flex items-center justify-center opacity-40 hover:opacity-100 hover:scale-125 transition-all duration-300">
                  <Icon name={tech.id} size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

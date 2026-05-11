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
  { name: 'React', id: 'react' },
  { name: 'Docker', id: 'docker' },
  { name: 'Azure', id: 'azure' }
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
          className="w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d12] via-[#050d12]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent"></div>
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: Main Text & CTA */}
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
            className="border-l-4 border-green-500 bg-green-500/5 p-6 rounded-r-2xl max-w-md italic text-sm text-text-dim/80 relative group hover:bg-green-500/10 transition-colors"
          >
            <Icon name="chat" size={24} className="absolute -top-3 -right-3 opacity-20 group-hover:opacity-40 transition-opacity" />
            "Autonomous systems ensure that code remains clean and successful, ready to push to production."
          </motion.div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="px-10 py-5 bg-green-400 hover:bg-green-300 text-[#050d12] font-bold rounded-2xl transition-all flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(0,229,160,0.3)] group">
              View My Work <Icon name="arrowRight" size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="px-10 py-5 bg-transparent border border-green-500/30 hover:bg-green-500/5 text-white font-bold rounded-2xl transition-all flex items-center gap-3 text-lg group">
              Professional Background <Icon name="user" size={20} className="text-green-400 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          {/* Contact Bar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[
              { label: 'Email', val: 'raphashakoketso9@gmail.com', icon: 'mail', href: 'mailto:raphashakoketso9@gmail.com' },
              { label: 'Phone', val: '0781172470', icon: 'phone', href: 'tel:0781172470' },
              { label: 'GitHub', val: 'raphasha27', icon: 'github', href: 'https://github.com/raphasha27' },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" className="glass p-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[8px] font-bold text-text-dim uppercase tracking-widest">{item.label}</div>
                  <div className="text-[10px] font-bold truncate group-hover:text-white transition-colors">{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Profile & Stats */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[500px]"
          >
            {/* Main Profile Smartphone/Card Container */}
            <div className="relative z-10 rounded-[60px] p-2 border-4 border-white/5 bg-[#0a161d] shadow-[0_0_100px_rgba(0,229,160,0.1)] overflow-hidden aspect-[9/16] max-h-[700px]">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a161d] to-transparent z-20 flex justify-center pt-6">
                <div className="text-xs font-mono font-bold text-text-dim/50">09:39 AM</div>
              </div>
              <img 
                src={profileImg} 
                alt="Koketso Raphasha" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-110 hover:grayscale-0 transition-all duration-700" 
              />
              {/* Inner Glow Border */}
              <div className="absolute inset-0 rounded-[54px] border-2 border-green-500/20 pointer-events-none" />
            </div>

            {/* Floating Feature Cards (Mockup Style) */}
            <div className="absolute top-1/4 -right-12 z-20 space-y-4 hidden md:block">
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
                  className="glass px-6 py-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <Icon name={card.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{card.title}</div>
                    <div className="text-[8px] text-text-dim font-bold uppercase tracking-widest">{card.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar (Bottom Right Overlay Style) */}
            <div className="absolute -bottom-8 right-0 left-0 lg:-left-20 z-30 flex flex-wrap justify-center lg:justify-start gap-4">
               {[
                { label: 'Projects', val: 1.2, suffix: 'k+', icon: 'thumbsUp', color: 'text-yellow-400' },
                { label: 'Happy Users', val: 12.5, suffix: 'k+', icon: 'heart', color: 'text-red-500' },
                { label: 'Avg. Rating', val: 4.9, suffix: '', icon: 'star', color: 'text-orange-400' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass px-8 py-5 rounded-3xl border border-white/5 shadow-2xl min-w-[160px] text-center lg:text-left flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover:scale-110`}>
                    <Icon name={stat.icon} size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white leading-none">
                      <CountUp to={stat.val} />{stat.suffix}
                    </div>
                    <div className="text-[9px] text-text-dim font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* TECH STACK BAR (Matching Mockup Footer) */}
      <div className="absolute bottom-10 right-10 left-10 hidden lg:flex justify-end pointer-events-none">
        <div className="glass px-8 py-4 rounded-3xl border border-white/10 flex items-center gap-10 shadow-2xl pointer-events-auto">
          <div className="text-[8px] font-bold text-green-400 uppercase tracking-[0.4em] opacity-60">Tech Stack</div>
          <div className="flex gap-8 items-center">
            {techStackLogos.map((tech, i) => (
              <div key={i} className="group relative">
                <div className="w-8 h-8 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                   <Icon name={tech.id} size={24} />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/5 border border-white/10 rounded text-[6px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Floating Chat Bubble */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full bg-green-400 text-[#050d12] flex items-center justify-center shadow-[0_0_40px_rgba(0,229,160,0.4)] cursor-pointer hover:scale-110 transition-transform group"
      >
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        <Icon name="chat" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;

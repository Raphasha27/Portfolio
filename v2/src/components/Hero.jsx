import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg_sa_flag_lower_1778236334988.png';
import profileImg from '../assets/koketso_raw.png';
import { Icon } from './Icons';

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [typedText, setTypedText] = useState('');
  const phrases = ["Mobile Experiences", "UI/UX Excellence", "Autonomous Systems", "Premium Interfaces"];
  const [phraseIdx, setPhrasesIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const techStack = [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' }
  ];

  return (
    <div id="home" className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="Johannesburg backdrop" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d12] via-[#050d12]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 md:px-16 lg:px-24" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold mb-6 tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SOFTWARE DEVELOPER
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tighter min-h-[3.5em]">
            I CRAFT <br />
            <motion.span 
              className="text-green-400 glow-text inline-block"
              layout
            >
              {typedText}
            </motion.span>
            <span className="animate-pulse text-green-400">|</span>
            <span className="text-xl md:text-2xl text-text-dim block mt-6 font-medium tracking-normal opacity-80">
              & MOBILE ECOSYSTEMS
            </span>
          </h1>
          
          <p className="text-text-dim text-sm mb-8 max-w-lg leading-relaxed">
            Software Developer & UI Designer specializing in <span className="text-white font-medium">high-fidelity mobile apps</span> and 
            <span className="text-green-400 font-medium"> autonomous digital systems</span>. 
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative group">
              <div className="absolute -top-3 -right-3 px-2 py-0.5 bg-green-500 text-[8px] font-bold text-bg rounded-full z-20 shadow-lg shadow-green-500/20 animate-bounce">GET STARTED</div>
              <a href="#projects" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-bg font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-green-500/20">
                Explore My Work <Icon name="arrowRight" size={16} />
              </a>
            </div>
            <a href="#about" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition-all flex items-center gap-2">
              The Design Philosophy <Icon name="layout" size={16} className="opacity-50" />
            </a>
          </div>
          
          {/* Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            <a href="mailto:raphashakoketso99@gmail.com" className="glass p-2 flex items-center gap-2 hover:bg-white/5 transition-all">
              <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <Icon name="mail" size={12} />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-bold truncate">raphashakoketso99@gmail.com</div>
              </div>
            </a>
            <a href="tel:0781172470" className="glass p-2 flex items-center gap-2 hover:bg-white/5 transition-all">
              <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <Icon name="phone" size={12} />
              </div>
              <div>
                <div className="text-[10px] font-bold">0781172470</div>
              </div>
            </a>
            <a href="https://github.com/raphasha27" target="_blank" className="glass p-2 flex items-center gap-2 hover:bg-white/5 transition-all">
              <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <Icon name="github" size={12} />
              </div>
              <div>
                <div className="text-[10px] font-bold">raphasha27</div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <div className="glass px-3 py-2 flex items-center gap-2 border-l-2 border-l-green-500">
              <Icon name="code" size={18} className="text-green-400" />
              <div className="text-[8px] font-bold uppercase tracking-wider text-white">Clean Code</div>
            </div>
            <div className="glass px-3 py-2 flex items-center gap-2 border-l-2 border-l-green-500">
              <Icon name="rocket" size={18} className="text-green-400" />
              <div className="text-[8px] font-bold uppercase tracking-wider text-white">Performance</div>
            </div>
            <div className="glass px-3 py-2 flex items-center gap-2 border-l-2 border-l-green-500">
              <Icon name="shield" size={18} className="text-green-400" />
              <div className="text-[8px] font-bold uppercase tracking-wider text-white">Autonomous OS</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center py-20"
        >
          {/* Premium UI Dashboard Preview */}
          <div className="relative w-full max-w-[420px] space-y-4">

            {/* Main Dashboard Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass p-5 rounded-2xl border border-green-500/20 shadow-[0_0_40px_rgba(0,201,136,0.08)]"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-[9px] font-bold text-green-400 uppercase tracking-widest">Active Build</div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                </div>
              </div>
              <div className="text-sm font-bold mb-1">Kirov Dynamics OS v2.0</div>
              <div className="text-[10px] text-text-dim mb-4">React Native · Flutter · Figma</div>
              <div className="space-y-2">
                {[
                  { label: 'UI/UX Design', val: 92 },
                  { label: 'Mobile Dev', val: 88 },
                  { label: 'Autonomous Systems', val: 80 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[8px] font-bold text-text-dim mb-1">
                      <span>{item.label}</span><span className="text-green-400">{item.val}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Two small stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="glass p-4 rounded-2xl border border-blue-500/20 text-center"
              >
                <Icon name="smartphone" size={20} className="text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-bold">Mobile</div>
                <div className="text-[8px] text-text-dim uppercase tracking-widest">First Approach</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="glass p-4 rounded-2xl border border-green-500/20 text-center"
              >
                <Icon name="layout" size={20} className="text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold">UI/UX</div>
                <div className="text-[8px] text-text-dim uppercase tracking-widest">Design System</div>
              </motion.div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="glass p-4 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="text-[10px] font-bold text-green-400 text-center mb-5 tracking-[0.4em] uppercase opacity-70">Core Mobile & UI Stack</div>
              <div className="flex relative overflow-hidden py-2">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-10 items-center whitespace-nowrap"
                >
                  {[...techStack, ...techStack].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <img src={tech.icon} alt={tech.name} className="h-8 w-8 hover:scale-125 transition-all cursor-pointer" title={tech.name} />
                      <span className="text-[7px] text-text-dim font-bold uppercase">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim/50"
      >
        <span className="text-[8px] font-bold tracking-[0.3em] uppercase">Initialize Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-green-500/50 to-transparent animate-scroll-line"></div>
      </motion.div>
    </div>
  );
};

export default Hero;

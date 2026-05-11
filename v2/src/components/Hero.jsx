import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg_sa_flag_lower_1778236334988.png';
import profileImg from '../assets/koketso_transparent.png';
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#050d12]/80 border border-green-500/30 font-mono text-[10px] text-green-400 mb-6 shadow-[0_0_15px_rgba(0,229,160,0.1)]">
            <span className="text-white/50">{">"}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 h-3 bg-green-400 mr-1 align-middle"
              />
              INIT KIROV_OS // STATUS: OPTIMAL
            </motion.span>
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

        {/* SWAPPED: Profile Image with Badges (formerly in About) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
            {/* Ambient Backglow */}
            <div className="absolute inset-10 rounded-full bg-green-500/20 blur-[80px] animate-pulse" />
            
            {/* The Cutout Image */}
            <div className="relative w-full h-full z-10">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent opacity-40" />
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-4 rounded-full border border-green-500/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-10 rounded-full border border-blue-500/5 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

            {/* Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-8 glass px-4 py-3 rounded-2xl border border-green-500/30 z-20 shadow-xl"
            >
              <div className="text-[8px] font-bold text-green-400 uppercase tracking-widest mb-1">Status</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold">Open to Work</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-16 -right-4 glass px-4 py-3 rounded-2xl border border-blue-500/30 z-20 shadow-xl"
            >
              <div className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">Based In</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">South Africa</span>
              </div>
            </motion.div>
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

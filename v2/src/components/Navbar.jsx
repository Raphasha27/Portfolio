import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass h-[var(--nav-h)] flex items-center border-b border-white/5">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-green-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-green-400 font-bold">
            <Icon name="code" size={20} />
            <span className="text-sm tracking-tighter">Portfolio_Koketso_Raphasha27.Dev</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-text-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM HEALTH: OPTIMAL
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold text-text-dim uppercase tracking-widest">
          <a href="#home" className="hover:text-green-400 transition-all">Home</a>
          <a href="#about" className="hover:text-green-400 transition-all">About</a>
          <a href="#experience" className="hover:text-green-400 transition-all">Experience</a>
          <a href="#skills" className="hover:text-green-400 transition-all">Skills</a>
          <a href="#projects" className="hover:text-green-400 transition-all">Projects</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleShare}
            className="w-10 h-10 glass flex items-center justify-center text-text-dim hover:text-green-400 hover:border-green-500/30 transition-all relative group"
            title="Share Link"
          >
            <Icon name={copied ? "check" : "share"} size={18} />
            {copied && (
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-bg text-[8px] font-bold rounded uppercase whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
          <a href="#contact" className="px-6 py-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-lg hover:bg-green-500 hover:text-bg transition-all shadow-lg shadow-green-500/5 flex items-center">
            Get Started <Icon name="arrowRight" size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-blue-400 font-bold">
            <Icon name="code" size={20} />
            <span className="text-sm tracking-tighter">Portfolio_Koketso_Raphasha27.Dev</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-text-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            SYSTEM HEALTH: OPTIMAL
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold text-text-dim uppercase tracking-widest">
          <a href="#home" className="hover:text-blue-400 transition-all">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-all">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-all">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-all">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-all">Projects</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={handleShare}
            className="w-10 h-10 glass hidden sm:flex items-center justify-center text-text-dim hover:text-blue-400 transition-all relative"
            title="Share Link"
          >
            <Icon name={copied ? "check" : "share"} size={18} />
          </button>
          
          <a href="#contact" className="hidden sm:flex px-6 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold rounded-lg hover:bg-blue-500 hover:text-bg transition-all items-center gap-2">
            Hire Me <Icon name="arrowRight" size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 glass flex items-center justify-center text-blue-400"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-8 text-lg font-bold uppercase tracking-widest">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-dim hover:text-blue-400 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8">
               <button 
                onClick={handleShare}
                className="px-6 py-3 glass flex items-center gap-2 text-blue-400 font-bold uppercase text-xs"
              >
                <Icon name={copied ? "check" : "share"} size={18} />
                {copied ? "Copied!" : "Share Link"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

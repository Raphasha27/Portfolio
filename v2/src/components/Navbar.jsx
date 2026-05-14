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
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#00FF9C] font-bold">
            <Icon name="code" size={20} />
            <span className="text-[10px] sm:text-sm tracking-tighter truncate max-w-[80px] sm:max-w-none">Koketso_Raphasha_Portfolio_Dev</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[7px] sm:text-[9px] font-bold text-text-dim shrink-0">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00FF9C] animate-pulse"></span>
            <span className="whitespace-nowrap">SYSTEM HEALTH: OPTIMAL</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold text-text-dim uppercase tracking-widest">
          <a href="#home" className="hover:text-[#00FF9C] transition-all">Home</a>
          <a href="#about" className="hover:text-[#00FF9C] transition-all">About</a>
          <a href="#experience" className="hover:text-[#00FF9C] transition-all">Experience</a>
          <a href="#skills" className="hover:text-[#00FF9C] transition-all">Skills</a>
          <a href="#projects" className="hover:text-[#00FF9C] transition-all">Projects</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={handleShare}
            className="w-10 h-10 glass hidden sm:flex items-center justify-center text-text-dim hover:text-[#00FF9C] transition-all relative"
            title="Share Link"
          >
            <Icon name={copied ? "check" : "share"} size={18} />
          </button>
          
          <a href="#contact" className="hidden sm:flex px-6 py-2 bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-xs font-bold rounded-lg hover:bg-[#00FF9C] hover:text-[#050d12] transition-all items-center gap-2">
            Hire Me <Icon name="arrowRight" size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 glass flex items-center justify-center text-[#00FF9C]"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xl md:hidden flex flex-col p-6"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2 text-[#00FF9C] font-bold">
                <Icon name="code" size={20} />
                <span className="text-[10px] tracking-tighter">Koketso_Raphasha_Portfolio</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 glass flex items-center justify-center text-[#00FF9C]"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 text-xl font-bold uppercase tracking-[0.2em]">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-[#00FF9C] transition-all py-2 w-full text-center border-b border-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 mt-auto pb-10">
               <button 
                onClick={handleShare}
                className="w-full py-4 glass flex items-center justify-center gap-3 text-[#00FF9C] font-bold uppercase text-xs tracking-widest border border-[#00FF9C]/20"
              >
                <Icon name={copied ? "check" : "share"} size={18} />
                {copied ? "Copied Link!" : "Share Registry"}
              </button>
              <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-[#00FF9C]/5 border border-[#00FF9C]/10 text-[8px] font-bold text-[#00FF9C]/60 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse"></span>
                Status: System Health Optimal
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

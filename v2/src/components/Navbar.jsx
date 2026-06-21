import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = ({ setCmdOpen }) => {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = () => {
    const url = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navItems = ['home', 'about', 'experience', 'skills', 'projects'];

  return (
    <nav className="fixed top-0 w-full z-50 glass h-[var(--nav-h)] flex items-center border-b border-white/5">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 text-[#00FF9C] font-bold hover:opacity-80 transition-opacity"
          >
            <Icon name="code" size={20} />
            <span className="text-[10px] sm:text-sm tracking-tighter truncate max-w-[80px] sm:max-w-none">
              Koketso_Raphasha_Portfolio_Dev
            </span>
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[7px] sm:text-[9px] font-bold text-text-dim shrink-0">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00FF9C] animate-pulse"></span>
            <span className="whitespace-nowrap">SYSTEM HEALTH: OPTIMAL</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold text-text-dim uppercase tracking-widest">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              aria-label={`Scroll to ${item} section`}
              className="hover:text-[#00FF9C] transition-all capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={handleShare}
            className="w-10 h-10 glass hidden sm:flex items-center justify-center text-text-dim hover:text-[#00FF9C] transition-all relative rounded-lg"
            title="Share Link"
          >
            <Icon name={copied ? 'check' : 'share'} size={18} />
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => setCmdOpen && setCmdOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/50 hover:text-white hover:bg-white/10 transition-all"
            title="Open Command Palette"
          >
            <Icon name="search" size={14} />
            <span className="hidden md:inline">Search...</span>
            <kbd className="hidden md:inline bg-white/10 px-1.5 py-0.5 rounded text-[10px] ml-2">⌘K</kbd>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:flex px-6 py-2 bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-xs font-bold rounded-lg hover:bg-[#00FF9C] hover:text-[#050d12] transition-all items-center gap-2"
          >
            Hire Me <Icon name="arrowRight" size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 glass flex items-center justify-center text-[#00FF9C] rounded-lg"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop click-to-close */}
            <div 
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[95px] bg-[#050d12] border-l border-white/5 md:hidden flex flex-col items-center justify-between py-6 px-1 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button at top */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#00FF9C] rounded-lg hover:bg-white/5 active:scale-95 transition-all mb-2"
                aria-label="Close menu"
              >
                <Icon name="close" size={20} />
              </button>

              {/* Sidebar Navigation Items */}
              <div className="flex flex-col items-center gap-4.5 w-full my-auto overflow-y-auto py-2">
                {[
                  { id: 'home', label: 'HOME', icon: 'home' },
                  { id: 'about', label: 'ABOUT', icon: 'user' },
                  { id: 'skills', label: 'SKILLS', icon: 'code' },
                  { id: 'projects', label: 'PROJECTS', icon: 'package' },
                  { id: 'experience', label: 'EXPERIENCE', icon: 'briefcase' },
                  { id: 'certifications', label: 'EDUCATION', icon: 'graduationcap' },
                  { id: 'blog', label: 'BLOG', icon: 'blog' },
                  { id: 'contact', label: 'CONTACT', icon: 'mail' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'blog') {
                        setIsMobileMenuOpen(false);
                        if (setCmdOpen) setCmdOpen(true);
                      } else {
                        scrollTo(item.id);
                      }
                    }}
                    className="flex flex-col items-center gap-1.5 py-1 w-full text-center text-white/50 hover:text-[#00FF9C] active:scale-95 transition-all group"
                  >
                    <Icon name={item.icon} size={22} className="text-white/40 group-hover:text-[#00FF9C] transition-colors" />
                    <span className="text-[7.5px] font-bold tracking-widest font-mono uppercase group-hover:text-[#00FF9C] transition-colors">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Sidebar Footer: Theme Toggle & Copyright */}
              <div className="flex flex-col items-center w-full gap-4 mt-auto">
                {/* Theme Toggle Capsule */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-[10px]">
                  {/* Sun */}
                  <span className="cursor-pointer hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  </span>
                  {/* Dot/Leaf */}
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00FF9C] shadow-[0_0_8px_rgba(0,255,156,0.6)] cursor-pointer" />
                  {/* Moon */}
                  <span className="cursor-pointer hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  </span>
                </div>

                {/* Copyright */}
                <div className="text-[6.5px] text-white/30 text-center font-mono leading-tight px-1 select-none">
                  © 2024 Koketso Raphasha.<br />All rights reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

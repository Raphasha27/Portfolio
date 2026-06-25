import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = ({ setCmdOpen }) => {
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

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000814]/80 backdrop-blur-xl h-[var(--nav-h)] flex items-center border-b border-white/5">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-[#00FF9C] font-bold hover:opacity-80 transition-opacity"
        >
          <span className="text-sm sm:text-base tracking-tight">Koketso Raphasha</span>
        </button>

        <div className="hidden md:flex gap-8 text-xs font-medium text-white/60">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-[#00FF9C] transition-all capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCmdOpen && setCmdOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <Icon name="search" size={14} />
            <kbd className="hidden md:inline bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:flex px-5 py-2 bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-xs font-bold rounded-lg hover:bg-[#00FF9C] hover:text-[#000814] transition-all items-center gap-2"
          >
            Hire Me
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#00FF9C] rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-[#000814]/95 backdrop-blur-xl md:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[#00FF9C] font-bold text-sm">Koketso Raphasha</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#00FF9C] rounded-lg bg-white/5 border border-white/10"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-white/60 hover:text-[#00FF9C] transition-all py-2 w-full text-center border-b border-white/5 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto pb-10">
              <button
                onClick={() => { setIsMobileMenuOpen(false); if (setCmdOpen) setCmdOpen(true); }}
                className="w-full py-4 bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-white/60 font-medium rounded-lg"
              >
                <Icon name="search" size={18} />
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

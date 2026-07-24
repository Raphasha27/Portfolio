import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = ({ setCmdOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
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

  const navItems = ['home', 'services', 'industries', 'solutions', 'about', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000000]/80 backdrop-blur-xl h-[var(--nav-h)] flex items-center border-b border-white/5">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0"
            aria-label="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#00FF9C" strokeWidth="2.2" className="w-5 h-5 shrink-0">
              <path d="M12 2l3 3-3 3-3-3z" />
              <path d="M12 16l3 3-3 3-3-3z" />
              <path d="M2 12l3-3 3 3-3 3z" />
              <path d="M16 12l3-3 3 3-3 3z" />
            </svg>
            <span className="text-[#00FF9C] font-bold tracking-tight whitespace-nowrap block xl:hidden text-[13px]">
              KR.dev
            </span>
            <span className="text-[#00FF9C] font-bold tracking-tight whitespace-nowrap hidden xl:block text-[13px]">
              Koketso Raphasha
            </span>
          </button>

          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1a12] border border-[#00FF9C]/20 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] shadow-[0_0_6px_rgba(0,255,156,0.8)] shrink-0" />
            System Health: Optimal
          </div>
        </div>

        <div className="hidden lg:flex gap-4 xl:gap-6 text-[12px] xl:text-[13px] font-semibold text-white/70 capitalize">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-[#00FF9C] transition-all capitalize whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            title="Share"
            aria-label="Share this page"
            className="w-9 h-9 hidden sm:flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-white/50 hover:text-white hover:border-white/20 transition-all"
          >
            <Icon name={copied ? 'check' : 'share'} size={15} />
          </button>

          <button
            onClick={() => setCmdOpen && setCmdOpen(true)}
            aria-label="Open command palette"
            className="hidden sm:flex items-center justify-between gap-3 px-3 py-2 w-44 bg-[#0a0f18] border border-white/8 rounded-xl text-[12px] text-white/40 hover:border-white/20 hover:text-white/60 transition-all"
          >
            <Icon name="search" size={14} />
            <kbd className="hidden md:inline bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            aria-label="Scroll to contact section"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#001a11] border border-[#00FF9C]/30 text-[#00FF9C] text-[13px] font-bold rounded-xl hover:bg-[#002d1e] hover:border-[#00FF9C]/60 transition-all"
          >
            Get in Touch
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-[#00FF9C] rounded-xl bg-[#00FF9C]/10 border border-[#00FF9C]/40 shadow-[0_0_20px_rgba(0,255,156,0.3)] hover:bg-[#00FF9C]/20 transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] max-w-[90vw] bg-[#020d1a] border-l border-[#00FF9C]/20 shadow-[-20px_0_60px_rgba(0,0,0,0.6)] lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/40 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00FF9C" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2l3 3-3 3-3-3z" />
                    <path d="M12 16l3 3-3 3-3-3z" />
                    <path d="M2 12l3-3 3 3-3 3z" />
                    <path d="M16 12l3-3 3 3-3 3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-[13px] font-bold leading-none">Koketso Raphasha</div>
                  <div className="text-[#00FF9C] text-[10px] font-mono mt-0.5">Software Engineer & Co-Founder</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white rounded-lg bg-white/5 border border-white/10 transition-colors"
                aria-label="Close menu"
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            <div className="mx-6 mt-4 px-4 py-2.5 rounded-xl bg-[#00FF9C]/5 border border-[#00FF9C]/15 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00FF9C] shadow-[0_0_8px_rgba(0,255,156,0.8)] shrink-0 animate-pulse" />
              <span className="text-[11px] font-semibold text-[#00FF9C] uppercase tracking-wider">Operational</span>
            </div>

            <nav className="flex flex-col px-4 mt-6 gap-1">
              <div className="text-[9px] font-bold text-white/25 uppercase tracking-[0.25em] px-3 mb-2">Navigation</div>
              {navItems.map((item, i) => {
                const icons = { home: 'home', services: 'cpu', industries: 'globe', solutions: 'code', about: 'user', contact: 'mail' };
                return (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/70 hover:text-white hover:bg-[#00FF9C]/8 hover:border-[#00FF9C]/20 border border-transparent transition-all text-left group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#00FF9C]/10 flex items-center justify-center text-white/40 group-hover:text-[#00FF9C] transition-colors shrink-0">
                      <Icon name={icons[item] || 'code'} size={16} />
                    </span>
                    <span className="text-[14px] font-semibold capitalize">{item}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-40 transition-opacity">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </button>
                );
              })}
            </nav>

            <div className="px-4 mt-6">
              <div className="text-[9px] font-bold text-white/25 uppercase tracking-[0.25em] px-3 mb-3">Quick Links</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'GitHub', icon: 'github', href: 'https://github.com/Raphasha27' },
                  { label: 'LinkedIn', icon: 'linkedin', href: 'https://za.linkedin.com/in/koketso-raphasha-517954387' },
                  { label: 'Twitter', icon: 'twitter', href: 'https://twitter.com/kirovdynamics' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-white/4 border border-white/8 hover:border-[#00FF9C]/30 hover:bg-[#00FF9C]/5 transition-all"
                  >
                    <Icon name={s.icon} size={20} />
                    <span className="text-[10px] text-white/50 font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="px-4 mt-auto pb-8 pt-6 flex flex-col gap-3 border-t border-white/8">
              <button
                onClick={() => { setIsMobileMenuOpen(false); if (setCmdOpen) setCmdOpen(true); }}
                className="w-full py-3 bg-white/5 border border-white/10 flex items-center justify-center gap-2.5 text-white/60 font-medium rounded-xl hover:bg-white/8 hover:text-white transition-all text-[13px]"
              >
                <Icon name="search" size={16} />
                Search  <kbd className="ml-auto bg-white/10 px-2 py-0.5 rounded text-[10px]">Ctrl+K</kbd>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3.5 bg-[#00FF9C] text-[#000000] font-bold rounded-xl hover:bg-[#00e88e] transition-all text-[14px] shadow-[0_0_20px_rgba(0,255,156,0.25)]"
              >
                <Icon name="briefcase" size={16} className="inline mr-2" />
                Get in Touch
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
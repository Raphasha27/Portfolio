import React, { useEffect, Suspense, lazy, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import CommandPalette from './components/CommandPalette';
import TechMarquee from './components/TechMarquee';

const Terminal = lazy(() => import('./components/Terminal'));
const Experience = lazy(() => import('./components/Experience'));
const Roles = lazy(() => import('./components/Roles'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const CIStatus = lazy(() => import('./components/CIStatus'));
const Contact = lazy(() => import('./components/Contact'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ChatAssistant = lazy(() => import('./components/ChatAssistant'));
const Services = lazy(() => import('./components/Services'));
const HireMe = lazy(() => import('./components/HireMe'));
const Map = lazy(() => import('./components/Map'));

function App() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#000814] text-[#e0f2f1] min-h-screen selection:bg-emerald-500/20 selection:text-emerald-200 relative overflow-x-hidden">
      {/* Subtle ambient gradient background */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(0, 255, 156, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)'
        }} />
      </div>

      <CustomCursor />
      <Navbar setCmdOpen={setCmdOpen} />

      <main className="pb-16 sm:pb-24 relative z-10">
        <ErrorBoundary>
          <section>
            <Hero />
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.section>
        </ErrorBoundary>

        <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" /></div>}>
          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative py-16 sm:py-24 overflow-hidden"
            >
              <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 flex flex-col gap-16 sm:gap-24">
                <TechMarquee />
                <Roles />
              </div>
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Certifications />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
            >
              <Services />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
            >
              <Projects />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-24"
            >
              <CIStatus />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
              <Terminal />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Map />
            </motion.div>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Testimonials />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <HireMe />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Contact />
            </motion.section>
          </ErrorBoundary>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#000814]/80 backdrop-blur-xl overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#00FF9C] font-bold">
                <span className="text-sm tracking-tighter">Koketso Raphasha</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">
                Software Engineer building the future from Johannesburg, SA.
              </p>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#00FF9C]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                Available for opportunities
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Quick Nav</div>
              <div className="grid grid-cols-2 gap-1">
                {['home','about','experience','skills','projects','contact'].map(s => (
                  <button
                    key={s}
                    onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-left text-xs text-white/50 hover:text-[#00FF9C] transition-colors capitalize py-1 font-mono"
                  >
                    ./{s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Connect</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'GitHub',   href: 'https://github.com/raphasha27',             icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/koketso-raphasha', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'Twitter',  href: 'https://twitter.com/raphasha27',            icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'Email',    href: 'mailto:raphashakoketso99@gmail.com',        icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-[#00FF9C] hover:border-[#00FF9C]/30 transition-all border border-white/5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-[10px] font-mono text-white/20">
              &copy; {new Date().getFullYear()} <span className="text-[#00FF9C]/60">Koketso Raphasha</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
              <span>Built with</span>
              <span className="text-[#00FF9C]/60">React + Vite + Framer Motion</span>
            </div>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <ErrorBoundary>
          <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChatAssistant />
        </ErrorBoundary>
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-50 active:scale-95 border border-[#00FF9C]/40 bg-[#00FF9C]/10 text-[#00FF9C] shadow-[0_0_20px_rgba(0,255,156,0.3)] hover:shadow-[0_0_30px_rgba(0,255,156,0.5)] hover:bg-[#00FF9C]/20 transition-all"
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;

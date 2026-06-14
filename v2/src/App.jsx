import React, { useEffect, Suspense, lazy, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import cyberBg from './assets/cyber-bg.png';
import CommandPalette from './components/CommandPalette';

const Terminal = lazy(() => import('./components/Terminal'));
const Experience = lazy(() => import('./components/Experience'));
const Roles = lazy(() => import('./components/Roles'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
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
  }, []);

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-[#050d12] text-[#e0f2f1] min-h-screen selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[0] opacity-[0.15] bg-center bg-cover bg-no-repeat" 
        style={{ backgroundImage: `url(${cyberBg})`, y: bgY }} 
      />
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <CustomCursor />
      <Navbar setCmdOpen={setCmdOpen} />

      <main className="pb-16 sm:pb-24 relative z-10">
        <section>
          <Hero />
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" /></div>}>
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <Experience />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="relative py-16 sm:py-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-transparent">
              <div className="absolute inset-0 opacity-20" 
                   style={{ 
                     backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                                       radial-gradient(circle at 80% 70%, rgba(0, 86, 210, 0.15) 0%, transparent 50%)` 
                   }} />
              <div className="absolute inset-0 opacity-10" 
                   style={{ 
                     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                       linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                   }} />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 flex flex-col gap-16 sm:gap-24">
              <Skills />
              <Roles />
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <Certifications />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
          >
            <Services />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
          >
            <Projects />
          </motion.section>

          <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
            <Terminal />
          </section>

          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <Map />
          </motion.div>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <Testimonials />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <HireMe />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
        <ChatAssistant />
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-blue-400 z-50 hover:bg-blue-500/20 transition-all border border-blue-500/30 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;

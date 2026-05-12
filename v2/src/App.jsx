import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Roles from './components/Roles';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

import Services from './components/Services';
import Map from './components/Map';

function App() {
  return (
    <div className="bg-[#050d12] text-[#e0f2f1] min-h-screen selection:bg-blue-500/30 selection:text-blue-200 cursor-none relative">
      {/* Global Grain Overlay for Cinematic Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <CustomCursor />
      <Navbar />
      <main className="pb-24 relative z-10">
        {/* Section 1: Hero — full page, no container */}
        <section>
          <Hero />
        </section>

        {/* Section 2: About Me — full page */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Section 3: Tech Arsenal & Roles — Cinematic Dark Background */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#050d12]">
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

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-24">
            <Skills />
            <Roles />
          </div>
        </motion.section>

        {/* Section 4: What I Do (Services) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 py-24"
        >
          <Services />
        </motion.section>

        {/* Section 5: Work History */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 py-24"
        >
          <Experience />
        </motion.section>

        {/* Section 5: Projects */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 py-24"
        >
          <Projects />
        </motion.section>

        {/* Section 5.5: Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
        >
          <Map />
        </motion.div>

        {/* Section 6: Contact Footer */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 py-24"
        >
          <Contact />
        </motion.section>
      </main>

      <ChatAssistant />
      
      {/* Back to Top Button */}
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
          className="fixed bottom-8 left-8 w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 z-50 hover:bg-blue-500/20 transition-all border border-blue-500/30"
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

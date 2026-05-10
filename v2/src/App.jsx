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

import Services from './components/Services';
import Map from './components/Map';

function App() {
  return (
    <div className="bg-[#050d12] text-[#e0f2f1] min-h-screen selection:bg-green-500/30 selection:text-green-200">
      <Navbar />
      <main className="pb-24">
        {/* Section 1: Hero — full page, no container */}
        <section>
          <Hero />
        </section>

        {/* Section 2: About Me — full page */}
        <section>
          <About />
        </section>

        {/* Section 3: Tech Arsenal & Roles — Cinematic Dark Background */}
        <section className="relative py-24 overflow-hidden">
          {/* Nocturnal Cityscape Overlay (Simulated) */}
          <div className="absolute inset-0 bg-[#050d12]">
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0, 201, 136, 0.15) 0%, transparent 50%), 
                                     radial-gradient(circle at 80% 70%, rgba(0, 86, 210, 0.15) 0%, transparent 50%)` 
                 }} />
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                     linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                   backgroundSize: '40px 40px'
                 }} />
            {/* Cinematic Bottom Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050d12] to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12">
            <Skills />
            <Roles />
          </div>
        </section>

        {/* Section 4: What I Do (Services) */}
        <section className="container mx-auto px-6 lg:px-12 py-24">
          <Services />
        </section>

        {/* Section 5: Work History */}
        <section className="container mx-auto px-6 lg:px-12 py-24">
          <Experience />
        </section>

        {/* Section 5: Projects */}
        <section className="container mx-auto px-6 lg:px-12 py-24">
          <Projects />
        </section>

        {/* Section 5.5: Location Map */}
        <Map />

        {/* Section 6: Contact Footer */}
        <section className="container mx-auto px-6 lg:px-12 py-24">
          <Contact />
        </section>
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
          className="fixed bottom-8 left-8 w-12 h-12 glass rounded-full flex items-center justify-center text-green-400 z-50 hover:bg-green-500/20 transition-all border border-green-500/30"
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

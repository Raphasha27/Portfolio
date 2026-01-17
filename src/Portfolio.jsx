import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Associates from './components/Associates';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Scan } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScanModal, setShowScanModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const scrollPosition = window.scrollY;
          const elementTop = element.offsetTop - 100;
          const elementBottom = elementTop + element.offsetHeight;
          
          return scrollPosition >= elementTop && scrollPosition < elementBottom;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#010409] text-white' 
        : 'bg-white text-slate-900'
    }`}>
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        onScanClick={() => setShowScanModal(true)} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero 
          scrollToSection={scrollToSection} 
          onScanClick={() => setShowScanModal(true)} 
          isDarkMode={isDarkMode}
        />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Associates isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
      <Chatbot />

      {/* Scan ID Modal */}
      <AnimatePresence>
        {showScanModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowScanModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-green-500/30 max-w-sm w-full relative shadow-2xl shadow-green-500/20 max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowScanModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="inline-flex relative mb-6">
                   <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse"></div>
                   <div className="w-48 h-48 bg-white p-4 rounded-2xl relative z-10">
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://koketso-portfolio-premium.vercel.app" alt="Portfolio QR" className="w-full h-full" />
                   </div>
                   {/* Scanning Line Animation */}
                   <motion.div 
                     animate={{ top: ['0%', '100%', '0%'] }}
                     transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                     className="absolute left-0 w-full h-0.5 bg-green-500 z-20 shadow-[0_0_15px_rgba(34,197,94,1)]"
                   ></motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Scan Digital ID</h3>
                <p className="text-slate-400 text-sm mb-6">Scan to verify credentials or save contact to your device.</p>
                
                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-300 font-medium tracking-wide">VERIFIED DEVELOPER</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;

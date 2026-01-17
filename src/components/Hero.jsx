import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Github, Linkedin, Mail, Briefcase, Code, MessageCircle } from 'lucide-react';
import LiveInfoCards from './LiveInfoCards';
import profileImg from '../assets/profile.png';

const Hero = ({ scrollToSection, onScanClick, isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-blue-500/10 rounded-full mb-6">
              <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Available for Hire</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm <span className="text-blue-500">Koketso</span> <br />
              <span className="text-3xl md:text-5xl opacity-80">Software Developer</span>
            </motion.h1>
            <motion.p variants={itemVariants} className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I build intelligent, high-performance web and mobile solutions. Specialized in React, AI integration, and creating seamless digital experiences that drive growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2 group"
              >
                Let's Talk <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`px-8 py-4 border rounded-2xl font-bold transition-all flex items-center gap-2 ${
                isDarkMode 
                  ? 'border-white/10 hover:bg-white/5 text-white' 
                  : 'border-slate-200 hover:bg-slate-50 text-slate-900'
              }`}>
                <Download className="w-5 h-5" /> Resume
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { Icon: Github, href: "https://github.com/Raphasha27" },
                { Icon: Linkedin, href: "https://linkedin.com/in/koketso-raphasha" },
                { Icon: Mail, href: "mailto:contact@koketso.dev" },
                { Icon: MessageCircle, href: "https://wa.me/27781172470", color: "group-hover:text-green-400" }
              ].map(({ Icon, href, color }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 backdrop-blur-xl border rounded-xl flex items-center justify-center transition-all group ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${color || (isDarkMode ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900')}`} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 relative z-10 shadow-2xl bg-white"
              >
                <img 
                  src={profileImg} 
                  alt="Koketso Raphasha"
                  className="w-full h-full object-contain relative z-20 transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating Cards with Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute bottom-8 -right-8 md:-right-12 backdrop-blur-md border px-5 py-3 rounded-2xl shadow-2xl z-20 ${
                  isDarkMode ? 'bg-slate-950/40 border-white/10' : 'bg-white/80 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                    <Briefcase className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Experience</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3+ Years</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-8 -left-8 md:-left-12 backdrop-blur-md border px-5 py-3 rounded-2xl shadow-2xl z-20 ${
                  isDarkMode ? 'bg-slate-950/40 border-white/10' : 'bg-white/80 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-green-500/10' : 'bg-green-50'}`}>
                    <Code className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Projects</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>20+ Done</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Live Info Cards Section */}
        <div className="flex justify-center mt-12 w-full">
          <LiveInfoCards isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

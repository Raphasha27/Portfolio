import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Github, Linkedin, Mail, Briefcase, Code } from 'lucide-react';
import LiveInfoCards from './LiveInfoCards';
import profileImg from '../assets/profile.png';

const Hero = ({ scrollToSection, onScanClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center relative z-10 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 backdrop-blur-xl bg-blue-500/10 rounded-full border border-blue-500/20 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Available for opportunities</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Koketso Raphasha
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-slate-300 mb-6 font-semibold">
              Software Developer & AI Specialist
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              Building intelligent, scalable systems with cutting-edge AI. Transforming complex challenges into elegant, high-performance solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 font-medium text-white backdrop-blur-xl"
              >
                Get In Touch <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onScanClick}
                className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 font-medium text-white"
              >
                <Download className="w-5 h-5" /> Scan Digital ID
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/Raphasha27" },
                { Icon: Linkedin, href: "https://linkedin.com/in/koketso-raphasha" },
                { Icon: Mail, href: "mailto:contact@koketso.dev" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 transition-all group">
                  <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          <div className="flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-xl relative z-10 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Koketso Raphasha"
                  className="w-full h-full object-contain relative z-20 transition-transform duration-700 hover:scale-105"
                  style={{ backgroundColor: '#bbcfd6' }}
                />
              </div>
              {/* Floating Cards with Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Experience</p>
                    <p className="font-bold text-white">3+ Years</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Code className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Projects</p>
                    <p className="font-bold text-white">20+ Done</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Live Info Cards Section */}
        <div className="flex justify-center mt-12">
          <LiveInfoCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import MobileScan from './MobileScan';
import gautengMap from '../assets/gauteng-map.png';

const Contact = () => {
  return (
    <div id="contact" className="pt-24 border-t border-white/5 space-y-16 bg-[#050d12] relative overflow-hidden">
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header with Wide Typography and Status Pill */}
        <div className="flex justify-between items-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.8em] uppercase font-mono text-white leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Initialize <span className="text-blue-400">Contact</span>
            </h2>
            <div className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.5em] font-black opacity-60">Communication Protocol 7.4</div>
          </div>
          <div className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em]">Link: Ready</span>
          </div>
        </div>

        <div className="glass p-8 md:p-10 rounded-[40px] relative overflow-hidden text-center md:text-left border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid-lines"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Build Something <br /><span className="text-blue-400 glow-text">Extraordinary</span></h2>
            <p className="text-text-dim text-lg max-w-md leading-relaxed mb-8">
              Have a project in mind? Let's work together to bring your digital visions to life with precision and style.
            </p>

            {/* Pretoria Location Card */}
            <div className="glass p-6 rounded-3xl border border-white/5 inline-flex items-center gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <img src={gautengMap} alt="Pretoria Map" className="w-full h-full object-cover scale-150 grayscale" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                <Icon name="globe" size={24} />
              </div>
              <div className="relative z-10 text-left">
                <div className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-1">Current Coordinates</div>
                <div className="text-sm font-bold text-white tracking-tight">Pretoria, Gauteng</div>
                <div className="text-[10px] text-text-dim font-medium uppercase tracking-wider">South Africa · SAST (UTC+2)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-12 flex-shrink-0">
            <MobileScan />
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <a href="mailto:raphashakoketso99@gmail.com" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-bg font-bold rounded-2xl transition-all flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] group">
                Get In Touch <Icon name="arrowRight" size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="grid grid-cols-5 gap-3 justify-items-end">
                {[
                  { icon: "github", link: "https://github.com/raphasha27" },
                  { icon: "linkedin", link: "https://linkedin.com/in/koketso-raphasha" },
                  { icon: "twitter", link: "https://twitter.com/raphasha27" },
                  { icon: "slack", link: "https://slack.com/Raphasha27" },
                  { icon: "kaggle", link: "https://kaggle.com/Raphasha27" },
                  { icon: "streamlit", link: "https://share.streamlit.io/user/raphasha27" },
                  { icon: "whop", link: "https://whop.com/kirovdynamicstechnology/" },
                  { icon: "whatsapp", link: "https://wa.me/27793444002" },
                  { icon: "mail", link: "mailto:raphashakoketso99@gmail.com" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110 group shadow-lg"
                  >
                    <Icon name={social.icon} size={24} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="overflow-hidden border-y border-white/5 py-4 bg-white/[0.02]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap items-center text-[10px] text-text-dim font-bold uppercase tracking-[0.3em] opacity-50 w-max"
        >
          {Array(3).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 text-blue-400">
                <Icon name="code" size={16} />
                <span>Portfolio_Koketso_Raphasha27.Dev</span>
              </div>
              <div className="flex gap-8">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </div>
              <div>© 2025 Kirov Dynamics · All Rights Reserved</div>
              <div className="w-2 h-2 rounded-full bg-blue-500/30" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

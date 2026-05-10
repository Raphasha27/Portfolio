import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const Contact = () => {
  return (
    <div id="contact" className="pt-24 border-t border-white/5 space-y-16">
      <div className="glass p-12 md:p-20 rounded-[40px] relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid-lines"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Build Something <br /><span className="text-green-400 glow-text">Extraordinary</span></h2>
            <p className="text-text-dim text-lg max-w-md leading-relaxed mb-8">
              Have a project in mind? Let's work together to bring your digital visions to life with precision and style.
            </p>

            {/* Pretoria Location Card */}
            <div className="glass p-6 rounded-3xl border border-white/5 inline-flex items-center gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <img src="/src/assets/gauteng-map.png" alt="Pretoria Map" className="w-full h-full object-cover scale-150 grayscale" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 relative z-10 shadow-[0_0_15px_rgba(0,201,136,0.1)]">
                <Icon name="globe" size={24} />
              </div>
              <div className="relative z-10 text-left">
                <div className="text-[8px] font-bold text-green-400 uppercase tracking-[0.3em] mb-1">Current Coordinates</div>
                <div className="text-sm font-bold text-white tracking-tight">Pretoria, Gauteng</div>
                <div className="text-[10px] text-text-dim font-medium uppercase tracking-wider">South Africa · SAST (UTC+2)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8 flex-shrink-0">
            <a href="mailto:raphashakoketso99@gmail.com" className="px-10 py-5 bg-green-500 hover:bg-green-400 text-bg font-bold rounded-2xl transition-all flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(0,201,136,0.3)] group">
              Get In Touch <Icon name="arrowRight" size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            
            <div className="flex gap-6">
              {[
                { icon: "github", link: "https://github.com/raphasha27" },
                { icon: "linkedin", link: "https://linkedin.com/in/koketso-raphasha" },
                { icon: "twitter", link: "https://twitter.com/raphasha27" },
                { icon: "mail", link: "mailto:raphashakoketso99@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-text-dim hover:text-green-400 hover:border-green-500/50 transition-all">
                  <Icon name={social.icon} size={24} />
                </a>
              ))}
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
              <div className="flex items-center gap-2 text-green-400">
                <Icon name="code" size={16} />
                <span>Portfolio_Koketso_Raphasha27.Dev</span>
              </div>
              <div className="flex gap-8">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </div>
              <div>© 2024 Kirov Dynamics · All Rights Reserved</div>
              <div className="w-2 h-2 rounded-full bg-green-500/30" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

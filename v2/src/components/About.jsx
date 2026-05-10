import React from 'react';
import { motion } from 'framer-motion';
import gautengMap from '../assets/gauteng-map.png';
import richfieldLogo from '../assets/richfield-logo.png';
import profileImg from '../assets/profile_transparent.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import { Icon } from './Icons';

const About = () => {
  return (
    <div id="about" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Map overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: `url(${gautengMap})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-0 items-center">

        {/* LEFT — Profile Image (Cinematic Cutout) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] -mt-10 lg:-mt-20">
            {/* Ambient Backglow */}
            <div className="absolute inset-10 rounded-full bg-green-500/20 blur-[80px] animate-pulse" />
            
            {/* The Cutout Image */}
            <div className="relative w-full h-full z-10">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              />
              
              {/* Dynamic Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent opacity-40" />
            </div>

            {/* Orbital Ring Element */}
            <div className="absolute inset-4 rounded-full border border-green-500/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-10 rounded-full border border-blue-500/5 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

            {/* Floating badge — top left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-8 glass px-4 py-3 rounded-2xl border border-green-500/30 z-20 shadow-xl"
            >
              <div className="text-[8px] font-bold text-green-400 uppercase tracking-widest mb-1">Status</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold">Open to Work</span>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-16 -right-4 glass px-4 py-3 rounded-2xl border border-blue-500/30 z-20 shadow-xl"
            >
              <div className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">Based In</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">South Africa</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 py-24"
        >
          <div>
            <div className="text-green-400 font-bold text-xs tracking-[0.3em] uppercase mb-4">— WHO I AM —</div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building the <br /><span className="text-green-400">Future</span> with Code
            </h2>
            <p className="text-text-dim text-lg leading-relaxed max-w-xl">
              Passionate about designing and building <span className="text-white font-semibold">intelligent</span>,{' '}
              <span className="text-white font-semibold">scalable</span>, and{' '}
              <span className="text-green-400 font-semibold">user-focused</span> digital solutions.
              My work blends clean architecture with exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '20+', label: 'Projects' },
              { value: '100%', label: 'Dedication' },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 text-center rounded-2xl border border-white/5">
                <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { text: 'Mobile & UI/UX Specialist', icon: 'smartphone' },
              { text: 'Autonomous Systems', icon: 'cpu' },
              { text: 'High-Performance Apps', icon: 'rocket' },
              { text: 'Clean Architecture', icon: 'code' },
            ].map((item, i) => (
              <div key={i} className="glass flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group overflow-visible">
                <div className="w-12 h-12 rounded-xl bg-[#0a161d] flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,201,136,0.1)] border border-white/5 shrink-0">
                  <Icon name={item.icon} size={28} className="overflow-visible" />
                </div>
                <span className="text-[11px] font-bold tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>

                  {/* Academic & Institutional Credentials — Expanded Grid */}
          <div className="pt-12 border-t border-white/5 space-y-8">
            <div className="text-[10px] text-green-400 font-bold uppercase tracking-[0.4em] opacity-60 mb-8 text-center lg:text-left">Certification & Institutional Partners</div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 items-start">
              {/* Richfield */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5 overflow-hidden">
                  <img src={richfieldLogo} alt="Richfield" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Richfield</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">BSc CS</div>
                </div>
              </div>

              {/* WeThinkCode */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#0a161d] flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,201,136,0.05)] border border-white/5 overflow-hidden">
                  <img src={wethinkcodeLogo} alt="WeThinkCode_" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">WeThinkCode_</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Software Eng</div>
                </div>
              </div>

              {/* CAPACITI */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center p-2 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 overflow-hidden">
                  <img src={capacitiLogo} alt="CAPACITI" className="w-full h-auto" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">CAPACITI</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Accelerator</div>
                </div>
              </div>

              {/* Cisco */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#00bceb]/10 flex items-center justify-center p-3 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,188,235,0.1)] border border-[#00bceb]/20 overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-[#00bceb]">
                    <path d="M11.232 5.105v13.79h1.536V5.105h-1.536zm-3.07 1.534v10.723h1.536V6.639H8.162zm6.14 0v10.723h1.536V6.639h-1.536zM5.093 9.706v4.588h1.536V9.706H5.093zm12.278 0v4.588h1.536V9.706h-1.536zM2.022 11.24v1.535h1.536v-1.535H2.022zm18.42 0v1.535h1.536v-1.535h-1.536z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Cisco</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Networking</div>
                </div>
              </div>

              {/* Coursera */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#0056D2]/10 flex items-center justify-center p-3 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,86,210,0.1)] border border-[#0056D2]/20 overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0056D2]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.17 0 2.23.41 3.08 1.08l-1.65 1.65C12.95 9.29 12.5 9 12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.5 0 .95-.29 1.43-.73l1.65 1.65C14.23 16.59 13.17 17 12 17z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Coursera</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Specialized</div>
                </div>
              </div>

              {/* Google */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center p-3 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5 overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Google</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Data & AI</div>
                </div>
              </div>

              {/* IBM */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#006699]/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,102,153,0.1)] border border-[#006699]/20 overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-[#006699]">
                    <path d="M1 4h22v2H1V4zm0 4h22v1H1V8zm0 3h22v1H1v-1zm0 3h22v1H1v-1zm0 3h22v2H1v-2z" />
                    <text x="12" y="14" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor" className="select-none">IBM</text>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">IBM</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

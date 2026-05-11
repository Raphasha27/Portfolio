import React from 'react';
import { motion } from 'framer-motion';
import gautengMap from '../assets/gauteng-map.png';
import richfieldLogo from '../assets/richfield-logo.png';
import profileImg from '../assets/koketso_transparent.png';
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
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#00bceb]/10 flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,188,235,0.1)] border border-[#00bceb]/20 overflow-hidden">
                  <Icon name="cisco" size={32} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Cisco</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Networking</div>
                </div>
              </div>

              {/* Coursera */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#0056D2]/10 flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,86,210,0.1)] border border-[#0056D2]/20 overflow-hidden">
                  <Icon name="coursera" size={32} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Coursera</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Specialized</div>
                </div>
              </div>

              {/* Google */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5 overflow-hidden">
                  <Icon name="google" size={32} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[9px] tracking-tight">Google</div>
                  <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">Data & AI</div>
                </div>
              </div>

              {/* IBM */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#006699]/10 flex items-center justify-center p-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,102,153,0.1)] border border-[#006699]/20 overflow-hidden">
                  <Icon name="ibm" size={32} />
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

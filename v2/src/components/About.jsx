import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import gautengMap from '../assets/gauteng-map.png';
import richfieldLogo from '../assets/richfield-logo.png';
import profileImg from '../assets/koketso_transparent.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import yesLogo from '../assets/yes-logo.png';
import { Icon } from './Icons';

const CountUp = ({ to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // Small delay to ensure the component is fully visible
      const timeout = setTimeout(() => {
        count.set(to);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

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

        {/* LEFT — Profile Image (REVERTED BACK) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-80 h-80 lg:w-[480px] lg:h-[480px] -mt-10 lg:-mt-20">
            {/* Main Glowing Border */}
            <div className="absolute inset-0 rounded-full border-2 border-green-500/30 shadow-[0_0_50px_rgba(0,229,160,0.2)] z-0" />
            <div className="absolute inset-[10px] rounded-full border border-white/10 z-0" />
            
            {/* Ambient Backglow */}
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-[100px] animate-pulse" />
            
            {/* The Image Container */}
            <div className="absolute inset-[15px] rounded-full overflow-hidden bg-[#050d12]/50 backdrop-blur-sm z-10">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.05) contrast(1.05)' }}
              />
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] pointer-events-none" />
            </div>

            {/* Orbital Rings */}
            <div className="absolute -inset-4 rounded-full border border-green-500/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-blue-500/5 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

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
          className="space-y-8"
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
              { value: 10, suffix: '+', label: 'Certifications' },
              { value: 4, suffix: '+', label: 'Ecosystems' },
              { value: 100, suffix: '%', label: 'Quality' },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 text-center rounded-2xl border border-white/5 group hover:border-green-500/30 transition-colors">
                <div className="text-2xl font-bold text-green-400">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Institutional Partners */}
          <div className="pt-12 border-t border-white/5 space-y-8">
            <div className="text-[10px] text-green-400 font-bold uppercase tracking-[0.4em] opacity-60 mb-8 text-center lg:text-left">Certification & Institutional Partners</div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 items-start">
              {[
                { name: "Richfield", sub: "BSc CS", logo: richfieldLogo, color: "bg-white" },
                { name: "WeThinkCode_", sub: "Software Eng", logo: wethinkcodeLogo, color: "bg-[#0a161d]" },
                { name: "CAPACITI", sub: "Accelerator", logo: capacitiLogo, color: "bg-white", p: "p-1" },
                { name: "YES", sub: "Youth Service", logo: yesLogo, color: "bg-white", p: "p-0.5" },
                { name: "Cisco", sub: "Networking", icon: "cisco", color: "bg-[#00bceb]/10" },
                { name: "Coursera", sub: "Specialized", icon: "coursera", color: "bg-[#0056D2]/10" },
                { name: "Google", sub: "Data & AI", icon: "google", color: "bg-white" },
                { name: "IBM", sub: "Enterprise", icon: "ibm", color: "bg-[#006699]/10" },
              ].map((partner, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center ${partner.color} group-hover:scale-110 transition-transform shadow-lg border border-white/5 overflow-hidden p-0`}>
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    ) : (
                      <Icon name={partner.icon} size={32} />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[9px] tracking-tight">{partner.name}</div>
                    <div className="text-[7px] text-text-dim uppercase tracking-wider leading-tight">{partner.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

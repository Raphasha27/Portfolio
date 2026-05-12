import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import richfieldLogo from '../assets/richfield-logo.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import yesLogo from '../assets/yes-badge.png';
import ciscoLogo from '../assets/cisco-logo.svg';
import courseraLogo from '../assets/coursera-logo.svg';
import googleLogo from '../assets/google-logo.svg';
import ibmLogo from '../assets/ibm-logo.svg';

const partners = [
  { name: "Richfield", sub: "BSc Computer Science · Distinction", logo: richfieldLogo, bg: "bg-[#004a99]" },
  { name: "WeThinkCode_", sub: "Software Engineering", logo: wethinkcodeLogo, bg: "bg-white" },
  { name: "CAPACITI", sub: "Digital Skills Accelerator", logo: capacitiLogo, bg: "bg-white" },
  { name: "YES Programme", sub: "Youth Employment Service", logo: yesLogo, bg: "bg-white" },
  { name: "Cisco",       sub: "Networking & Security",       logo: ciscoLogo,    bg: "bg-white" },
  { name: "Coursera",    sub: "Specialized Certifications",   logo: courseraLogo, bg: "bg-white" },
  { name: "Google",      sub: "Data & AI Certification",     logo: googleLogo,   bg: "bg-white" },
  { name: "IBM",         sub: "Enterprise Technology",       logo: ibmLogo,      bg: "bg-white" },
];

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = React.useMemo(() => {
    // We'll use a simple intersection observer if we want to be clean, 
    // but framer-motion's useInView is better.
    return true; // placeholder for the logic below
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        let start = 0;
        const increment = to / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= to) {
            setCount(to);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
      }}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};

const About = () => {
  return (
    <div id="about" className="py-32 relative overflow-hidden bg-[#050d12]">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-20"
        >
          {/* — Section Header — */}
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <div className="text-blue-400 font-bold text-xs tracking-[0.4em] uppercase">— WHO I AM —</div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building the <span className="text-blue-400">Future</span><br className="hidden lg:block" /> with Code
              </h2>
              <p className="text-text-dim text-lg leading-relaxed max-w-2xl">
                Passionate about designing and building{" "}
                <span className="text-white font-semibold">intelligent</span>,{" "}
                <span className="text-white font-semibold">scalable</span>, and{" "}
                <span className="text-blue-400 font-semibold">user-focused</span> digital solutions.
                My work blends clean architecture with exceptional user experiences.
              </p>
            </div>
            <div className="hidden lg:flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 items-center gap-2 shrink-0">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em]">Profile: Verified</span>
            </div>
          </div>

          {/* — Stats Grid — */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 3,   suffix: '+', label: 'Years Experience', icon: 'activity' },
              { value: 10,  suffix: '+', label: 'Certifications',   icon: 'graduationcap' },
              { value: 4,   suffix: '+', label: 'Tech Ecosystems',  icon: 'cpu' },
              { value: 100, suffix: '%', label: 'Delivery Quality', icon: 'shield' },
            ].map((stat, i) => (
              <div key={i} className="glass p-8 text-center rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="text-blue-400 mb-3 flex justify-center drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  <Icon name={stat.icon} size={28} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-[11px] text-text-dim uppercase tracking-[0.2em] font-mono group-hover:text-blue-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* — Certification & Partner Logos — */}
          <div className="space-y-10 pt-8 border-t border-white/5">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[11px] text-blue-400 font-bold uppercase tracking-[0.4em] mb-1">Certification & Institutional Partners</div>
                <div className="text-white/30 text-[10px] font-mono uppercase tracking-widest">8 Accredited Institutions & Platforms</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {partners.map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative"
                >
                  <div className="glass rounded-2xl border border-white/8 hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] overflow-hidden">
                    {/* Logo Display Area */}
                    <div className={`h-32 flex items-center justify-center p-5 ${partner.bg || 'bg-white/5'} relative`}>
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain select-none pointer-events-none"
                          style={{ maxWidth: '85%', maxHeight: '85%' }}
                        />
                      ) : partner.badge ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-4xl font-black text-blue-400 tracking-widest drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">{partner.badge}</div>
                          <div className="text-[8px] font-mono text-blue-400/60 uppercase tracking-[0.3em]">Programme</div>
                        </div>
                      ) : (
                        <div className="w-20 h-20 flex items-center justify-center">
                          <Icon name={partner.icon} size={64} />
                        </div>
                      )}
                      {/* Hover neon border top */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover:via-blue-400/60 transition-all duration-700"></div>
                    </div>
                    {/* Label Area */}
                    <div className="p-4 bg-[#080f15] border-t border-white/5">
                      <div className="text-[11px] font-bold text-white uppercase tracking-wide">{partner.name}</div>
                      <div className="text-[9px] text-blue-400/70 font-mono uppercase tracking-widest mt-1">{partner.sub}</div>
                    </div>
                  </div>
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-400/0 group-hover:border-blue-400/60 transition-all duration-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-400/0 group-hover:border-blue-400/60 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

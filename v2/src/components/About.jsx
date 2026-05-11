import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import richfieldLogo from '../assets/richfield-logo.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import yesLogo from '../assets/yes-logo.png';

const partners = [
  { name: "Richfield", sub: "BSc CS", logo: richfieldLogo },
  { name: "WeThinkCode_", sub: "Software Eng", logo: wethinkcodeLogo },
  { name: "CAPACITI", sub: "Accelerator", logo: capacitiLogo },
  { name: "YES", sub: "Youth Service", logo: yesLogo },
  { name: "Cisco", sub: "Networking", icon: "cisco" },
  { name: "Coursera", sub: "Specialized", icon: "coursera" },
  { name: "Google", sub: "Data & AI", icon: "google" },
  { name: "IBM", sub: "Enterprise", icon: "ibm" }
];

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
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
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}</span>;
};

const About = () => {
  return (
    <div id="about" className="py-24 relative overflow-hidden bg-[#050d12]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-16"
        >
          <div className="text-center lg:text-left">
            <div className="text-green-400 font-bold text-xs tracking-[0.3em] uppercase mb-4">— WHO I AM —</div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Building the <span className="text-green-400">Future</span> <br className="hidden lg:block" /> with Code
            </h2>
            <p className="text-text-dim text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about designing and building <span className="text-white font-semibold">intelligent</span>, 
              <span className="text-white font-semibold"> scalable</span>, and 
              <span className="text-green-400 font-semibold"> user-focused</span> digital solutions. 
              My work blends clean architecture with exceptional user experiences.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 3, suffix: '+', label: 'Years Exp.', icon: 'rocket' },
              { value: 10, suffix: '+', label: 'Certifications', icon: 'graduationcap' },
              { value: 4, suffix: '+', label: 'Ecosystems', icon: 'cloud' },
              { value: 100, suffix: '%', label: 'Quality', icon: 'check' },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 text-center rounded-3xl border border-white/5 group hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,160,0.1)]">
                <div className="text-green-400 mb-2 flex justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                   <Icon name={stat.icon} size={20} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] text-text-dim uppercase tracking-[0.2em] font-mono group-hover:text-green-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Institutional Partners Section (Cyber-Pill Style) */}
          <div className="pt-16 border-t border-white/5 space-y-12">
            <div className="text-[10px] text-green-400 font-bold uppercase tracking-[0.4em] opacity-60 text-center lg:text-left">Certification & Institutional Partners</div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-start">
              {partners.map((partner, i) => (
                <div key={i} className="group relative flex flex-col items-center">
                  {/* Cyber-Pill Container */}
                  <div className="w-16 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-3 relative group-hover:border-green-500/50 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,229,160,0.15)]">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain select-none pointer-events-none transition-all duration-500 brightness-[0.8] group-hover:brightness-110"
                      />
                    ) : (
                      <div className="text-green-400/80 group-hover:text-green-400 transition-colors">
                        <Icon name={partner.icon} size={32} />
                      </div>
                    )}
                    {/* Outer Corner Accents */}
                    <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t border-l border-green-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b border-r border-green-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-[9px] font-bold text-white opacity-30 group-hover:opacity-100 group-hover:text-green-400 transition-all duration-300 uppercase tracking-tight">{partner.name}</div>
                    <div className="text-[7px] text-text-dim uppercase tracking-[0.2em] font-mono mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500">{partner.sub}</div>
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

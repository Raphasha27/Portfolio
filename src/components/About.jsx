import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import richfieldLogo from '../assets/richfield-logo-new.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import yesLogo from '../assets/yes-badge.png';
import ciscoLogo from '../assets/cisco-logo.svg';
import courseraLogo from '../assets/coursera-logo.svg';
import googleLogo from '../assets/google-logo.svg';
import ibmLogo from '../assets/ibm-logo.svg';
import kirovLogo from '../assets/kirov-logo.png';

const partners = [
  { name: "Richfield", sub: "BSc CS · Distinction", logo: richfieldLogo, bg: "bg-[#003087]" },
  { name: "Kirov Dynamics", sub: "Co-Founder & CTO", logo: kirovLogo, bg: "bg-white" },
  { name: "WeThinkCode_", sub: "Software Engineering", logo: wethinkcodeLogo, bg: "bg-white" },
  { name: "CAPACITI", sub: "Digital Skills Accelerator", logo: capacitiLogo, bg: "bg-white" },
  { name: "YES Programme", sub: "Youth Employment Service", logo: yesLogo, bg: "bg-white" },
  { name: "Cisco", sub: "Networking & Security", logo: ciscoLogo, bg: "bg-white" },
  { name: "Coursera", sub: "Certifications", logo: courseraLogo, bg: "bg-white" },
  { name: "Google", sub: "Data & AI Cert.", logo: googleLogo, bg: "bg-white" },
  { name: "IBM", sub: "Enterprise Tech.", logo: ibmLogo, bg: "bg-white" },
];

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        let start = 0;
        const increment = to / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= to) { setCount(to); clearInterval(timer); }
          else setCount(Math.floor(start));
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
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-20"
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div className="space-y-3">
              <div className="text-[#00FF9C] font-bold text-xs tracking-[0.1em] lg:tracking-[0.4em] uppercase">— WHO I AM —</div>
              <h2 className="text-[7vw] sm:text-4xl lg:text-6xl font-bold leading-tight break-words tracking-tighter lg:tracking-normal">
                Building the <span className="text-[#00FF9C]">Future</span><br className="hidden lg:block" /> with Code
              </h2>
              <p className="text-text-dim text-sm sm:text-lg leading-relaxed max-w-2xl">
                Passionate about designing and building{" "}
                <span className="text-white font-semibold">intelligent</span>,{" "}
                <span className="text-white font-semibold">scalable</span>, and{" "}
                <span className="text-[#00FF9C] font-semibold">user-focused</span> digital solutions.
              </p>
            </div>
            <div className="hidden lg:flex px-5 py-2 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 items-center gap-2 shrink-0 self-start">
              <div className="w-2 h-2 rounded-full bg-[#00FF9C] animate-pulse" />
              <span className="text-[11px] font-bold text-[#00FF9C] uppercase tracking-[0.3em]">Profile: Verified</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {[
              { value: 3,   suffix: '+', label: 'Years Experience', icon: 'activity'     },
              { value: 10,  suffix: '+', label: 'Certifications',   icon: 'graduationcap'},
              { value: 4,   suffix: '+', label: 'Tech Ecosystems',  icon: 'cpu'          },
              { value: 100, suffix: '%', label: 'Delivery Quality', icon: 'shield'       },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 sm:p-8 text-center rounded-2xl sm:rounded-3xl border border-white/5 group hover:border-[#00FF9C]/30 transition-all duration-500">
                <div className="text-[#00FF9C] mb-2 sm:mb-3 flex justify-center">
                  <Icon name={stat.icon} size={20} />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-[9px] sm:text-[11px] text-text-dim uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono group-hover:text-[#00FF9C] transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="space-y-6 sm:space-y-10 pt-6 sm:pt-8 border-t border-white/5">
            <div>
              <div className="text-[11px] text-[#00FF9C] font-bold uppercase tracking-tight lg:tracking-[0.4em] mb-1">Certification &amp; Institutional Partners</div>
              <div className="text-white/30 text-[9px] font-mono uppercase tracking-tighter lg:tracking-widest">8 Accredited Institutions &amp; Platforms</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {partners.map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group"
                >
                  <div className="glass rounded-xl sm:rounded-2xl border border-white/8 hover:border-[#00FF9C]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,156,0.12)] overflow-hidden">
                    <div className={`h-20 sm:h-32 flex items-center justify-center p-3 sm:p-5 ${partner.bg || 'bg-white/5'} relative`}>
                      <div className="w-full h-full flex items-center justify-center p-3 sm:p-6">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          loading="lazy"
                          className="max-w-[80%] max-h-[80%] object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF9C]/0 to-transparent group-hover:via-[#00FF9C]/60 transition-all duration-700" />
                    </div>
                    <div className="p-2.5 sm:p-4 bg-[#080f15] border-t border-white/5">
                      <div className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-wide truncate">{partner.name}</div>
                      <div className="text-[8px] text-[#00FF9C]/70 font-mono uppercase tracking-widest mt-0.5 truncate">{partner.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import gautengMap from '../assets/gauteng-map.png';
import richfieldLogo from '../assets/richfield-logo.png';
import profileImg from '../assets/koketso_transparent.png';
import wethinkcodeLogo from '../assets/wethinkcode-logo.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import { Icon } from './Icons';

const CountUp = ({ to }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const About = () => {
  const techStack = [
    { name: 'Figma', id: 'figma' },
    { name: 'React', id: 'react' },
    { name: 'Flutter', id: 'flutter' },
    { name: 'Python', id: 'python' },
    { name: 'Node.js', id: 'node' },
    { name: 'Vercel', id: 'vercel' }
  ];

  return (
    <div id="about" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Map overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: `url(${gautengMap})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — SWAPPED: Premium UI Dashboard Preview (formerly in Hero) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[440px] space-y-4">
            {/* Main Dashboard Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass p-6 rounded-2xl border border-green-500/20 shadow-[0_0_40px_rgba(0,201,136,0.15)] bg-bg/80 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest">System Metrics</div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/20"></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-lg font-bold mb-1">Kirov Dynamics v2.0</div>
                <div className="text-[10px] text-text-dim uppercase tracking-wider">Mobile & UI Infrastructure</div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'UI/UX Design', val: 92, color: 'from-green-500 to-green-400' },
                  { label: 'Mobile Dev', val: 88, color: 'from-blue-500 to-blue-400' },
                  { label: 'Autonomous Systems', val: 80, color: 'from-purple-500 to-purple-400' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[9px] font-bold text-text-dim mb-1.5 uppercase tracking-tight">
                      <span>{item.label}</span><span className="text-green-400">{item.val}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl border border-blue-500/20 text-center hover:border-blue-500/50 transition-colors">
                <Icon name="smartphone" size={24} className="text-blue-400 mx-auto mb-3" />
                <div className="text-xl font-bold">Mobile</div>
                <div className="text-[8px] text-text-dim uppercase tracking-widest mt-1">Primary Engine</div>
              </div>
              <div className="glass p-5 rounded-2xl border border-green-500/20 text-center hover:border-green-500/50 transition-colors">
                <Icon name="layout" size={24} className="text-green-400 mx-auto mb-3" />
                <div className="text-xl font-bold">UI/UX</div>
                <div className="text-[8px] text-text-dim uppercase tracking-widest mt-1">Core Logic</div>
              </div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="glass p-5 rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg z-10 pointer-events-none" />
              <div className="text-[9px] font-bold text-green-400 text-center mb-5 tracking-[0.4em] uppercase opacity-60">Tech Ecosystem</div>
              <div className="flex relative overflow-hidden py-1">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-12 items-center whitespace-nowrap"
                >
                  {[...techStack, ...techStack].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group/icon">
                      <div className="w-10 h-10 flex items-center justify-center group-hover/icon:scale-110 transition-transform duration-300 bg-white/5 rounded-xl border border-white/5">
                        <Icon name={tech.id} size={28} />
                      </div>
                      <span className="text-[7px] text-text-dim font-bold uppercase tracking-tighter">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
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
              { value: 3, suffix: '+', label: 'Years Exp.' },
              { value: 20, suffix: '+', label: 'Projects' },
              { value: 100, suffix: '%', label: 'Dedication' },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 text-center rounded-2xl border border-white/5 group hover:border-green-500/30 transition-colors">
                <div className="text-2xl font-bold text-green-400">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1 group-hover:text-white transition-colors">{stat.label}</div>
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

          {/* Academic & Institutional Credentials */}
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

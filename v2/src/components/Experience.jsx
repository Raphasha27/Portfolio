import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Logo Assets
import yesBadge from '../assets/yes-badge.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import wtcLogo from '../assets/wethinkcode-logo.png';
import richfieldLogo from '../assets/richfield-logo-new.png';

const experiences = [
  {
    period: "2025 – PRESENT",
    role: "Autonomous Systems Engineer",
    company: "Kirov Dynamics Technology · Self-Employed",
    desc: "Designing and deploying autonomous agentic infrastructure spanning multi-language systems (C, Python, Go, TypeScript). Building self-healing CI/CD pipelines and AI-augmented developer tooling.",
    icon: "cpu",
    logo: null,
    logoBg: "bg-transparent",
    logoPadding: "p-0",
    logoFit: "object-cover",
    cardBg: "from-emerald-500/10 via-emerald-400/5 to-transparent"
  },
  {
    period: "2024 – PRESENT",
    role: "Open Source Contributor",
    company: "GitHub · raphasha27",
    desc: "Maintaining multiple open-source repositories including SupportHive-C (C engine), FlowSentinel (.NET 8), and RepoPulse. Enforcing automated CI/CD and repository health standards.",
    icon: "github",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    logoBg: "bg-white",
    logoPadding: "p-4",
    logoFit: "object-contain",
    cardBg: "from-purple-500/10 via-purple-400/5 to-transparent"
  },
  {
    period: "2024 – 2025",
    role: "YES Programme Developer",
    company: "YES · Youth Employment Service",
    desc: "Participated in South Africa's Youth Employment Service programme, gaining hands-on industry experience in software development and contributing to real-world digital projects.",
    icon: "graduationCap",
    logo: yesBadge,
    logoBg: "bg-white",
    logoPadding: "p-4",
    cardBg: "from-blue-500/10 via-blue-400/5 to-transparent"
  },
  {
    period: "2025 – 2026",
    role: "AI Engineering Intern",
    company: "CAPACITI · Digital Skills Accelerator (Naspers Labs)",
    desc: "Completed an intensive AI-focused digital skills accelerator in parallel with the YES programme. Built AI pipelines using Gemini and LangChain, ranked in top tier for technical output. Delivered production-grade ML solutions under the Naspers Labs umbrella.",
    icon: "rocket",
    logo: capacitiLogo,
    logoBg: "bg-white",
    logoPadding: "p-3",
    logoFit: "object-contain",
    cardBg: "from-cyan-500/10 via-cyan-400/5 to-transparent",
    illustration: "aiRobot",
    expanded: true
  },
  {
    period: "2025 – 2026",
    role: "Cybersecurity Intern",
    company: "Orange Cyberdefense · Sponsorship",
    desc: "Interned as part of a sponsorship program including Orange Cyber security. Gained practical experience in threat monitoring, enterprise security, and security operations.",
    icon: "shield",
    logo: "https://th.bing.com/th/id/R.e8ae1deef5cd53a7f446b6bfe1791e4d?rik=Xlnu%2f30pV2GYyg&pid=ImgRaw&r=0",
    logoBg: "bg-white",
    logoPadding: "p-3",
    logoFit: "object-contain",
    cardBg: "from-orange-500/10 via-orange-400/5 to-transparent"
  },
  {
    period: "2023 – 2024",
    role: "Software Engineering Student",
    company: "WeThinkCode_ · Johannesburg Campus",
    desc: "Trained in peer-driven, problem-based software engineering. Built real-world applications in Java and Python, mastering algorithmic thinking and collaborative development workflows.",
    icon: "code",
    logo: wtcLogo,
    logoBg: "bg-white",
    logoPadding: "p-4",
    cardBg: "from-pink-500/10 via-pink-400/5 to-transparent"
  },
  {
    period: "2022 – 2025",
    role: "BSc Computer Science Graduate",
    company: "Richfield Graduate Institute · Distinction",
    desc: "Graduated with distinction. Specialized in systems programming, data structures, algorithms, and software architecture. Recipient of academic excellence recognition.",
    icon: "bookOpen",
    logo: richfieldLogo,
    logoBg: "bg-[#003087]",
    logoPadding: "p-2",
    logoFit: "object-contain",
    cardBg: "from-yellow-500/10 via-yellow-400/5 to-transparent"
  }
];

const Experience = () => {
  // AI Robot SVG Component
  const AIRobotIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-32 h-32 lg:w-40 lg:h-40">
        <defs>
          <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF9C" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#00D4AA" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#0099CC" stopOpacity="0.4"/>
          </linearGradient>
          <filter id="robotGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Robot Head */}
        <rect x="60" y="40" width="80" height="60" rx="15" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        
        {/* Eyes */}
        <circle cx="80" cy="65" r="6" fill="#00FF9C" className="animate-pulse"/>
        <circle cx="120" cy="65" r="6" fill="#00FF9C" className="animate-pulse"/>
        
        {/* Mouth/Speaker */}
        <rect x="90" y="80" width="20" height="8" rx="4" fill="#00FF9C" opacity="0.6"/>
        
        {/* Antenna */}
        <line x1="100" y1="40" x2="100" y2="25" stroke="#00FF9C" strokeWidth="2"/>
        <circle cx="100" cy="22" r="3" fill="#00FF9C" className="animate-ping"/>
        
        {/* Body */}
        <rect x="70" y="100" width="60" height="70" rx="10" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        
        {/* Chest Panel */}
        <rect x="85" y="115" width="30" height="20" rx="5" fill="#00FF9C" opacity="0.3"/>
        <rect x="88" y="118" width="24" height="3" rx="1" fill="#00FF9C"/>
        <rect x="88" y="125" width="24" height="3" rx="1" fill="#00FF9C"/>
        <rect x="88" y="132" width="24" height="3" rx="1" fill="#00FF9C"/>
        
        {/* Arms */}
        <rect x="45" y="110" width="20" height="40" rx="8" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        <rect x="135" y="110" width="20" height="40" rx="8" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        
        {/* Hands */}
        <circle cx="55" cy="155" r="8" fill="#00FF9C" opacity="0.8"/>
        <circle cx="145" cy="155" r="8" fill="#00FF9C" opacity="0.8"/>
        
        {/* Legs */}
        <rect x="80" y="170" width="15" height="25" rx="6" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        <rect x="105" y="170" width="15" height="25" rx="6" fill="url(#robotGrad)" filter="url(#robotGlow)" stroke="#00FF9C" strokeWidth="1"/>
        
        {/* Tech Labels */}
        <text x="100" y="210" fill="#00FF9C" fontSize="8" textAnchor="middle" className="font-mono opacity-60">GEMINI • LANGCHAIN</text>
      </svg>
    </div>
  );

  return (
    <div id="experience" className="relative py-16 sm:py-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12 sm:mb-20">
          <div className="space-y-2 sm:space-y-4 max-w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none break-words">
              Professional <span className="text-[#00FF9C]">Evolution</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">Linear Timeline Analysis</div>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 w-fit mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
              <span className="text-[10px] font-bold text-[#00FF9C] uppercase tracking-widest">Sync: Verified</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line — hidden on mobile */}
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00FF9C]/50 via-[#00FF9C]/10 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start group pb-8"
                style={{ contain: 'layout style' }}
              >
                {/* Logo Circle — smaller on mobile */}
                <div 
                  className={`w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 shrink-0 ${exp.logoBg || 'bg-[#0a161d]'} overflow-hidden shadow-[0_0_20px_rgba(0,255,156,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,156,0.4)]`}
                  style={{ borderColor: 'rgba(0, 255, 156, 0.6)' }}
                >
                  <div className={`relative z-10 w-full h-full ${exp.logoPadding || 'p-3'} flex items-center justify-center`}>
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className={`w-full h-full ${exp.logoFit || "object-contain"} transition-all duration-500`} 
                      />
                    ) : (
                      <div className="text-[#00FF9C]">
                        <Icon name={exp.icon} size={28} />
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00FF9C] opacity-60 group-hover:opacity-100 transition-all" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00FF9C] opacity-60 group-hover:opacity-100 transition-all" />
                </div>

                {/* Content Card */}
                <div className="glass flex-1 lg:flex lg:items-center p-5 lg:p-8 border border-white/5 group-hover:border-[#00FF9C]/20 transition-[border-color] duration-500 relative overflow-hidden rounded-2xl lg:rounded-[32px] w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.cardBg || 'from-transparent to-transparent'} opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Main Content Section */}
                  <div className="relative z-10 lg:flex-1 lg:pr-8">
                    <div className="flex flex-col gap-2 mb-3 sm:mb-6">
                      <div className="max-w-full overflow-hidden">
                        <h3 className="text-base sm:text-2xl font-bold text-white group-hover:text-[#00FF9C] transition-[color] duration-300 tracking-tight break-words">{exp.role}</h3>
                        <div className="text-[9px] sm:text-sm font-bold text-[#00FF9C]/70 tracking-normal sm:tracking-[0.3em] uppercase mt-1 sm:mt-2 font-mono break-words">{exp.company}</div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono font-bold text-[#00FF9C]/60 uppercase tracking-wider self-start">
                        [{exp.period}]
                      </div>
                    </div>
                    <p className="text-text-dim text-xs sm:text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {exp.desc}
                    </p>
                  </div>

                  {/* Robot Illustration - Only for AI Engineering Intern */}
                  {exp.expanded && (
                    <div className="hidden lg:flex lg:w-80 lg:h-48 items-center justify-center shrink-0">
                      <AIRobotIllustration />
                    </div>
                  )}
                  
                  {/* Background Icon - Hidden for expanded items on desktop */}
                  <div className={`absolute ${exp.expanded ? 'lg:hidden' : ''} -bottom-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 text-white/5 group-hover:text-white/[0.08] transition-all duration-700 pointer-events-none`}>
                    <Icon name={exp.icon} size={200} />
                  </div>
                  
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF9C]/5 blur-[100px] rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ willChange: 'opacity' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

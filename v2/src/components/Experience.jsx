import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Logo Assets
import yesBadge from '../assets/yes-badge.png';
import capacitiLogo from '../assets/capaciti-logo.png';
import wtcLogo from '../assets/wethinkcode-logo.png';
import richfieldLogo from '../assets/richfield-logo.png';

const experiences = [
  {
    period: "2025 – PRESENT",
    role: "Autonomous Systems Engineer",
    company: "Kirov Dynamics Technology · Self-Employed",
    desc: "Designing and deploying autonomous agentic infrastructure spanning multi-language systems (C, Python, Go, TypeScript). Building self-healing CI/CD pipelines and AI-augmented developer tooling.",
    icon: "cpu",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    logoBg: "bg-white",
    logoPadding: "p-0",
    logoFit: "object-cover"
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
    logoFit: "object-contain" // Keep contain for logos
  },
  {
    period: "2024 – 2025",
    role: "YES Programme Developer",
    company: "YES · Youth Employment Service",
    desc: "Participated in South Africa's Youth Employment Service programme, gaining hands-on industry experience in software development and contributing to real-world digital projects.",
    icon: "graduationCap",
    logo: yesBadge,
    logoBg: "bg-white",
    logoPadding: "p-4"
  },
  {
    period: "2024",
    role: "Tech Accelerator Graduate",
    company: "CAPACITI · Digital Skills Accelerator",
    desc: "Completed an intensive digital skills accelerator focused on cloud computing, agile development, and enterprise software delivery. Ranked in top cohort for technical output.",
    icon: "rocket",
    logo: capacitiLogo,
    logoBg: "bg-white",
    logoPadding: "p-2",
    logoFit: "object-contain"
  },
  {
    period: "2023 – 2024",
    role: "Software Engineering Student",
    company: "WeThinkCode_ · Johannesburg Campus",
    desc: "Trained in peer-driven, problem-based software engineering. Built real-world applications in Java and Python, mastering algorithmic thinking and collaborative development workflows.",
    icon: "code",
    logo: wtcLogo,
    logoBg: "bg-white",
    logoPadding: "p-4"
  },
  {
    period: "2022 – 2025",
    role: "BSc Computer Science Graduate",
    company: "Richfield Graduate Institute · Distinction",
    desc: "Graduated with distinction. Specialized in systems programming, data structures, algorithms, and software architecture. Recipient of academic excellence recognition.",
    icon: "bookOpen",
    logo: richfieldLogo,
    logoBg: "bg-[#004a99]",
    logoPadding: "p-5"
  }
];

const Experience = () => {
  return (
    <div id="experience" className="relative py-24 overflow-hidden bg-[#050d12]">
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with Wide Typography and Status Pill */}
        <div className="flex justify-between items-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.8em] uppercase font-mono text-white leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Professional <span className="text-blue-400">Evolution</span>
            </h2>
            <div className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.5em] font-black opacity-60">Linear Timeline Analysis</div>
          </div>
          <div className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em]">Sync: Verified</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-12 items-start group"
              >
                {/* High-Fidelity Branded Circle Container */}
                <div 
                  className={`w-24 h-24 rounded-full border-2 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 shrink-0 ${exp.logoBg || 'bg-[#0a161d]'} overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]`}
                  style={{ 
                    borderColor: 'rgba(59, 130, 246, 0.6)',
                  }}
                >
                  <div className={`relative z-10 w-full h-full ${exp.logoPadding || 'p-3'} flex items-center justify-center`}>
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className={`w-full h-full ${exp.logoFit || "object-contain"} transition-all duration-500`} 
                      />
                    ) : (
                      <div className="text-blue-400">
                        <Icon name={exp.icon} size={36} />
                      </div>
                    )}
                  </div>
                  
                  {/* Outer Cyber Corner Accents (Fixed Position for Circles) */}
                  <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
                </div>

                {/* Content Card */}
                <div className="glass flex-1 p-8 border border-white/5 group-hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden rounded-[32px]">
                  {/* Subtle Glow Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-blue-500/10 transition-all duration-1000" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">{exp.role}</h3>
                        <div className="text-sm font-bold text-blue-400/70 tracking-[0.3em] uppercase mt-2 font-mono">{exp.company}</div>
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-blue-400/60 uppercase tracking-widest h-fit">
                        [{exp.period}]
                      </div>
                    </div>
                    <p className="text-text-dim text-base leading-relaxed max-w-3xl font-light group-hover:text-white/90 transition-colors">
                      {exp.desc}
                    </p>
                  </div>
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

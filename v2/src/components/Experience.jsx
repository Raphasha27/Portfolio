import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Logo Assets
import yesLogo from '../assets/yes-logo.png';
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
    logo: null
  },
  {
    period: "2024 – PRESENT",
    role: "Open Source Contributor",
    company: "GitHub · raphasha27",
    desc: "Maintaining multiple open-source repositories including SupportHive-C (C engine), FlowSentinel (.NET 8), and RepoPulse. Enforcing automated CI/CD and repository health standards.",
    icon: "github",
    logo: null
  },
  {
    period: "2024 – 2025",
    role: "YES Programme Developer",
    company: "YES · Youth Employment Service",
    desc: "Participated in South Africa's Youth Employment Service programme, gaining hands-on industry experience in software development and contributing to real-world digital projects.",
    icon: "graduationCap",
    logo: yesLogo
  },
  {
    period: "2024",
    role: "Tech Accelerator Graduate",
    company: "CAPACITI · Digital Skills Accelerator",
    desc: "Completed an intensive digital skills accelerator focused on cloud computing, agile development, and enterprise software delivery. Ranked in top cohort for technical output.",
    icon: "rocket",
    logo: capacitiLogo
  },
  {
    period: "2023 – 2024",
    role: "Software Engineering Student",
    company: "WeThinkCode_ · Johannesburg Campus",
    desc: "Trained in peer-driven, problem-based software engineering. Built real-world applications in Java and Python, mastering algorithmic thinking and collaborative development workflows.",
    icon: "code",
    logo: wtcLogo
  },
  {
    period: "2022 – 2025",
    role: "BSc Computer Science Graduate",
    company: "Richfield Graduate Institute · Distinction",
    desc: "Graduated with distinction. Specialized in systems programming, data structures, algorithms, and software architecture. Recipient of academic excellence recognition.",
    icon: "bookOpen",
    logo: richfieldLogo
  }
];

const Experience = () => {
  return (
    <div id="experience" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid-lines"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" />

      <div className="container text-center mb-20 relative z-10">
        <div className="text-green-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-4 opacity-60">— EVOLUTION —</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Professional <span className="text-green-400">Timeline</span></h2>
      </div>

      <div className="container max-w-5xl relative z-10">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 via-green-500/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 items-start group"
              >
                <div className="relative z-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] shrink-0 border border-white/20 group-hover:scale-110 transition-transform duration-500 p-0">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full glass flex items-center justify-center text-green-400">
                      <Icon name={exp.icon} size={24} />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className="glass flex-1 p-6 border border-white/5 group-hover:border-green-500/20 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle Glow Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-green-500/10 transition-all" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{exp.role}</h3>
                        <div className="text-xs font-bold text-green-400/70 tracking-widest uppercase mt-1">{exp.company}</div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-text-dim h-fit">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-text-dim text-sm leading-relaxed max-w-3xl">
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

import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Logo Assets
import yesBadge from '../assets/yes-badge.png';
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
  return (
    <section id="experience" className="relative py-16 sm:py-24 overflow-hidden bg-transparent">
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
                        alt={`${exp.company} logo`}
                        loading="lazy"
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

                  {/* No illustration - clean text layout */}
                  
                  {/* Background effects */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF9C]/5 blur-[100px] rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ willChange: 'opacity' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const experiences = [
  {
    period: "2024 – PRESENT",
    role: "Open Source Contributor",
    company: "GitHub · raphasha27",
    desc: "Maintaining multiple open-source repositories including SupportHive-C (C engine), FlowSentinel (.NET 8), and RepoPulse.",
    icon: "github"
  },
  {
    period: "2025 – PRESENT",
    role: "Autonomous Systems Engineer",
    company: "Kirov Dynamics Technology · Self-Employed",
    desc: "Designing and deploying autonomous agentic infrastructure spanning multi-language systems (C, Python, Go, TypeScript). Building self-healing CI/CD pipelines and AI-augmented developer tooling.",
    icon: "cpu"
  },
  {
    period: "2023 – 2025",
    role: "BSc Computer Science Graduate",
    company: "Richfield Graduate Institute · Distinction",
    desc: "Graduated with distinction. Specialized in systems programming, data structures, algorithms, and software architecture.",
    icon: "graduationCap"
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

      <div className="container max-w-4xl relative z-10">
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-green-400 shrink-0 shadow-lg shadow-green-500/10">
                <Icon name={exp.icon} size={24} />
              </div>
              <div className="text-left">
                <div className="text-green-400 font-bold text-[10px] mb-1">{exp.period}</div>
                <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                <div className="text-xs font-medium text-text-dim mb-2">{exp.company}</div>
                <p className="text-text-dim text-xs leading-relaxed max-w-2xl">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

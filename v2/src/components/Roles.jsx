import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const roles = [
  { num: "01", icon: "layout", title: "AI Systems Architect", project: "Sovereign-AI-Nexus" },
  { num: "02", icon: "bot", title: "AI Agent Orchestrator", project: "Sovereign-AI-Nexus-v2" },
  { num: "03", icon: "activity", title: "AI Product Builder", project: "NoShowIQ" },
  { num: "04", icon: "refreshCw", title: "AI Automation Strategist", project: "Kirov Connect" },
  { num: "05", icon: "zap", title: "AI Infrastructure Engineer", project: "FlowSentinel" },
  { num: "06", icon: "target", title: "AI Reliability Engineer", project: "SeatLock" },
  { num: "07", icon: "scale", title: "AI Governance Specialist", project: "CyberShield" },
  { num: "08", icon: "shield", title: "AI Security Specialist", project: "CyberShield SOC" },
  { num: "09", icon: "bookOpen", title: "AI Solutions Engineer", project: "EduStream-Pro-ICT" }
];

const Roles = () => {
  return (
    <div id="roles" className="glass p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">The 9 <span className="text-green-400">AI Roles</span></h2>
        <div className="text-[8px] text-green-400 font-bold uppercase tracking-[0.2em]">Engineering Excellence</div>
      </div>

      <div className="grid grid-cols-3 gap-2 flex-1 overflow-y-auto pr-1 custom-scroll">
        {roles.map((role, i) => (
          <div key={i} className="glass p-3 border-white/5 hover:border-green-500/30 transition-all group flex flex-col items-center text-center relative overflow-hidden">
            {/* Subtle Tech Background */}
            <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none grayscale">
              <img src="/src/assets/experience-bg.png" alt="" className="w-full h-full object-cover scale-150 rotate-12" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/80 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-green-400 mb-2 group-hover:scale-110 transition-transform">
                <Icon name={role.icon} size={16} />
              </div>
              <div className="text-[8px] font-bold leading-tight group-hover:text-green-400 transition-colors">{role.title}</div>
              <div className="text-[6px] text-text-dim mt-1 truncate w-full">{role.project}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;

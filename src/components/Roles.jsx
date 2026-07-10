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
    <div id="roles" className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-12 bg-transparent overflow-hidden rounded-2xl sm:rounded-[40px] border border-white/5">
      {/* Background Neural Network Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4638ef80b?auto=format&fit=crop&q=80&w=1920" 
          alt="Neural Network" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-transparent to-[#000814] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-16 gap-4">
        <div className="text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
            The 9 <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">AI Roles</span>
          </h2>
          <p className="text-[9px] sm:text-[10px] text-white/40 font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-1 sm:mt-2">Specialized Autonomous Functionality</p>
        </div>
        <div className="px-4 sm:px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2 h-fit self-start">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">Operational: 100%</span>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10 max-w-7xl mx-auto">
        {roles.map((role, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="glass p-6 border-white/5 rounded-2xl flex items-center gap-6 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
              
              {/* Card Background Glow */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 blur-[40px] group-hover:bg-blue-500/10 transition-all pointer-events-none" />

              {/* Index Number */}
              <div className="absolute top-3 left-4 text-[9px] font-mono text-blue-500/40 group-hover:text-blue-400 transition-colors">
                {role.num}
              </div>

              {/* Icon Section */}
              <div className="shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-500">
                <Icon name={role.icon} size={32} />
              </div>

              {/* Text Section */}
              <div className="space-y-1">
                <div className="text-[15px] font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight uppercase">
                  {role.title}
                </div>
                <div className="text-[11px] font-mono text-blue-400/60 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                  {role.project}
                </div>
              </div>

              {/* Animated Border Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-400/0 group-hover:border-blue-400/40 rounded-tr-2xl transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roles;

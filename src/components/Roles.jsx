import { motion } from 'framer-motion';
import { Icon } from './Icons';

const roles = [
  { num: "01", icon: "layout", title: "AI Systems Architect", project: "Sovereign-AI-Nexus", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
  { num: "02", icon: "bot", title: "AI Agent Orchestrator", project: "Sovereign-AI-Nexus-v2", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" },
  { num: "03", icon: "activity", title: "AI Product Builder", project: "NoShowIQ", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
  { num: "04", icon: "refreshCw", title: "AI Automation Strategist", project: "Kirov Connect", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
  { num: "05", icon: "zap", title: "AI Infrastructure Engineer", project: "FlowSentinel", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
  { num: "06", icon: "target", title: "AI Reliability Engineer", project: "SeatLock", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { num: "07", icon: "scale", title: "AI Governance Specialist", project: "CyberShield", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" },
  { num: "08", icon: "shield", title: "AI Security Specialist", project: "CyberShield SOC", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" },
  { num: "09", icon: "bookOpen", title: "AI Solutions Engineer", project: "EduStream-Pro-ICT", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" }
];

const Roles = () => {
  return (
    <div id="roles" className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-12 bg-transparent overflow-hidden rounded-2xl sm:rounded-[40px] border border-white/5">
      {/* Background Neural Network Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen">
        <img loading="lazy" decoding="async" 
          src="https://images.unsplash.com/photo-1620712943543-bcc4638ef80b?auto=format&fit=crop&q=80&w=1920" 
          alt="Neural Network" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000] pointer-events-none" />

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
            <div className="glass p-0 border border-white/5 rounded-[24px] flex flex-col hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full overflow-hidden bg-[#0a161d]">
              
              <div className="relative w-full h-32 sm:h-40 overflow-hidden shrink-0 bg-[#05080c]">
                 <img loading="lazy" decoding="async"
                   src={role.image}
                   alt={role.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a161d] via-[#0a161d]/50 to-transparent" />
                 
                 <div className="absolute top-3 right-3 text-[10px] font-mono text-blue-400 font-bold bg-[#000000]/80 px-2 py-1 rounded border border-blue-500/30 backdrop-blur-sm">
                    {role.num}
                 </div>
              </div>

              <div className="p-6 pt-4 flex items-start gap-4 flex-1 relative z-10">
                 <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-500">
                   <Icon name={role.icon} size={20} />
                 </div>
                 <div className="space-y-1 mt-0.5">
                   <div className="text-[14px] font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight uppercase">
                     {role.title}
                   </div>
                   <div className="text-[10px] font-mono text-blue-400/60 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                     {role.project}
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roles;


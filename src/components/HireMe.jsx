import { motion } from 'framer-motion';
import { Icon } from './Icons';

const platformGroups = [
  {
    title: "Platforms",
    icon: "globe",
    platforms: [
      { name: "GitHub", url: "https://github.com/Raphasha27", desc: "Open source portfolio" },
      { name: "LinkedIn", url: "https://linkedin.com/in/koketso-raphasha", desc: "Professional network" },
      { name: "Kaggle", url: "https://kaggle.com/Raphasha27", desc: "Data science competitions" },
      { name: "Dev.to", url: "https://dev.to/", desc: "Tech blog & articles" },
    ]
  },
  {
    title: "Freelance",
    icon: "briefcase",
    platforms: [
      { name: "Email", url: "mailto:raphashakoketso69@gmail.com", desc: "Direct inquiries preferred" },
    ]
  }
];

const products = [
  { name: "React Portfolio Template", desc: "Premium 3D portfolio with AI assistant", icon: "layout" },
  { name: "FastAPI SaaS Starter", desc: "Production-ready backend with auth, RBAC, Docker", icon: "server" },
  { name: "AI Chatbot Starter", desc: "Ollama + LangChain + React chatbot template", icon: "messageCircle" },
  { name: "Admin Dashboard Pro", desc: "React admin panel with charts and analytics", icon: "barChart" },
  { name: "Secure Auth System", desc: "JWT + OAuth + RBAC for FastAPI/React", icon: "shield" },
  { name: "DevOps Stack", desc: "Docker + CI/CD + monitoring templates", icon: "cloud" },
];

const HireMe = () => {
  return (
    <div id="hire" className="pt-16 sm:pt-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 sm:mb-16">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.3em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none">
              Hire <span className="text-green-400">Me</span>
            </h2>
            <div className="text-green-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black opacity-60">Available For Work · Rate: $25-45/hr</div>
          </div>
          <div className="px-4 sm:px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2 self-start">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-green-400 uppercase tracking-[0.3em]">Open To Offers</span>
          </div>
        </div>

        <div className="glass p-6 sm:p-10 rounded-3xl sm:rounded-[40px] relative overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let's Build Together</h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  Full-stack developer specializing in React, FastAPI, AI integrations, and cloud infrastructure. 
                  Available for freelance contracts, full-time roles, and consulting.
                </p>
              </div>

              <div className="glass p-5 sm:p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                    <Icon name="dollar" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Hourly Rate</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">Freelance & Consulting</div>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-green-400">$25</span>
                  <span className="text-white/30">-</span>
                  <span className="text-3xl sm:text-4xl font-bold text-green-400">$45</span>
                  <span className="text-white/40 text-sm">/hr USD</span>
                </div>
                <p className="text-white/30 text-xs mt-3">Flexible based on project scope · Premium rates for AI/automation work</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">React</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">FastAPI</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-green-500/10 border border-green-500/20 text-green-400">Python</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">AI/ML</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">DevOps</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">TypeScript</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-red-500/10 border border-red-500/20 text-red-400">Docker</span>
                <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">Security</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {platformGroups.map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={group.icon} size={14} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">{group.title}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {group.platforms.map((p, pi) => (
                      <a
                        key={pi}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
                      >
                        <div className="text-white/40 group-hover:text-blue-400 transition-colors text-xs">{p.name}</div>
                        <div className="text-[8px] text-white/20 ml-auto group-hover:text-white/40">→</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="package" size={18} className="text-purple-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Digital Products</h3>
            <span className="text-[10px] text-purple-400/60 font-mono">Buy · Use · Ship Faster</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Icon name={product.icon} size={18} />
                  </div>
                </div>
                <h4 className="font-bold text-sm text-white mb-1">{product.name}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed mb-4 flex-grow">{product.desc}</p>
                <a
                  href={`mailto:raphashakoketso69@gmail.com?subject=Product%20Request%3A%20${encodeURIComponent(product.name)}&body=Hi%20Koketso%2C%0A%0AI'm%20interested%20in%20the%20${encodeURIComponent(product.name)}.%20Please%20provide%20more%20details%20and%20pricing.%0A%0AThank%20you!`}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-400 font-bold text-xs rounded-lg transition-all group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <Icon name="mail" size={14} />
                  Request Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <a
            href="mailto:raphashakoketso69@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Koketso%2C%20I%27d%20like%20to%20discuss..."
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] group active:scale-95"
          >
            <Icon name="mail" size={18} />
            Hire Me Now
            <Icon name="arrowRight" size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="text-white/30 text-xs mt-3">Response within 24 hours · Available for remote worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;

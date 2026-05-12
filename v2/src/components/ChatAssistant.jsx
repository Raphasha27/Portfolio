import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const KB = {
  'tech stack': "My core stack: C# / .NET 8, Rust, C, Python, React, Vite. AI/ML: PyTorch, TensorFlow, LangChain. Cloud: Azure, AWS, Docker, Kubernetes.",
  'projects': "I've built 9 real projects mapped to 9 AI Roles including FlowSentinel, CyberShield SOC, and NoShowIQ. I've also built Sovereign-AI-Nexus.",
  'hire': "I am available for freelance and full-time opportunities. 📩 raphashakoketso99@gmail.com | 📞 0781172470",
  'about': "I am a South African software engineer building 'the foundational infrastructure for the African Digital Future'. I graduated from Richfield with distinction.",
  'experience': "My background includes roles at Kirov Dynamics, Open Source contributions on GitHub, and institutional training from YES, CAPACITI, and WeThinkCode_.",
  'latest': "The latest highlight is Sovereign-AI-Nexus — a global agentic infrastructure platform for autonomous professional branding. Check it out in the Projects section!",
  'recommend': "I highly recommend exploring the Sovereign-AI-Nexus project. It represents the pinnacle of my work in autonomous agentic systems.",
  'contact': "You can reach me directly via email at raphashakoketso99@gmail.com or through my LinkedIn.",
  'hello': "Hello there! I'm Koketso's Digital Twin. I can tell you about his technical expertise, projects, and professional timeline.",
  'hi': "Hi! I'm Koketso's Digital Twin. What would you like to know about his engineering background?"
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: "Hi! I'm Koketso's Digital Twin. Ask me about his tech stack, projects, or how to hire him!" }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const q = text || input;
    if (!q.trim()) return;

    const userMsg = { role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Great question! Try asking about: latest projects, tech stack, or my recommendations.";
      const lower = q.toLowerCase();
      for (const [key, val] of Object.entries(KB)) {
        if (lower.includes(key)) { reply = val; break; }
      }
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 1200); // Simulated delay for typing effect
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass w-80 h-[400px] mb-4 flex flex-col overflow-hidden border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
          >
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-blue-500/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400">
                    <Icon name="terminal" size={16} />
                  </div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-bg-deep animate-ping"></div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-bg-deep"></div>
                </div>
                <div>
                  <div className="text-xs font-bold glow-text">Digital Twin AI</div>
                  <div className="text-[10px] text-blue-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Online & Reactive
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-dim hover:text-white transition-colors">
                <Icon name="close" size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-xs bg-bg-deep/50 relative">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl ${m.role === 'user' ? 'bg-blue-500 text-bg font-medium shadow-[0_0_15px_rgba(37,99,235,0.2)] rounded-tr-sm' : 'bg-white/5 border border-white/10 text-text rounded-tl-sm backdrop-blur-sm'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-3 rounded-xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-bg-deep/80 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask AI Twin..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-text-dim"
                />
                <button onClick={() => handleSend()} className="p-2 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-bg transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <Icon name="send" size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-bg flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-110 transition-all relative group ring-4 ring-blue-500/20"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 group-hover:animate-ping"></div>
        <Icon name={isOpen ? "close" : "chat"} size={24} />
      </button>
    </div>
  );
};

export default ChatAssistant;

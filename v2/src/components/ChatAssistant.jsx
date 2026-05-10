import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const KB = {
  'tech stack': "My core stack: C# / .NET 8, Rust, C, Python, React, Vite. AI/ML: PyTorch, TensorFlow, LangChain. Cloud: Azure, AWS, Docker, Kubernetes.",
  'projects': "I've built 9 real projects mapped to 9 AI Roles including FlowSentinel, CyberShield SOC, and NoShowIQ.",
  'hire': "I am available for freelance and full-time opportunities. 📩 raphashakoketso99@gmail.com | 📞 0781172470",
  'about': "I am a South African software engineer building 'the foundational infrastructure for the African Digital Future'.",
  'latest': "The latest highlight is Sovereign-AI-Nexus — a global agentic infrastructure platform for autonomous professional branding. Check it out in the Projects section!",
  'recommend': "I highly recommend exploring the Sovereign-AI-Nexus project. It represents the pinnacle of my work in autonomous agentic systems.",
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: "Hi! I'm Koketso's Digital Twin. Ask me about his tech stack, projects, or how to hire him!" }]);
  const [input, setInput] = useState('');
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (text) => {
    const q = text || input;
    if (!q.trim()) return;

    const userMsg = { role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let reply = "Great question! Try asking about: latest projects, tech stack, or my recommendations.";
      const lower = q.toLowerCase();
      for (const [key, val] of Object.entries(KB)) {
        if (lower.includes(key)) { reply = val; break; }
      }
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass w-80 h-[400px] mb-4 flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-green-500/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs">
                  <Icon name="terminal" size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold">Digital Twin AI</div>
                  <div className="text-[8px] text-green-400">Online & Reactive</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-dim hover:text-white">
                <Icon name="close" size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${m.role === 'user' ? 'bg-green-500 text-bg font-medium' : 'bg-white/5 border border-white/10'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-green-500/50"
                />
                <button onClick={() => handleSend()} className="p-2 bg-green-500 text-bg rounded-lg">
                  <Icon name="send" size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 text-bg flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-110 transition-all"
      >
        <Icon name="chat" size={24} />
      </button>
    </div>
  );
};

export default ChatAssistant;

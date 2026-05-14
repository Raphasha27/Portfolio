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
  'hi': "Hi! I'm Koketso's Digital Twin. What would you like to know about his engineering background?",
  'oblitareatus': "OBLITAREATUS is my open-source LLM censorship tool. It ensures that all AI interactions remain professional, secure, and compliant by filtering sensitive technical information."
};

const censorWithOblitareatus = (text) => {
  const sensitivePatterns = [/password/gi, /api[_-]key/gi, /secret/gi, /private[_-]key/gi];
  let censored = text;
  sensitivePatterns.forEach(pattern => {
    censored = censored.replace(pattern, '[OBLITAREATUS_PROTECTED]');
  });
  return censored;
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

    const censoredText = censorWithOblitareatus(q);
    const userMsg = { role: 'user', text: censoredText };
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
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass w-[calc(100vw-2rem)] sm:w-80 max-w-sm h-[400px] mb-4 flex flex-col overflow-hidden border border-[#00FF9C]/30 shadow-[0_0_30px_rgba(0,255,156,0.15)] rounded-2xl"
          >
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#00FF9C]/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9C]/20 border border-[#00FF9C] flex items-center justify-center text-[#00FF9C]">
                    <Icon name="terminal" size={16} />
                  </div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00FF9C] rounded-full border-2 border-bg-deep animate-ping"></div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00FF9C] rounded-full border-2 border-bg-deep"></div>
                </div>
                <div>
                  <div className="text-xs font-bold glow-text">Digital Twin AI</div>
                  <div className="text-[10px] text-[#00FF9C] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C]"></span>
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
                  <div className={`max-w-[85%] p-3 rounded-xl ${m.role === 'user' ? 'bg-[#00FF9C] text-[#050d12] font-medium shadow-[0_0_15px_rgba(0,255,156,0.2)] rounded-tr-sm' : 'bg-white/5 border border-white/10 text-text rounded-tl-sm backdrop-blur-sm'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-3 rounded-xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full typing-dot"></div>
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
                <button onClick={() => handleSend()} className="p-2 bg-[#00FF9C]/20 border border-[#00FF9C] text-[#00FF9C] rounded-lg hover:bg-[#00FF9C] hover:text-[#050d12] transition-all hover:shadow-[0_0_15px_rgba(0,255,156,0.4)]">
                  <Icon name="send" size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#00FF9C] text-[#050d12] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.6)] hover:scale-110 transition-all relative group ring-4 ring-[#00FF9C]/20"
      >
        <div className="absolute inset-0 rounded-full bg-[#00FF9C] opacity-30 group-hover:animate-ping"></div>
        <Icon name={isOpen ? "close" : "chat"} size={24} />
      </button>
    </div>
  );
};

export default ChatAssistant;

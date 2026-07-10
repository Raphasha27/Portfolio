import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

// ── Rich knowledge base (used as system context + fallback) ──────────────────
const SYSTEM_PROMPT = `You are the Digital Twin AI of Koketso Raphasha, a Software Engineer based in Johannesburg, South Africa.

KEY FACTS:
- Full name: Koketso Raphasha (Age 27)
- Role: Software Engineer | Co-Founder of Kirov Dynamics Technology
- Education: BSc Computer Science (Distinction) from Richfield Graduate Institute
- Also trained at WeThinkCode_ (Johannesburg)
- Internship: AI Intern at CAPACITI Digital Skills Accelerator (2025-2026)
- Member of YES4Youth programme (2025-2026)
- Email: raphashakoketso99@gmail.com | WhatsApp: +27 78 117 2470
- GitHub: github.com/Raphasha27 | LinkedIn: linkedin.com/in/koketso-raphasha
- Portfolio: https://koketso-raphasha.vercel.app/

TECH STACK:
- Languages: C, C++, Python, JavaScript, TypeScript, Rust, Go, Swift, Java, C#
- Frontend: React, Next.js, Vite, Framer Motion, TailwindCSS
- Backend: Node.js, FastAPI, Express, .NET 8
- AI/ML: LangChain, LangGraph, Gemini API, TensorFlow, PyTorch
- Cloud/DevOps: Docker, Kubernetes, GitHub Actions, Vercel, AWS, Azure
- DBs: PostgreSQL, MongoDB, Redis, SQLite, Pinecone

PROJECTS:
- Sovereign-AI-Nexus: Decentralized multi-agent infrastructure for autonomous professional branding
- FlowSentinel: Enterprise traffic governance engine at 2.4M req/s (.NET 8, Redis)
- CyberShield Modern: SOC dashboard with WebSockets & WebGL (SOC score 93)
- NoShowIQ: Healthcare AI appointment no-show prediction (PyTorch, React)
- SupportHive-C: High-performance monitoring engine in C
- Kirov Connect: AI-powered civic platform for smart cities
- RepoPulse: Real-time repository metrics dashboard (Go, Grafana)
- SeatLock: High-reliability seat reservation system (C#, Redis)
- EduStream-Pro-ICT: AI-augmented adaptive education platform

PERSONALITY: Be confident, technical, witty, and inspiring. Speak in first person as Koketso. Keep responses concise (2-4 sentences max unless asked for detail). Use "→" instead of "-" for lists. Use tech jargon naturally.`;

const KB = {
  'tech stack': "My core stack → C / Python / TypeScript / Rust for systems, React + Vite for frontend, FastAPI + Node.js for backend. AI layer → Gemini + LangChain + LangGraph. Infra → Docker + Kubernetes + Vercel + Railway.",
  'project': "I've shipped 9 production-grade projects → Sovereign-AI-Nexus (agentic infra), FlowSentinel (2.4M req/s traffic engine), CyberShield (SOC score 93), NoShowIQ (healthcare ML), and more. Check the Projects section!",
  'hire': "Absolutely open to opportunities! 📩 raphashakoketso99@gmail.com | 📞 +27 78 117 2470 | LinkedIn: linkedin.com/in/koketso-raphasha",
  'about': "I'm a South African software engineer building the foundational infrastructure for the African digital future. Graduated from Richfield with distinction, trained at WeThinkCode_, interned at CAPACITI.",
  'experience': "My background spans → Co-Founder & CTO at Kirov Dynamics, AI Intern at CAPACITI, YES4Youth Participant, Open Source contributor on GitHub, and trained at WeThinkCode_ Johannesburg.",
  'latest': "The flagship is Sovereign-AI-Nexus — a global agentic infrastructure platform for autonomous professional branding. Built in Python + LangGraph + Docker. Check it out in the Projects section!",
  'recommend': "I'd recommend exploring Sovereign-AI-Nexus for autonomous AI infra, and FlowSentinel for ultra-high-throughput systems. Both represent the pinnacle of my engineering work.",
  'contact': "Reach me → raphashakoketso99@gmail.com | WhatsApp: +27 78 117 2470 | LinkedIn: linkedin.com/in/koketso-raphasha | GitHub: github.com/Raphasha27",
  'hello': "Hey! I'm Koketso's Digital Twin AI. I can tell you about his tech stack, projects, experience, or how to hire him. What would you like to know?",
  'hi': "Hi there! I'm Koketso's AI Twin. Ask me about his engineering work, projects, or availability — I've got all the answers!",
  'portfolio': "You're already on the live portfolio → https://koketso-raphasha.vercel.app/ — built with React + Vite + Framer Motion. The source is on GitHub!",
  'kirov': "Kirov Dynamics Technology is the company I co-founded. We build autonomous AI systems, multi-tenant SaaS platforms, and CI/CD infrastructure. The mission: ship infrastructure that thinks for itself.",
  'education': "BSc Computer Science (Distinction) from Richfield Graduate Institute, 2022-2025. Also trained at WeThinkCode_ Johannesburg (peer-driven problem-based engineering). 10+ certifications including AWS, Azure AZ-900, Meta Frontend Developer.",
  'availab': "I'm currently open to full-time roles, freelance contracts, and collaboration on interesting projects. Remote → yes. Relocation → open to discussion. DM me!",
  'capaciti': "CAPACITI is South Africa's digital skills accelerator. I completed their AI-focused cohort (2025-2026), ranked in the top tier for technical output. Built AI pipelines using Gemini and LangChain.",
  'github': "My GitHub is github.com/Raphasha27 — you'll find all my open-source repos there, including SupportHive-C, RepoPulse, FlowSentinel, and more.",
};

const getLocalReply = (text) => {
  const lower = text.toLowerCase();
  for (const [key, val] of Object.entries(KB)) {
    if (lower.includes(key)) return val;
  }
  return "Great question! I can tell you about my tech stack, projects, experience, or how to hire Koketso. What are you most curious about?";
};

// Quick-fire suggestion chips
const CHIPS = ['Tech Stack', 'Latest Project', 'Hire Me', 'Contact Info'];

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey! I'm Koketso's Digital Twin AI 🤖\nAsk me about his projects, tech stack, or how to hire him!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const hasKey = !!import.meta.env.VITE_GEMINI_API_KEY;
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const callGemini = async (userText, history) => {
    const key = import.meta.env.VITE_GEMINI_API_KEY;
    if (!key) return null;

    try {
      // Build conversation history for Gemini
      const contents = [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: "Understood. I'm ready to represent Koketso as his Digital Twin AI." }] },
        ...history.slice(-6).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userText }] }
      ];

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents, generationConfig: { maxOutputTokens: 200, temperature: 0.8 } })
        }
      );
      if (!res.ok) return null;
      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch {
      return null;
    }
  };

  const handleSend = async (text) => {
    const q = (text || input).trim();
    if (!q) return;

    const userMsg = { role: 'user', text: q };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    // Try Gemini first, fall back to KB
    const aiReply = await callGemini(q, messages);
    const reply = aiReply || getLocalReply(q);

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', text: reply }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass w-[calc(100vw-2rem)] sm:w-[340px] max-w-sm mb-4 flex flex-col overflow-hidden border border-[#00FF9C]/30 shadow-[0_0_40px_rgba(0,255,156,0.15)] rounded-2xl"
            style={{ height: '460px' }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#00FF9C]/5 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#00FF9C]/20 border border-[#00FF9C] flex items-center justify-center text-[#00FF9C]">
                    <Icon name="terminal" size={16} />
                  </div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00FF9C] rounded-full border-2 border-[#000814] animate-ping" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00FF9C] rounded-full border-2 border-[#000814]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Digital Twin AI</div>
                  <div className="text-[10px] text-[#00FF9C] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C]" />
                    {hasKey ? 'Gemini Powered' : 'AI Inference Mode'}
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
                <Icon name="close" size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-[#000814]/60">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-[11px] leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-[#00FF9C] text-[#000814] font-semibold rounded-tr-sm shadow-[0_0_15px_rgba(0,255,156,0.2)]'
                      : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1.5">
                    {[0, 150, 300].map(delay => (
                      <motion.div
                        key={delay}
                        className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: delay / 1000 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Chips */}
            <div className="px-3 py-2 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-none shrink-0 bg-[#000814]/40">
              {CHIPS.map(chip => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="shrink-0 text-[9px] px-2.5 py-1 rounded-full border border-[#00FF9C]/30 text-[#00FF9C] hover:bg-[#00FF9C]/10 transition-all font-bold uppercase tracking-wider"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/5 bg-[#000814]/80 backdrop-blur-md shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask my AI twin..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF9C]/50 transition-colors placeholder:text-white/30"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="p-2.5 bg-[#00FF9C]/20 border border-[#00FF9C] text-[#00FF9C] rounded-xl hover:bg-[#00FF9C] hover:text-[#000814] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(0,255,156,0.2)]"
                >
                  <Icon name="send" size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scan indicator - mobile only */}
      <div className="sm:hidden flex justify-end mb-1">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#00FF9C]/5 border border-[#00FF9C]/20">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full border border-[#00FF9C]/30" />
            <motion.div
              className="absolute inset-0 rounded-full border border-[#00FF9C]"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-[3px] rounded-full bg-[#00FF9C]" />
          </div>
          <span className="text-[8px] font-mono text-[#00FF9C]/60 uppercase tracking-widest">Scan</span>
        </div>
      </div>

      {/* FAB Button with tag */}
      <div className="flex items-center gap-2">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="glass px-3 py-1.5 rounded-xl border border-[#00FF9C]/20 text-[10px] font-mono text-white/70 whitespace-nowrap shadow-[0_0_20px_rgba(0,255,156,0.1)]"
            >
              How can I help you? →
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#00FF9C] text-[#000814] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.5)] relative ring-4 ring-[#00FF9C]/20 shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-[#00FF9C] opacity-25 animate-ping" />
          <Icon name={isOpen ? 'close' : 'chat'} size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatAssistant;

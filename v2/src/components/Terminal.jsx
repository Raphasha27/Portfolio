import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Command Definitions ──────────────────────────────────────────────────────
const COMMANDS = {
  help: {
    desc: 'List all available commands',
    run: () => [
      { t: 'sys', text: '╔══════════════════════════════════════════════════╗' },
      { t: 'sys', text: '║         KIROV DYNAMICS OS v2.0.4 — HELP          ║' },
      { t: 'sys', text: '╚══════════════════════════════════════════════════╝' },
      { t: 'dim', text: '' },
      { t: 'label', text: '  IDENTITY' },
      { t: 'cmd',  text: '  whoami          → Who is Koketso Raphasha?' },
      { t: 'cmd',  text: '  contact         → Email, GitHub, LinkedIn' },
      { t: 'cmd',  text: '  location        → Where I am based' },
      { t: 'dim',  text: '' },
      { t: 'label', text: '  TECHNICAL' },
      { t: 'cmd',  text: '  skills          → Full tech stack breakdown' },
      { t: 'cmd',  text: '  stack           → Current favourite tools' },
      { t: 'cmd',  text: '  experience      → Work & internship history' },
      { t: 'cmd',  text: '  education       → Qualifications & certs' },
      { t: 'cmd',  text: '  projects        → Featured builds' },
      { t: 'dim',  text: '' },
      { t: 'label', text: '  SYSTEM' },
      { t: 'cmd',  text: '  status          → Current availability' },
      { t: 'cmd',  text: '  mission         → What drives me' },
      { t: 'cmd',  text: '  sudo            → Try your luck 😏' },
      { t: 'cmd',  text: '  hack            → Surprise' },
      { t: 'cmd',  text: '  matrix          → Enter the matrix' },
      { t: 'cmd',  text: '  clear           → Clear terminal' },
      { t: 'dim',  text: '' },
      { t: 'hint', text: '  TIP: Use ↑ ↓ to navigate history · TAB to autocomplete' },
    ]
  },

  whoami: {
    desc: 'Who is Koketso Raphasha?',
    run: () => [
      { t: 'sys',  text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { t: 'name', text: '  Koketso Raphasha (Age: 27)' },
      { t: 'sub',  text: '  Software Engineer · Software Architect' },
      { t: 'sys',  text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { t: 'dim',  text: '' },
      { t: 'sys',  text: '  💻 Systems Architect & Software Engineer' },
      { t: 'sys',  text: '  🏢 Co-founder - Kirov Dynamics Technology' },
      { t: 'sys',  text: '  🌍 YES4Youth Member (2025–2026)' },
      { t: 'dim',  text: '' },
      { t: 'sys',  text: '  Building autonomous systems, AI agents, and' },
      { t: 'sys',  text: '  multi-tenant SaaS platforms for Africa and beyond.' },
      { t: 'dim',  text: '' },
      { t: 'hint', text: '  Run "mission" or "experience" to learn more.' },
    ]
  },

  skills: {
    desc: 'Full tech stack breakdown',
    run: () => [
      { t: 'label', text: '  ⚙  LANGUAGES' },
      { t: 'sys',   text: '  JavaScript (ES2024)  TypeScript  Python  C / C++' },
      { t: 'sys',   text: '  Rust  Dart  SQL  Bash  HTML / CSS' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  🖥  FRONTEND' },
      { t: 'sys',   text: '  React 18  Next.js  Vite  Flutter  Framer Motion' },
      { t: 'sys',   text: '  TailwindCSS  Three.js  Figma' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  🛠  BACKEND & APIs' },
      { t: 'sys',   text: '  Node.js  Express  FastAPI  Django  REST  GraphQL' },
      { t: 'sys',   text: '  WebSockets  Socket.io  Prisma  Drizzle' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  🤖  AI / ML' },
      { t: 'sys',   text: '  LangChain  LangGraph  Gemini API  OpenAI  Claude' },
      { t: 'sys',   text: '  Vertex AI  Pinecone  Chroma  RAG  AI Agents' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  ☁  CLOUD & DEVOPS' },
      { t: 'sys',   text: '  Docker  Kubernetes  GitHub Actions  Firebase' },
      { t: 'sys',   text: '  Supabase  Vercel  Railway  AWS  GCP' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  🗄  DATABASES' },
      { t: 'sys',   text: '  PostgreSQL  MongoDB  Redis  SQLite  Firestore' },
    ]
  },

  stack: {
    desc: 'Current favourite tools',
    run: () => [
      { t: 'label', text: '  ⚡ CURRENT FAVOURITE STACK' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  Frontend   →  React + Vite + Framer Motion' },
      { t: 'sys',   text: '  Backend    →  Node.js + FastAPI (Python)' },
      { t: 'sys',   text: '  AI Brain   →  Gemini 2.0 + LangGraph agents' },
      { t: 'sys',   text: '  Database   →  PostgreSQL + Redis + Pinecone' },
      { t: 'sys',   text: '  Infra      →  Docker + Vercel + Railway' },
      { t: 'sys',   text: '  Editor     →  VS Code + Antigravity AI' },
      { t: 'sys',   text: '  OS         →  Ubuntu (WSL2) on Windows 11' },
    ]
  },

  experience: {
    desc: 'Work & internship history',
    run: () => [
      { t: 'label', text: '  💼 WORK EXPERIENCE' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  Systems Architect - Kirov Dynamics Technology' },
      { t: 'sys',   text: '  2025 – Present | Gauteng, South Africa' },
      { t: 'sys',   text: '  · Built AI-powered tools using Gemini & LangChain' },
      { t: 'sys',   text: '  · Developed multi-agent orchestration pipelines' },
      { t: 'sys',   text: '  · Completed cloud, ML & DevOps training programme' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  Co-Founder & CTO — Kirov Dynamics Technology' },
      { t: 'sys',   text: '  2024 – Present | Remote / South Africa' },
      { t: 'sys',   text: '  · Architecting autonomous AI agent platforms' },
      { t: 'sys',   text: '  · Leading full-stack SaaS development (multi-tenant)' },
      { t: 'sys',   text: '  · 29k req/sec throughput on core API layer' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  YES4Youth Participant — 2025–2026' },
      { t: 'sys',   text: '  Youth Employment Service · National Programme' },
    ]
  },

  education: {
    desc: 'Qualifications & certifications',
    run: () => [
      { t: 'label', text: '  🎓 EDUCATION & CERTIFICATIONS' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  BSc Information Technology' },
      { t: 'sys',   text: '  Richfield Graduate Institute of Technology' },
      { t: 'sys',   text: '  Major: Software Engineering | 2021 – 2024' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  WeThinkCode_ Alumni' },
      { t: 'sys',   text: '  Peer-learning software engineering programme' },
      { t: 'dim',   text: '' },
      { t: 'label', text: '  📜 CERTIFICATIONS (10+)' },
      { t: 'sys',   text: '  · Google Cloud Associate Cloud Engineer (in progress)' },
      { t: 'sys',   text: '  · AWS Cloud Practitioner' },
      { t: 'sys',   text: '  · CAPACITI AI & Digital Skills' },
      { t: 'sys',   text: '  · Meta Frontend Developer' },
      { t: 'sys',   text: '  · Cisco Networking Fundamentals' },
      { t: 'sys',   text: '  · Microsoft Azure Fundamentals (AZ-900)' },
    ]
  },

  projects: {
    desc: 'Featured builds',
    run: () => [
      { t: 'label', text: '  🚀 FEATURED PROJECTS' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  Kirov Dynamics OS — Autonomous AI Platform' },
      { t: 'sys',   text: '  Multi-agent orchestration · 29k req/sec · Python + Node' },
      { t: 'link',  text: '  github.com/Raphasha27/AI-Agent' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  Aura Weather AI' },
      { t: 'sys',   text: '  Neural weather intelligence · React + Vite + Framer Motion' },
      { t: 'link',  text: '  github.com/Raphasha27/aura-weather-ai' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  AI Job Market Intelligence' },
      { t: 'sys',   text: '  Heuristic trend forecasting · JS + NLP pipeline' },
      { t: 'link',  text: '  github.com/Raphasha27/ai-job-market-intelligence' },
      { t: 'dim',   text: '' },
      { t: 'name',  text: '  Afro Fashion Mobile' },
      { t: 'sys',   text: '  Premium mobile commerce · Flutter + Firebase' },
      { t: 'link',  text: '  github.com/Raphasha27/afro_fashion_mobile' },
      { t: 'dim',   text: '' },
      { t: 'hint',  text: '  See all → github.com/Raphasha27' },
    ]
  },

  contact: {
    desc: 'Email, GitHub, LinkedIn',
    run: () => [
      { t: 'label', text: '  📡 CONTACT' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  GitHub    →  github.com/Raphasha27' },
      { t: 'sys',   text: '  LinkedIn  →  linkedin.com/in/koketso-raphasha' },
      { t: 'sys',   text: '  Portfolio →  koketso-raphasha.vercel.app' },
      { t: 'dim',   text: '' },
      { t: 'hint',  text: '  DMs open for collabs, opportunities & freelance work.' },
    ]
  },

  location: {
    desc: 'Where I am based',
    run: () => [
      { t: 'sys',  text: '  📍 Gauteng, South Africa' },
      { t: 'sys',  text: '  🌍 Available for remote work globally' },
      { t: 'sys',  text: '  ✈  Open to relocation for the right opportunity' },
    ]
  },

  status: {
    desc: 'Current availability',
    run: () => [
      { t: 'label', text: '  🟢 SYSTEM STATUS' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  Availability   →  OPEN TO OPPORTUNITIES' },
      { t: 'sys',   text: '  Mode           →  Systems Architect @ Kirov Dynamics (active)' },
      { t: 'sys',   text: '  Seeking        →  Full-stack / Software Engineer roles' },
      { t: 'sys',   text: '  Remote         →  Yes ✓' },
      { t: 'sys',   text: '  Freelance      →  Yes ✓' },
      { t: 'dim',   text: '' },
      { t: 'hint',  text: '  Run "contact" to reach out.' },
    ]
  },

  mission: {
    desc: 'What drives me',
    run: () => [
      { t: 'label', text: '  🎯 MISSION' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  "Build autonomous systems that solve real African' },
      { t: 'sys',   text: '   problems — at scale, with intelligence."' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  I believe the next generation of software is not' },
      { t: 'sys',   text: '  written — it is orchestrated. AI agents, not apps.' },
      { t: 'sys',   text: '  Autonomous systems, not dashboards.' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  Kirov Dynamics is the vehicle. The mission is to' },
      { t: 'sys',   text: '  ship infrastructure that thinks for itself.' },
    ]
  },

  sudo: {
    desc: 'Try your luck',
    run: () => [
      { t: 'err',  text: '  [sudo] password for koketso: ' },
      { t: 'err',  text: '  sudo: Authentication failure' },
      { t: 'dim',  text: '' },
      { t: 'sys',  text: '  Nice try 🕵️  — but root access is above your clearance.' },
      { t: 'hint', text: '  You are operating as: visitor (read-only mode)' },
    ]
  },

  hack: {
    desc: 'A surprise',
    run: () => [
      { t: 'warn', text: '  ⚠  INITIATING HACK SEQUENCE...' },
      { t: 'sys',  text: '  > Connecting to mainframe...' },
      { t: 'sys',  text: '  > Bypassing firewall... ████████░░ 80%' },
      { t: 'sys',  text: '  > Injecting payload...' },
      { t: 'sys',  text: '' },
      { t: 'name', text: '  HACK COMPLETE: You have been hired as a senior engineer.' },
      { t: 'sys',  text: '  Salary: Negotiable. Start date: Monday.' },
      { t: 'hint', text: '  jk. But Koketso IS available — run "contact".' },
    ]
  },

  matrix: {
    desc: 'Enter the matrix',
    run: () => [
      { t: 'matrix', text: '01001011 01101111 01101011 01100101 01110100 01110011' },
      { t: 'matrix', text: '01101111 00100000 01010010 01100001 01110000 01101000' },
      { t: 'matrix', text: '01100001 01110011 01101000 01100001 00100000 00111D' },
      { t: 'dim',   text: '' },
      { t: 'sys',   text: '  Decoding... "Koketso Raphasha"' },
      { t: 'sys',   text: '  Neo had a choice. Koketso chose to build the Matrix.' },
    ]
  },
};

const ALL_CMD_NAMES = Object.keys(COMMANDS);

// ─── Colour map ───────────────────────────────────────────────────────────────
const colour = {
  sys:    'text-[#00ffcc]',
  dim:    'text-white/20',
  label:  'text-[#00FF9C] font-bold tracking-widest text-[10px]',
  name:   'text-white font-bold',
  sub:    'text-blue-400 text-xs',
  cmd:    'text-[#7dd3fc]',
  hint:   'text-white/40 italic text-xs',
  link:   'text-blue-400 underline underline-offset-2 text-xs',
  err:    'text-red-400',
  warn:   'text-yellow-400',
  matrix: 'text-[#00FF9C]/50 font-mono text-xs tracking-widest',
  user:   'text-white',
};

// ─── Component ────────────────────────────────────────────────────────────────
const Terminal = () => {
  const [history, setHistory] = useState([
    { t: 'sys',  text: 'Kirov Dynamics OS v2.0.4 loaded.' },
    { t: 'hint', text: 'Type "help" to see all commands.' },
  ]);
  const [input, setInput]       = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx]   = useState(-1);
  const [suggestion, setSuggestion] = useState('');
  const containerRef = useRef(null);
  const inputRef  = useRef(null);

  // auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // autocomplete suggestion
  useEffect(() => {
    if (!input.trim()) { setSuggestion(''); return; }
    const match = ALL_CMD_NAMES.find(c => c.startsWith(input.trim().toLowerCase()) && c !== input.trim().toLowerCase());
    setSuggestion(match ? match.slice(input.trim().length) : '');
  }, [input]);

  const execute = useCallback((raw) => {
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return;

    const prompt = { t: 'user', text: `root@kirov-dynamics:~$ ${raw}` };

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const cmd = COMMANDS[trimmed];
    const output = cmd
      ? cmd.run()
      : [{ t: 'err', text: `  bash: ${trimmed}: command not found. Try "help".` }];

    setHistory(prev => [...prev, prompt, ...output, { t: 'dim', text: '' }]);
    setCmdHistory(prev => [raw, ...prev.slice(0, 49)]);
    setHistIdx(-1);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      execute(input);
      setInput('');
      setSuggestion('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) setInput(input + suggestion);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = histIdx - 1;
      if (next < 0) { setHistIdx(-1); setInput(''); }
      else { setHistIdx(next); setInput(cmdHistory[next]); }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto my-12 px-4"
    >
      <div
        className="rounded-2xl overflow-hidden border border-[#00ffcc]/20 bg-[#060d0f]/95 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,204,0.08)] cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* ── Title Bar ── */}
        <div className="bg-[#0d1117] px-4 py-2.5 flex items-center gap-3 border-b border-[#00ffcc]/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 text-center text-[10px] text-white/30 font-mono tracking-[0.25em] uppercase">
            kirov_nexus_terminal — bash
          </div>
          <div className="text-[9px] font-mono text-[#00ffcc]/30 animate-pulse">● LIVE</div>
        </div>

        {/* ── Body ── */}
        <div ref={containerRef} className="p-4 sm:p-5 font-mono text-xs sm:text-sm h-72 sm:h-80 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#00ffcc]/20">
          <AnimatePresence initial={false}>
            {history.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`mb-[3px] leading-relaxed whitespace-pre-wrap break-words ${colour[line.t] ?? 'text-[#00ffcc]'}`}
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* ── Input Row ── */}
          <div className="flex items-center mt-2 group">
            <span className="text-[#00FF9C] shrink-0 mr-2 select-none">root@kirov-dynamics:~$</span>
            <div className="flex-1 relative flex items-center">
              <span className="text-[#00ffcc] whitespace-pre">{input}</span>
              {/* ghost autocomplete */}
              {suggestion && (
                <span className="text-white/20 select-none">{suggestion}</span>
              )}
              {/* blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
                className="inline-block w-[7px] h-[14px] bg-[#00ffcc] ml-0.5 align-middle"
              />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value); setHistIdx(-1); }}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 w-full bg-transparent border-none outline-none text-transparent caret-transparent"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>

        {/* ── Footer hint ── */}
        <div className="bg-[#0d1117]/60 border-t border-[#00ffcc]/5 px-4 py-1.5 flex items-center justify-between">
          <span className="text-[9px] font-mono text-white/20">↑ ↓ history · TAB autocomplete · ENTER execute</span>
          <span className="text-[9px] font-mono text-[#00ffcc]/20">kirov-os v2.0.4</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Kirov Dynamics OS v2.0.4 loaded.' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, clear, sudo',
    whoami: 'Koketso Raphasha - Autonomous AI Engineer & Systems Architect.',
    skills: 'React, Node.js, Python, TypeScript, LangChain, C++, Rust, AI Agents',
    sudo: 'Nice try! But you do not have root privileges here. 🕵️‍♂️'
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;
      
      const newHistory = [...history, { type: 'user', text: `root@kirov-dynamics:~$ ${input}` }];
      
      if (trimmed === 'clear') {
        setHistory([]);
      } else {
        const response = commands[trimmed] || `Command not found: ${trimmed}. Type "help" for a list of commands.`;
        newHistory.push({ type: 'system', text: response });
        setHistory(newHistory);
      }
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto my-12"
    >
      <div className="rounded-xl overflow-hidden border border-[#00ffcc]/30 bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,204,0.15)]">
        {/* Terminal Header */}
        <div className="bg-[#111] px-4 py-3 flex items-center border-b border-[#333]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-xs text-gray-400 font-mono tracking-wider">kirov_nexus_terminal</div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-5 font-mono text-sm h-64 overflow-y-auto text-green-400">
          {history.map((line, index) => (
            <div key={index} className={`mb-2 ${line.type === 'user' ? 'text-white' : 'text-[#00ffcc]'}`}>
              {line.text}
            </div>
          ))}
          
          <div className="flex items-center mt-2">
            <span className="text-white mr-2">root@kirov-dynamics:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-[#00ffcc] caret-[#00ffcc]"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;

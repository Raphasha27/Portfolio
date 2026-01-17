import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-8 text-center border-t transition-all duration-500 relative z-10 w-full ${
      isDarkMode ? 'bg-slate-950/50 border-white/10' : 'bg-white border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          © {new Date().getFullYear()} Koketso Raphasha. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs font-medium">
          <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>Built with</span>
          <span className="text-blue-500">React</span>
          <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>•</span>
          <span className="text-purple-500">Tailwind</span>
          <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>•</span>
          <span className="text-pink-500">Framer Motion</span>
          <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>•</span>
          <span className="text-green-500 font-bold">Intelligent AI</span>
        </div>
        <p className={`text-[10px] mt-2 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>Featuring intelligent chatbot powered by advanced language models</p>
      </div>
    </footer>
  );
};

export default Footer;

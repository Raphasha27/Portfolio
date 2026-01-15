import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 relative z-10 w-full bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-400 text-sm mb-3">
          © {new Date().getFullYear()} Koketso Raphasha. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>Built with</span>
          <span className="text-blue-400 font-semibold">React</span>
          <span>•</span>
          <span className="text-purple-400 font-semibold">Three.js</span>
          <span>•</span>
          <span className="text-pink-400 font-semibold">Framer Motion</span>
          <span>•</span>
          <span className="text-green-400 font-semibold">Intelligent AI</span>
        </div>
        <p className="text-xs text-slate-600 mt-2">Featuring intelligent chatbot powered by advanced language models</p>
      </div>
    </footer>
  );
};

export default Footer;

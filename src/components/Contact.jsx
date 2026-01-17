import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className={`py-20 px-4 relative z-10 w-full transition-colors duration-500 ${
      isDarkMode ? 'bg-transparent' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={`backdrop-blur-xl rounded-3xl p-12 border shadow-2xl relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700' 
              : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Ready to <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Collaborate?</span>
          </h2>
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:contact@koketso.dev" className="px-12 py-5 bg-blue-600 rounded-xl text-lg font-bold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all inline-flex items-center gap-3 transform hover:-translate-y-1 text-white">
            <Mail className="w-6 h-6" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

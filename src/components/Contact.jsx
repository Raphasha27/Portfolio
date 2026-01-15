import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative z-10 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Collaborate?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:contact@koketso.dev" className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all inline-flex items-center gap-3 transform hover:-translate-y-1 text-white">
            <Mail className="w-6 h-6" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

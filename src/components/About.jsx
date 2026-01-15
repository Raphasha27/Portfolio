import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const cards = [
    { 
      title: "Driven Innovator", 
      icon: Rocket, 
      text: "Co-founder of Kid of Dynamics, passionate about creating tech solutions that make a real difference." 
    },
    { 
      title: "Lifelong Learner", 
      icon: BookOpen, 
      text: "Continuously mastering new tech, from Google Advanced ML to the latest Web Frameworks." 
    },
    { 
      title: "Community Leader", 
      icon: Globe, 
      text: "Active member of Fire4s Group & YES4Youth, mentoring and growing with the tech community." 
    },
    {
      title: "Growing in Tech",
      icon: TrendingUp,
      text: "Expanding expertise into Game Development and Data Analysis to build immersive, data-driven experiences."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/30 backdrop-blur-md relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">About Me</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:bg-slate-800 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                <card.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const Associates = ({ isDarkMode }) => {
  const partners = [
    { name: "Richfield", color: "text-red-500" },
    { name: "CAPACITI", color: "text-blue-500" },
    { name: "Google", color: "text-green-500" },
    { name: "Coursera", color: "text-blue-400" },
    { name: "Indeed", color: "text-indigo-600" },
    { name: "Kid of Dynamic", color: "text-purple-500" },
    { name: "GitHub", color: isDarkMode ? "text-slate-200" : "text-slate-900" }
  ];

  // Duplicate the array to create a seamless loop
  const loopingPartners = [...partners, ...partners, ...partners];

  return (
    <section className={`py-8 transition-colors duration-500 border-t relative z-10 w-full overflow-hidden ${
      isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-100'
    }`}>
      <div className="max-w-full mx-auto relative px-4">
        <div className={`absolute left-0 top-0 w-32 h-full z-10 ${isDarkMode ? 'bg-gradient-to-r from-slate-950 to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
        <div className={`absolute right-0 top-0 w-32 h-full z-10 ${isDarkMode ? 'bg-gradient-to-l from-slate-950 to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>
        
        <h3 className={`text-center text-xs mb-6 uppercase tracking-[0.3em] font-medium transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Trusted By & Associated With</h3>
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ 
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {loopingPartners.map((partner, index) => (
              <div
                key={index}
                className="text-2xl font-bold font-sans flex items-center gap-2 group cursor-default"
              >
                <span className={`${partner.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0`}>
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Associates;

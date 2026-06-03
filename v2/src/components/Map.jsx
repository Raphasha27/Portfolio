import React from 'react';
import { motion } from 'framer-motion';
import gautengMap from '../assets/gauteng-map.png';

const Map = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <section id="location" className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 sm:space-y-4">
            <div className="text-blue-400 font-bold text-xs tracking-[0.3em] uppercase">— PRESENCE —</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Global Reach, <span className="text-blue-400">Local Roots</span></h2>
            <p className="text-text-dim text-sm sm:text-base max-w-md">
              Based in the heart of Gauteng, South Africa. Delivering high-performance solutions to the world.
            </p>
          </div>
          <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-500/20 flex items-center gap-3 sm:gap-4 self-start">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold font-mono text-blue-400 uppercase tracking-widest">Pretoria, South Africa</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-1.5 sm:p-2 rounded-2xl sm:rounded-[40px] border border-blue-500/30 overflow-hidden h-[280px] sm:h-[380px] lg:h-[450px] relative group bg-white/5"
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-20">
              <div className="w-20 h-20 border-2 border-blue-500/20 rounded-full border-t-blue-500 animate-spin mb-4" />
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em] animate-pulse">Initializing Map Data...</div>
              {/* Fake scan line */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[length:100%_4px] animate-scan" />
            </div>
          )}

          {/* Static Map Image */}
          <img 
            src={gautengMap} 
            alt="Map of Pretoria, South Africa" 
            className={`w-full h-full object-cover rounded-[32px] transition-opacity duration-1000 ${isLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Cinematic Overlay to match the theme */}
          <div className="absolute inset-0 pointer-events-none border-[20px] border-blue-500/10 rounded-[40px]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050d12] via-transparent to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;

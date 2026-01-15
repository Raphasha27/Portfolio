import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const LiveInfoCards = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({
    temp: 24,
    condition: 'Partly Cloudy',
    location: 'Centurion, SA',
    humidity: 65,
    wind: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {/* Calendar Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-xl">
            <CalendarIcon className="w-5 h-5 text-blue-300" />
          </div>
          <h3 className="font-bold text-white text-sm">Live Calendar</h3>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">{formatTime(currentTime)}</p>
          <p className="text-sm text-slate-300">{formatDate(currentTime)}</p>
        </div>
      </motion.div>

      {/* Weather Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-500/20 rounded-xl">
            <Cloud className="w-5 h-5 text-orange-300" />
          </div>
          <h3 className="font-bold text-white text-sm">Climate</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">{weather.temp}°C</p>
            <Sun className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-sm text-slate-300">{weather.condition}</p>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <MapPin className="w-3 h-3" />
            <span>{weather.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Code Identity Card - Spans 2 columns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:col-span-2 backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-3xl p-6 shadow-2xl hover:border-blue-500/30 transition-all overflow-hidden relative"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-slate-400 ml-2">developer_identity.js</span>
          </div>
          
          <div className="font-mono text-sm space-y-1">
            <div className="text-slate-500">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">developer</span>{' '}
              <span className="text-slate-400">=</span>{' '}
              <span className="text-yellow-300">{'{'}</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">name</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Koketso Raphasha'</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">role</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Software Developer & AI Specialist'</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">skills</span>
              <span className="text-slate-400">:</span>{' '}
              [<span className="text-orange-300">'React'</span>,{' '}
              <span className="text-orange-300">'Python'</span>,{' '}
              <span className="text-orange-300">'AI/ML'</span>,{' '}
              <span className="text-orange-300">'Cloud'</span>]
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">passion</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Building intelligent systems'</span>
            </div>
            <div className="text-yellow-300">{'}'}</div>
            <div className="mt-2 text-slate-500">
              <span className="text-purple-400">console</span>
              <span className="text-slate-400">.</span>
              <span className="text-blue-300">log</span>
              <span className="text-slate-400">(</span>
              developer
              <span className="text-slate-400">)</span>
              <span className="text-green-400 ml-2">// Ready to create amazing things! 🚀</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveInfoCards;

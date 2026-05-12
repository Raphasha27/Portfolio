import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section id="location" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="text-blue-400 font-bold text-xs tracking-[0.3em] uppercase">— PRESENCE —</div>
            <h2 className="text-4xl font-bold">Global Reach, <span className="text-blue-400">Local Roots</span></h2>
            <p className="text-text-dim max-w-md">
              Based in the heart of Gauteng, South Africa. Delivering high-performance solutions to the world.
            </p>
          </div>
          <div className="glass px-6 py-4 rounded-2xl border border-blue-500/20 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <span className="text-sm font-bold font-mono text-blue-400">Pretoria, South Africa</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-2 rounded-[40px] border-white/5 overflow-hidden h-[450px] relative group"
        >
          {/* Real Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.3956793132!2d28.1122679469733!3d-25.747867623910543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cae7c0d41%3A0xd6b60706247c3e5d!2sPretoria!5e0!3m2!1sen!2sza!4v1715291234567!5m2!1sen!2sza" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) brightness(0.8) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[32px] opacity-80 group-hover:opacity-100 transition-opacity"
          ></iframe>
          
          {/* Cinematic Overlay to match the theme */}
          <div className="absolute inset-0 pointer-events-none border-[20px] border-bg/50 rounded-[40px]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg via-transparent to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;

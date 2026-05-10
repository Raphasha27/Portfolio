import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const services = [
  { title: "Mobile App Development", desc: "High-performance mobile apps with beautiful UI and smooth UX.", icon: "smartphone" },
  { title: "UI/UX Design", desc: "Designing intuitive and engaging user experiences that convert.", icon: "layout" },
  { title: "Autonomous Systems", desc: "Building intelligent systems with automation and smart infrastructure.", icon: "cpu" },
  { title: "Cloud & DevOps", desc: "Scalable cloud solutions with CI/CD and modern dev practices.", icon: "cloud" }
];

const Services = () => {
  return (
    <div id="services" className="space-y-12">
      <div className="text-center space-y-4">
        <div className="text-green-400 font-bold text-xs tracking-[0.3em] uppercase">— WHAT I DO —</div>
        <h2 className="text-4xl font-bold">Services & <span className="text-green-400">Expertise</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="glass p-8 text-center group hover:border-green-500/30 transition-all rounded-[32px] relative overflow-hidden">
            {/* Subtle Background Image Overlay */}
            <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity pointer-events-none">
              <img src="/src/assets/experience-bg.png" alt="" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/80 to-bg pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#0a161d] flex items-center justify-center text-green-400 mx-auto mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,201,136,0.15)] border border-white/5">
                <Icon name={service.icon} size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-green-400 transition-colors">{service.title}</h3>
              <p className="text-[11px] text-text-dim leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

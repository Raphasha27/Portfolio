import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Service Images
import serviceMobile from '../assets/service-mobile.png';
import serviceUiux from '../assets/service-uiux.png';
import serviceAutonomous from '../assets/service-autonomous.png';
import serviceCloud from '../assets/service-cloud.png';

const services = [
  { 
    title: "Mobile App Development", 
    desc: "High-performance mobile apps with beautiful UI and smooth UX.", 
    icon: "smartphone",
    image: serviceMobile
  },
  { 
    title: "UI/UX Design", 
    desc: "Designing intuitive and engaging user experiences that convert.", 
    icon: "layout",
    image: serviceUiux
  },
  { 
    title: "Autonomous Systems", 
    desc: "Building intelligent systems with automation and smart infrastructure.", 
    icon: "cpu",
    image: serviceAutonomous
  },
  { 
    title: "Cloud & DevOps", 
    desc: "Scalable cloud solutions with CI/CD and modern dev practices.", 
    icon: "cloud",
    image: serviceCloud
  }
];

const Services = () => {
  return (
    <div id="services" className="space-y-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#050d12] border border-white/10 rounded-[24px] overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
          >
            {/* Top Image Section */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Subtle Overlay to ensure icon contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="relative flex-1 px-8 pb-10 pt-12 flex flex-col items-center text-center">
              {/* Overlapping Icon Circle */}
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#050d12] border-2 flex items-center justify-center shadow-lg transition-all duration-500 z-20 border-blue-500/40 text-blue-400 shadow-[0_0_30_rgba(59,130,246,0.2)] group-hover:border-blue-400">
                <Icon name={service.icon} size={32} />
              </div>

              <h3 className="font-bold text-xl mb-4 transition-colors duration-300 tracking-tight text-white group-hover:text-blue-400">
                {service.title}
              </h3>
              
              <div className="w-12 h-[2px] mb-4 group-hover:w-20 transition-all duration-500 bg-blue-500/30 group-hover:bg-blue-400" />
              
              <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {service.desc}
              </p>
            </div>
            
            {/* Hover Accent Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] bg-blue-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;


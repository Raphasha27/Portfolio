import React from 'react';
import { motion } from 'framer-motion';
import sarahImg from '../assets/testimonial_sarah_1778662853023.png';
import lethaboImg from '../assets/testimonial_lethabo_1778662913006.png';
import jamesImg from '../assets/testimonial_james_1778662958421.png';
import amaraImg from '../assets/testimonial_amara_1778662977211.png';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO @ TechNexus",
    text: "Working with Kirov was a game-changer. The autonomous infrastructure they built for us reduced our operational overhead by 40% in just three months. Precision engineering at its best! 💎",
    image: sarahImg,
    tag: "Client"
  },
  {
    name: "Lethabo Modise",
    role: "Senior Dev @ Kirov Dynamics",
    text: "As a teammate, Koketso brings a level of technical depth that's rare. Their ability to architect complex agentic systems while keeping the codebase clean and maintainable is inspiring. 🚀",
    image: lethaboImg,
    tag: "Team Member"
  },
  {
    name: "James Sterling",
    role: "Director of Ops @ GlobalLogistics",
    text: "The real-time tracking system Kirov Dynamics developed exceeded all our expectations. It's robust, scalable, and the UI is incredibly intuitive. A true professional. ✅",
    image: jamesImg,
    tag: "Client"
  },
  {
    name: "Amara Okoro",
    role: "Founder @ EcoStream",
    text: "Koketso's insight into AI and data analytics helped us pivot our strategy with data-backed confidence. The results speak for themselves. Highly recommended! 🤝",
    image: amaraImg,
    tag: "Client"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-24 bg-[#050d12] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-between items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.8em] uppercase font-mono text-white leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Client <span className="text-green-400">Feedback</span>
            </h2>
            <div className="text-green-400 text-[10px] font-mono uppercase tracking-[0.5em] font-black opacity-60">Verified Testimonials: Node 4.0</div>
          </div>
          <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[11px] font-bold text-green-400 uppercase tracking-[0.3em]">Status: Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[32px] border border-white/5 hover:border-green-500/30 transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-8 opacity-20 text-4xl font-serif">"</div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-green-500/50 transition-colors">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.name}</h3>
                  <p className="text-green-400/80 text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-sm bg-white/5 text-[8px] font-bold uppercase tracking-wider text-white/40 border border-white/10">
                    {t.tag}
                  </span>
                </div>
              </div>

              <p className="text-text-dim text-lg leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

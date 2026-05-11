import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import heroBg from '../assets/hero_bg_sa_flag_lower_1778236334988.png';
import { Icon } from './Icons';

const CountUp = ({ to }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        count.set(to);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const techStack = [
  { name: 'Python', id: 'python' },
  { name: 'React', id: 'react' },
  { name: 'Node.js', id: 'node' },
  { name: 'Docker', id: 'docker' },
  { name: 'PostgreSQL', id: 'postgres' },
  { name: 'Azure', id: 'azure' },
  { name: 'TensorFlow', id: 'tensorflow' },
  { name: 'GitHub', id: 'github' }
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ["DIGITAL SOLUTIONS", "MOBILE ECOSYSTEMS", "AUTONOMOUS SYSTEMS", "PREMIUM INTERFACES"];
  const [phraseIdx, setPhrasesIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[phraseIdx];
      if (!isDeleting) {
        setTypedText(current.substring(0, typedText.length + 1));
        if (typedText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(current.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setPhrasesIdx((phraseIdx + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  return (
    <div id="home" className="relative overflow-hidden min-h-screen lg:h-screen bg-[#050d12] flex items-center">
      {/* Cinematic Background with SA Flag Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="Johannesburg backdrop" 
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d12] via-[#050d12]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-transparent to-transparent"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Identity & Call to Action */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-text-dim uppercase tracking-widest shadow-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Autonomous AI Engineer
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] uppercase">
              I BUILD <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent glow-text-sm inline-block min-h-[1.1em]">
                {typedText}
              </span>
            </h1>

            <p className="text-text-dim text-md md:text-lg max-w-lg leading-relaxed">
              Software Developer passionate about building <span className="text-green-400 font-bold">clean</span>, 
              <span className="text-cyan-400 font-bold ml-1">scalable</span> and <span className="text-white font-bold ml-1">intelligent</span> solutions.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Email', val: 'raphashakoketso9@gmail.com', icon: 'mail', href: 'mailto:raphashakoketso9@gmail.com' },
                { label: 'Phone', val: '0781172470', icon: 'phone', href: 'tel:0781172470' },
                { label: 'GitHub', val: 'raphasha27', icon: 'github', href: 'https://github.com/raphasha27' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" className="glass p-3 flex items-center gap-3 hover:bg-white/5 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={14} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[7px] font-bold text-text-dim uppercase tracking-widest leading-none mb-1">{item.label}</div>
                    <div className="text-[9px] font-bold truncate text-white/90">{item.val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Projects', val: 1.2, suffix: 'k+', icon: 'thumbsup' },
                { label: 'Happy Users', val: 12.5, suffix: 'k+', icon: 'heart' },
                { label: 'Avg. Rating', val: 4.9, suffix: '', icon: 'star' },
              ].map((stat, i) => (
                <div key={i} className="glass p-3 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400 shrink-0">
                    <Icon name={stat.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white leading-none">
                      <CountUp to={stat.val} />{stat.suffix}
                    </div>
                    <div className="text-[8px] text-text-dim font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Performance & Stack Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] space-y-4">
              {/* Main OS Interface Card */}
              <div className="glass p-6 rounded-3xl border border-green-500/20 shadow-[0_0_80px_rgba(0,229,160,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full pointer-events-none" />
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest">System Architecture v2.0</div>
                  </div>
                  <div className="flex gap-3 text-text-dim/40">
                    <Icon name="signal" size={14} />
                    <Icon name="zap" size={14} />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Capabilities */}
                  <div className="space-y-4">
                    {[
                      { label: 'Autonomous Systems', val: 92, icon: 'cpu' },
                      { label: 'Full-Stack Architecture', val: 88, icon: 'layout' },
                      { label: 'Mobile Ecosystems', val: 95, icon: 'smartphone' },
                    ].map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between text-[10px] font-bold text-text-dim mb-2 group-hover:text-white transition-colors">
                          <span className="flex items-center gap-2">
                             <Icon name={item.icon} size={14} className="text-green-400" />
                             {item.label}
                          </span>
                          <span className="text-green-400">{item.val}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.val}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                            className="h-full bg-gradient-to-r from-green-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cinematic Quote Block */}
                  <div className="border-l-4 border-green-500 bg-green-500/5 p-4 rounded-r-2xl italic text-[11px] text-text-dim/80 leading-relaxed">
                    "Autonomous systems ensure that code remains clean and successful, ready to push to production."
                  </div>
                </div>
              </div>

              {/* Quick Action Button */}
              <a href="#projects" className="w-full px-6 py-4 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold rounded-2xl hover:bg-green-500 hover:text-bg transition-all flex items-center justify-center gap-3 uppercase tracking-[0.3em] shadow-lg shadow-green-500/5">
                Launch Inventory <Icon name="rocket" size={16} />
              </a>

              {/* Engine Bar (Positioned under the button) */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass w-full px-6 py-3 rounded-2xl border border-white/10 flex items-center justify-between shadow-xl"
              >
                <div className="text-[8px] font-bold text-green-400 uppercase tracking-[0.3em] opacity-60">Engine</div>
                <div className="flex gap-4 items-center">
                  {techStack.map((tech, i) => (
                    <div key={i} className="group relative">
                      <div className="w-5 h-5 group-hover:scale-125 transition-all duration-300">
                         <Icon name={tech.id} size={18} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

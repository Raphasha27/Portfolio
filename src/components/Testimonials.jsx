import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Amara Okoro",
    role: "Founder @ EcoStream",
    text: "Koketso's insight into AI and data analytics helped us pivot our strategy with data-backed confidence. The results speak for themselves. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    tag: "Client"
  },
  {
    name: "Rajesh Kumar",
    role: "Senior Dev @ Kirov Dynamics",
    text: "As a teammate, Koketso brings a level of technical depth that's rare. Their ability to architect complex agentic systems while keeping the codebase clean and maintainable is inspiring.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    tag: "Team Member"
  },
  {
    name: "Priya Sharma",
    role: "CTO @ Indus Cloud",
    text: "The real-time tracking system Kirov Dynamics developed exceeded all our expectations. It's robust, scalable, and the UI is incredibly intuitive. A true professional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    tag: "Client"
  },
  {
    name: "Arjun Mehta",
    role: "VP Engineering @ CloudBase",
    text: "Working with Kirov was a game-changer. The autonomous infrastructure they built for us reduced our operational overhead by 40% in just three months. Precision engineering at its best!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    tag: "Client"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 sm:mb-16 gap-4">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.3em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none">
              Client <span className="text-blue-400">Feedback</span>
            </h2>
            <div className="text-blue-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black opacity-60">Verified Testimonials: Node 4.0</div>
          </div>
          <div className="px-4 sm:px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2 self-start">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em]">Status: Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-5 sm:p-8 rounded-2xl sm:rounded-[32px] border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative group"
            >
              <div className="absolute top-4 sm:top-6 right-6 sm:right-8 opacity-20 text-3xl sm:text-4xl font-serif">"</div>
              
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">{t.name}</h3>
                  <p className="text-blue-400/80 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-sm bg-white/5 text-[8px] font-bold uppercase tracking-wider text-white/40 border border-white/10">
                    {t.tag}
                  </span>
                </div>
              </div>

              <p className="text-text-dim text-sm sm:text-lg leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="absolute bottom-0 left-6 sm:left-8 right-6 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';
import { Icon } from './Icons';

const industries = [
  { name: "Government", icon: "globe" },
  { name: "Municipalities", icon: "building" },
  { name: "Mining", icon: "cpu" },
  { name: "Construction", icon: "activity" },
  { name: "Banking & Finance", icon: "shield" },
  { name: "Healthcare", icon: "activity" },
  { name: "Education", icon: "code" },
  { name: "Agriculture", icon: "globe" },
  { name: "Logistics & Transport", icon: "activity" },
  { name: "Manufacturing", icon: "cpu" },
  { name: "Retail & E-Commerce", icon: "code" },
  { name: "Telecommunications", icon: "activity" },
  { name: "Energy & Utilities", icon: "zap" },
  { name: "Property Development", icon: "code" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Industries = () => {
  return (
    <div id="industries" className="space-y-8 sm:space-y-16 py-6 sm:py-12">
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">— Industries —</span>
          <div className="h-px bg-white/20 w-12 sm:w-24" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Sectors <span className="text-[#00FF9C]">We Serve</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
        >
          14 industries where Kirov Dynamics delivers technology and infrastructure solutions
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 relative max-w-7xl mx-auto"
      >
        {industries.map((industry, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.25 } }}
            className="group bg-[#0a161d] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-[#00FF9C]/40 transition-all duration-400 cursor-default"
          >
            <div className="w-16 h-16 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center justify-center text-[#00FF9C] group-hover:bg-[#00FF9C]/20 group-hover:border-[#00FF9C]/50 group-hover:scale-110 transition-all duration-300 shrink-0">
              <Icon name={industry.icon} size={28} />
            </div>
            <h3 className="text-sm font-semibold text-white/90 group-hover:text-[#00FF9C] transition-colors leading-tight">
              {industry.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industries;
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import { PRIORITY_TECHS, getTechInfo } from '../config/technologies';

const TechMarquee = () => {
  // Generate tech array from standardized config
  const bannerTechs = PRIORITY_TECHS.map(techKey => {
    const techInfo = getTechInfo(techKey);
    return {
      name: techInfo.name,
      id: techInfo.icon
    };
  });

  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <div className="py-2 sm:py-3 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 sm:gap-12 items-center whitespace-nowrap"
      >
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-3 h-3 sm:w-4 sm:h-4 opacity-60">
              <Icon name={tech.id} size={16} />
            </div>
            <span className="text-[8px] sm:text-[9px] font-medium text-white/40 font-mono">
              {tech.name}
            </span>
            <div className="w-0.5 h-0.5 rounded-full bg-white/10 ml-1 sm:ml-2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;

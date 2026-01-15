import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Brain, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Terminal,
      skills: [
        { name: "Python", level: 90, color: "bg-green-500" },
        { name: "Java", level: 85, color: "bg-orange-500" },
        { name: "JavaScript/TypeScript", level: 88, color: "bg-yellow-400" },
        { name: "C++", level: 75, color: "bg-blue-600" },
        { name: "Go", level: 70, color: "bg-cyan-500" },
        { name: "SQL", level: 85, color: "bg-purple-500" },
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Tools",
      icon: Layout,
      skills: [
        { name: "React / Next.js", level: 92, color: "bg-blue-400" },
        { name: "Spring Boot", level: 80, color: "bg-green-400" },
        { name: "Tailwind CSS", level: 95, color: "bg-teal-400" },
        { name: "Docker / K8s", level: 75, color: "bg-blue-500" },
        { name: "TensorFlow / PyTorch", level: 70, color: "bg-orange-400" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10 w-full bg-green-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium tracking-wider uppercase text-sm">Proficiency Calculator</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Expertise</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all shadow-2xl shadow-black/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2 text-sm font-medium">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${skill.color} shadow-[0_0_10px_rgba(34,197,94,0.3)] relative group`}
                      >
                         <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

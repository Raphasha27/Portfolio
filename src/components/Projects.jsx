import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Zap, Database, ExternalLink, Github, Globe, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
          title: "FlowSentinel",
          description: "Enterprise-grade API rate limiter and traffic control system built with Go microservices architecture.",
          longDescription: "Implemented token bucket algorithm with Redis for distributed rate limiting. Handles 10k+ requests/second with sub-millisecond latency. Features real-time analytics dashboard and adaptive throttling based on server load.",
          tags: ["Go", "Redis", "Docker", "Kubernetes"],
          icon: <Shield className="w-6 h-6 text-blue-400" />,
          stats: { users: "500+", uptime: "99.9%", throughput: "10k req/s" },
          github: "https://github.com/Raphasha27/flowsentinel"
        },
        {
          title: "EduStream Pro",
          description: "AI-powered intelligent student hub with neural network-based content recommendations.",
          longDescription: "Developed custom TensorFlow model for personalized learning paths. Integrated NLP for automated quiz generation and student performance prediction. Achieved 85% accuracy in predicting student outcomes using LSTM networks.",
          tags: ["React", "Python", "TensorFlow", "FastAPI"],
          icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
          stats: { users: "2k+", accuracy: "85%", courses: "150+" },
          github: "https://github.com/Raphasha27/edustream-pro" 
        },
        {
          title: "CycleSync",
          description: "Full-stack bicycle rental platform with real-time GPS tracking and payment integration.",
          longDescription: "Built responsive Next.js frontend with server-side rendering. Implemented PostgreSQL with complex relational schemas for rental management. Integrated Stripe payment gateway and Google Maps API for route planning.",
          tags: ["Next.js", "PostgreSQL", "Stripe", "MapBox"],
          icon: <Zap className="w-6 h-6 text-yellow-400" />,
          stats: { bookings: "5k+", bikes: "200+", cities: "3" },
          github: "https://github.com/Raphasha27/cyclesync"
        },
        {
          title: "FinAxis",
          description: "Secure financial transaction processor with ML-based fraud detection system.",
          longDescription: "Architected microservices with Spring Boot following Clean Architecture principles. Implemented Kafka event streaming for real-time transaction processing. Built RandomForest classifier achieving 94% fraud detection accuracy.",
          tags: ["Java", "Spring Boot", "Kafka", "ML"],
          icon: <Database className="w-6 h-6 text-green-400" />,
          stats: { transactions: "100k+", fraud: "94%", latency: "<100ms" },
          github: "https://github.com/Raphasha27/finaxis"
        }
      ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30 backdrop-blur-md relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Portfolio Showcase</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span></h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Production-ready applications built with modern tech stacks, serving real users worldwide</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="group bg-slate-800/30 rounded-2xl border border-slate-700 hover:border-blue-500/50 overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group/link cursor-pointer"
                      title="View Code on GitHub"
                    >
                      <Github className="w-5 h-5 text-slate-300 group-hover/link:text-white group-hover/link:scale-110 transition-all" />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors text-white">{project.title}</h3>
                <p className="text-slate-400 mb-3 text-sm font-medium">{project.description}</p>
                <p className="text-slate-500 text-xs mb-6 leading-relaxed">{project.longDescription}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-xs text-slate-500 uppercase mb-1">{key}</p>
                      <p className="text-sm font-bold text-blue-400">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

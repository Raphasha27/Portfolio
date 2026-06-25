import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const bannerTechs = [
  { name: "React",           id: "react"        },
  { name: "C",               id: "c"            },
  { name: "C++",             id: "cplusplus"    },
  { name: "Python",          id: "python"       },
  { name: "Java",            id: "java"         },
  { name: "Go",              id: "go"           },
  { name: "Rust",            id: "rust"         },
  { name: "Swift",           id: "swift"        },
  { name: "Node.js",         id: "node"         },
  { name: "FastAPI",         id: "fastapi"      },
  { name: "Expo",            id: "expo"         },
  { name: "Android Studio",  id: "androidstudio"},
  { name: "Streamlit",       id: "streamlit"    },
  { name: "Kaggle",          id: "kaggle"       },
  { name: "Jupyter",         id: "jupyter"      },
  { name: "R",               id: "r"            },
  { name: "PostgreSQL",      id: "postgres"     },
  { name: "TypeScript",      id: "typescript"   },
  { name: "Next.js",         id: "nextjs"       },
  { name: "Docker",          id: "docker"       },
  { name: "MongoDB",         id: "mongodb"      },
  { name: "Tailwind CSS",    id: "tailwindcss"  },
  { name: "GitHub Actions",  id: "githubactions" },
  { name: "LangChain",       id: "langchain"    },
  { name: "Redis",           id: "redis"        },
  { name: "Framer Motion",   id: "framer"       },
  { name: "TensorFlow",      id: "tensorflow"   },
  { name: "PyTorch",         id: "pytorch"      },
  { name: "Kubernetes",      id: "kubernetes"   },
  { name: "Linux",           id: "linux"        },
  { name: "Kali Linux",      id: "kalilinux"    },
  { name: "Wireshark",       id: "wireshark"    },
  { name: "Vite",            id: "vite"         },
];

const TechMarquee = () => {
  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <div className="py-3 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center whitespace-nowrap"
      >
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <div className="w-4 h-4 opacity-60">
              <Icon name={tech.id} size={16} />
            </div>
            <span className="text-[9px] font-medium text-white/40 font-mono">
              {tech.name}
            </span>
            <div className="w-0.5 h-0.5 rounded-full bg-white/10 ml-2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;

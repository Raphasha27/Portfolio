import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from './Icons';
import profileImg from '/profile-cutout.png';

const Typewriter = () => {
  const titles = ['Software Engineer', 'Systems Architect', 'Co-Founder', 'Full Stack Dev'];
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[idx];
    let timer;
    if (deleting) {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % titles.length);
      }
    } else {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      } else {
        timer = setTimeout(() => setDeleting(true), 2000);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, idx, titles]);

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-[#00FF9C] ml-1 align-middle"
      />
    </span>
  );
};

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration, isInView]);
  return <span ref={ref}>{count}</span>;
};

const socialLinks = [
  { name: 'GitHub',    icon: 'github',     link: 'https://github.com/raphasha27',                    color: 'hover:text-white' },
  { name: 'LinkedIn',  icon: 'linkedin',   link: 'https://linkedin.com/in/koketso-raphasha',         color: 'hover:text-blue-400' },
  { name: 'Facebook',  icon: 'facebook',   link: 'https://www.facebook.com/kirovdynamicstechnology',  color: 'hover:text-blue-500' },
  { name: 'Twitter',   icon: 'twitter',    link: 'https://twitter.com/raphasha27',                    color: 'hover:text-sky-400' },
  { name: 'Kaggle',    icon: 'kaggle',     link: 'https://kaggle.com/Raphasha27',                     color: 'hover:text-blue-300' },
  { name: 'Streamlit', icon: 'streamlit',  link: 'https://share.streamlit.io/user/raphasha27',        color: 'hover:text-red-400' },
  { name: 'WhatsApp',  icon: 'whatsapp',   link: 'https://wa.me/27781172470',                         color: 'hover:text-green-400' },
  { name: 'Email',     icon: 'mail',       link: 'mailto:raphashakoketso99@gmail.com',                color: 'hover:text-red-400' },
];

const STATS = [
  { label: 'Years Exp.',      val: 3,   suffix: '+', icon: 'activity'      },
  { label: 'Certifications',  val: 10,  suffix: '+', icon: 'graduationcap' },
  { label: 'Tech Ecosystems', val: 4,   suffix: '+', icon: 'cpu'           },
  { label: 'Delivery',        val: 100, suffix: '%', icon: 'shield'        },
];

const techArsenal = [
  { name: 'React',          icon: 'react'         },
  { name: 'Python',         icon: 'python'        },
  { name: 'Rust',           icon: 'rust'          },
  { name: 'Go',             icon: 'go'            },
  { name: 'C#',             icon: 'csharp'        },
  { name: 'FastAPI',        icon: 'fastapi'       },
  { name: 'PyTorch',        icon: 'pytorch'       },
  { name: 'Docker',         icon: 'docker'        },
  { name: 'Kubernetes',     icon: 'kubernetes'    },
  { name: 'AWS',            icon: 'aws'           },
  { name: 'PostgreSQL',     icon: 'postgresql'    },
  { name: 'Redis',          icon: 'redis'         },
  { name: 'C',              icon: 'c'             },
  { name: 'C++',            icon: 'cplusplus'     },
  { name: 'Java',           icon: 'java'          },
  { name: 'Swift',          icon: 'swift'         },
  { name: 'Node.js',        icon: 'node'          },
  { name: 'TypeScript',     icon: 'typescript'    },
  { name: 'Next.js',        icon: 'nextjs'        },
  { name: 'MongoDB',        icon: 'mongodb'       },
  { name: 'Tailwind CSS',   icon: 'tailwindcss'   },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'LangChain',      icon: 'langchain'     },
  { name: 'Framer Motion',  icon: 'framer'        },
  { name: 'TensorFlow',     icon: 'tensorflow'    },
  { name: 'Linux',          icon: 'linux'         },
  { name: 'Kali Linux',     icon: 'kalilinux'     },
  { name: 'Wireshark',      icon: 'wireshark'     },
  { name: 'Vite',           icon: 'vite'          },
  { name: 'Streamlit',      icon: 'streamlit'     },
  { name: 'Kaggle',         icon: 'kaggle'        },
  { name: 'Jupyter',        icon: 'jupyter'       },
  { name: 'R',              icon: 'r'             },
  { name: 'Expo',           icon: 'expo'          },
  { name: 'Android Studio', icon: 'androidstudio' },
];

const slideTexts = [
  'Building sovereign AI infrastructure',
  'Self-healing scalable systems',
  'Bridging data & human intuition',
  'Autonomous agentic frameworks',
];

const SlidingText = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slideTexts.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-5 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-xs text-white/50 font-mono"
        >
          {slideTexts[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const bannerTechs = [
  { name: "React",           id: "react"        },
  { name: "Python",          id: "python"       },
  { name: "TypeScript",      id: "typescript"   },
  { name: "Next.js",         id: "nextjs"       },
  { name: "C",               id: "c"            },
  { name: "C++",             id: "cplusplus"    },
  { name: "Java",            id: "java"         },
  { name: "Go",              id: "go"           },
  { name: "Rust",            id: "rust"         },
  { name: "Swift",           id: "swift"        },
  { name: "Node.js",         id: "node"         },
  { name: "FastAPI",         id: "fastapi"      },
  { name: "PostgreSQL",      id: "postgres"     },
  { name: "MongoDB",         id: "mongodb"      },
  { name: "Redis",           id: "redis"        },
  { name: "Docker",          id: "docker"       },
  { name: "Kubernetes",      id: "kubernetes"   },
  { name: "TensorFlow",      id: "tensorflow"   },
  { name: "PyTorch",         id: "pytorch"      },
  { name: "Tailwind CSS",    id: "tailwindcss"  },
  { name: "Framer Motion",   id: "framer"       },
  { name: "LangChain",       id: "langchain"    },
  { name: "GitHub Actions",  id: "githubactions" },
  { name: "Linux",           id: "linux"        },
  { name: "Vite",            id: "vite"         },
  { name: "Kali Linux",      id: "kalilinux"    },
  { name: "Wireshark",       id: "wireshark"    },
  { name: "Jupyter",         id: "jupyter"      },
];

const HeroBanner = () => {
  const doubled = [...bannerTechs, ...bannerTechs];
  return (
    <div className="w-full relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-[#00FF9C]/8 via-blue-500/5 to-[#00FF9C]/8 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(0,255,156,0.08),transparent_60%)]" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 sm:gap-10 items-center whitespace-nowrap py-2.5 sm:py-3"
      >
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <div className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity">
              <Icon name={tech.id} size={16} />
            </div>
            <span className="text-[9px] sm:text-[10px] font-medium text-white/50 font-mono tracking-wide">
              {tech.name}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#00FF9C]/30 ml-1" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="relative min-h-screen flex flex-col bg-transparent">
    <div className="absolute top-0 -right-20 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

    {/* Sliding Tech Banner */}
    <div className="w-full relative z-10 mt-[var(--nav-h)]">
      <HeroBanner />
    </div>

    <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl mx-auto pt-4 sm:pt-6 lg:pt-10 pb-8 sm:pb-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-12 w-full">

        {/* Profile Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center shrink-0 w-full max-w-[320px] lg:max-w-none lg:order-2"
        >
          <div className="relative w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF9C] via-blue-500 to-purple-600 p-[2px] animate-spin-slow shadow-[0_0_30px_rgba(0,255,156,0.3)]">
              <div className="w-full h-full rounded-full bg-[#000814]" />
            </div>
            <div className="absolute inset-[3px] rounded-full shadow-[inset_0_0_20px_rgba(0,255,156,0.15)] overflow-hidden">
              <img
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-3 sm:mt-4">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">Koketso Raphasha</h2>
            <p className="text-xs sm:text-sm text-[#00FF9C] font-medium mt-0.5">Software Engineer</p>
          </div>

          <div className="mt-1 text-center max-w-[240px]">
            <SlidingText />
          </div>

          {/* Social links - always visible */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 flex-wrap justify-center">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/40 ${s.color} transition-all rounded-lg border border-white/10 hover:border-current bg-white/5`}>
                <Icon name={s.icon} size={14} />
              </a>
            ))}
          </div>

          {/* Tech Arsenal */}
          <div className="mt-2 sm:mt-3 w-full max-w-[280px] sm:max-w-[320px]">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 uppercase tracking-[0.15em] font-bold">Tech Arsenal</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/5 bg-white/[0.02]">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-1.5 sm:gap-2 whitespace-nowrap py-1.5 px-2"
              >
                {[...techArsenal, ...techArsenal].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[9px] font-mono border border-white/10 rounded text-white/40 shrink-0 bg-white/[0.03]"
                  >
                    <Icon name={tech.icon} size={10} />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-3 sm:gap-4 w-full max-w-xl lg:order-1"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/20 text-[#00FF9C] text-[10px] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium">
              Johannesburg, SA
            </span>
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Software Engineer &<br />
              <span className="text-[#00FF9C]"><Typewriter /></span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
            I build self-healing, scalable systems and AI-driven solutions.
            Based in Johannesburg, South Africa.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href="#projects" className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#00FF9C] text-[#000814] font-bold rounded-lg hover:bg-[#00e089] transition-all active:scale-95 text-sm">
              View Projects
            </a>
            <a href="/Koketso_Raphasha_CV.pdf" download className="px-4 sm:px-5 py-2 sm:py-2.5 border border-[#00FF9C]/40 text-white font-bold rounded-lg hover:bg-[#00FF9C]/10 transition-all active:scale-95 text-sm flex items-center gap-2">
              <Icon name="download" size={14} /> CV
            </a>
            <a href="#contact" className="px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-lg hover:bg-blue-600/30 transition-all active:scale-95 text-sm">
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/5 mt-1">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white/5 p-1.5 sm:p-2 rounded-lg border border-white/5 flex flex-col items-center text-center gap-0.5 sm:gap-1">
                <div className="text-[#00FF9C]/60">
                  <Icon name={s.icon} size={12} />
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-none">
                  <CountUp to={s.val} />{s.suffix}
                </div>
                <div className="text-[7px] text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Hero;

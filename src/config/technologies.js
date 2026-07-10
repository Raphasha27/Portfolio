// Standardized Technology Configuration
// Ensures consistent naming and icons across all components

export const TECH_CONFIG = {
  // Frontend Frameworks & Libraries
  react: { name: 'React', icon: 'react' },
  nextjs: { name: 'Next.js', icon: 'nextjs' },
  'next.js': { name: 'Next.js', icon: 'nextjs' }, // Alternative spelling
  typescript: { name: 'TypeScript', icon: 'typescript' },
  javascript: { name: 'JavaScript', icon: 'javascript' },
  html: { name: 'HTML', icon: 'html' },
  css: { name: 'CSS', icon: 'css' },
  tailwindcss: { name: 'Tailwind CSS', icon: 'tailwindcss' },
  framer: { name: 'Framer Motion', icon: 'framer' },
  vite: { name: 'Vite', icon: 'vite' },
  angular: { name: 'Angular', icon: 'angular' },
  
  // Backend Languages
  python: { name: 'Python', icon: 'python' },
  java: { name: 'Java', icon: 'java' },
  c: { name: 'C', icon: 'c' },
  'c++': { name: 'C++', icon: 'cplusplus' },
  cplusplus: { name: 'C++', icon: 'cplusplus' },
  'c#': { name: 'C#', icon: 'csharp' },
  csharp: { name: 'C#', icon: 'csharp' },
  go: { name: 'Go', icon: 'go' },
  rust: { name: 'Rust', icon: 'rust' },
  swift: { name: 'Swift', icon: 'swift' },
  r: { name: 'R', icon: 'r' },
  
  // Runtime & Backends
  'node.js': { name: 'Node.js', icon: 'node' },
  nodejs: { name: 'Node.js', icon: 'node' },
  node: { name: 'Node.js', icon: 'node' },
  fastapi: { name: 'FastAPI', icon: 'fastapi' },
  
  // Mobile Development
  expo: { name: 'Expo', icon: 'expo' },
  flutter: { name: 'Flutter', icon: 'flutter' },
  'react-native': { name: 'React Native', icon: 'react' },
  'android-studio': { name: 'Android Studio', icon: 'androidstudio' },
  androidstudio: { name: 'Android Studio', icon: 'androidstudio' },
  
  // Databases
  postgresql: { name: 'PostgreSQL', icon: 'postgresql' },
  postgres: { name: 'PostgreSQL', icon: 'postgresql' },
  mongodb: { name: 'MongoDB', icon: 'mongodb' },
  redis: { name: 'Redis', icon: 'redis' },
  
  // Cloud & DevOps
  docker: { name: 'Docker', icon: 'docker' },
  kubernetes: { name: 'Kubernetes', icon: 'kubernetes' },
  aws: { name: 'AWS', icon: 'aws' },
  azure: { name: 'Azure', icon: 'azure' },
  vercel: { name: 'Vercel', icon: 'vercel' },
  
  // AI & ML
  pytorch: { name: 'PyTorch', icon: 'pytorch' },
  tensorflow: { name: 'TensorFlow', icon: 'tensorflow' },
  langchain: { name: 'LangChain', icon: 'langchain' },
  ollama: { name: 'Ollama', icon: 'ollama' },
  
  // Development Tools
  github: { name: 'GitHub', icon: 'github' },
  'github-actions': { name: 'GitHub Actions', icon: 'githubactions' },
  githubactions: { name: 'GitHub Actions', icon: 'githubactions' },
  linux: { name: 'Linux', icon: 'linux' },
  'kali-linux': { name: 'Kali Linux', icon: 'kalilinux' },
  kalilinux: { name: 'Kali Linux', icon: 'kalilinux' },
  
  // Data & Analytics
  streamlit: { name: 'Streamlit', icon: 'streamlit' },
  jupyter: { name: 'Jupyter', icon: 'jupyter' },
  kaggle: { name: 'Kaggle', icon: 'kaggle' },
  grafana: { name: 'Grafana', icon: 'grafana' },
  prometheus: { name: 'Prometheus', icon: 'prometheus' },
  
  // Security & Networking
  nginx: { name: 'nginx', icon: 'nginx' },
  wireshark: { name: 'Wireshark', icon: 'wireshark' },
  security: { name: 'Security', icon: 'shield' },
  shield: { name: 'Security', icon: 'shield' },
  
  // Generic/Misc
  api: { name: 'API', icon: 'api' },
  'api-integration': { name: 'API Integration', icon: 'api' },
  bot: { name: 'Bot Framework', icon: 'bot' },
  terminal: { name: 'Terminal', icon: 'terminal' },
  activity: { name: 'Analytics', icon: 'activity' }
};

// Helper function to get standardized tech info
export const getTechInfo = (techKey) => {
  const key = techKey.toLowerCase().trim();
  return TECH_CONFIG[key] || { name: techKey, icon: 'code' }; // fallback
};

// Get all technologies as array for components
export const getAllTechnologies = () => {
  return Object.entries(TECH_CONFIG).map(([key, config]) => ({
    id: key,
    ...config
  }));
};

// Priority order for main tech arsenal (most important first)
export const PRIORITY_TECHS = [
  'react',
  'python', 
  'typescript',
  'nextjs',
  'c++',
  'java',
  'go',
  'rust',
  'swift',
  'node.js',
  'fastapi',
  'expo',
  'docker',
  'kubernetes',
  'postgresql',
  'mongodb',
  'pytorch',
  'tensorflow',
  'aws',
  'vercel'
];

export default TECH_CONFIG;
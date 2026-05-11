import React from 'react';

export const Icon = ({ name, size = 16, className = "" }) => {
  const emojis = {
    // Basic Actions
    mail: "📧",
    phone: "📞",
    thumbsUp: "👍",
    heart: "❤️",
    star: "⭐",
    share: "🔗",
    check: "✅",
    close: "❌",
    menu: "🍔",
    send: "🚀",
    chat: "💬",
    target: "🎯",
    rocket: "🚀",
    zap: "⚡",
    activity: "📈",
    refreshCw: "🔄",
    scale: "⚖️",
    bookOpen: "📖",
    layout: "🎨",
    arrowRight: "➡️",
    externalLink: "🔗",
    
    // Tech & Tools
    smartphone: "📱",
    cpu: "💻",
    user: "👤",
    signal: "📡",
    code: "👨‍💻",
    shield: "🛡️",
    terminal: "⌨️",
    graduationCap: "🎓",
    globe: "🌐",
    cloud: "☁️",
    database: "🗄️",
    brain: "🧠",
    building: "🏢",
    ticket: "🎫",
    bot: "🤖",
    
    // Social
    github: "🐙",
    linkedin: "💼",
    twitter: "🐦",
    discord: "👾",

    // Tech Specific (High-Fidelity Emoji Mapping)
    react: "⚛️",
    python: "🐍",
    node: "🌿",
    docker: "🐳",
    postgres: "🐘",
    postgresql: "🐘",
    redis: "🔴",
    mongodb: "🍃",
    vercel: "🔼",
    angular: "🅰️",
    aws: "☁️",
    azure: "☁️",
    google: "🔍",
    androidStudio: "🤖",
    cisco: "📡",
    coursera: "🎓",
    ibm: "🏢",
    flagSA: "🇿🇦",
  };

  return (
    <span 
      style={{ fontSize: size }} 
      className={`inline-flex items-center justify-center leading-none select-none ${className}`}
      role="img" 
      aria-label={name}
    >
      {emojis[name] || "✨"}
    </span>
  );
};

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

    // Tech Specific (if needed as emojis)
    react: "⚛️",
    python: "🐍",
    node: "🌿",
    docker: "🐳",
    postgres: "🐘",
    redis: "🔴",
    mongodb: "🍃",
    vercel: "🔼",
    angular: "🅰️",
    aws: "☁️",
    azure: "☁️",
    google: "🔍",
  };

  if (emojis[name]) {
    return (
      <span 
        style={{ fontSize: size }} 
        className={`inline-flex items-center justify-center leading-none ${className}`}
        role="img" 
        aria-label={name}
      >
        {emojis[name]}
      </span>
    );
  }

  const icons = {
    androidStudio: (
      <g transform="scale(0.046875)">
        <path fill="#3DDC84" d="M12 2l-3.5 2.5V8h7V4.5L12 2z" />
        <path fill="#3DDC84" d="M5 8v12h14V8H5zm7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        <path fill="#3DDC84" d="M2 12l2-1v2l-2-1zm18 0l2-1v2l-2-1z" />
      </g>
    ),
    postgresql: (
      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    ),
    redis: (
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18.1L4.5 16.3V8.7L12 12l7.5-3.3v7.6l-7.5 3.8z" />
    ),
    vercel: (
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    ),
    mongodb: (
      <path d="M12 2s-4 4-4 10 4 10 4 10 4-4 4-10-4-10-4-10zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    ),
    flagSA: (
      <g fill="none">
        <path fill="#E23D28" d="M0 0h24v8H0z" />
        <path fill="#002395" d="M0 16h24v8H0z" />
        <path fill="#FFF" d="M0 8h24v8H0z" />
        <path fill="#007C59" d="M0 9.5h24v5H0z" />
        <path fill="#FFF" d="M0 0l12 12L0 24V20l8-8-8-8z" />
        <path fill="#007C59" d="M0 2l10 10L0 22V18l6-6-6-6z" />
        <path fill="#FFD200" d="M0 4l8 8-8 8V16l4-4-4-4z" />
        <path fill="#000" d="M0 6l6 6-6 6z" />
      </g>
    ),
  };

  if (!icons[name]) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
    >
      {icons[name]}
    </svg>
  );
};

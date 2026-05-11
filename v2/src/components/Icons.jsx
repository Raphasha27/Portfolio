import React from 'react';

export const Icon = ({ name, size = 16, className = "" }) => {
  const fluentEmojis = {
    // Basic Actions
    mail: "E-mail",
    phone: "Telephone_receiver",
    thumbsUp: "Thumbs_up",
    heart: "Red_heart",
    star: "Star",
    share: "Link",
    check: "Check_mark_button",
    close: "Cross_mark",
    menu: "Hamburger",
    send: "Rocket",
    chat: "Speech_balloon",
    target: "Direct_hit",
    rocket: "Rocket",
    zap: "High_voltage",
    activity: "Chart_increasing",
    refreshCw: "Counterclockwise_arrows_button",
    scale: "Balance_scale",
    bookOpen: "Open_book",
    layout: "Artist_palette",
    arrowRight: "Right_arrow",
    externalLink: "Link",
    
    // Tools
    smartphone: "Mobile_phone",
    user: "Person",
    signal: "Satellite_antenna",
    shield: "Shield",
    terminal: "Keyboard",
    graduationCap: "Graduation_cap",
    globe: "Globe_with_meridians",
    cloud: "Cloud",
    database: "Card_file_box",
    brain: "Brain",
    building: "Office_building",
    ticket: "Ticket",
    bot: "Robot",
    flagSA: "South_Africa",
  };

  const techLogos = {
    // Tech Brands (Devicon / SVGL style)
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    google: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    androidStudio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    linkedin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    twitter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    cpu: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg",
  };

  const logoUrl = techLogos[name];
  if (logoUrl) {
    return (
      <img 
        src={logoUrl} 
        alt={name}
        style={{ width: size, height: size }}
        className={`inline-block object-contain select-none pointer-events-none filter brightness-110 contrast-110 ${className}`}
        loading="lazy"
      />
    );
  }

  const emojiFolder = fluentEmojis[name];
  if (emojiFolder) {
    const fileName = emojiFolder.toLowerCase();
    const url = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/${emojiFolder}/3D/${fileName}_3d.png`;
    
    return (
      <img 
        src={url} 
        alt={name}
        style={{ width: size, height: size }}
        className={`inline-block object-contain select-none pointer-events-none ${className}`}
        loading="lazy"
      />
    );
  }

  // Fallback
  return <span style={{ fontSize: size }} className={className}>✨</span>;
};

import React, { useState, useMemo } from 'react';

const SafeImage = ({ src, alt, size, className }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <span style={{ fontSize: size }} className={className}>✨</span>;
  }

  return (
    <img 
      src={src} 
      alt={alt}
      style={{ width: size, height: size }}
      className={`inline-block object-contain select-none pointer-events-none ${className}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

export const Icon = ({ name, size = 16, className = "" }) => {
  const fluentEmojis = useMemo(() => ({
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
    cpu: "Microchip",
    code: "Laptop",
  }), []);

  const techLogos = useMemo(() => ({
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
    androidstudio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    linkedin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    twitter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    "c#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
    langchain: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
  }), []);

  const finalName = name?.toLowerCase();
  const logoUrl = techLogos[finalName];

  if (logoUrl) {
    return (
      <SafeImage 
        src={logoUrl} 
        alt={name} 
        size={size} 
        className={`filter brightness-110 contrast-110 ${className}`} 
      />
    );
  }

  const emojiFolder = fluentEmojis[finalName];
  if (emojiFolder) {
    const fileName = emojiFolder.toLowerCase();
    const url = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/${emojiFolder}/3D/${fileName}_3d.png`;
    return <SafeImage src={url} alt={name} size={size} className={className} />;
  }

  return <span style={{ fontSize: size }} className={className}>✨</span>;
};
